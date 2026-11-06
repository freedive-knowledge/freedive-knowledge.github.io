# L'IA au service de nos cours : retour d'expérience

Présentation aux encadrants — Neptune Club de Brunoy — 45 mn.

Ce fichier porte le **fond** de la présentation : plan, texte de chaque slide,
notes du présentateur, minutage, quiz. La mise en forme vit dans le deck généré
par `build.js` ; le PDF et le tableur Kahoot en sont des exports.

Origine : cadrage par `/interroge` le 03/11/2026
([[transcript-2026-11-03-elaboration-rex-ia-encadrants]]). L'anecdote
d'ouverture vient de l'article LinkedIn d'octobre 2026
(`article/2026-10-linkedin-claude-code-apnee/`).

## Cadre

- **Public** : encadrants apnée du club (IE1, IE2, MEF1). Aucune compétence en
  informatique ; ils utilisent l'IA uniquement par une interface de chat
  (ChatGPT, Mistral, Claude).
- **Ce qu'ils doivent retenir** : des principes applicables **dès demain dans
  leur chat** (cœur de la présentation). La méthode du dépôt est montrée
  rapidement, comme une marche qu'on peut franchir pour aller plus loin, et
  comme prérequis à l'appel à contribution final.
- **Parti pris** : raconter la genèse dans l'ordre, échec compris. Les séances
  générées restent décevantes, et c'est une leçon. Aucun jargon :
  « bronze / silver / gold » devient « brut / à vérifier / validé ».
- **Forme** : charte des cours du club, Kahoot d'ouverture, une démo en direct
  (avec captures de secours), révélation finale : ce deck a été produit comme
  les cours.
- **Durée** : 30 mn de présentation, 15 mn d'échanges.

## Objectifs

À la fin, l'encadrant sait :

1. reconnaître qu'une réponse d'IA peut être fausse sans en avoir l'air, et la
   relire en expert ;
2. donner ses sources au chat et exiger qu'il s'y tienne ;
3. se faire interroger par l'IA avant de lui faire produire quoi que ce soit ;
4. ne pas coller de données personnelles dans un chat ;
5. contribuer à la base du club : envoyer une source, relire un cours.

## Minutage

| Bloc | Slides | Durée | Cumul |
|---|---|---|---|
| Titre, Kahoot d'ouverture | 1-4 | 4 mn | 4 mn |
| Le point de départ : générer des séances | 5-7 | 4 mn | 8 mn |
| Donner un savoir vérifié à l'IA | 8-10 | 4 mn | 12 mn |
| Démo : le lestage, avec et sans source | 11-12 | 5 mn | 17 mn |
| Séances décevantes, cours réussis | 13-14 | 3 mn | 20 mn |
| Ce que vous pouvez faire dès demain | 15-17 | 4 mn | 24 mn |
| Pour aller plus loin : les coulisses | 18-19 | 3 mn | 27 mn |
| Contribuer, révélation, merci | 20-22 | 3 mn | 30 mn |
| Échanges | — | 15 mn | 45 mn |

## Charte

Celle des cours du club, fournie par `_commun/charte.js`.

---

## Slides

### 1. Titre

**Écran** — L'IA au service de nos cours. Retour d'expérience. Logo du club.

**Notes** — Annoncer : 30 mn puis échanges, un Kahoot pour commencer, aucune
compétence informatique requise.

### 2-4. Kahoot d'ouverture — questions 1 à 3

**Écran** — Questions 1 à 3 du quiz (section Quiz).

**Notes** — La question 2 est le cœur : projeter l'extrait de séance générée
avec l'exercice des longueurs les yeux fermés et laisser la salle trouver
le problème. Ne rien expliquer avant le résultat. Phrase de sortie : « vous
l'avez vu en 20 secondes ; l'IA, elle, ne l'a pas signalé ».

### 5. Le point de départ

**Écran** — « Je voulais que l'IA m'aide à préparer mes séances. » Trois logos
de chat : ChatGPT, Mistral, Claude.

**Notes** — Raconter l'envie de départ. Trois outils essayés, aucun n'a produit
une séance vraiment intéressante.

### 6. Ce que donne un chat sans contexte

**Écran** — Capture d'une séance générée : structure soignée, blocs bien
nommés, consignes de sécurité… et l'exercice des yeux fermés surligné.

**Notes** — Le soin de la forme inspire confiance. Plusieurs exercices sont
bons, certains sont déjà au programme du club. C'est ce qui rend l'erreur
dangereuse.

### 7. À retenir

**Écran** — **L'IA ne se trompe pas de façon visible.** Vous êtes l'expert :
relisez comme un encadrant relit un stagiaire.

**Notes** — Premier principe. Faire le parallèle avec la validation de
compétences : l'IA propose, on vérifie.

### 8. L'idée : lui donner notre savoir

**Écran** — Au lieu de laisser l'IA puiser dans « Internet », lui fournir ce
que nous savons et pouvons vérifier : manuels de formation, supports du club,
notes de séance.

**Notes** — Évoquer sans jargon le « second brain » : un carnet de
connaissances relié, où chaque affirmation dit d'où elle vient.

### 9. Six semaines plus tard

**Écran** — Depuis le 23 septembre : 46 sources, 63 exercices, plus de 1 000
liens entre notions. Une base de connaissances et un catalogue d'exercices.

**Notes** — Les sources : manuels IE et ACP, livret Apnée Attitude, cours du
club, notes de séance. Chiffres au 03/11/2026, à actualiser avant la séance.

### 10. Rien n'entre sans être vérifié

**Écran** — Trois étages : **brut** (la source telle quelle), **à vérifier**
(ce que l'IA en extrait), **validé** (ce qu'un humain a accepté).

**Notes** — Deuxième et troisième principes en préparation. L'IA lit et
propose ; je valide une à une les affirmations. Ce qui n'est pas validé reste
marqué « à vérifier ».

### 11. Démo : le lestage, sans source

**Écran** — Chat en direct. Question : « Comment un apnéiste débutant doit-il
régler son lest en piscine, en statique et en dynamique ? »

**Notes** — Faire lire la réponse à la salle. Repérer ce qui est générique ou
emprunté à la plongée bouteille. Capture de secours prête si le réseau ou le
modèle fait défaut.

### 12. Démo : le lestage, avec notre cours

**Écran** — Même chat, nouvelle conversation. Coller l'extrait du cours
lestage du club, puis : « Réponds uniquement d'après ce document et cite le
passage qui justifie chaque point. »

**Notes** — Ce cours a été relu et validé par des encadrants du club, dont des
MEF1. Comparer les deux réponses. Principe : **donnez-lui vos sources.**

### 13. Les séances : mieux, mais pas encore ça

**Écran** — Les séances générées avec la base sont meilleures… sans être
vraiment intéressantes.

**Notes** — Assumer l'échec partiel. Une séance demande un jugement
pédagogique : ce groupe, ce jour, cette fatigue. L'IA n'y est pas.

### 14. Le retournement : les cours

**Écran** — « Il faut refaire les slides des cours du club. » La base sert à
ça, et ça marche. Vignettes des decks lestage et lois physiques.

**Notes** — Un cours restitue un savoir établi ; c'est exactement ce que la
base contient. Principe : **l'IA met mieux en forme un savoir établi qu'elle
n'invente une séance.**

### 15. Dès demain dans votre chat (1/2)

**Écran** — 1. Relisez en expert. 2. Donnez-lui vos sources : « réponds
uniquement d'après ce document, cite le passage ». 3. L'IA propose,
l'encadrant valide : rien ne part au bord du bassin sans relecture.

**Notes** — Récapituler les trois principes déjà vus.

### 16. Dès demain dans votre chat (2/2)

**Écran** — 4. Faites-vous interroger avant de faire produire : « pose-moi
tes questions une par une, avec ta recommandation, avant de proposer quoi que
ce soit ». Une conversation par sujet. 5. Pas de données personnelles : ni
noms d'élèves, ni certificats médicaux.

**Notes** — Montrer une ou deux questions de la session qui a préparé cette
présentation (« Que doivent retenir les encadrants en sortant ? »). Une
conversation courte et cadrée vaut mieux qu'un long fil qui dérive.

### 17. À retenir

**Écran** — Relire en expert · Donner ses sources · Valider · Se faire
interroger · Protéger les données.

**Notes** — Slide à laisser affichée pendant les échanges.

### 18. Pour aller plus loin : les coulisses

**Écran** — Capture de Claude Code : « ça ressemble à un chat, mais il
travaille dans des fichiers ». Le circuit : source → à vérifier → validé →
cours.

**Notes** — Rester rapide : montrer qu'une marche existe, pas l'enseigner.
Proposer d'en parler individuellement à qui veut la franchir.

### 19. Le site de la base

**Écran** — Capture du site : un exercice, les compétences qu'il vise, sa
source.

**Notes** — Le lien a déjà été partagé. Expliquer la navigation : chaque page
dit d'où vient chaque affirmation et si elle est vérifiée.

### 20. Contribuer

**Écran** — Prochain chantier : **le cours Organisation et réglementation** (ACP),
à relire. Trois façons d'aider : WhatsApp, m'envoyer directement une source
ou une remarque, le formulaire « Signaler une erreur » sur le site.

**Notes** — Le cours lestage a été validé de cette façon par des encadrants
du club. Ce qu'on cherche : des sources (fiches, supports de stage) et des
relectures.

### 21. Révélation

**Écran** — Cette présentation a été préparée comme nos cours : cadrée par
l'IA qui m'a interrogé, puis générée avec la charte du club.

**Notes** — Boucler sur le principe 4.

### 22. Merci — questions

**Écran** — Merci. Questions ? Logo du club.

**Notes** — Ouvrir les échanges, laisser la slide 17 à portée.

## Quiz — import Kahoot

20 secondes par question. Kahoot « ouverture » seulement (1-3).

| # | Question | A | B | C | D | Bonne |
|---|---|---|---|---|---|---|
| 1 | Avez-vous déjà utilisé une IA pour préparer une séance ou un cours ? | Jamais | Une fois ou deux | Souvent | Je n'ose pas | A |
| 2 | Cette séance a été générée par une IA. Quel exercice ne feriez-vous jamais faire ? | L'échauffement en surface | Les longueurs en apnée yeux fermés en comptant | Le 4×25 m tranquille | La statique en binôme | B |
| 3 | Une réponse d'IA bien présentée et sûre d'elle est… | forcément juste | juste si elle cite la sécurité | à relire comme le travail d'un stagiaire | à ignorer | C |

La question 1 est un sondage : toute réponse est bonne. Kahoot impose une
bonne réponse ; régler la question en « sondage » dans Kahoot, ou annoncer
qu'elle ne compte pas.

## Sources

| Affirmation | Slide | Origine |
|---|---|---|
| Exercice des longueurs yeux fermés proposé sans avertissement | 2-6 | article LinkedIn octobre 2026 ; [[longueurs-apnee-yeux-fermes]] |
| Essais ChatGPT, Mistral, Claude ; séances meilleures mais pas intéressantes ; cours concluants | 5, 13, 14 | [[transcript-2026-11-03-elaboration-rex-ia-encadrants]] |
| Cours lestage validé par des encadrants du club dont des MEF1 | 12, 20 | [[transcript-2026-11-03-elaboration-rex-ia-encadrants]] ; relecture à capturer en observation |
| Image de la séance générée : **reconstitution** (titre, cadre et noms d'exercices), pas une capture | 6 | `article/2026-10-linkedin-claude-code-apnee/contexte.md`, « La séance ludique » |
| Image Claude Code : extrait de la session du 03/11/2026, redessiné | 18 | [[transcript-2026-11-03-elaboration-rex-ia-encadrants]] |
| 46 sources, 63 exercices, plus de 1 000 triples, début le 23/09/2026 | 9 | dépôt au 03/11/2026, à actualiser |

## À préparer avant la séance

- Modèles d'issue GitHub « Proposer une source » et « Signaler une erreur »,
  et lien « Signaler une erreur » sur chaque page du site (slide 20).
- Captures de secours des deux réponses de la démo (slides 11-12) et extrait
  du cours lestage prêt à coller.
- Capture de la séance générée avec l'exercice surligné (slides 2-6).
- Captures de Claude Code et du site (slides 18-19).
- Chiffres de la slide 9 actualisés.
