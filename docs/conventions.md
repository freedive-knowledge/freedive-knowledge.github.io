# Conventions de travail

> Document écrit à la main. Complète [spec-graphe.md](spec-graphe.md) (le modèle)
> et [vocabulaire.md](vocabulaire.md) (généré).

## Arborescence

```
ontologie/       schéma exécutable — source de vérité du vocabulaire
docs/            documentation du projet
graphe/          les nœuds, un répertoire par classe
ingest/          bronze (captures) et silver (candidats)
tools/           linter, générateur, horodatage, installation des hooks
.venv/           environnement Python local, non versionné
```

`ontologie/` est **hors de `docs/`** parce que ce n'est pas de la documentation
mais du schéma exécutable, et **hors de `graphe/`** parce que ce n'est pas un
nœud. Ne jamais mélanger le méta et l'objet : c'est la façon la plus sûre de
polluer toute requête ultérieure.

## Identifiants

**Le nom de fichier est l'identifiant.** `kebab-case`, ASCII **sans accent**,
**stable et jamais renommé**.

```
graphe/cursus/apneiste-piscine.md      →   [[apneiste-piscine]]
```

```yaml
type: cursus
title: "AP — Apnéiste Piscine"
aliases: ["AP", "apneiste piscine"]
```

- **Sans accent** : `apnéiste` et `apneiste` finiraient par coexister et casser
  des liens silencieusement. Le coût est nul puisque `title` et `aliases` portent
  la forme correcte pour l'humain.
- **Identifiant ≠ titre** : c'est l'indirection qui permet de renommer « AP » le
  jour où la FFESSM change l'intitulé du brevet, **sans toucher un seul lien**.
  Dans un corpus dont le vocabulaire fédéral bouge, elle paiera.
- **Occurrences préfixées par la date ISO** :
  `graphe/seance/2026-09-22-pre-acp-dynamique.md`. La date est intrinsèque à
  l'occurrence : tri, filtrage et recherche fonctionnent sans outil. Le linter
  vérifie que le préfixe et le champ `date` concordent.
- **Le répertoire est un miroir du champ `type`**, jamais une information
  concurrente. Reclasser un nœud = un `git mv`.

## Lecture de la notation de bassin

Conventions de lecture de `execution`, telles qu'on les pratique au bord du
bassin (revue du 2026-09-27) :

- **Poumons pleins par défaut.** Si rien n'est indiqué, l'apnée se fait poumons
  pleins : le triple `contrainte-pulmonaire → [[poumons-pleins]]` est alors une
  lecture de l'exécution, donc `intrinseque`.
- **Précision au demi-bassin.** Dans un bassin de 25 m, les distances se comptent
  par multiples de 12,5 m (`37.5m`, `62.5m`) ; une précision plus fine n'a pas
  de sens au bord.
- **La récupération part de l'arrivée au bord.** Dans `retour au bord + R 1mn`,
  le temps de retour n'est pas décompté : l'apnéiste ne peut pas le chronométrer.
  La récupération effective est donc plus longue que la valeur notée.

## Workflow d'ingestion

Deux commandes, **un seul point de contrôle humain**.

### `/capture`

Prend une entrée (fichier, URL, ou la conversation en cours), écrit la capture en
**bronze** avec son `source.yaml`, puis en extrait les triples candidats en
**silver** avec `statut: propose`. **Ne touche jamais `graphe/`.**

L'extraction est délibérément **généreuse** : mieux vaut un candidat en trop, que
l'on rejette d'un mot, qu'un fait perdu.

### `/promouvoir`

Présente les candidats d'un lot silver, groupés par nœud cible, avec pour chacun
le verbe, la cible, la confiance proposée et l'extrait de bronze qui le justifie.
Après acceptation, les triples partent en `graphe/` — création ou mise à jour du
nœud — et leur `statut` passe à `accepte`, ce qui garde en silver la trace de la
décision.

**Le point de contrôle est à la promotion, pas à la capture** : c'est le seul
endroit où le jugement humain est irremplaçable — décider qu'une assertion entre
dans le corpus de référence. Plus tôt, on arbitrerait sur du bruit d'extraction ;
plus tard, il serait trop tard.

**Deux commandes séparées** parce que les fondre supprimerait le sas, donc tout
l'intérêt de silver. Séparées, on peut capturer dix sources un soir et promouvoir
tranquillement le dimanche — ce qui correspond à la réalité d'un projet bénévole
mené à côté d'un emploi.

### Règle non négociable

> **Aucune promotion automatique.** Le graphe contient des assertions de
> sécurité. Un LLM qui s'auto-valide sur des faits de sécurité en apnée est
> précisément ce qu'il ne faut pas construire.

## Étendre le vocabulaire

1. Éditer `ontologie/verbes.yaml` (ou `classes.yaml`, `enums.yaml`) — en
   renseignant `description`, et `contre_exemple` dès qu'un verbe voisin existe.
2. Régénérer : `.venv/bin/python tools/gen_vocab.py`
3. Relancer le lint : `.venv/bin/python tools/lint.py`
4. Commiter le YAML **et** le document généré ensemble.

Le lint est **bloquant** en pre-commit. Un lint consultatif serait ignoré au
troisième avertissement ; bloquant, il force à passer par le YAML, donc toute
extension du vocabulaire reste documentée par construction.

## Outillage

```sh
python3 -m venv .venv && .venv/bin/pip install pyyaml   # une fois
sh tools/install-hooks.sh                               # une fois, après clonage

.venv/bin/python tools/lint.py                   # valide tout le graphe
.venv/bin/python tools/lint.py graphe/exercice/  # valide un sous-ensemble
.venv/bin/python tools/gen_vocab.py              # régénère docs/vocabulaire.md
.venv/bin/python tools/gen_vocab.py --check      # échoue si le doc est périmé
```

Python sans dépendance au-delà de `pyyaml` : disponible partout, adapté au
traitement de fichiers texte, aucune toolchain à installer pour lancer un lint.

Le hook de pre-commit enchaîne : horodatage de `updated`, vérification que le
vocabulaire généré est à jour, puis lint du graphe.

`updated` est **écrit par le hook**, jamais à la main : maintenue manuellement,
elle dériverait systématiquement. La donnée existe déjà dans l'historique git ;
le hook ne fait que la matérialiser dans le frontmatter pour que le front web la
consomme sans lire l'historique. `created` est saisie une fois et immuable.

## Audit

```sh
.venv/bin/python tools/audit.py                    # rapport complet
.venv/bin/python tools/audit.py --section securite # une section
```

Sections : `integrite`, `sources`, `dette`, `securite`, `silver`, `vocabulaire`,
`orphelins`. **Consultatif, sortie toujours 0.**

`securite` est la section à lire en priorité : un savoir de sécurité non sourcé
finit enseigné au bord du bassin. `dette` est triée par gravité — un triple
`a-verifier` / `certain` affirme fort sans référence, il passe avant un
`a-verifier` / `incertain`.

## Ce que vérifie le linter

- `type` présent, dans le vocabulaire, cohérent avec le répertoire d'accueil ;
- champs du frontmatter dans la **liste fermée**, champs requis présents, champs
  réservés (`execution`, `date`) sur les bonnes classes ; `statut` dans son
  énumération ;
- identifiant ASCII kebab-case ; concordance préfixe de date / champ `date` ;
- verbes dans le vocabulaire, **domaine** et **co-domaine** respectés,
  **cardinalité** respectée, contrainte de même classe pour `sorte-de` ;
- littéraux conformes à leur grammaire et à leur **forme canonique** (une durée
  ≥ 60 s écrite en secondes est rejetée avec la forme attendue) ;
- `verification` et `confidence` dans leurs énumérations ;
- attributs qualificatifs d'un triple (`cadre`, `milieu`…) : admis seulement
  si le verbe les déclare, requis s'ils sont marqués tels, valeur dans
  l'énumération ;
- attribut `source` d'un triple : wikilink désignant l'un des triples `source`
  du même nœud ;
- `intrinseque` réservé aux 9 verbes de transcription, sur un nœud portant un
  champ transcriptible.

Ce qu'il ne vérifie **pas**, par construction — tout cela exige d'ouvrir d'autres
fichiers, et relève de `tools/audit.py` : résolution des wikilinks, co-domaine,
`source` requis si `verifie`, cohérence des sources.
