# Maîtriser son lestage

Cours théorique AP — Neptune Club de Brunoy — 45 mn.

Ce fichier porte le **fond** du cours : plan, texte de chaque slide, notes du
présentateur, minutage, quiz. La mise en forme vit dans le deck généré par
`build.js` ; le PDF et les tableurs Kahoot en sont des exports.

Origine : plan proposé par un collègue encadrant (« Cours d'Apnée (Niveau
Débutant) : Maîtriser son Lestage », reçu le 31/10/2026), cadré lors de
l'élaboration du 31/10/2026 et complété par les connaissances du graphe.

## Cadre

- **Public** : candidats Apnéiste Piscine ([[apneiste-piscine]]) en formation
  débutant. Ils vont pratiquer en fosse à 10 m et 20 m, et peut-être plus tard
  en mer ou en carrière si une sortie est prévue.
- **Référentiel** : MFA AP juillet 2026 ([[mfa-ap-2026-07]]) — « réglage du
  lestage en fonction du milieu et de sa combinaison ».
- **Position** : **avant** le cours lois physiques
  ([[../ap-lois-physiques/cours.md]]). Ce cours pose Archimède et la
  flottabilité sans formule ; le cours lois physiques y reviendra plus tard
  avec le poids apparent et l'exemple chiffré. Mêmes mots dans les deux cours :
  poussée, poids, flottabilité positive, neutre, négative.
- **Périmètre** : principe d'Archimède qualitatif, trois états de
  flottabilité, matériel (ceinture, boucle, plomb de cou), réglage en piscine
  et en fosse, surlestage et largage. La mer et la carrière sont une ouverture,
  pas un protocole.
- **Parti pris** : mécanisme puis geste, aucune formule. Les accidents
  (syncope, noyade) sont nommés, leur prise en charge est renvoyée au cours
  accidents.
- **Forme** : charte et mécanique du cours lois physiques — slides épurées, un
  quiz Kahoot d'ouverture rejoué à la fin, une slide « à retenir ».

## Objectifs

À la fin du cours, le participant sait :

1. expliquer pourquoi il flotte ou coule : la poussée d'Archimède, que l'eau
   exerce vers le haut, contre son poids ;
2. décrire les trois états de flottabilité (positive, neutre, négative) et
   dire pourquoi elle diminue en descendant ;
3. choisir et porter son lest : ceinture caoutchouc sur le bassin, boucle à
   largage rapide, plomb de cou ;
4. régler son lest en piscine (STA, DYN) et en fosse, et le tester ;
5. dire pourquoi le surlestage est dangereux et larguer sa ceinture par
   réflexe.

## Minutage

| Bloc | Slides | Durée | Cumul |
|---|---|---|---|
| Titre, objectifs, plan | 1-3 | 2 mn | 2 mn |
| Quiz d'ouverture | 4-6 | 4 mn | 6 mn |
| Flotter ou couler | 7-10 | 6 mn | 12 mn |
| Le matériel | 11-15 | 9 mn | 21 mn |
| Régler son lest | 16-21 | 10 mn | 31 mn |
| Surlestage et largage | 22-23 | 6 mn | 37 mn |
| Checklist, à retenir, quiz final, merci | 24-37 | 8 mn | 45 mn |

## Charte

Celle du cours lois physiques ([[../ap-lois-physiques/cours.md]], section
Charte), fournie par `_commun/charte.js`.

---

## Slides

### 1. Titre

**Écran** — Maîtriser son lestage. « Ni trop, ni trop peu. » Cours théorique
Apnéiste Piscine. Logo du club.

**Notes** — Accueil. Annoncer : 45 mn, deux quiz, aucun calcul.

### 2. Pourquoi parler du lestage ?

**Écran** — « Bien réglé, le lest rend l'apnée plus sûre, plus confortable et
plus efficace. Mal réglé, il l'épuise, voire la rend dangereuse. » Trois
cartes : sécurité, confort, efficacité.

**Notes** — Le lestage est un facteur déterminant et sous-estimé : sans lest, on
lutte contre la poussée de l'eau, on nage de biais, on se fatigue ; trop lesté,
on lutte pour remonter. On commence par un quiz : sortez vos téléphones.
Sources : [[lest]] (section « En dynamique »),
[[apnee-attitude-notions-entrainement-2024]] v.20.

### 3. Au programme

**Écran** — 1. Quiz d'ouverture (4 mn) · 2. Flotter ou couler (6 mn) · 3. Le
matériel (9 mn) · 4. Régler son lest (10 mn) · 5. Surlestage et largage
(6 mn) · 6. Checklist et quiz final (8 mn).

**Notes** — Annoncer le chemin : comprendre pourquoi on flotte, puis avec quoi
on se leste, comment on règle, et ce qu'on ne fait jamais.

### 4-6. Quiz d'ouverture — questions 1 à 3

**Écran** — Les questions 1, 2 et 3 du quiz, une par slide, sans la réponse.

**Notes** — 20 secondes chacune. Ne pas donner les réponses : on les retrouvera
dans le cours, et on rejouera ces trois questions à la fin.

### 7. Poids et poussée d'Archimède

**Écran** — Image `img/archimede-flottabilite.jpg` (celle du cours lois
physiques) : le même apnéiste à la surface, entre deux eaux, plus bas. Flèches
tracées dans le PPT : la **poussée d'Archimède** de l'eau vers le haut (bleu-vert), le
**poids** vers le bas (orange). « L'eau pousse vers le haut tout ce qu'on y
plonge : c'est la poussée d'Archimède. »

**Notes** — Dans l'eau, deux forces s'opposent. Mon poids me tire vers le bas ;
le lest l'augmente. L'eau me pousse vers le haut, d'autant plus fort que je
prends de la place : c'est la poussée d'Archimède. Poussée plus forte : je
flotte. Égales : je reste entre deux eaux. Poids plus fort : je coule. On verra
la loi en détail au cours lois physiques.
Source : [[poussee-archimede]].

### 8. Ce qui me fait flotter, ce qui me fait couler

**Écran** — Deux colonnes. **Je flotte** : poumons pleins, combinaison (une
mousse pleine de bulles). **Je coule** : mon corps, le lest. En bas : « En
descendant, l'air des poumons et les bulles de la combinaison se compriment :
je flotte de moins en moins. »

**Notes** — L'air me fait flotter : celui de mes poumons et celui des bulles
de la combinaison, d'autant plus qu'elle est épaisse. En descendant, l'eau
appuie et cet air prend moins de place : je flotte moins. C'est pour ça que
les premiers mètres d'une descente sont les plus durs, et qu'on finit par
couler sans effort. Le lest sert à compenser ce qui me fait flotter.
Sources : [[flottabilite]] ; livret [[apnee-attitude-livret-aeel-2020]]
p.69-70.

### 9. Les trois états de flottabilité

**Écran** — Schéma `img/zones-flottabilite.png` (SVG) : échelle de 0 à 20 m.
Au-dessus de la profondeur neutre, flottabilité **positive** (je remonte
seul) ; à la profondeur neutre, **neutre** (ni je monte, ni je coule) ; en
dessous, **négative** (je coule seul). À droite : « La profondeur neutre dépend
de chacun : corpulence, poumons, combinaison, lest. »

**Notes** — Positive en surface : on se détend sans effort avant de plonger.
Neutre à une certaine profondeur : on reste immobile sans dépenser d'énergie.
Négative en dessous : on coule seul, c'est la chute libre des apnéistes en
profondeur. Le schéma place la profondeur neutre à 10 m, comme exemple : elle
varie d'une personne à l'autre et c'est le lest qui la déplace. Plus on est
lesté, plus elle remonte.
Source : [[flottabilite]] (positive en surface, neutre puis négative ; livret
p.69-70).

### 10. À retenir — flotter ou couler

**Écran** —
- La poussée d'Archimède (vers le haut) contre mon poids (vers le bas).
- Poumons pleins et combinaison me font flotter ; le lest me fait couler.
- En descendant, je flotte de moins en moins.
- Le lest déplace ma profondeur neutre : plus de lest, elle remonte.

**Notes** — Transition : le lest, concrètement, c'est quoi ?

### 11. La ceinture : du caoutchouc, pas du nylon

**Écran** — Deux photos : à gauche, ceinture caoutchouc à boucle marseillaise
(`img/ceinture-caoutchouc.jpg`, encadré vert « Oui ») ; à droite, ceinture
nylon de plongée bouteille (`img/ceinture-nylon.jpg`, encadré orange
« Non »). « Elastique, elle reste plaquée quand mon tour de taille diminue. »

**Notes** — En descendant, la pression comprime le ventre et la combinaison ;
en ventilant, le ventre bouge. Une ceinture en caoutchouc ou en silicone,
élastique, reste plaquée sur les hanches. Une sangle en nylon, rigide, se
détend, glisse et tourne : les plombs migrent vers le thorax ou le dos. On les
réserve à la plongée bouteille. Plombs enrobés conseillés : le plomb est
toxique pour le milieu.
Sources : plan du collègue (élasticité, nylon à bannir) ; [[ceinture-lest]]
(plombs enrobés, livret p.16, p.70).

### 12. Porter la ceinture

**Écran** — Image `img/position-ceinture.jpg` (Gemini, prompt dans
`img/PROMPTS.md`) : apnéiste de profil, ceinture sur le bassin. Deux repères
posés dans le PPT : « Sur le bassin » (bleu-vert) et « Pas sur le ventre »
(orange, barré). Photo `img/ceinture-plombs.jpg` : plombs cavaliers répartis
sur la sangle. En bas : « L'extrémité libre pend du côté de la main qui
largue. »

**Notes** — La ceinture se porte au niveau du bassin, pas sur le ventre : trop
haute, elle bloque le diaphragme et gêne la ventilation et la dernière
inspiration. Répartir les plombs de chaque côté, devant les hanches, pour ne
pas tirer sur les lombaires et pour garder la boucle dégagée.
Sources : [[ceinture-lest]] (position, cours du 2 décembre 2025,
[[apnee-attitude-ventilation-v3-1]] v.34) ; extrémité libre côté main qui
largue : élaboration du 31/10/2026, à vérifier.

### 13. La boucle à largage rapide

**Écran** — Gros plan sur la boucle (recadrage de
`img/ceinture-caoutchouc.jpg`). « Une main, un geste : la ceinture tombe. »
Trois points : boucle devant, jamais sous un autre équipement ; extrémité libre
saisissable ; je sais la larguer les yeux fermés.

**Notes** — Sur les ceintures caoutchouc, la boucle la plus courante est la
boucle marseillaise : une boucle inox qu'on ouvre en tirant sur l'extrémité
libre. Certaines ceintures portent une boucle à clapet, dite américaine. Dans
les deux cas, la boucle doit rester devant, dégagée, jamais cachée sous un
autre équipement, et l'extrémité libre doit pouvoir être saisie d'une main —
par moi, par mon binôme ou par un secouriste. À s'entraîner au bord : larguer
et remettre sa ceinture, les yeux fermés.
Sources : plan du collègue (« boucle américaine ») ; terminologie marseillaise
et extrémité libre : élaboration du 31/10/2026, à vérifier.

### 14. Le plomb de cou

**Écran** — Deux photos : plomb de cou rigide
(`img/plomb-de-cou-rigide.jpg`, Wikimedia Commons, CC BY 4.0) et plomb de cou
souple (`img/plomb-de-cou-souple.jpg`). Deux avantages : « Aligne la tête et
le buste » ; « Soulage la ceinture et les lombaires ». Encadré orange : « Il ne
se largue pas d'un geste. »

**Notes** — Le plomb de cou se pose sur la nuque, le poids sur le haut du dos ou
sur la poitrine. Très utilisé en dynamique : il ramène le haut du corps à
l'horizontale, plus hydrodynamique, et évite de tout charger sur la ceinture.
Mais il ne se largue pas d'un geste : en cas de malaise, c'est la ceinture que
le secouriste retire. On ne le porte qu'en complément d'une ceinture réglée,
sur conseil d'un encadrant.
Sources : [[plomb-de-cou]] (livret p.71) ; avantages : plan du collègue ;
« ne se largue pas d'un geste » : élaboration du 31/10/2026, à vérifier ;
[[surlestage]] (le secouriste décroche le lest).

### 15. Ceinture ou plomb de cou ?

**Écran** — Tableau à trois colonnes (critère, ceinture, plomb de cou) :
position (bassin / nuque), effet (compense la flottabilité / aligne le haut du
corps), largage (une main, un geste / non), pour qui (tout le monde / en
complément, sur conseil).

**Notes** — Pour débuter, une ceinture caoutchouc bien réglée suffit. Le plomb
de cou vient plus tard, en dynamique, pour affiner la posture.

### 16. Régler son lest : de quoi ça dépend

**Écran** — Balance : « Plus de lest » (combinaison épaisse, eau de mer) ;
« Moins de lest » (maillot ou combinaison fine, eau douce : piscine, fosse,
carrière). Encadré orange : « Le lest compense, il ne sert pas à couler. »

**Notes** — Le lest compense ce qui me fait flotter. Il dépend de la combinaison
(plus elle est épaisse, plus il en faut) et du milieu : l'eau de mer porte
mieux que l'eau douce, donc plus de lest en mer. Il se règle à chaque
changement de combinaison ou de milieu.
Sources : [[lest]] ; livret [[apnee-attitude-livret-aeel-2020]] p.18 et p.29
(salinité).

### 17. En piscine

**Écran** — Deux cartes. **Statique** : pas de lest, je flotte relâché en
surface, sans effort. **Dynamique** : neutre à la profondeur de nage (entre
50 cm et 1 m) : ni remonter, ni racler le fond.

**Notes** — En statique, on reste en surface : on cherche la flottabilité
positive pour se relâcher sans effort du dos. En dynamique, on nage entre 50 cm
et 1 m de profondeur : on cherche l'équilibre, pour glisser parallèlement au
fond. Bien réglé, le lest améliore la posture, réduit l'effort et retarde
l'envie de respirer.
Sources : plan du collègue (STA sans lest, DYN neutre entre 50 cm et 1 m) ;
[[lest]] (section « En dynamique ») ; [[reglage-lest]].

### 18. En dynamique : sans lest, avec lest

**Écran** — Image `img/dynamique-lest.jpg` (Gemini, prompt dans `img/PROMPTS.md`, recadrée) : deux bassins de profil, même
nage, même profondeur. À gauche, **sans lest** : poussée plus forte que le
poids, apnéiste de biais, traînée. À droite, **avec le bon lest** : poussée et
poids égaux, apnéiste à l'horizontale, il glisse. « Le bon lest se règle pour
glisser à l'horizontale, sans remonter ni racler le fond. » (dit à l'oral)

Sur chaque apnéiste, cinq vecteurs posés dans le PPT : poussée
(bleu-vert), poids (orange), direction de nage (flèche blanche), traînée
(gris, à l'opposé de l'avancée) et résultante, leur somme (tirets foncés).
Même effort de nage des deux côtés (flèches de direction de même longueur) et
résultante horizontale dans les deux cas. Sans lest, une partie de l'effort
sert à compenser l'excès de poussée et la traînée est forte : la résultante
est nettement plus courte, on avance moins. Avec le bon lest, poussée et poids
s'annulent et la traînée est faible : la résultante est à peine plus courte
que la direction de nage.

**Notes** — Même nage, même profondeur, deux réglages. Sans lest, la poussée
d'Archimède l'emporte sur le poids : on nage de biais pour rester sous l'eau,
la posture oblique génère de la traînée, on se fatigue et l'envie de respirer
arrive plus tôt. Avec le bon lest, la poussée est compensée : on glisse à
l'horizontale, plus hydrodynamique, avec moins d'effort. Le schéma est
qualitatif.
Sources : [[lest]], section « En dynamique » (règle d'encadrement d'un MEF2,
rapportée oralement) ; [[apnee-attitude-notions-entrainement-2024]] v.20 pour
la performance.

### 19. En fosse

**Écran** — Reprise du schéma `img/zones-flottabilite.png`. Règle en grand :
« Neutre vers **la moitié** de ma profondeur maximale, jamais plus haut. »
Exemple en orange : « Apnée à 20 m → neutre vers 10 m. »

**Notes** — En fosse, on descend plus profond. Moins on est lesté, plus la
profondeur neutre est basse, et plus la remontée est sûre : la zone critique se
situe entre 10 m et la surface. Repère : être neutre vers la moitié de sa
profondeur maximale, jamais plus haut. Pour une apnée à 20 m, neutre vers 10 m
ou plus bas. En fosse de 10 m, neutre vers 5 m ou plus bas.
Sources : principe : [[flottabilite]] (livret p.69-70) ; règle de la moitié
et exemple : plan du collègue, reformulé lors de l'élaboration du 31/10/2026,
à vérifier.

### 20. Tester son lest

**Écran** — Quatre étapes numérotées : 1. Je descends à la profondeur cible,
binôme en surveillance. 2. Poumons pleins, j'arrête de palmer, immobile à
l'horizontale. 3. Je coule : trop lesté, j'enlève. 4. Je remonte : pas assez
lesté, j'ajoute. Geste : « Je teste en début de séance. Dans le doute, moins
de lest. »

**Notes** — Le test se fait poumons pleins, comme en apnée : sinon le résultat
n'a pas de sens. Toujours avec un binôme qui surveille. On ajuste par petits
pas (500 g) et on refait le test. Mieux vaut ajouter 500 g que remonter trop
lourd.
Sources : plan du collègue (test à 10 m, 500 g) ; « poumons pleins » et binôme :
élaboration du 31/10/2026, à vérifier ; [[reglage-lest]] (se teste au mieux
immobile).

### 21. Et en mer ou en carrière ?

**Écran** — « Nouvelle eau, nouvelle combinaison : je refais mon réglage. »
Deux points : la mer porte mieux que l'eau douce → plus de lest ; une
combinaison plus épaisse (eau froide) → plus de lest. « Même règle : neutre vers
la moitié de ma profondeur maximale. »

**Notes** — Ouverture pour une sortie éventuelle. En mer, l'eau salée porte
mieux ; en carrière, eau douce mais souvent plus froide, donc combinaison plus
épaisse. On ne reprend jamais tel quel le lest de la fosse : on refait le test
en début de sortie, encadré.
Source : [[lest]] ; livret p.18 et p.29.

### 22. Le surlestage : l'ennemi n°1

**Écran** — Encadré orange « Trop lesté = danger ». Trois conséquences :
1. **Je m'épuise** : effort au canard et au début de la remontée, oxygène
   consommé. 2. **Je suis moins serein** : difficile de se relâcher en surface
   avant de plonger. 3. **Je coule si je perds connaissance** : remontée plus
   risquée, sauvetage plus difficile.

**Notes** — Trop lesté, on lutte contre la flottabilité négative pour remonter :
on brûle l'oxygène au pire moment, dans la zone où le risque de perte de
connaissance est le plus élevé, les derniers mètres. Et en cas de syncope, un
apnéiste trop lesté coule au lieu de remonter : il est plus exposé à la noyade
et plus difficile à secourir. Le détail des accidents est vu au cours
accidents.
Sources : [[surlestage]] (noyade, syncope, hypoxie de remontée, sauvetage) ;
[[flottabilite]] (livret p.69 : « trop lutter contre la flottabilité
négative ») ; plan du collègue (effort au canard, sérénité en surface).

### 23. Larguer : le réflexe

**Écran** — « Fatigue, malaise, doute : je largue ma ceinture. » Geste : main
sur la boucle, je tire, je lâche. Pour le binôme et le secouriste : « Sur un
apnéiste en difficulté, je décroche sa ceinture. »

**Notes** — Le largage doit être un réflexe automatique : une ceinture se
rachète, pas un apnéiste. Le secouriste aussi décroche la ceinture de la
victime, quel que soit son poids ; non formé ou non averti, il peut ne pas y
penser. D'où l'entraînement au bord.
Sources : plan du collègue (règle de sécurité) ; [[surlestage]] (le secouriste
décroche le lest).

### 24. Checklist avant la séance

**Écran** — Quatre cases à cocher :
1. Ma ceinture est élastique et sa boucle s'ouvre d'une main.
2. Je la porte bas, sur le bassin, extrémité libre côté main qui largue.
3. Je commence léger : mieux vaut ajouter 500 g que remonter trop lourd.
4. Je teste ma flottabilité en début de séance.

**Notes** — À faire à chaque séance, et à chaque changement de combinaison ou de
milieu.
Source : plan du collègue (synthèse).

### 25. À retenir — le lestage

**Écran** —
- Le lest compense ce qui me fait flotter. Il ne sert pas à couler.
- Ceinture caoutchouc, sur le bassin, boucle dégagée.
- Piscine : neutre à la profondeur de nage. Fosse : neutre vers la moitié de la
  profondeur maximale.
- Dans le doute, moins de lest. En difficulté, je largue.

**Notes** — Transition vers le quiz final : les trois questions du début, puis
quatre nouvelles.

### 26-36. Quiz final

**Écran** — Questions 1 à 3 à l'identique, bonne réponse en orange ; puis
questions 4 à 7, chacune suivie d'une slide réponse.

**Notes** — Rythme rapide. Pour les questions d'ouverture, vérifier que les
réponses ont changé.

### 37. Merci

**Écran** — Logo centré. « Merci ! » puis « À tester dans l'eau à la prochaine
séance ». En petit : « Larguer sa ceinture les yeux fermés · flotter, puis
s'équilibrer · trouver son lest ».

**Notes** — Clôture. Annoncer le cours lois physiques, qui reviendra sur
Archimède et la flottabilité avec des chiffres.

---

## Quiz — import Kahoot

20 secondes par question. Les questions 1 à 3 sont jouées deux fois (ouverture
et final) : prévoir deux Kahoot, « ouverture » (1-3) et « final » (1-7).

| # | Question | A | B | C | D | Bonne |
|---|---|---|---|---|---|---|
| 1 | À quoi sert le lest d'un apnéiste ? | À couler plus vite | À compenser ce qui le fait flotter | À aller plus profond | À se muscler | B |
| 2 | Où se porte la ceinture de lest ? | Sur le ventre | Sur la poitrine | Sur le bassin | Peu importe | C |
| 3 | En cas de doute sur son lest, mieux vaut être… | un peu trop léger | un peu trop lourd | très lourd pour descendre facilement | sans lest du tout | A |
| 4 | En descendant, ma flottabilité… | augmente | ne change pas | diminue | dépend de ma vitesse | C |
| 5 | Pour une apnée à 20 m en fosse, je cherche à être neutre vers… | 2 m | 10 m | 20 m | 30 m | B |
| 6 | Un apnéiste est en difficulté sous l'eau. Que fait-on de sa ceinture ? | On la serre | On la largue | On ajoute du lest | On n'y touche pas | B |
| 7 | Pourquoi une ceinture en caoutchouc plutôt qu'en nylon ? | Elle est moins chère | Elle reste plaquée quand le tour de taille diminue | Elle flotte | Elle est plus légère | B |

## Sources

Le plan du collègue (31/10/2026) est la seule source des affirmations
suivantes, absentes du graphe ; elles sont à vérifier avant de les y faire
entrer (`/capture`) :

| Affirmation | Slide | Origine |
|---|---|---|
| Ceinture élastique : reste plaquée quand le tour de taille diminue ; nylon à bannir | 11 | plan du collègue |
| Plomb de cou : aligne tête et buste, soulage la ceinture et les lombaires | 14 | plan du collègue |
| Statique sans lest ; dynamique neutre entre 50 cm et 1 m | 17 | plan du collègue |
| Neutre vers la moitié de la profondeur max (apnée à 20 m → 10 m) | 19 | plan du collègue (« neutre à au moins 10 m pour une apnée à 20 m »), reformulé |
| Test immobile à la profondeur cible ; ajuster par 500 g | 20 | plan du collègue |
| Surlestage : effort au canard, sérénité en surface | 22 | plan du collègue |
| Largage réflexe, boucle dégagée et accessible | 13, 23 | plan du collègue |

Ajouts de l'élaboration du 31/10/2026, à vérifier : boucle marseillaise comme
boucle la plus courante sur les ceintures caoutchouc ; extrémité libre côté
main qui largue ; le plomb de cou ne se largue pas d'un geste ; test poumons
pleins et sous surveillance d'un binôme.

Déjà sourcés dans le graphe : position sur le bassin ([[ceinture-lest]]) ;
plombs enrobés ([[ceinture-lest]], livret p.16, p.70) ; trois lests courants
([[lest]], livret p.70-71) ; flottabilité positive, neutre puis négative, et
« moins lesté, remontée plus sûre » ([[flottabilite]], livret p.69-70) ; lest
bien réglé : sécurité, performance, confort ([[lest]], [[reglage-lest]]) ;
plus de lest en mer (livret p.18, p.29) ; dangers du surlestage et sauvetage
([[surlestage]]).

Images : voir [img/PROMPTS.md](img/PROMPTS.md).
