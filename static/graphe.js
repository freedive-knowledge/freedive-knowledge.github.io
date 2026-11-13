// Mini-graphe de voisinage (fiche) et graphe global. Donnees : /graph.json.
(function () {
  "use strict";

  const mini = document.getElementById("mini-graphe");
  const global = document.getElementById("graphe-global");
  if (!mini && !global) return;

  const SOLIDE = new Set(["verifie", "intrinseque"]);
  const OPACITE = { certain: 1, probable: 0.75, plausible: 0.5, incertain: 0.35 };
  const css = (v) => getComputedStyle(document.documentElement).getPropertyValue(v).trim();

  function style() {
    return [
      { selector: "node", style: {
        "label": "data(title)", "font-size": 10, "color": css("--texte"),
        "text-wrap": "ellipsis", "text-max-width": 95, "text-valign": "bottom", "text-margin-y": 3,
        "background-color": css("--noeud"), "width": 12, "height": 12 } },
      { selector: "node.centre", style: { "background-color": css("--accent"), "width": 20, "height": 20, "font-weight": "bold" } },
      { selector: "node.provisoire", style: { "border-width": 3, "border-color": css("--alerte") } },
      { selector: "node.manquant", style: { "background-color": css("--fond"), "border-width": 2,
        "border-style": "dashed", "border-color": css("--alerte"), "color": css("--alerte") } },
      { selector: "edge", style: {
        "width": 1.5, "curve-style": "bezier", "target-arrow-shape": "triangle", "arrow-scale": 0.7,
        "line-color": css("--lien"), "target-arrow-color": css("--lien"),
        "opacity": "data(opacite)", "label": "data(verb)", "font-size": 8, "color": css("--attenue"),
        "text-rotation": "autorotate", "text-opacity": 0 } },
      { selector: "edge.incertain", style: { "line-style": "dashed" } },
      { selector: "edge.infirme", style: { "line-color": css("--alerte"), "target-arrow-color": css("--alerte") } },
      { selector: "edge:selected, edge.survol", style: { "text-opacity": 1 } },
      { selector: "node.survol", style: { "font-weight": "bold" } },
    ];
  }

  function elements(noeuds, aretes) {
    return [
      ...noeuds.map((n) => ({ data: { id: n.id, title: n.title, url: n.url, type: n.type },
        classes: [n.statut || ""].join(" ") })),
      ...aretes.map((a, i) => ({ data: { id: "e" + i, source: a.source, target: a.target, verb: a.verb,
        opacite: OPACITE[a.confidence] ?? 0.5 },
        classes: [a.confidence, a.verification].join(" ") })),
    ];
  }

  function brancher(cy) {
    cy.on("tap", "node", (e) => { const u = e.target.data("url"); if (u) window.location = u; });
    cy.on("mouseover", "node", (e) => { e.target.addClass("survol"); e.target.connectedEdges().addClass("survol"); });
    cy.on("mouseout", "node", (e) => { e.target.removeClass("survol"); e.target.connectedEdges().removeClass("survol"); });
  }

  fetch("/graph.json").then((r) => r.json()).then((g) => {
    const parId = new Map(g.nodes.map((n) => [n.id, n]));
    const filtrees = () => (window.apneeFiltreActif && window.apneeFiltreActif())
      ? g.edges.filter((a) => SOLIDE.has(a.verification)) : g.edges;

    if (mini) {
      const centre = mini.dataset.id;
      let cy = null;
      const dessiner = () => {
        const prof = Number(document.querySelector("input[name=prof]:checked").value);
        const aretes = filtrees();
        const niveau = new Map([[centre, 0]]);
        for (let i = 0; i < prof; i++) {
          const front = [...niveau].filter(([, d]) => d === i).map(([id]) => id);
          aretes.forEach((a) => {
            if (front.includes(a.source) && !niveau.has(a.target)) niveau.set(a.target, i + 1);
            if (front.includes(a.target) && !niveau.has(a.source)) niveau.set(a.source, i + 1);
          });
        }
        const garde = new Set(niveau.keys());
        const noeuds = [...garde].map((id) => parId.get(id)).filter(Boolean);
        const liens = aretes.filter((a) => garde.has(a.source) && garde.has(a.target));
        if (cy) cy.destroy();
        cy = cytoscape({ container: mini, maxZoom: 1.3, minZoom: 0.3, elements: elements(noeuds, liens), style: style(),
          layout: { name: "concentric", concentric: (n) => 10 - niveau.get(n.id()), levelWidth: () => 1,
            minNodeSpacing: 55, spacingFactor: 1.1, padding: 15 } });
        cy.$id(centre).addClass("centre");
        brancher(cy);
      };
      document.querySelectorAll("input[name=prof]").forEach((r) => r.addEventListener("change", dessiner));
      document.addEventListener("filtre", dessiner);
      dessiner();
    }

    if (global) {
      let cy = null;
      const dessiner = () => {
        const choisies = new Set([...document.querySelectorAll("input[name=classe]:checked")].map((c) => c.value));
        const noeuds = g.nodes.filter((n) => n.type === null || choisies.has(n.type));
        const ids = new Set(noeuds.map((n) => n.id));
        const liens = filtrees().filter((a) => ids.has(a.source) && ids.has(a.target));
        const relies = new Set(liens.flatMap((a) => [a.source, a.target]));
        if (cy) cy.destroy();
        cy = cytoscape({ container: global, maxZoom: 2, minZoom: 0.1, elements: elements(noeuds.filter((n) => n.type !== null || relies.has(n.id)), liens),
          style: style(), layout: { name: "cose", animate: false, nodeRepulsion: 9000, idealEdgeLength: 70 } });
        brancher(cy);
      };
      document.querySelectorAll("input[name=classe]").forEach((c) => c.addEventListener("change", dessiner));
      document.addEventListener("filtre", dessiner);
      dessiner();
    }
  });
})();
