---
type: concept
title: "Loi de Boyle-Mariotte"
aliases: ["Boyle-Mariotte", "loi de Mariotte"]
summary: >
  À température constante, P × V reste constant : les volumes gazeux diminuent à mesure que la pression augmente.
created: 2026-09-24
updated: 2026-09-29
triples:
  - verb: source
    target: "[[apnee-attitude-livret-aeel-2020]]"
    verification: verifie
    confidence: certain
  - verb: favorise
    target: "[[placage-masque]]"
    verification: verifie
    confidence: probable
  - verb: provoque
    target: "[[blood-shift]]"
    verification: verifie
    confidence: probable
  - verb: source
    target: "[[apnee-attitude-physiopathologie-2025]]"
    verification: verifie
    confidence: certain
  - verb: favorise
    target: "[[barotraumatisme]]"
    verification: verifie
    confidence: certain
---

## Description

À température constante, pour une quantité de gaz donnée :

```math
P_1 \times V_1 = P_2 \times V_2 = \text{cst}
```

10 L en surface font 5 L à 10 m, 2,5 L à 30 m (livret, p.27-28). Explique le placage du masque non rééquilibré, la compression pulmonaire jusqu'au volume résiduel et le blood shift. Tableau pression/volume dérivable, non stocké.

Le produit P × V a la dimension d'une énergie : à quantité de gaz fixée, c'est une constante. Comme la pression double entre 0 et 10 m, le volume y est divisé par deux : la variation relative de volume est la plus forte près de la surface (voir [[pression-hydrostatique]]), d'où l'importance de compenser tôt et le danger d'une remontée poumons pleins.

## Schéma

Volume d'un poumon de 10 L en surface selon la profondeur :

<svg viewBox="0 0 380 250" width="380" role="img" aria-label="Volume pulmonaire selon la profondeur : 10 L en surface, 5 L à 10 m, 3,3 L à 20 m, 2,5 L à 30 m">
  <g font-family="sans-serif" font-size="11" fill="currentColor">
    <text x="200" y="16" text-anchor="middle">volume (L)</text>
    <line x1="60" y1="50" x2="345" y2="50" stroke="currentColor"/>
    <line x1="60" y1="50" x2="60" y2="235" stroke="currentColor"/>
    <text x="14" y="245">profondeur (m)</text>
    <line x1="60" y1="46" x2="60" y2="50" stroke="currentColor"/><text x="60" y="40" text-anchor="middle">0</text><line x1="130" y1="46" x2="130" y2="50" stroke="currentColor"/><text x="130" y="40" text-anchor="middle">2,5</text><line x1="200" y1="46" x2="200" y2="50" stroke="currentColor"/><text x="200" y="40" text-anchor="middle">5</text><line x1="270" y1="46" x2="270" y2="50" stroke="currentColor"/><text x="270" y="40" text-anchor="middle">7,5</text><line x1="340" y1="46" x2="340" y2="50" stroke="currentColor"/><text x="340" y="40" text-anchor="middle">10</text>
    <text x="52" y="54" text-anchor="end">0</text><text x="52" y="104" text-anchor="end">10</text><text x="52" y="154" text-anchor="end">20</text><text x="52" y="204" text-anchor="end">30</text>
    <rect x="61" y="51" width="284" height="49" fill="#d62728" opacity="0.08"/>
    <text x="66" y="80" fill="#d62728">0-10 m : la moitié</text><text x="66" y="93" fill="#d62728">du volume perdue</text>
    <polyline fill="none" stroke="#1f77b4" stroke-width="2.5" points="340.0,50 314.5,55 293.3,60 275.4,65 260.0,70 246.7,75 235.0,80 224.7,85 215.6,90 207.4,95 200.0,100 193.3,105 187.3,110 181.7,115 176.7,120 172.0,125 167.7,130 163.7,135 160.0,140 156.6,145 153.3,150 150.3,155 147.5,160 144.8,165 142.4,170 140.0,175 137.8,180 135.7,185 133.7,190 131.8,195 130.0,200 128.3,205 126.7,210 125.1,215 123.6,220 122.2,225"/>
    <circle cx="340.0" cy="50" r="3.5" fill="#1f77b4"/><circle cx="200.0" cy="100" r="3.5" fill="#1f77b4"/><circle cx="153.3" cy="150" r="3.5" fill="#1f77b4"/><circle cx="130.0" cy="200" r="3.5" fill="#1f77b4"/>
    <text x="334.0" y="64" text-anchor="end">10 L en surface (1 bar)</text><text x="208.0" y="104">5 L à 10 m (2 bar)</text><text x="161.3" y="154">3,3 L à 20 m (3 bar)</text><text x="138.0" y="204">2,5 L à 30 m (4 bar)</text>
  </g>
</svg>
