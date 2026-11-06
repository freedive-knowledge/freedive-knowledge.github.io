---
type: allure
title: "Sprint"
summary: >
  Allure maximale de l'apnéiste, sous les 20 s au 25 m. Fait monter le CO2
  très rapidement ; s'emploie en amorce, pas en travail de distance.
created: 2026-09-23
updated: 2026-09-23
triples:
  - verb: vitesse-min
    target: "1.25m/s"
    verification: a-verifier
    confidence: plausible
  - verb: permet
    target: "[[travail-hypercapnie]]"
    verification: a-verifier
    confidence: plausible
  - verb: source
    target: "[[transcript-2026-09-23-elaboration-sprint]]"
    verification: a-verifier
    confidence: plausible
---

## Doctrine d'emploi

Allure **la plus rapide possible pour l'apnéiste** : généralement **sous les
20 s au 25 m**. La dépense est telle que le CO2 monte très rapidement — c'est
précisément l'effet recherché.

Elle ne s'emploie donc pas comme allure de distance mais comme **amorce** : un
sprint installe l'inconfort ventilatoire d'emblée, et la suite du parcours se
nage dans cet état. D'où le motif habituel — un sprint, puis une distance en
allure plus lente, `tranquille` ou `croisiere`.

## Pas de borne haute

Aucun triple `vitesse-max` n'est porté, et c'est **volontaire** : le plafond
est individuel, il n'est pas une propriété de l'allure. Par convention,
**une borne absente vaut intervalle ouvert**, et non « non renseignée ».

## L'enchaînement n'est pas ici

« Généralement suivi par une distance en allure plus lente » décrit un **motif
d'exercice**, pas une propriété du sprint. Sa place est un nœud `exercice`
dont l'`execution` porte l'enchaînement — par exemple
`1x25m sprint + 1x50m tranquille`. Le candidat `progresse-vers → tranquille`
a été rejeté en silver pour cette raison : `progresse-vers` exprime un
gradient de difficulté entre exercices, pas une séquence entre allures.
