---
type: exercice
title: "Statique 1 mn + dynamique 25 m (examen IE)"
summary: >
  Épreuve de l'examen Initiateur-Entraîneur : une apnée de 1 mn 30 s,
  une minute de statique en surface puis 25 m de dynamique sans reprise
  de ventilation.
created: 2026-09-24
updated: 2026-09-24
execution: "STA 1mn + DYN 25m en 30s sans reprise => 1mn30s"
triples:
  - verb: source
    target: "[[mfa-ie-2026-02]]"
    verification: verifie
    confidence: certain
  - verb: duree-apnee
    target: "1mn30s"
    verification: verifie
    confidence: certain
  - verb: distance-apnee
    target: "25m"
    verification: verifie
    confidence: certain
  - verb: repetitions
    target: 1
    verification: verifie
    confidence: certain
  - verb: discipline
    target: "[[statique]]"
    verification: verifie
    confidence: certain
  - verb: discipline
    target: "[[dynamique]]"
    verification: verifie
    confidence: certain
---

## Description

Épreuve n°4 du 1er groupe (tests physiques) de l'examen IE1/IE2, notée
**Fait / Non Fait** (MFA IE, §9.3.1) : « 1 mn d'apnée statique en surface,
suivie sans reprise de ventilation de 25m d'apnée dynamique en 30 secondes. Le
stagiaire doit avoir parcouru les 25m durant l'épreuve. »

Les deux phases chronométrées ne sont pas des triples : ni `duree-min` ni
`duree-max` ne portent sur une phase, ils portent sur l'exercice entier.
