// Recherche globale (touche /) et filtre « vérifié seulement ».
(function () {
  "use strict";

  // --- filtre epistemique, memorise par navigateur ---
  const CLE = "apnee.filtre-verifie";
  const filtre = document.getElementById("filtre-verifie");
  function appliquer(actif) {
    document.body.classList.toggle("filtre-verifie", actif);
    document.dispatchEvent(new CustomEvent("filtre", { detail: actif }));
  }
  let actif = false;
  try { actif = localStorage.getItem(CLE) === "1"; } catch (e) { /* stockage indisponible */ }
  filtre.checked = actif;
  appliquer(actif);
  filtre.addEventListener("change", () => {
    try { localStorage.setItem(CLE, filtre.checked ? "1" : "0"); } catch (e) { /* idem */ }
    appliquer(filtre.checked);
  });
  window.apneeFiltreActif = () => filtre.checked;

  // --- recherche ---
  const q = document.getElementById("q");
  const liste = document.getElementById("resultats");
  let index = null;
  let courant = -1;

  const plier = (s) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

  async function charger() {
    if (index) return index;
    const docs = await (await fetch("/search.json")).json();
    index = new MiniSearch({
      fields: ["title", "aliases", "summary", "corps", "id"],
      storeFields: ["title", "classe", "url", "summary", "statut"],
      processTerm: (t) => plier(t),
      searchOptions: { boost: { title: 4, aliases: 3, id: 2, summary: 1.5 }, prefix: true, fuzzy: 0.2 },
    });
    index.addAll(docs);
    return index;
  }

  function afficher(resultats) {
    liste.innerHTML = "";
    courant = -1;
    resultats.slice(0, 12).forEach((r) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = r.url;
      a.innerHTML = "<span class='titre'></span> <span class='classe'></span>";
      a.querySelector(".titre").textContent = r.title;
      a.querySelector(".classe").textContent = r.classe + (r.statut === "provisoire" ? " · provisoire" : "");
      li.appendChild(a);
      liste.appendChild(li);
    });
    liste.hidden = resultats.length === 0;
  }

  function surligner(i) {
    const items = liste.querySelectorAll("li");
    if (!items.length) return;
    courant = (i + items.length) % items.length;
    items.forEach((li, j) => li.classList.toggle("actif", j === courant));
  }

  q.addEventListener("focus", charger, { once: true });
  q.addEventListener("input", async () => {
    const texte = q.value.trim();
    if (!texte) { afficher([]); return; }
    afficher((await charger()).search(texte));
  });
  q.addEventListener("keydown", (e) => {
    const items = liste.querySelectorAll("li a");
    if (e.key === "ArrowDown") { e.preventDefault(); surligner(courant + 1); }
    else if (e.key === "ArrowUp") { e.preventDefault(); surligner(courant - 1); }
    else if (e.key === "Enter" && items.length) { window.location = items[Math.max(courant, 0)].href; }
    else if (e.key === "Escape") { q.value = ""; afficher([]); q.blur(); }
  });
  document.addEventListener("click", (e) => { if (!e.target.closest(".recherche")) liste.hidden = true; });
  document.addEventListener("keydown", (e) => {
    if (e.key === "/" && !/^(INPUT|TEXTAREA)$/.test(document.activeElement.tagName)) {
      e.preventDefault();
      q.focus();
    }
  });
})();
