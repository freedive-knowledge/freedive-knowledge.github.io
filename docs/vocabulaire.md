# Vocabulaire du graphe

> **Document généré** depuis `ontologie/classes.yaml`, `ontologie/verbes.yaml`
> et `ontologie/enums.yaml` par `tools/gen_vocab.py`. **Ne pas éditer à la main.**
> Pour étendre le vocabulaire, modifier le YAML puis régénérer.

16 classes · 40 verbes · 11 types de littéraux.

## Classes de nœuds

Le champ `type` d'un nœud vaut exactement une de ces clés, et le nœud réside dans `graphe/<clé>/`.

| Classe | Description | Exemples |
|---|---|---|
| `allure` | Régime de déplacement défini par le ressenti, borne par une plage de vitesse et documenté par une doctrine d'emploi. Les allures sont des REPÈRES NON COUVRANTS : elles ne partitionnent pas l'échelle des vitesses et des zones intermédiaires n'ont aucun nom. Une borne absente vaut intervalle ouvert. | `tres-lent`, `tranquille`, `croisiere`, `rapide`, `sprint` |
| `competence` | Item évaluable d'un cursus. Ce qu'un apnéiste sait faire. | `sauvetage-10m`, `maitrise-expiration-passive` |
| `concept` | Savoir scientifique ou théorique : physiologie, physique, mécanisme. Inclut les contraintes pulmonaires (poumon-vide, poumon-neutre, poumons-pleins). | `hypoxie`, `reflexe-immersion`, `poumon-vide` |
| `cursus` | Brevet, niveau ou qualification fédérale. | `apneiste-piscine`, `apneiste-confirme-piscine`, `initiateur-entraineur-1` |
| `discipline` | Famille d'épreuve ou de travail structurant la description d'un exercice. Admet des entrées qui ne sont pas des épreuves codifiées (échauffement, secourisme). | `statique`, `dynamique`, `profondeur`, `secourisme`, `echauffement` |
| `exercice` | Unité d'entraînement concrète et réutilisable. Porte le champ `execution`. Brique du catalogue d'exercices. | `4x25-pv`, `tables-co2` |
| `formation` | Occurrence datée de formation, avec cadre fédéral et validation de compétences. Distincte de `seance` par le verbe `evalue`. | `2026-11-14-formation-acp` |
| `lieu` | Bassin, fosse, site naturel. | `piscine-entrainement` |
| `materiel` | Équipement mobilisé par un exercice. Inclut des valeurs explicitement négatives (sans-palme, aucun-materiel) : l'absence de matériel se déclare, elle ne se déduit pas d'un triple manquant. | `palmettes`, `palmes-longues`, `sans-palme`, `aucun-materiel`, `poids`, `mannequin` |
| `organisation` | Structure fédérale, départementale ou associative. | `ffessm`, `codep-91`, `club` |
| `risque` | Incident, accident ou mécanisme délétère, avec ses signes et sa conduite à tenir. | `syncope`, `samba`, `noyade` |
| `role` | Fonction tenue lors d'une séance ou d'une formation, côté encadrement ou côté public. Porte le "Qui" sans nommer de personne. | `initiateur-entraineur-1`, `binome-de-surveillance`, `public-pre-acp` |
| `seance` | Occurrence datée d'entraînement. Porte le champ `date`. Compose des exercices existants ; ne duplique aucun contenu pédagogique. | `2026-09-22-pre-acp-dynamique` |
| `source` | Document ou capture référençable. Cible du verbe `source`, qui rend l'indicateur `verification: verifie` traçable. | `mfa-2024`, `transcript-2026-09-23-elaboration-allures` |
| `technique` | Geste ou méthode exécutable, qui s'enseigne. | `expiration-passive`, `carpe`, `palmage-sustentation` |
| `titre` | Pièce ou qualification conditionnant l'accès a un cursus sans être elle-meme un brevet d'apnée : licence, certificat médical. Un brevet fédéral, même de secourisme comme le RIFA Apnée, reste un `cursus`. | `licence-ffessm`, `certificat-medical` |

## Verbes

**Aucun verbe inverse n'est stocké** : on écrit `requiert`, jamais `est-requis-par`. Les relations retour sont calculées à la lecture.

### Bloc opérationnel

Exercices, séances, formations, progression. Répond aux questions Qui / Quand / Où / Quoi / Comment / Pourquoi et aux prérequis.

#### `discipline`

- **Domaine** : `exercice`, `seance`
- **Co-domaine** : `discipline`
- **Cardinalité** : `0..n`

Famille de travail à laquelle l'exercice appartient. Multiple assumé : un sauvetage mannequin relève du secourisme ET du dynamique.

#### `allure`

- **Domaine** : `exercice`
- **Co-domaine** : `allure`
- **Cardinalité** : `0..n`

Régime de déplacement prescrit, par renvoi vers un nœud allure. Plusieurs triples déclarent les allures ADMISES pour l'exercice, sans ordre ni progression implicite : l'effet de chaque allure se décrit dans le corps du nœud.

#### `utilise-materiel`

- **Domaine** : `exercice`, `technique`
- **Co-domaine** : `materiel`
- **Cardinalité** : `0..n`

Équipement mobilisé. L'absence de matériel se DÉCLARE (sans-palme, aucun-materiel) : un triple manquant signifie "non renseigné", jamais "rien".

#### `contrainte-pulmonaire`

- **Domaine** : `exercice`
- **Co-domaine** : `concept`
- **Cardinalité** : `0..1`

Volume pulmonaire imposé. Cible poumon-vide, poumon-neutre ou poumons-pleins.

#### `repetitions`

- **Domaine** : `exercice`
- **Co-domaine** : _nombre_
- **Cardinalité** : `0..1`

Nombre de répétitions de la série. Le "4" de 4x25m.

#### `distance-apnee`

- **Domaine** : `exercice`
- **Co-domaine** : _distance_
- **Cardinalité** : `0..1`

Distance parcourue en apnée sur une répétition. Le "25m" de 4x25m.

⚠️ Ne désigne pas la distance totale de l'exercice, qui se déduit de répétitions x distance-apnee et n'est donc jamais stockée.

#### `duree-apnee`

- **Domaine** : `exercice`
- **Co-domaine** : _duree_
- **Cardinalité** : `0..1`

Durée nominale de l'apnée sur une répétition. Le "1mn" de 4x1mn.

⚠️ Durée ATTENDUE, non imposée. Un temps plancher relève de duree-min, un plafond de duree-max : trois consignes pédagogiques distinctes.

#### `duree-min`

- **Domaine** : `exercice`
- **Co-domaine** : _duree_
- **Cardinalité** : `0..1`

Plancher imposé : il faut tenir AU MOINS ce temps. Objectif de performance. Le "1mn min" de "1x25m en 1mn min".

#### `duree-max`

- **Domaine** : `exercice`
- **Co-domaine** : _duree_
- **Cardinalité** : `0..1`
- **Portée** : exercice

Plafond imposé sur l'exercice ENTIER : ne pas dépasser ce temps. Objectif d'efficacité ou contrainte de sécurité. Le "4mn max" d'un sauvetage.

#### `recuperation`

- **Domaine** : `exercice`
- **Co-domaine** : _recuperation_
- **Cardinalité** : `0..1` · liste de valeurs admise

Récupération entre répétitions, exprimée en temps, en inspirations ou en coups de palme. UNE SEULE modalité par exercice. Une liste exprime une récupération dégressive, dans l'ordre des répétitions.

Exemples : `30s`, `4inspi`, `10cp`, `[45s, 30s, 15s]`

#### `depart-toutes-les`

- **Domaine** : `exercice`
- **Co-domaine** : _duree_
- **Cardinalité** : `0..1`

Départ imposé à intervalle fixe, récupération incluse. Le "1mn45s" de "4x50m départ 1mn45s". Exclusif avec récupération en pratique.

#### `vitesse-min`

- **Domaine** : `allure`
- **Co-domaine** : _vitesse_
- **Cardinalité** : `0..1`

Borne basse de la plage de vitesse. Les bornes sont TOUJOURS deux valeurs numériques : aucune notation d'approximation, le flou est porté par confidence.

#### `vitesse-max`

- **Domaine** : `allure`
- **Co-domaine** : _vitesse_
- **Cardinalité** : `0..1`

Borne haute de la plage de vitesse. Égale à vitesse-min si valeur unique.

#### `vise`

- **Domaine** : `exercice`, `seance`, `formation`
- **Co-domaine** : `competence`
- **Cardinalité** : `0..n`

Le POURQUOI. Ce que l'exercice cherche à faire acquérir.

⚠️ Ne pas confondre avec mobilise : un 4x25 PV mobilise le réflexe d'immersion mais vise la tolérance à l'hypercapnie.

#### `mobilise`

- **Domaine** : `exercice`, `technique`
- **Co-domaine** : `concept`
- **Cardinalité** : `0..n`

Mécanisme physiologique ou physique en jeu pendant l'exécution.

#### `permet`

- **Domaine** : `allure`, `technique`, `exercice`
- **Co-domaine** : `concept` · `competence`
- **Cardinalité** : `0..n`

Usage rendu possible. Traduit en triples les mentions saillantes de la doctrine d'emploi rédigée dans le corps de la note.

#### `requiert`

- **Domaine** : `exercice`, `competence`, `cursus`, `technique`
- **Co-domaine** : `competence` · `cursus` · `titre`
- **Cardinalité** : `0..n`

Les PRÉREQUIS. Ce qu'il faut déjà savoir faire, ou déjà détenir, pour aborder le nœud. Une cible `cursus` exprime un brevet prérequis, ce qui rend le graphe de progression fédéral interrogeable ; une cible `titre` exprime une pièce conditionnant l'accès.

#### `expose-a`

- **Domaine** : `exercice`, `technique`
- **Co-domaine** : `risque`
- **Cardinalité** : `0..n`

Risque encouru par la pratique de cet exercice ou de cette technique.

#### `variante-de`

- **Domaine** : `exercice`
- **Co-domaine** : `exercice`
- **Cardinalité** : `0..n`

Relation LATÉRALE : même intention, exécution modifiée.

⚠️ Un objectif plus exigeant relève de progresse-vers, non de variante-de.

#### `progresse-vers`

- **Domaine** : `exercice`, `competence`
- **Co-domaine** : `exercice` · `competence`
- **Cardinalité** : `0..n`

Relation VERTICALE : gradient de difficulté. Support de la construction d'une trame de saison AP vers ACP.

#### `comporte`

- **Domaine** : `seance`, `formation`, `cursus`
- **Co-domaine** : `exercice` · `competence`
- **Cardinalité** : `0..n`

Composition. L'ORDRE DE LA LISTE est signifiant pour une séance : il est l'ordre de déroulement. Aucun index numérique n'est stocké.

#### `derive-de`

- **Domaine** : `seance`, `formation`
- **Co-domaine** : `seance` · `formation`
- **Cardinalité** : `0..1`

Réutilisation d'une occurrence antérieure. Quand trois séances dérivent de la même souche, celle-ci est mûre pour être promue en modèle.

#### `se-deroule-a`

- **Domaine** : `seance`, `formation`
- **Co-domaine** : `lieu`
- **Cardinalité** : `0..1`

Le OÙ.

#### `encadre-par`

- **Domaine** : `seance`, `formation`
- **Co-domaine** : `role`
- **Cardinalité** : `0..n`

Le QUI côté encadrement, par rôle et jamais par personne nommée. Rend la séance transmissible a un autre encadrant.

#### `destine-a`

- **Domaine** : `seance`, `formation`, `exercice`
- **Co-domaine** : `role` · `cursus`
- **Cardinalité** : `0..n`

Le QUI côté public visE.

### Bloc savoir

Concepts, risques, cursus, institutions, sources. Porte les quatre échelles : science, FFESSM, CODEP 91, le club.

#### `sorte-de`

- **Domaine** : `concept`, `risque`, `technique`, `materiel`, `discipline`, `competence`, `cursus`, `organisation`, `lieu`, `role`, `allure`
- **Co-domaine** : `concept` · `risque` · `technique` · `materiel` · `discipline` · `competence` · `cursus` · `organisation` · `lieu` · `role` · `allure`
- **Cardinalité** : `0..n`
- **Contrainte** : sujet et cible de la même classe

Subsomption : épine dorsale de l'ontologie. Donne l'héritage, donc la possibilité d'interroger le graphe à plusieurs niveaux de granularité. Sujet et cible doivent être de la MÊME classe.

⚠️ N'est pas l'instanciation. "croisière est une allure" se dit par le champ `type`, pas par un triple.

#### `partie-de`

- **Domaine** : `organisation`, `concept`, `lieu`
- **Co-domaine** : `organisation` · `concept` · `lieu`
- **Cardinalité** : `0..n`

Composition structurelle. club partie-de codep-91.

#### `provoque`

- **Domaine** : `concept`, `technique`
- **Co-domaine** : `risque` · `concept`
- **Cardinalité** : `0..n`

Causalité déterministe : le mécanisme entraîne l'effet.

⚠️ Un simple facteur de risque relève de favorise.

#### `favorise`

- **Domaine** : `concept`, `technique`, `exercice`
- **Co-domaine** : `risque` · `concept`
- **Cardinalité** : `0..n`

Facteur de risque : augmente la probabilité sans déterminer l'effet. La polarité est portée par le verbe lui-même, jamais par un attribut annexe.

#### `previent`

- **Domaine** : `technique`, `concept`, `role`, `materiel`
- **Co-domaine** : `risque`
- **Cardinalité** : `0..n`

Réduit ou annule le risque. Pendant de favorise.

#### `signe-de`

- **Domaine** : `concept`
- **Co-domaine** : `risque`
- **Cardinalité** : `0..n`

Signe clinique permettant de RECONNAÎTRE. Premier temps du savoir de sécurité, dont conduite-a-tenir est le second.

#### `conduite-a-tenir`

- **Domaine** : `risque`
- **Co-domaine** : `technique`
- **Cardinalité** : `0..n`

Action à mener face au risque. L'ORDRE DE LA LISTE est signifiant : il est l'ordre de la conduite.

#### `delivre`

- **Domaine** : `organisation`
- **Co-domaine** : `cursus`
- **Cardinalité** : `0..n`

Brevet ou qualification delivre par la structure.

#### `autorise`

- **Domaine** : `cursus`, `role`
- **Co-domaine** : `discipline` · `technique` · `lieu` · _texte_
- **Cardinalité** : `0..n`

Prérogative ouverte par le cursus ou le rôle.

#### `age-minimum`

- **Domaine** : `cursus`
- **Co-domaine** : _age_
- **Cardinalité** : `0..1`

Âge minimum requis à la date de l'examen, en années révolues. Seuil comparable : permet de répondre à "quels brevets sont accessibles à 16 ans ?", ce qu'un `requiert` en prose ne saurait pas faire.

#### `profondeur-max`

- **Domaine** : `cursus`
- **Co-domaine** : _distance_
- **Cardinalité** : `0..n`
- **Attributs du triple** : `cadre` (requis), `milieu`

Profondeur maximale ouverte par le brevet, qualifiée par deux attributs du triple : `cadre` (autonomie-relative, autonomie-complete, encadrement), toujours requis, et `milieu` (naturel, artificiel), omis quand la valeur vaut pour les deux milieux. Rend comparable "qui peut évoluer, ou encadrer, à 15m ?", ce qu'un `autorise` en texte ne sait pas faire.

⚠️ Les conditions attachées (accord du directeur de plongée, qualification du DP) ne sont pas encodées : elles restent dans un `autorise` texte ou dans la prose. Une borne absente pour un cadre signifie "non renseigné", pas "sans limite".

Exemples : `20m (cadre: autonomie-relative)`, `15m (cadre: autonomie-complete)`, `6m (cadre: encadrement)`

#### `exige-de-tous`

- **Domaine** : `organisation`
- **Co-domaine** : `titre` · `cursus`
- **Cardinalité** : `0..n`

Condition d'accès UNIVERSELLE, valable pour tous les cursus délivrés par l'organisation. Centralise ce qui serait sinon répété sur chaque cursus : un triple présent sur les douze brevets n'a aucun pouvoir discriminant, coûte le double à maintenir et bruite toute requête. Le front lit cette condition centrale et l'affiche sur chaque fiche de cursus.

#### `evalue`

- **Domaine** : `formation`, `exercice`
- **Co-domaine** : `competence`
- **Cardinalité** : `0..n`

Compétence dont la maîtrise est mesurée. Verbe qui distingue structurellement une formation d'un simple entraînement.

#### `remplace`

- **Domaine** : `source`
- **Co-domaine** : `source`
- **Cardinalité** : `0..1`

Nouvelle édition se substituant à l'ancienne. Mécanisme qui permet de réexaminer en masse les triples `verifie` adossés a une édition périmée, et donc qui empêche le graphe de vieillir silencieusement.

#### `source`

- **Domaine** : _toutes classes_
- **Co-domaine** : `source` · URL
- **Cardinalité** : `0..n`

Pièce justificative. REQUIS sur le nœud dès lors qu'un triple y porte `verification: verifie` : contrainte contrôlée par le linter, qui empêche l'indicateur de devenir déclaratif.

## Énumérations

### `verification`

État du PROCESSUS de verification : ai-je retrouvé et lu la source ? Strictement orthogonal à `confidence`.

Valeur par défaut : `a-verifier`

| Valeur | Sens |
|---|---|
| `a-verifier` | Posé de mémoire ou par déduction, source non retrouvée. Valeur par défaut. |
| `verifie` | Source identifiée, lue, et liée par un triple `source` sur le même nœud. Contrainte contrôlée par le linter. |
| `infirme` | Source consultée, elle contredit l'assertion. Le triple est CONSERVÉ : un savoir réfuté doit rester documenté pour pouvoir être déconstruit. |
| `intrinseque` | Fait CONSTITUTIF du nœud, lisible dans un de ses champs (en pratique `execution`). Aucune source externe n'est requise ni possible : ce n'est pas une assertion sur le monde mais une lecture du nœud lui-meme. Réservé aux verbes de transcription listes ci-dessous, et aux nœuds portant le champ dont le triple est la transcription : contrainte contrôlée par le linter, pour que la valeur ne devienne pas une échappatoire commode à l'obligation de sourcer. |

Verbes autorisés à porter `intrinseque` — liste **fermée**, contrôlée par le linter :

`discipline`, `contrainte-pulmonaire`, `repetitions`, `distance-apnee`, `duree-apnee`, `duree-min`, `duree-max`, `recuperation`, `depart-toutes-les`.

`allure` en est **absent à dessein** : c'est un jugement de ressenti, révisé après avoir fait nager le groupe. `utilise-materiel` aussi : c'est une décision d'encadrement, pas une transcription.

### `confidence`

Force épistémique de l'assertion, même parfaitement sourcée. Jugement INDÉPENDANT du type de source : le tableau d'ancrage est une aide, pas une règle de déduction.

Valeur par défaut : `plausible`

| Valeur | Sens | Ancrage typique |
|---|---|---|
| `certain` | Prescrit ou établi, non discutable à mon niveau. | texte federal, MFA, physiologie de manuel |
| `probable` | Consensus large, sans texte prescriptif. | litterature apnee, pratique convergente des cadres |
| `plausible` | Usage local qui fonctionne, sans validation externe. | pratique du le club, experience d'encadrant |
| `incertain` | Entendu, à creuser, possiblement faux. | propos de stage, forum, souvenir |

### `cadre`

Cadre de pratique auquel s'applique une profondeur maximale.

| Valeur | Sens |
|---|---|
| `autonomie-relative` | Évolution en autonomie relative : sous la responsabilité d'un directeur de plongée ou de bassin. |
| `autonomie-complete` | Évolution en autonomie complète |
| `encadrement` | Profondeur jusqu'à laquelle le titulaire peut encadrer. |

### `milieu`

Milieu de pratique. Omis sur le triple quand la valeur vaut pour les deux.

| Valeur | Sens |
|---|---|
| `naturel` | Mer |
| `artificiel` | Piscine |

### `statut`

Statut éditorial d'un NŒUD (champ de frontmatter, pas attribut de triple). Champ omis = contenu établi, lisible sans réserve. Un nœud `provisoire` est signalé par un bandeau sur le front web et marqué dans les listes et graphes.

| Valeur | Sens |
|---|---|
| `provisoire` | Contenu non établi, en attente d'une session de travail dédiée. Ne pas enseigner. |

### `statut_silver`

État d'un triple candidat dans la couche silver.

Valeur par défaut : `propose`

| Valeur | Sens |
|---|---|
| `propose` | Extrait |
| `accepte` | Promu vers graphe/. Conserve en silver comme trace de decision. |
| `rejete` | Ecarte. Conserve pour ne pas reexaminer deux fois la meme assertion. |

## Littéraux et grandeurs

Unité **collée** à la valeur. Une **seule forme canonique** par valeur, afin que deux triples égaux soient littéralement identiques.

| Type | Grammaire | Exemples | Note |
|---|---|---|---|
| `nombre` | `^[0-9]+$` | `4` | Entier sans unité. |
| `duree` | `^([0-9]+s|[0-9]+mn([0-9]{1,2}s)?)$` | `30s`, `45s`, `1mn30s`, `1mn45s`, `4mn` | Forme `<n>s` strictement sous la minute, `<n>mn<n>s` au-dela, `<n>mn` si les secondes sont nulles. `1.50mn` est lisible mais NON canonique. |
| `distance` | `^[0-9]+([.][0-9]+)?m$` | `25m`, `100m` | Mètres. |
| `vitesse` | `^[0-9]+([.][0-9]+)?m/s$` | `0.6m/s`, `1.05m/s` | Mètres par seconde. |
| `masse` | `^[0-9]+([.][0-9]+)?kg$` | `20kg` | Kilogrammes. |
| `frequence_cardiaque` | `^[0-9]+bpm$` | `60bpm` | Battements par minute. |
| `age` | `^[0-9]+ans$` | `16ans` | Âge en années révolues. Seuil comparable, pas une durée. |
| `pourcentage` | `^[0-9]+([.][0-9]+)?%$` | `95%` |  |
| `recuperation` | `^([0-9]+s|[0-9]+mn([0-9]{1,2}s)?|[0-9]+inspi|[0-9]+cp)$` | `30s`, `4inspi`, `10cp` | Modalité de récupération. Les unités ne sont pas des variantes d'une même grandeur mais des MODALITÉS distinctes de la même fonction : rendre la main à l'apnéiste. Une seule modalité par exercice. |
| `texte` | `^.+$` |  | Chaîne libre. À n'employer que faute de mieux : non comparable. |
| `booleen` | `^(true|false)$` |  |  |

### Unités de récupération

| Unité | Sens |
|---|---|
| `s` | secondes |
| `mn` | minutes |
| `inspi` | inspirations |
| `cp` | coups de palme (palmage de sustentation) |

