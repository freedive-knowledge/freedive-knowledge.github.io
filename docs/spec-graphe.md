# Spécification du graphe de connaissance — apnée de loisir

> Document **écrit à la main**. Il consigne le modèle et, surtout, **les
> décisions et leurs raisons**. Le vocabulaire lui-même est généré :
> voir [vocabulaire.md](vocabulaire.md). Les conventions de travail sont dans
> [conventions.md](conventions.md).

## 1. Objet et périmètre

Gérer la connaissance de l'apnée de loisir sur quatre échelles :

1. **scientifique** — physiologie, physique, mécanismes ;
2. **FFESSM** — cursus, prérogatives, textes fédéraux ;
3. **CODEP 91** — déclinaison départementale ;
4. **le club** — pratique locale, en particulier le **niveau
   intermédiaire** : les apnéistes titulaires de l'AP ou plus préparant l'ACP.

L'approche est celle d'un *second brain* adossé à un **graphe d'ontologie fondé
sur des triples**.

**Hors périmètre, et c'est une décision :** aucune **personne nommée** n'entre
dans le graphe. Un apnéiste identifié avec ses performances et ses acquis
constitue une donnée personnelle — de santé par ricochet — à durée de vie courte,
qui n'a pas à être mêlée à un corpus de savoir stable destiné à alimenter un
front web. Le « Qui » est porté par la classe `role` : `encadre-par`,
`destine-a`. C'est aussi ce qui rend une séance **transmissible** à un autre
encadrant, qui lit les prérequis d'encadrement au lieu de les deviner.

## 2. Forme d'un nœud

Un nœud = un fichier Markdown. **Le nom de fichier est l'identifiant.**

Le **sujet de tous les triples d'un document est implicitement le nœud que ce
document représente.** Aucun triple ne peut porter sur un autre sujet. Invariant
central : *chaque nœud est la source de vérité de ses propres assertions*. Un
sujet libre disperserait les faits d'une entité dans N fichiers et rendrait toute
relecture manuelle illusoire.

### Champs de frontmatter — liste FERMÉE

La règle de partage est unique :

> **Si l'assertion peut être fausse, discutée ou sourcée, c'est un triple.
> Si elle identifie le document, c'est un champ.**

| Champ | Requis | Portée | Rôle |
|---|---|---|---|
| `type` | oui | toutes | classe du nœud, valeur unique |
| `title` | oui | toutes | libellé affiché, accents autorisés |
| `aliases` | non | toutes | formes alternatives, sigles |
| `summary` | non | toutes | une à trois phrases, exploitable en vignette |
| `created` | oui | toutes | saisie une fois, **immuable** |
| `updated` | non | toutes | **écrit par le hook de pre-commit** |
| `date` | oui | `seance`, `formation` | date de l'occurrence |
| `execution` | oui | `exercice` | notation de bassin, forme autoritative |
| `statut` | non | toutes | statut éditorial du nœud (`provisoire`) ; omis = établi |
| `triples` | non | toutes | les assertions |

La prose longue va dans le **corps Markdown**. Un triple reste une assertion
atomique et comparable ; y mettre un paragraphe ferait du graphe un entrepôt de
texte.

`type` est **unique** : le multi-typage casse la validation des verbes et signale
presque toujours qu'il manque une classe ou qu'il faut scinder la note.

### Forme d'un triple

```yaml
triples:
  - verb: contrainte-pulmonaire      # vocabulaire fermé
    target: "[[poumon-vide]]"        # wikilink | URL | littéral
    verification: verifie            # énumération
    confidence: certain              # énumération
```

Liste de blocs explicites, **un bloc par triple**. Retenu parce que c'est
uniforme quel que soit le type de cible, extensible sans migration, et que le
diff Git reste lisible — modifier une confiance produit une ligne changée, pas
une ligne réécrite. Les formes compactes (`requiert :: [[x]] | verifie | haute`)
saturent dès qu'un attribut s'ajoute et imposent une grammaire maison.

### Adossement d'un triple à sa pièce

Un nœud peut citer **plusieurs sources de nature différente** : un exercice
observé en séance, puis précisé par une élaboration. Adosser chaque triple à
*toutes* les sources du nœud rendrait alors les deux indicateurs faux — un
triple `verifie` issu de l'observation passerait pour adossé à l'élaboration.

D'où l'attribut **optionnel** `source` sur un triple :

```yaml
  - verb: vise
    target: "[[tolerance-hypercapnie]]"
    verification: a-verifier
    confidence: plausible
    source: "[[transcript-2026-09-24-elaboration-frite-profondeur]]"
```

- **Avec l'attribut**, le triple n'est adossé qu'à cette pièce.
- **Sans l'attribut**, il l'est à toutes les sources du nœud — le cas courant,
  quand le nœud n'en a qu'une.
- La pièce citée **doit** figurer parmi les triples `source` du nœud, qui
  restent la liste complète des pièces. Contrôle du linter : l'attribut se
  vérifie en lisant le seul fichier.

L'attribut s'impose dès qu'un nœud cite une source d'élaboration **et** une
source qui peut justifier `verifie`. Le rendre obligatoire partout doublerait
chaque nœud à source unique, sans rien apporter.

### Attributs qualificatifs d'un triple

Certains faits ne sont comparables qu'avec leur contexte : la profondeur
maximale d'un brevet dépend du **cadre** (autonomie relative, autonomie
complète, encadrement) et parfois du **milieu** (l'ACEL évolue à 20 m en
autonomie relative, à 15 m en autonomie complète).

```yaml
  - verb: profondeur-max
    target: "15m"
    cadre: autonomie-complete     # requis
    milieu: naturel               # omis si la valeur vaut pour les deux
    verification: verifie
    confidence: certain
```

Un verbe **déclare** les attributs qu'il admet (clé `attributs` de
`verbes.yaml`), chacun borné par une énumération du même nom dans
`enums.yaml`. Retenu contre deux alternatives : trois verbes
(`profondeur-autonomie-relative`…) auraient multiplié le vocabulaire par le
nombre de cadres, sans résoudre le milieu ; un verbe nu aurait renvoyé la
distinction relative / complète en prose, donc hors requête. Le mécanisme reste
**fermé** : un attribut non déclaré par le verbe est une faute de lint, comme un
verbe inventé.

`execution` est un champ et non un triple parce qu'elle **est** la définition du
nœud : un exercice sans exécution n'existe pas, la chaîne ne peut être ni fausse
ni « à vérifier ». `allure` et `discipline` sont des triples parce qu'elles sont
révisables — une allure de ressenti se corrige après l'avoir fait nager.

## 3. Les deux indicateurs

Ils sont **strictement orthogonaux**, et les confondre est le piège principal :

- `verification` — **état du processus** : ai-je retrouvé et lu la source ?
- `confidence` — **force épistémique** de l'assertion, même parfaitement sourcée.

C'est la distinction qui compte ici : « l'hyperventilation augmente le risque de
syncope » est *vérifiable et solide* ; « 3 inspirations suffisent entre deux 25 m »
est *vérifiable dans un document de club* et pourtant *faible*.

Trois décisions attachées :

- **Défaut `a-verifier`** : la dette est explicite et requêtable. On peut sortir
  à tout moment la liste de ce qui reste à sourcer — c'est ce qui fait vivre le
  dispositif au lieu qu'il s'atrophie.
- **`verifie` exige un triple `source` sur le nœud** — ou, pour un nœud à
  plusieurs sources, l'attribut `source` du triple (§2) —, contrainte contrôlée par le
  linter. Sans elle, l'indicateur serait déclaratif et creux.
- **`intrinseque` pour les faits constitutifs.** Sur `4x25-pv`, les triples
  `repetitions → 4`, `distance-apnee → 25m` ou `recuperation → 30s` se lisent
  **directement dans `execution`**. Ce ne sont pas des assertions sur le monde
  mais des lectures du nœud lui-même : aucune source externe ne les adosse, et
  aucune ne le pourra. Les verser dans `a-verifier` remplirait la liste de dette
  de lignes qui ne seront jamais soldées — et une dette qu'on ne peut pas vider
  est une dette qu'on arrête de regarder. Leur accorder `verifie` sans source
  détruirait la garantie sur laquelle repose la traçabilité. D'où une quatrième
  valeur, **restreinte par le linter** à 9 verbes de transcription et aux nœuds
  portant un champ transcriptible, pour qu'elle ne devienne pas une échappatoire
  à l'obligation de sourcer. `allure` et `utilise-materiel` en sont exclus : la
  première est un jugement de ressenti, la seconde une décision d'encadrement.
- **`infirme` conserve le triple.** Un savoir réfuté — l'hyperventilation
  préalable « pour tenir plus longtemps » — doit rester documenté comme erreur,
  parce que c'est exactement ce qu'il faut déconstruire chez les AP. C'est aussi
  pourquoi **aucun verbe de contradiction n'existe** : une assertion fausse
  relève de `infirme`, pas d'une relation entre deux nœuds.

`confidence` est un **jugement indépendant** du type de source. La rendre
déductible serait tentant mais faux : un texte fédéral peut énoncer une
recommandation pédagogique discutable, un article scientifique peut être isolé et
fragile. Le modèle doit pouvoir porter « c'est écrit dans le MFA et je n'y crois
qu'à moitié ».

## 4. Littéraux et grandeurs

Unité **collée** à la valeur, pour que la lecture brute du fichier reste
naturelle. Une **seule forme canonique par valeur**, afin que deux triples égaux
soient littéralement identiques.

| Type | Forme | Exemples |
|---|---|---|
| durée < 60 s | `<n>s` | `30s`, `45s` |
| durée ≥ 60 s | `<n>mn<n>s`, `<n>mn` si secondes nulles | `1mn45s`, `4mn` |
| distance | `<n>m` | `25m`, `100m` |
| vitesse | `<n>m/s` | `0.6m/s` |
| masse | `<n>kg` | `20kg` |
| récupération | `<n>s` · `<n>mn<n>s` · `<n>inspi` · `<n>cp` | `30s`, `4inspi`, `10cp` |

`1.50mn` est lisible mais **non canonique** : on écrit `1mn30s`. La normalisation
est triviale et vérifiée par le linter.

**Intervalles : des bornes numériques** (`vitesse-min` / `vitesse-max`), jamais
de notation d'approximation. `~1 m/s` devient `0.95m/s` / `1.05m/s`. C'est la
seule forme comparable et filtrable ; le flou est déjà exprimé par
`confidence: plausible`, un champ `precision` le dupliquerait en moins bien.

**Une borne absente vaut intervalle ouvert**, et non « non renseignée ». Le cas
est réel : `sprint` est « l'allure la plus rapide possible *par l'apnéiste* »,
donc son plafond est individuel et n'est pas une propriété de l'allure. Inventer
un chiffre serait mentir ; omettre `vitesse-max` est la seule écriture juste.

### Les allures ne partitionnent pas l'échelle des vitesses

Décision explicite : les allures sont des **repères de ressenti, non une
partition couvrante**. Des zones intermédiaires n'ont aucun nom — un 25 m en
28 s n'est ni `tranquille` (31–42 s) ni `croisiere` (24–26 s), et c'est assumé.

C'est cohérent avec une classe fondée sur le ressenti : un apnéiste reconnaît
une allure de croisière, il ne calcule pas une appartenance à un intervalle.
L'alternative — resserrer les bornes jusqu'à obtenir une partition contiguë —
aurait rendu décidable la question « quelle allure pour ce temps ? », mais au
prix de frontières fabriquées, qu'aucune sensation ne justifie.

**Conséquence pour le front web** : il ne doit **jamais** classer une vitesse
mesurée dans une allure unique. Face à une valeur tombant dans un trou, la
réponse correcte est « entre `tranquille` et `croisiere` », pas un choix
arbitraire. Un `argmin` sur la distance aux bornes serait un bug, pas une
approximation.

**Rien de dérivable n'est stocké.** Ni `duree-totale`, ni les temps par distance
d'une allure : ils se déduisent de la vitesse et de la distance. Les stocker
créerait plusieurs sources de vérité pour un seul fait, avec dérive garantie — le
jour où une borne est affinée, les temps mentiraient. Le front calcule, et pour
n'importe quelle distance, 16×25 compris.

## 5. Exercices : notation + facettes

L'`execution` reste **la chaîne telle qu'on l'écrirait au bord du bassin**
(`4x25m PV récup 30s`, `100m nage + sauvetage mannequin 1mn => 4mn max`). Les
facettes — discipline, matériel, contrainte pulmonaire, répétitions, distance,
récupération, allure, intention — sont **déclarées** en triples, non dérivées.

**Aucun parseur de la notation n'est écrit, et c'est délibéré.** Chaque séance
inventera une variante (`départ 1mn45s`, `mi-bassin`, `dos vers le bas`,
`1xbras+2xjambes`) ; on passerait son temps à réparer une grammaire au lieu de
remplir le catalogue. À l'inverse, du texte libre seul rendrait impossible la
requête qui compte : « exercices de dynamique, palmes longues, PV, autour de
4×25 ». Une facette absente **dégrade** la recherche, elle ne la casse pas.

Quand un exercice ne se plie pas aux facettes, on renseigne ce qui s'applique et
le reste demeure dans `execution`. Aucune perte, aucun blocage. Si la notation se
stabilise un jour, un script pourra pré-remplir les facettes et la validation
consistera à comparer les deux : la décision reste réversible dans le bon sens.

**Trois durées distinctes**, parce que ce sont trois consignes pédagogiques aux
effets opposés : `duree-apnee` (attendue), `duree-min` (plancher, objectif de
performance), `duree-max` (plafond, efficacité ou sécurité — portée : l'exercice
entier). Les fondre ferait afficher au front une consigne ambiguë, au pire
dangereuse sur du secourisme.

**Une seule modalité de récupération par exercice.** Les unités `s`, `inspi`, `cp`
ne sont pas des variantes d'une même grandeur mais des modalités de la même
fonction : rendre la main à l'apnéiste. D'où un verbe unique `recuperation`, qui
garde la récupération comme une seule case comparable.

## 6. Occurrences et contenu réutilisable

`seance` et `formation` sont des **occurrences datées**. Elles portent la date, le
lieu, les rôles, le retour d'expérience — et **composent** des exercices existants
par `comporte`. Le contenu pédagogique (Quoi / Comment / Pourquoi / prérequis) vit
dans `exercice`, `technique`, `competence`, `concept`.

Sans cette séparation, on duplique tout le pédagogique à chaque date et le graphe
devient un journal illisible en une saison. Le retour d'expérience daté — « la
pyramide a été trop dure pour les AP frais » — est précisément la donnée de valeur
qui ne peut vivre que sur l'occurrence.

**Pas de classe `modele-seance` au départ.** Une séance qui se répète se déclare
`derive-de` ; quand trois séances dérivent de la même souche, celle-ci est mûre
pour être promue en modèle — et on sait alors ce que le modèle doit contenir.
Créer l'abstraction maintenant, sans exemplaire, c'est figer une structure que la
pratique contredira.

`formation` est distincte de `seance` par le verbe `evalue` : validation de
compétences et cadre fédéral qu'un entraînement n'a pas.

**L'ordre de la liste `comporte` est l'ordre de déroulement.** Aucun index
numérique : l'échauffement avant le poumon vide n'est pas une opinion, c'est
l'ordre d'écriture. Un index obligerait à renuméroter à chaque insertion — la
première friction qui fait abandonner un système. Même principe pour
`conduite-a-tenir`.

## 7. Règles du vocabulaire

- **Vocabulaire FERMÉ**, source de vérité `ontologie/*.yaml`, document
  `docs/vocabulaire.md` **généré**. Un verbe s'ajoute dans le YAML, jamais dans le
  document : sinon le `.md` et le linter divergent dès le premier oubli.
- **Aucun verbe inverse.** On stocke `requiert`, jamais `est-requis-par` ; les
  relations retour sont calculées à la lecture. Sinon chaque fait existe en deux
  exemplaires, et le premier oubli rend le graphe incohérent sans que rien ne le
  signale.
- **Un nœud seulement si ça mérite une page.** `poumon-vide` a un mécanisme, des
  indications, des risques → nœud. Ce qui n'a rien à raconter reste un littéral.
  L'`allure` est devenue une classe précisément parce qu'elle a des attributs
  mesurables et une doctrine d'emploi.
- **Causalité polarisée** (`provoque` / `favorise` / `previent`) plutôt qu'un
  verbe signé par un attribut : la polarité est l'information critique en
  sécurité, elle ne doit pas dépendre d'un champ annexe qu'on peut oublier.
- **`sorte-de` n'est pas l'instanciation.** La subsomption donne l'héritage et
  l'interrogation multi-granularité ; « croisière est une allure » se dit par le
  champ `type`.
- **`remplace` sur les sources** est ce qui empêche le graphe de vieillir
  silencieusement : quand le MFA change d'édition, les triples `verifie` adossés à
  l'édition périmée sont réexaminables en masse.

## 8. Architecture médaillon

```
ingest/bronze/   capture brute, IMMUABLE, jamais éditée
ingest/silver/   triples candidats, extraits, normalisés, NON validés
graphe/          GOLD — le graphe canonique
```

- **Bronze** — une capture = un répertoire daté avec `source.yaml` déclarant
  l'origine. Jamais modifié : c'est la pièce justificative, et son immuabilité
  rend **l'extraction rejouable** le jour où le vocabulaire évoluera.
- **Silver** — le sas. Extraire d'un PDF ou d'une conversation produit du bruit :
  verbes approximatifs, doublons, assertions trop larges. Sans couche
  intermédiaire, ce bruit atterrit dans le graphe. Ici l'erreur est attendue et
  sans conséquence. Le champ `statut` (`propose` / `accepte` / `rejete`) garde la
  mémoire de ce qui a été écarté, pour ne pas réexaminer trois fois la même
  assertion douteuse.
- **Gold** — un triple n'y entre que **promu**, avec sa `source`, ce qui rend
  `verification: verifie` mécaniquement justifiable.

Le gain réel est la **traçabilité structurelle** : chaque triple du graphe remonte
à une pièce, au lieu de reposer sur une parole. C'est ce qui rendra le corpus
défendable devant d'autres encadrants.

**Documents tiers non versionnés.** Les PDF sous droits ne sont pas commités :
seul leur `source.yaml` l'est, avec la référence précise (édition, pagination)
permettant de retrouver la pièce. Traçabilité complète, aucune redistribution.
Les captures produites par l'auteur — transcripts, notes d'élaboration — sont
versionnées : elles sont à la fois la pièce et sa production.

### Types de capture, et ce qu'ils autorisent

| `type` | Nature | Peut justifier `verifie` ? |
|---|---|---|
| `document_tiers` | œuvre d'autrui | oui, contenu non versionné |
| `observation` | témoignage direct de l'auteur, présent sur place | **oui**, si `consulte_le` |
| `elaboration` | savoir produit par le raisonnement ou la discussion | **non, jamais** |
| `page_web` | page consultée | oui, avec URL et date |

**Élaboration.** Le cas le plus fréquent n'est pas l'extraction mais la
**production** de savoir par la discussion. Les triples qui en découlent sortent
en `confidence: plausible` / `verification: a-verifier` — **jamais `verifie`**,
puisque aucune source externe ne les adosse. On obtient un stock explicite de
« ce que je crois savoir et qu'il reste à confronter aux textes », qui est sans
doute la partie la plus utile du second brain.

**Observation.** Distincte de l'élaboration, et la distinction est essentielle :
le *raisonnement* (« je pense que la croisière tourne autour d'1 m/s ») ne peut
pas justifier `verifie`, mais l'*observation* (« le groupe a dérivé vers la
croisière ») si. Tu y étais, tu encadrais, ton compte-rendu est la pièce.

Sans ce type, **tout le carnet de séances serait condamné à `a-verifier` à
perpétuité** — soit une dette de six lignes par séance, environ deux cents par
saison, insolvable autrement que par soi-même. Une dette qu'on ne peut pas
solder est une dette qu'on cesse de regarder, et l'indicateur perdrait sa
fonction.

**Toute séance a sa capture.** Une occurrence n'est jamais écrite à la main dans
`graphe/` : elle passe par `/capture` puis `/promouvoir`. C'est ce qui garantit
qu'elle est adossée à son compte-rendu — et l'absence de cette règle est
exactement ce qui a produit la première faute du projet, six triples `verifie`
adossés à un transcript qui ne parlait pas de la séance.

## 9. Partage entre le linter et l'audit

Deux outils, deux régimes, et une frontière à critère net :

> **Le linter valide ce qui se décide en lisant *un seul fichier*, plus le
> schéma. L'audit traite tout ce qui exige de *traverser le graphe*.**

`tools/lint.py` — **bloquant** en pre-commit : parsing du frontmatter, liste
fermée de champs, champs requis et réservés, identifiant, concordance
répertoire / `type`, appartenance des verbes et des classes au vocabulaire,
énumérations, grammaire et **forme canonique** des littéraux, domaine du verbe,
cardinalité. Le vocabulaire fermé est le schéma du frontmatter : `verb: inventé`
et `niveau: intermediaire` sont la même faute.

`tools/audit.py` — **consultatif**, jamais bloquant : intégrité du graphe
(wikilinks, co-domaine, `source` requis si `verifie`), cohérence des sources
(`verifie` adossé à une élaboration, capture non consultée, source périmée par
`remplace`, source jamais citée), dette de vérification triée par gravité, dette
de sécurité, candidats silver en attente, vocabulaire mort, nœuds orphelins.

Pourquoi ce partage : le linter doit rester **sans faux positif**, sinon il sera
contourné ; l'audit doit pouvoir être **bavard et imparfait**, c'est un tableau
de bord qu'on lit le dimanche. Rendre l'audit bloquant reproduirait le linter
sous un autre nom et interdirait de commiter un travail en cours — ce que la
couche silver est précisément là pour permettre. Et si une faute de frappe sur
un verbe atterrissait dans l'audit, le rapport mélangerait des coquilles et de
vraies priorités épistémiques.

## 10. Ce qui n'est pas encore décidé

- **La sécurité fait l'objet d'une session de travail dédiée, non encore tenue.**
  Les nœuds `risque/syncope`, `technique/sortie-tete-hors-eau` et
  `role/binome-de-surveillance` portent un bandeau **CONTENU PROVISOIRE — NE PAS
  ENSEIGNER** : ils ont été rédigés par un LLM de mémoire, sans source. Rien de
  ce versant ne doit être traité comme référence avant cette session. En
  particulier, la séquence ordonnée de `conduite-a-tenir` reste à établir, et la
  question de savoir s'il faut des nœuds `risque` distincts pour le bassin et le
  milieu naturel reste ouverte.

- Les bornes des allures restent en `confidence: plausible` /
  `verification: a-verifier` : elles sortent de l'expérience d'encadrement, non
  d'une mesure. Celles de `croisiere`, `rapide` et `sprint` sont **solidaires**
  (bornes par encadrement) : affiner l'une impose de réexaminer les voisines.
- Une **lacune de vocabulaire** est assumée : « la minute au 25 m est parfois
  vue comme un minimum » (allure `tres-lent`) n'est portée que par la prose.
  `duree-min` a pour domaine `exercice`, et l'y étendre brouillerait le sens —
  un plancher est une consigne, pas une propriété d'allure.
- Le **front web** est acté mais non spécifié. Le modèle est conçu pour lui :
  deux comportements d'affichage suffisent — un en-tête d'identité, et une liste
  de triples avec leurs indicateurs.
- La promotion d'une souche de séance en **modèle**, le jour où trois séances en
  dériveront.
