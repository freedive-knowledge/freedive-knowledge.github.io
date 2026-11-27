# Spec — front web d'exploration du graphe

Site statique **public, en lecture seule** pour explorer `graphe/` et diffuser
les cours. Ce document consigne les décisions et **leurs raisons**, comme
[spec-graphe.md](spec-graphe.md) le fait pour le modèle.

## Décisions

| Sujet | Décision | Raison |
|---|---|---|
| Public | **Tout le monde**, site public ; le dépôt source reste **privé** | Le site ne contient que le graphe promu, sans personne nommée. Le dépôt contient bronze (œuvres d'autrui) : le publier serait une redistribution. |
| Contenu non consolidé | **Tout est affiché** (nœuds `provisoire`, triples `a_verifier`, `infirme`), avec un **avertissement global** : document de travail personnel, ne remplace ni le MFA ni l'encadrement | L'état épistémique est déjà rendu par axe : c'est ce qui rend le graphe honnête. Un site filtré imposerait deux builds et casserait des wikilinks. |
| Architecture | Site **statique** généré depuis le dépôt | Git est la source de vérité, le front n'écrit rien. À ~300 nœuds, un `graph.json` suffit ; un serveur ou une base de graphe n'apporteraient qu'un processus de plus à maintenir. |
| Vue principale | **Fiche par nœud** : triples sortants groupés par verbe, **liens entrants**, mini-graphe du voisinage (1 ou 2 sauts) | Le graphe est sémantique : une vue globale masque les verbes et l'état épistémique. Les liens entrants sont ce que l'éditeur ne montre pas, puisque le sujet d'un triple est implicite. |
| Vue secondaire | Graphe global filtrable par classe | Utile pour repérer les îlots ; `source` est décochée par défaut (elle relie tout à tout). |
| Stack | Python + Jinja2 ; MiniSearch et Cytoscape.js vendorisés dans `site/static/vendor/` ; pas de npm pour le site | Une URL stable par nœud (`/<classe>/<id>.html`), qui marche sans JS. Parsing partagé avec `lint.py`. Node n'intervient que pour générer les decks de cours. |
| Données | `graphe/` et `cours/` | Silver brouillerait la frontière que `/promouvoir` protège. Bronze contient des œuvres d'autrui : jamais embarqué. |
| Cours | Section `/cours/` : fond `cours.md` rendu en HTML, deck en **PPTX et PDF** | Le PDF sert les adhérents (mobile, impression), le PPTX les encadrants qui adaptent le cours (cohérent avec CC BY-SA). PDF converti par LibreOffice headless en CI. |
| Documentation | Section `/docs/` : `spec-graphe`, `vocabulaire`, `conventions`, `spec-site` rendus en HTML (+ Markdown brut, listés dans `llms.txt`) ; liens `x.md` réécrits, wikilinks **non** résolus | Qui lit un nœud doit pouvoir comprendre comment le graphe est construit. Dans la doc, `[[x]]` illustre la syntaxe : le résoudre en lien la fausserait. |
| Images de cours | Inventaire `cours/*/img/sources.yaml` (origine, licence, crédit) ; le build n'embarque que les images `diffusable: true` : **libres** (crédit affiché), **générées par IA** (signalées), ou tierces en **`risque: assume`** (crédit affiché, retrait sur simple demande de l'ayant droit) ; les autres sont remplacées par un encart « image non diffusable » | « Accessible en ligne » ne veut pas dire « réutilisable » : une image sans licence explicite est protégée par défaut. Le risque est assumé pour des images déjà accessibles publiquement, dont la publication sert souvent l'ayant droit (FFESSM) ; il est tracé image par image. |
| Licences | Code (`tools/`, `site/`, scripts de `cours/`) : **MIT**. Contenu (`graphe/`, `ontologie/`, `cours/`, `article/`) : **CC BY-SA 4.0**. Bronze et images tierces **exclus**, ils gardent leur licence d'origine | Le partage à l'identique fait revenir les améliorations d'autres clubs sous forme ouverte. NC écarté : « non commercial » est flou et bloquerait des clubs. |
| Attribution | « François Sarradin et contributeurs », dans `LICENSE` et en pied de page | On sait qui répond du contenu. « Aucune personne nommée » protège les tiers, pas l'auteur. |
| Indexation | Site **indexé** : `robots.txt` ouvert, `sitemap.xml` généré | Le contenu est public et attribué ; l'avertissement global et les bandeaux `provisoire` suffisent. |
| LLM | `/llms.txt` (site, ontologie, licence, liste des nœuds), chaque fiche aussi en **Markdown brut** (`/<classe>/<id>.md`), `/llms-full.txt` concaténé, `graph.json` documenté | Le Markdown source est déjà la forme canonique, avec des triples explicites. **Non négociable** : `verification`, `confidence` et `statut` restent dans chaque `.md`, sinon un LLM présentera du provisoire comme établi. |
| Accueil | Recherche plein texte, index par classe, récemment modifiés (`updated`) | Recherche = usage principal ; `/` la déclenche partout. |
| État épistémique | Canal visuel **par axe** : la confiance règle l'intensité du lien (gras → pâle → pointillés pour `incertain`), la vérification une icône (✓ vérifié, ≡ intrinsèque, ? à vérifier, ✗ infirmé). `infirme` est **barré mais affiché**. | Les deux axes sont orthogonaux, ils ne partagent pas de canal. Un savoir réfuté reste documenté. |
| Filtre | « Vérifié seulement » : ne garde que `verifie` et `intrinseque`, mémorisé par navigateur | La vue de ce qui est solide, avant de préparer une séance. |
| Nœuds provisoires | Champ `statut: provisoire` (ontologie) → bandeau rouge sur la fiche, ⚠ sur les liens, cerclage dans les graphes | Un champ explicite, validé par le linter, plutôt qu'une détection de texte dans le corps. |
| Nœuds manquants | Wikilink sans fichier → rendu en rouge, **le build n'échoue pas** | C'est de la dette (l'audit la signale), pas une erreur de syntaxe. |
| CI | `lint.py` **bloque** ; `audit.py` consultatif | Le pre-commit se contourne (`--no-verify`, édition web) ; le site ne publie qu'un état valide. |

## Hébergement et déploiement

- **Organisation GitHub** au nom neutre (`freedive-knowledge`), indépendante du
  club et du CODEP : le contenu `provisoire` ne doit pas passer pour une
  doctrine fédérale. L'organisation permet des co-propriétaires et la
  continuité si l'auteur passe la main.
- **Deux dépôts** dans l'organisation :
  - `knowledge-graph`, **privé** : ce dépôt, bronze compris ;
  - `freedive-knowledge.github.io`, **public** : le build seul, servi à la racine de
    `https://freedive-knowledge.github.io/` (les liens absolus `/classe/id.html` restent
    valides). Le plan Free ne publie pas Pages depuis un dépôt privé, d'où la
    séparation.
- **CI/CD** : GitHub Actions sur `knowledge-graph`, à chaque push sur `main` : `lint.py`
  (bloque), `audit.py` (consultatif), `build_site.py`, build des decks (Node +
  LibreOffice), puis push du résultat vers `freedive-knowledge.github.io` avec un token
  fine-grained limité à ce dépôt.
- **Sauvegarde** : le Forgejo du VPS garde un **pull mirror** de `knowledge-graph`,
  contre une fermeture ou une suspension du dépôt GitHub (risque réel pour un
  dépôt qui contient des œuvres d'autrui).
- **Abandonné** : le site Tailscale sur le VPS (`http://life-vps:8082`). Le
  public voyant tout, il ferait doublon avec le site public. À retirer
  après bascule : conteneur `apnee-web`, `Dockerfile`, `docker-compose.yml`,
  `deploy.sh`, `deploy/`, `.forgejo/`.

## Prérequis avant publication

1. `LICENSE` (MIT + CC BY-SA 4.0, exclusions explicites).
2. Inventaire `sources.yaml` des images de chaque cours.
3. Relecture des `cours.md` : pas de longs extraits de textes fédéraux.
4. Relecture du rendu PDF de chaque deck (polices de la charte).

## Développement local

```sh
.venv/bin/pip install -r requirements.txt
.venv/bin/python tools/build_site.py          # -> _site/
python3 -m http.server -d _site               # http://localhost:8000
```

Les liens sont absolus (`/classe/id.html`) : servir `_site/` **à la racine**.

## Reporté

- Vue « dette » : l'audit rendu cliquable.
- Dump RDF/Turtle du graphe, si un besoin SPARQL apparaît.
