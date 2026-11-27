# Pression, oreille, voies aériennes et barotraumatismes

Cours théorique AP — le club — 45 mn — 30 novembre 2026.

Ce fichier porte le **fond** du cours : plan, texte de chaque slide, notes du
présentateur, minutage, quiz. La mise en forme vit dans le deck Google Slides
généré à partir de lui ; le PDF et le tableur Kahoot en sont des exports.
Une version HTML pilotée par la fenix 8, `deck.html`, reprend la
mise en page de `build.js` avec des révélations pas à pas
(`cd ../_commun/watchdeck && make up COURS=ap-pression-oreille-ventilation`).
Tout changement d'un bloc **Écran** se reporte dans `build.js` **et** dans
`deck.html`.
Il remplace, pour le cursus, le cours POC [ap-lois-physiques](../ap-lois-physiques/cours.md),
dont il reprend une partie de la matière et des images.

## Cadre

- **Public** : candidats Apnéiste Piscine ([[apneiste-piscine]]), 0-6 m en bassin.
- **Référentiel** : MFA AP juillet 2026 ([[mfa-ap-2026-07]]) — « notions simples
  de physique permettant de comprendre les effets du milieu et les accidents »,
  « variations de pression liées à la profondeur pour comprendre la
  compensation ».
- **Programme reçu** : « les pressions et volumes, anatomie, rôle et
  fonctionnement de l'oreille, du système ventilatoire, les barotraumatismes ».
  Rester dans le cadre de l'apnéiste piscine : la profondeur relève d'un cours
  optionnel ultérieur.
- **Cours suivant** : système cardiovasculaire, la respiration, accidents
  biochimiques. Lui reviennent : mécanique ventilatoire (diaphragme,
  intercostaux), échanges gazeux, contrôle par le CO2, hyperventilation, Dalton
  et hypoxie de remontée.
- **Fil rouge** : la pression comprime l'air → l'air du corps est dans des
  cavités → une cavité qu'on n'équilibre pas fait mal, c'est le
  barotraumatisme.
- **Barotraumatismes** : ce cours est leur cours de référence. Chacun suit la
  même grille : mécanisme → signes → prévention → conduite à tenir.
- **Compensation** : Valsalva est nommée comme la manœuvre spontanée, avec ses
  risques, sans être enseignée ; le principe du Frenzel, à privilégier, est
  présenté et sa pratique renvoyée au bassin ([[compensation]], [[valsalva]]).
- **Liens** : les termes clés écrits `[[id]]` dans les blocs **Écran** sont
  rendus en hyperliens vers `https://freedive-knowledge.github.io/<classe>/<id>.html`.
  Première occurrence seulement, 3 liens au plus par slide, couleur d'accent
  sans soulignement. Jamais de lien vers `seance/` ni vers un transcript. Un
  terme sans nœud n'est pas lié (voir « Nœuds à créer »).
- **Forme** : slides épurées aux couleurs du club, illustrations Gemini (prompts
  dans [img/PROMPTS.md](img/PROMPTS.md)), graphiques chiffrés en SVG.

## Objectifs

À la fin du cours, le participant sait :

1. dire en une phrase pourquoi on voit, on entend et on se refroidit autrement
   sous l'eau ;
2. expliquer pourquoi il flotte ou coule entre 0 et 6 m, et le lien avec son
   lest ;
3. donner la pression absolue à 0, 3 et 6 m et dire ce que devient un volume
   d'air à 6 m ;
4. citer les deux fonctions de l'oreille (audition ; équilibre et
   orientation), situer tympan, oreille moyenne et trompe d'Eustache, et
   expliquer pourquoi et quand compenser ;
5. appliquer les règles de la compensation (tôt, souvent, sans forcer, pas
   enrhumé) et souffler dans son masque ;
6. nommer les voies aériennes et les volumes pulmonaires, et dire pourquoi les
   poumons se compriment en descendant ;
7. reconnaître un barotraumatisme (oreille, sinus, masque, oreille interne) et
   appliquer la conduite à tenir : arrêter, sortir, consulter — en urgence pour
   l'oreille interne.

## Minutage

| Bloc | Slides | Durée | Cumul |
|---|---|---|---|
| Ouverture | 1-3 | 2 mn | 2 mn |
| Effets du milieu | 4 | 3 mn | 5 mn |
| Archimède 0-6 m | 5-6 | 5 mn | 10 mn |
| Pression et Boyle-Mariotte | 7-10 | 8 mn | 18 mn |
| Oreille | 11-15 | 11 mn | 29 mn |
| Voies aériennes et volumes | 16-17 | 5 mn | 34 mn |
| Barotraumatismes | 18-23 | 8 mn | 42 mn |
| À retenir, Kahoot, clôture | 24-36 | 3 mn | 45 mn |

Le Kahoot (5 questions × 20 s) tient en 3 mn à condition de ne pas commenter
chaque réponse : les corrections sont déjà dans le cours.

## Charte

Celle du cours POC, voir [ap-lois-physiques/cours.md](../ap-lois-physiques/cours.md#charte)
et `_commun/charte.js`. Liens : couleur dominante `#3d6e79`.

---

## Slides

### 1. Titre

**Écran** — Pression, oreilles, poumons : ce que l'eau fait à l'air de mon
corps. Cours théorique Apnéiste Piscine. Logo du club.

**Notes** — Accueil. 45 mn, un Kahoot à la fin. Le cours suivant traitera le
cœur, la respiration et les accidents biochimiques.

### 2. Le fil du cours

**Écran** — Trois étapes reliées par des flèches : « L'eau appuie » → « L'air
de mon corps se comprime » → « Une cavité non équilibrée fait mal ».

**Notes** — Tout le cours tient dans cette chaîne. On commence par ce que
l'eau change dès la surface, puis on descend.

### 3. Au programme

**Écran** — Sept lignes numérotées, durée à droite :
1. L'eau et nos sens — 3 mn ;
2. Flotter ou couler — 5 mn ;
3. La pression et l'air — 8 mn ;
4. L'oreille et la compensation — 11 mn ;
5. Voies aériennes et poumons — 5 mn ;
6. Les barotraumatismes — 8 mn ;
7. À retenir et Kahoot — 3 mn.

**Notes** — Lire rapidement, ne pas commenter.

### 4. L'eau et nos sens

**Écran** — Trois colonnes, un pictogramme chacune :
- **Vision** ([[vision-subaquatique]]) : objets **1/3 plus gros**, **1/4 plus
  près** → un masque, méfiance sur les distances.
- **Son** ([[propagation-son]]) : **4 fois plus vite** que dans l'air → on
  entend bien, on situe mal → signes, binôme à vue.
- **Chaleur** ([[conduction-thermique]]) : l'eau refroidit **plus de 20 fois**
  plus vite que l'air → une combinaison adaptée à la séance.

Petite vignette `img/vision-refraction.jpg` en tête de la colonne Vision.

**Notes** — Une phrase par colonne. Vision : la lumière change de direction
entre l'eau et l'air du masque ; sans masque on voit flou. Son : 1 500 m/s
contre 340 m/s, le décalage entre les deux oreilles devient trop court pour
situer la source. Chaleur : à 28 °C l'eau est plus froide que la peau ;
immobile on se refroidit vite, et frissonner consomme de l'oxygène.
Chiffres et sources : voir le cours POC, section « Sources des affirmations
ajoutées ».

### 5. Archimède : flotter ou couler

**Écran** — Image `img/archimede-flottabilite.jpg` (flèches poussée / poids
tracées dans le PPT, comme au POC). En dessous, en orange : **Poids apparent =
poids réel − poussée** ([[poussee-archimede]]).

**Notes** — Rappel du cours lestage. L'eau pousse vers le haut tout ce qu'on y
plonge, d'autant plus fort que l'objet prend de la place : 1 L de volume, c'est
environ 1 kg de poussée en eau douce. Dans l'eau, on ne sent pas son poids réel
mais son poids apparent. Sa flottabilité en est l'opposé.

### 6. Entre 0 et 6 m, je flotte de moins en moins

**Écran** — Tableau, apnéiste de 78 kg et 80 L, poumons de 6 L :

| Profondeur | Poumons | Poids apparent | Flottabilité |
|---|---|---|---|
| Surface | 6 L | − 2 kg | positive |
| 3 m | 4,6 L | − 0,6 kg | positive |
| 5 m | 4 L | 0 kg | neutre |
| 6 m | 3,75 L | + 0,25 kg | négative |

En bas : « Lest bien réglé = équilibre à la profondeur de nage. Jamais trop. »
([[flottabilite]], [[lest]]).

**Notes** — On anticipe la suite : les poumons se compriment en descendant
(on va voir pourquoi), donc le volume baisse, la poussée aussi. Le poids
apparent augmente : on flotte en surface, on est neutre vers 5 m dans cet
exemple, on coule un peu à 6 m. La profondeur neutre varie d'une personne à
l'autre. Trop lesté, en cas de malaise on coule au lieu de remonter.
Sources : [[flottabilite]], [[surlestage]], exemple du livret
[[apnee-attitude-livret-aeel-2020]] p.29.

### 7. La pression : +1 bar tous les 10 m

**Écran** — Image `img/pression-apneiste.jpg`. À droite, tableau :

| Profondeur | Pression |
|---|---|
| Surface | 1 bar |
| 3 m (nos bassins) | 1,3 bar |
| 6 m (limite AP) | 1,6 bar |

Règle en orange : **1 bar en surface, + 1 bar tous les 10 m**
([[pression-hydrostatique]]).

**Notes** — En surface, l'atmosphère pèse 1 bar. L'eau est lourde : 10 m d'eau
pèsent autant que toute l'atmosphère, soit 0,1 bar par mètre. Au fond de nos
bassins, déjà 30 % de plus ; à 6 m, 60 %. Le piège classique : oublier le
bar de l'air.

### 8. L'air se comprime

**Écran** — Ballon de plage `img/ballon.png` répété à trois tailles le long
d'une échelle 0 / 3 / 6 m : **6 L**, **4,6 L**, **3,75 L**. Formule en orange :
**P × V = constante** ([[loi-boyle-mariotte]]).

**Notes** — L'eau ne se comprime pas, l'air si. Rien n'entre, rien ne sort :
c'est le même air, plus serré. 1 × 6 = 1,3 × 4,6 = 1,6 × 3,75 = 6. Il reprend
son volume en remontant. C'est la seule formule du cours.

### 9. C'est près de la surface que tout change

**Écran** — Courbe `img/boyle-mariotte-6l.png`, zone 0-6 m surlignée. En
bas : « À 6 m, plus d'un tiers du volume a disparu. »

**Notes** — Entre 0 et 10 m, le volume est divisé par deux ; entre 10 et 20 m,
il ne perd plus qu'un tiers. Nous pratiquons exactement dans la zone où l'air
change le plus vite : c'est là qu'il faut agir, dès la surface.

### 10. Où y a-t-il de l'air dans mon corps ?

**Écran** — Coupe `img/coupe-espaces-air.jpg` avec pastilles : 1 sinus,
2 cavité nasale, 3 bouche, 4 oreille moyenne, 5 trachée et poumons, plus le
masque. Les trois « portes » en orange : A [[trompe-eustache]], B voile du
palais, C [[glotte]].

**Notes** — Le corps est surtout fait d'eau : il ne se comprime pas. Seules
les cavités d'air subissent Boyle-Mariotte. Elles communiquent par trois
portes. Équilibrer une cavité, c'est y faire entrer de l'air par sa porte.
Si la porte reste fermée, la cavité est mise en dépression : c'est le
barotraumatisme. On va les voir une par une, en commençant par l'oreille.
Source : [[apnee-attitude-compensation-0-30m-2026]] v.10.

### 11. L'oreille : trois étages

**Écran** — Image `img/oreille-trois-etages.jpg` (à générer), légendes posées
dans le PPT :
- **Oreille externe** : pavillon, conduit auditif — ouvert, l'eau y entre.
- **Oreille moyenne** : tympan, osselets, cavité d'**air**, reliée au nez par la
  [[trompe-eustache]].
- **Oreille interne** : du **liquide**, **deux fonctions** — la cochlée
  (**audition**) et le vestibule (**équilibre et orientation** : où est le
  haut ?).

**Notes** — Rôles : l'oreille externe capte le son ; le tympan et les osselets
le transmettent ; l'oreille interne le transforme en message nerveux et gère
l'équilibre. Insister sur les **deux fonctions** de l'oreille : entendre, mais
aussi tenir l'équilibre et s'orienter. Le vestibule sent les rotations de la
tête (canaux semi-circulaires) et le sens de la pesanteur (le haut, le bas).
Sous l'eau, on flotte presque et on voit moins bien : le corps perd une partie
de ses repères habituels et compte davantage sur l'oreille interne. Si elle est
perturbée — eau froide dans une seule oreille, compensation inégale entre les
deux côtés, barotraumatisme de l'oreille interne — on a le **vertige** et on
peut perdre le sens du haut et du bas : on remonte en suivant son binôme, le
mur, la ligne ou ses bulles. Pour l'apnéiste, un seul étage pose problème : l'oreille moyenne,
le seul qui contient de l'air. Sa seule entrée est la trompe d'Eustache, qui
débouche à l'arrière du nez. L'oreille interne est séparée de l'oreille
moyenne par deux petites membranes, les fenêtres ovale et ronde : on y
reviendra avec les barotraumatismes.

### 12. En descendant, le tympan s'enfonce

**Écran** — Image `img/oreille-moyenne.jpg`, flèches de l'eau qui poussent le
tympan vers l'intérieur. À droite : « L'eau appuie, l'air derrière le tympan se
comprime : gêne, puis douleur. »

**Notes** — Le conduit est plein d'eau, à la pression de la profondeur.
Derrière le tympan, l'air de l'oreille moyenne se comprime et ne pousse plus
assez : le tympan se courbe vers l'intérieur. D'abord une sensation d'oreille
pleine, puis une douleur. Ça arrive dès 1 à 2 m, et la trompe se « colle »
avec la pression : plus on attend, plus elle est dure à ouvrir.
Sources : [[barotraumatisme-oreille]] (livret p.39), [[trompe-eustache]].

### 13. Compenser : ouvrir la porte

**Écran** — Reprise de `img/oreille-moyenne.jpg`, flèche orange de l'air qui
remonte du nez par la trompe. « Compenser : envoyer de l'air dans l'oreille
moyenne par la trompe d'Eustache. Nez pincé. » ([[compensation]]).

**Notes** — Pour équilibrer, il faut que la pression de l'air derrière le
tympan rejoigne celle de l'eau. On pince le nez pour que l'air ne s'échappe
pas, on met un peu de pression dans le nez, la trompe s'ouvre, l'air passe :
un petit « clic ». Toutes les techniques font ça ; elles diffèrent par ce qui
pousse l'air.

### 14. Deux façons de pousser l'air

**Écran** — Deux colonnes :
- **[[valsalva]]** (gris) : on souffle nez pincé, avec les poumons et le
  ventre. Spontané, mais **brutal** : beaucoup d'air, beaucoup de muscles.
  « À éviter. »
- **[[frenzel]]** (orange) : glotte fermée, la **langue** pousse l'air de la
  bouche vers le nez. Petit volume, geste dosé. « À privilégier : on
  l'apprend dans l'eau. »

**Notes** — La plupart des débutants font Valsalva sans le savoir : ils
soufflent fort, nez pincé. Ça marche en piscine, mais c'est un coup de piston
sur les tympans, et forcé, c'est la cause du barotraumatisme de l'oreille
interne qu'on verra tout à l'heure. Le Frenzel isole l'air de la bouche en
fermant la glotte : la langue fait piston, comme quand on prononce « t » ou
« k ». C'est plus fin et ça marche aussi en profondeur. On ne l'apprend pas
au tableau : exercices en bassin aux prochaines séances.
Sources : [[valsalva]] (« à proscrire », compensation 0-30 m v.16 ; Mahé
p.11-12), [[frenzel]] (livret p.41-43), [[compensation]].

### 15. Les règles de la compensation

**Écran** — Quatre lignes, la dernière en orange :
- **Tôt** : dès la surface, avant la gêne.
- **Souvent** : tous les 1 à 2 m sur les premiers mètres.
- **Sans forcer** : ça ne passe pas → je m'arrête, je remonte un peu, je
  réessaie ; sinon je renonce.
- **Pas enrhumé**, et je souffle par le nez dans mon **masque**.

**Notes** — Les barotraumatismes d'oreille en piscine viennent d'une
compensation tardive ou forcée, rarement d'une mauvaise technique. Repasser
tête en haut aide la trompe à s'ouvrir. Un rhume bouche la trompe et les
sinus : on ne descend pas. Le masque est une cavité d'air qu'on oublie
facilement : une petite expiration par le nez suffit.
Sources : [[barotraumatisme-oreille]] (Mahé p.9 : compenser tôt, dès la
surface, souvent ; ralentir ou interrompre, repasser tête haute),
[[placage-masque]].

### 16. Les voies aériennes

**Écran** — Image `img/voies-aeriennes.jpg` (à générer), légendes posées dans
le PPT : nez et bouche → pharynx → larynx et [[glotte]] → trachée → bronches →
alvéoles. En bas : « Toutes ces cavités sont pleines d'air : toutes se
compriment. »

**Notes** — Rôle : amener l'air jusqu'aux alvéoles, où l'oxygène passe dans le
sang — le détail des échanges, c'est le cours suivant. La glotte, entre les
cordes vocales, est le bouchon de l'apnée : fermée, elle isole les poumons de
la bouche, ce qui sert au Frenzel. Le nez communique avec les sinus et, par
les trompes, avec les oreilles.

### 17. Les volumes pulmonaires

**Écran** — Spirogramme `img/spirogramme.png` (SVG à produire) : capacité
pulmonaire totale **6 L** = capacité vitale **4,5 L** (réserve inspiratoire
2,5 L, volume courant 0,5 L, réserve expiratoire 1,5 L) + [[volume-residuel]]
**1,5 L**. À droite, la même barre de 6 L à 6 m : **3,75 L**.

**Notes** — Valeurs moyennes d'un adulte, très variables. Au repos on ne
déplace qu'un demi-litre ; poumons pleins on en a 6. Le volume résiduel reste
toujours dans les poumons. À 6 m, Boyle-Mariotte réduit 6 L à 3,75 L : sans
danger, le thorax est souple. Les limites apparaissent bien plus profond, au
cours optionnel. On part en apnée poumons pleins, sans forcer le remplissage.
Source : [[volume-residuel]] (diaporama anatomie / physiologie v.12-13).

### 18. Le barotraumatisme

**Écran** — Reprise de `img/coupe-espaces-air.jpg`, quatre cavités entourées
en orange : oreille moyenne, sinus, masque, oreille interne (signalée à part).
Définition : « Une cavité d'air qu'on n'équilibre pas : la pression déforme et
blesse les tissus. » ([[barotraumatisme]]).

**Notes** — Même grille pour chacun : comment ça arrive, à quoi on le
reconnaît, comment on l'évite, que faire. Ordre : du plus fréquent au plus
grave.

### 19. L'oreille moyenne

**Écran** — Quatre cases :
- **Mécanisme** : compensation tardive ou forcée, tympan enfoncé.
- **Signes** : douleur, oreille pleine, entendre moins bien ; parfois un peu
  de sang.
- **Prévention** : les règles de la compensation.
- **Conduite** : j'arrête la séance, je ne replonge pas ; médecin si ça
  persiste, si ça saigne ou si j'entends mal.

Lien : [[barotraumatisme-oreille]].

**Notes** — L'accident le plus fréquent en apnée. Dans les cas les plus
sérieux, le tympan se perce : vertige, voire perte de connaissance si l'eau
froide entre. Arrêt de quelques jours à un mois, contrôle du tympan par un
médecin.
Source : [[barotraumatisme-oreille]] (Mahé p.7-9 ; livret p.39-40).

### 20. Les sinus

**Écran** — Image `img/sinus-face.jpg` (à générer) à gauche. À droite :
- **Mécanisme** : cavités d'air dans les os du visage ; un rhume bouche leur
  petit canal vers le nez.
- **Signes** : douleur au front ou aux pommettes ; saignement de nez, souvent
  en remontant.
- **Prévention** : pas de plongée enrhumé ; se moucher avant de descendre.
- **Conduite** : j'arrête ; médecin si la douleur persiste.

Lien : [[barotraumatisme-sinus]].

**Notes** — Quatre paires de sinus : frontaux, maxillaires, ethmoïdaux,
sphénoïdaux. Quand leur canal est bouché, l'air ne s'équilibre pas : douleur
à la descente. À la remontée, l'air piégé se dilate : douleur vive et
saignement de nez. Sinusites à répétition : voir le médecin.
Source : [[barotraumatisme-sinus]] (Mahé p.13 ; compensation v.8-9, v.26).

### 21. Le masque

**Écran** — Image `img/placage-masque.jpg` (à générer) à gauche. À droite :
- **Mécanisme** : l'air du masque se comprime, le masque fait ventouse.
- **Signes** : yeux rouges, bleus autour des yeux, marque du masque.
- **Prévention** : souffler un peu par le nez en descendant ; masque de petit
  volume ; jamais de lunettes de piscine en profondeur.
- **Conduite** : j'arrête ; ophtalmologiste si la vue est troublée ou si
  l'œil fait mal.

Lien : [[placage-masque]].

**Notes** — On compense ses oreilles et on oublie le masque : le rappeler à
chaque descente. Les lunettes de piscine ne couvrent pas le nez : impossible
d'y renvoyer de l'air. Rarement, un saignement derrière l'œil : d'où l'examen
si la vision change.
Source : [[placage-masque]] (livret p.27, p.39 ; MSD 2025 ; Mahé p.13-14).

### 22. L'oreille interne — urgence

**Écran** — Bandeau orange en haut : **URGENCE**. Puis :
- **Mécanisme** : compensation brutale (Valsalva forcé) ou descente trop
  rapide ; la secousse passe à l'oreille interne.
- **Signes** : **vertige**, **sifflements**, **baisse d'audition**, nausée.
- **Conduite** : je sors de l'eau, je ne replonge pas, **consultation en
  urgence** (ORL, urgences).

Lien : [[barotraumatisme-oreille-interne]].

**Notes** — Rare, mais c'est le seul où « attendre que ça passe » est une
faute : le traitement doit être rapide pour préserver l'audition. C'est le
risque principal d'un Valsalva forcé : le coup de piston passe par les
osselets ou force sur la fenêtre ronde. Ne pas confondre avec un petit
vertige passager à la remontée : dans le doute, on consulte.
Source : [[barotraumatisme-oreille-interne]] (Mahé p.10-12).

### 23. Pour mémoire

**Écran** — Trois lignes courtes :
- **Bouchons d'oreilles, cagoule trop serrée** : de l'air piégé dans le
  conduit → jamais de bouchons ([[barotraumatisme-conduit-auditif]]).
- **Dents** : une carie ou un soin mal fait peut piéger de l'air
  ([[barotraumatisme-dents]]).
- **Poumons** : jamais d'air pris au fond, ni sur un détendeur, ni dans une
  poche d'air ([[surpression-pulmonaire]]).

**Notes** — Les poumons ne craignent rien à 6 m tant qu'on n'y ajoute pas
d'air. Respirer au fond l'air d'un plongeur puis remonter en apnée, c'est la
surpression pulmonaire, possible dès 1 m : règle absolue en piscine partagée
avec les plongeurs. Les lésions pulmonaires de descente concernent la grande
profondeur : cours optionnel.
Sources : [[barotraumatisme-conduit-auditif]] (Mahé p.7),
[[barotraumatisme-dents]], [[surpression-pulmonaire]] (livret p.51 ; MSD).

### 24. À retenir

**Écran** —
- **1 bar** en surface, **+1 bar tous les 10 m** ; **P × V = constante**.
- Le volume d'air change le plus près de la surface.
- Oreilles : **tôt, souvent, sans forcer** ; Frenzel plutôt que Valsalva.
- Masque : souffler par le nez. Rhume : pas de plongée.
- Vertige, sifflement, baisse d'audition : **urgence**.

**Notes** — Transition vers le Kahoot.

### 25-34. Kahoot — 5 questions

**Écran** — Une slide question puis une slide réponse par question (voir
tableau ci-dessous), la bonne réponse en orange.

**Notes** — 20 s par question, correction en une phrase.

### 35. Pour aller plus loin

**Écran** — QR code vers <https://freedive-knowledge.github.io/>. « Tous les
termes soulignés en couleur dans le PDF mènent à une fiche. »

**Notes** — Le PDF sera envoyé après le cours.

### 36. Merci

**Écran** — Logo centré. « Merci ! » « À essayer en bassin : compenser dès la
surface, souffler dans son masque. »

**Notes** — Annoncer le cours suivant : cœur, respiration, accidents
biochimiques.

---

## Quiz — import Kahoot

20 secondes par question.

| # | Question | A | B | C | D | Bonne |
|---|---|---|---|---|---|---|
| 1 | Quelle est la pression à 6 m de profondeur ? | 0,6 bar | 1 bar | 1,6 bar | 6 bar | C |
| 2 | 6 L d'air en surface : combien à 6 m ? | 6 L | 3,75 L | 4,8 L | 1 L | B |
| 3 | Quand faut-il compenser ses oreilles ? | Dès la surface, puis souvent | Quand ça fait mal | Une fois au fond | Seulement si on descend vite | A |
| 4 | À 3 m, la compensation ne passe pas. Que faites-vous ? | Je force | Je continue de descendre | Je descends plus vite | Je remonte un peu et je réessaie, sinon j'arrête | D |
| 5 | Après une descente : vertige, sifflement, j'entends moins bien. | C'est normal, ça passe | Je sors : urgence, consultation | Je replonge pour rééquilibrer | Je bois de l'eau | B |

## Nœuds créés pour ce cours

Promus le 2026-11-23 (lot `ingest/silver/2026-11-23-anatomie-oreille-voies-aeriennes.yaml`) :
[[oreille]], [[oreille-moyenne]], [[oreille-interne]], [[tympan]],
[[voies-aeriennes]], [[voile-du-palais]], [[sinus]], [[volumes-pulmonaires]].
Anatomie adossée à [[wikipedia-oreille-voies-aeriennes-2026-11]] (révisions
figées) ; sinus, voile du palais et volumes aux supports Apnée Attitude et à
Mahé.

## Sources des affirmations

Toutes les affirmations sur les barotraumatismes, la compensation et les
volumes viennent des nœuds liés dans les notes. Ajouts non adossés au graphe,
à vérifier lors de la capture :

| Affirmation | Slide | État |
|---|---|---|
| Rôles des trois étages de l'oreille (capter, transmettre, transformer ; équilibre) | 11 | vérifié : [[oreille]], [[oreille-moyenne]], [[oreille-interne]] (Wikipédia) |
| Vestibule : rotations et pesanteur ; vertige si stimulation inégale (eau froide d'un côté, compensation asymétrique) ; désorientation sous l'eau | 11 | ajouté sur retour d'un MEF1 ; à sourcer (vertige alterno-barique, vertige calorique) |
| Gêne dès 1 à 2 m | 12 | cohérent avec Mahé p.8 (« dès quelques mètres ») |
| Compenser tous les 1 à 2 m | 15 | règle pédagogique ; Mahé p.9 dit « souvent » |
| Frenzel : la langue comme pour « t » ou « k » | 14 | livret p.41-43, blocs t, k, h ([[frenzel]]) |
| Perforation : perte de connaissance si l'eau froide entre | 19 | Mahé p.8 : « vertiges, voire syncope » ; le mécanisme par l'eau froide est à sourcer |
| Dents : carie ou soin qui piège de l'air | 23 | vérifié : [[barotraumatisme-dents]] (MSD 2025 ; Mahé p.13) |
