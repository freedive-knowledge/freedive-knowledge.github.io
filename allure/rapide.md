---
type: allure
title: "Rapide"
aliases: ["forcé", "allure forcée"]
summary: >
  Allure comprise entre croisière et sprint. Fait monter le CO2 sans le coût
  d'un sprint : soutenable sur une série.
created: 2026-09-23
updated: 2026-09-29
triples:
  - verb: vitesse-min
    target: "1.05m/s"
    verification: a-verifier
    confidence: plausible
  - verb: vitesse-max
    target: "1.25m/s"
    verification: a-verifier
    confidence: plausible
  - verb: permet
    target: "[[travail-hypercapnie]]"
    verification: a-verifier
    confidence: plausible
  - verb: source
    target: "[[transcript-2026-09-23-elaboration-rapide]]"
    verification: a-verifier
    confidence: plausible
---

## Doctrine d'emploi

Allure comprise **entre croisière et sprint**. Elle augmente le taux de CO2
sans le coût d'un sprint, ce qui lui donne sa spécificité : contrairement au
sprint, elle est **soutenable sur une série entière**.

Deux emplois :

- **Série en cadre hypercapnique** — les répétitions s'enchaînent à cette
  allure, le CO2 s'accumulant d'une longueur à la suivante.
- **Amorce** — avant une distance nagée à un rythme plus lent, sur le même
  principe que le sprint mais avec une amorce moins brutale.

## Bornes par encadrement

Les bornes ne viennent pas d'un temps annoncé mais de l'**encadrement** entre
les deux allures voisines : plancher = `vitesse-max` de `croisiere`,
plafond = `vitesse-min` de `sprint`. Soit environ **20 à 24 s au 25 m**.

Conséquence à surveiller : ces bornes sont **solidaires** de celles de
`croisiere` et `sprint`. Affiner l'une doit conduire à réexaminer l'autre.

## L'ordre n'est pas stocké

Aucun triple de rang : l'ordre des allures se déduit de `vitesse-min`. Le
front trie.
