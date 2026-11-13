---
type: allure
title: "Très lente"
summary: >
  Allure la plus basse, autour de la minute au 25 m. Support privilégié de la
  mise à l'épreuve de la tolérance à l'hypercapnie.
created: 2026-09-23
updated: 2026-09-29
triples:
  - verb: vitesse-min
    target: "0.35m/s"
    verification: a-verifier
    confidence: plausible
  - verb: vitesse-max
    target: "0.45m/s"
    verification: a-verifier
    confidence: plausible
  - verb: permet
    target: "[[tolerance-hypercapnie]]"
    verification: a-verifier
    confidence: plausible
  - verb: permet
    target: "[[travail-hypercapnie]]"
    verification: a-verifier
    confidence: plausible
  - verb: source
    target: "[[transcript-2026-09-23-elaboration-tres-lent]]"
    verification: a-verifier
    confidence: plausible
---

## Doctrine d'emploi

Allure la plus basse du vocabulaire : un 25 m **autour de la minute**. Le
déplacement est si lent que la durée d'apnée devient la contrainte dominante,
avant l'effort. C'est ce qui en fait le support privilégié pour **éprouver la
tolérance à l'hypercapnie** : l'envie de respirer s'installe largement avant
l'arrivée, et l'apnéiste doit continuer à palmer relâché malgré elle.

## La minute comme plancher

Le temps d'une minute au 25 m est **parfois vu comme un minimum** : non pas un
temps à ne pas dépasser, mais un seuil à atteindre — l'exercice n'a de sens que
si l'apnéiste tient au moins ce temps sous l'eau.

> Cette assertion n'est **pas portée par un triple**. Le verbe `duree-min` a
> pour domaine `exercice` : un plancher est une consigne d'exercice, pas une
> propriété d'allure. Le candidat a donc été rejeté en silver, et l'information
> consignée ici. Lacune de vocabulaire assumée, à arbitrer.

## Repères

Les temps par distance ne sont pas stockés : ils se déduisent de la plage de
vitesse. Soit environ **55 s à 1 mn 11 s au 25 m**, et 1 mn 50 s à 2 mn 22 s au
50 m — cette dernière plage étant surtout théorique à cette allure.

Observé le 28/09/2026 (`[[cr-2026-09-28-travail-allures]]`) : allure présentée
comme « 25 m en ~1 mn », cohérent avec la plage.
