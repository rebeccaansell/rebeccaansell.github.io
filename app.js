// Renders the site from data.js. Plain JS, no build step.

const $ = (sel) => document.querySelector(sel);
const el = (tag, attrs = {}, html = "") => {
  const n = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) n.setAttribute(k, v);
  if (html) n.innerHTML = html;
  return n;
};
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// ── Dice ──
const PIPS = { 1: [5], 2: [1, 9], 3: [1, 5, 9], 4: [1, 3, 7, 9], 5: [1, 3, 5, 7, 9], 6: [1, 3, 4, 6, 7, 9] };
function drawDie(node, n) {
  node.innerHTML = "";
  for (let i = 1; i <= 9; i++) node.appendChild(el("i", PIPS[n].includes(i) ? { class: "on" } : {}));
}
function rollDie(node, done) {
  const final = 1 + Math.floor(Math.random() * 6);
  if (prefersReducedMotion) { drawDie(node, final); return done(final); }
  let t = 0;
  node.classList.add("rolling");
  const iv = setInterval(() => {
    drawDie(node, 1 + Math.floor(Math.random() * 6));
    if (++t > 8) {
      clearInterval(iv);
      node.classList.remove("rolling");
      drawDie(node, final);
      done(final);
    }
  }, 60);
}

// ── Player card ──
$("#p-name").textContent = SITE.name;
$("#p-role").textContent = SITE.role;
$("#p-org").textContent = SITE.org;
$("#projects").innerHTML = SITE.projects.map((p) => `<li>${p}</li>`).join("");
$("#year").textContent = new Date().getFullYear();

// ── Guess Who ──
// Each character lacks at least one of Rebecca's traits ("miss"). Only "me" is named, once revealed.
const CHARACTERS = [
  { id: 1,    skin: "#f1c7a3", hair: "#3b2a20", style: "short",  shirt: "#2e8b57", miss: ["phd"] },
  { id: 2,    skin: "#8d5a3b", hair: "#1d1a16", style: "curly",  shirt: "#f4b400", miss: ["mentor"], glasses: true },
  { id: 3,    skin: "#c68b5e", hair: "#1d1a16", style: "long",   shirt: "#d7263d", miss: ["waterpolo"] },
  { id: 4,    skin: "#f6d3b5", hair: "#b5542c", style: "short",  shirt: "#1b4b8f", miss: ["orange"], hat: true },
  { id: 5,    skin: "#6b4429", hair: "#1d1a16", style: "bun",    shirt: "#7b3fa0", miss: ["southafrica"] },
  { id: 6,    skin: "#e0ac85", hair: "#7a5230", style: "bald",   shirt: "#e8751a", miss: ["hiking"], glasses: true },
  { id: 7,    skin: "#f6d3b5", hair: "#d8d1c4", style: "long",   shirt: "#1b4b8f", miss: ["mentor", "hoya"], glasses: true },
  { id: 8,    skin: "#a8724c", hair: "#2a1f18", style: "short",  shirt: "#d7263d", miss: ["hoya"] },
  { id: 9,    skin: "#e9bb92", hair: "#1d1a16", style: "curly",  shirt: "#2e8b57", miss: ["southafrica", "waterpolo"], hat: true },
  { id: 10,   skin: "#f1c7a3", hair: "#b5542c", style: "long",   shirt: "#f4b400", miss: ["orange"] },
  { id: 11,   skin: "#8d5a3b", hair: "#3b2a20", style: "bald",   shirt: "#7b3fa0", miss: ["hiking", "hoya"] },
  { id: "me", skin: "#f6d3b5", hair: "#e6c46a", style: "bun",   shirt: "#e9edf2", miss: [], stripes: true },
];

function avatar(c) {
  const hairBack = {
    long: `<path d="M24 46 Q24 18 50 18 Q76 18 76 46 L80 92 L20 92 Z" fill="${c.hair}"/>`,
  }[c.style] || "";
  const hairTop = {
    short: `<path d="M28 44 Q28 20 50 20 Q72 20 72 44 Q66 32 50 31 Q34 32 28 44 Z" fill="${c.hair}"/>`,
    long:  `<path d="M28 46 Q28 20 50 20 Q72 20 72 46 Q64 30 50 30 Q36 30 28 46 Z" fill="${c.hair}"/>`,
    bun:   `<circle cx="50" cy="16" r="9" fill="${c.hair}"/><path d="M28 44 Q28 20 50 20 Q72 20 72 44 Q64 30 50 30 Q36 30 28 44 Z" fill="${c.hair}"/>`,
    curly: [30, 38, 46, 54, 62, 70].map((x, i) => `<circle cx="${x}" cy="${i % 2 ? 24 : 28}" r="8" fill="${c.hair}"/>`).join(""),
    bald:  `<path d="M29 40 Q30 34 34 32 L34 42 Z M71 40 Q70 34 66 32 L66 42 Z" fill="${c.hair}"/>`,
  }[c.style];
  const glasses = c.glasses
    ? `<g fill="none" stroke="#1d1a16" stroke-width="2"><circle cx="41" cy="47" r="6"/><circle cx="59" cy="47" r="6"/><path d="M47 47 h6"/></g>` : "";
  const hat = c.hat
    ? `<path d="M26 30 Q50 6 74 30 Z" fill="#d7263d" stroke="#1d1a16" stroke-width="2"/><rect x="20" y="28" width="60" height="6" rx="3" fill="#d7263d" stroke="#1d1a16" stroke-width="2"/>` : "";
  const collar = c.stripes
    ? `<g stroke="#9fb3c8" stroke-width="1.5">${[26, 34, 42, 58, 66, 74].map((x) => `<path d="M${x} 84 V110"/>`).join("")}</g><path d="M40 80 L50 92 L60 80" fill="#fff" stroke="#1d1a16" stroke-width="2"/>` : "";
  return `<svg viewBox="0 0 100 110" aria-hidden="true">
    ${hairBack}
    <path d="M14 110 Q16 80 50 78 Q84 80 86 110 Z" fill="${c.shirt}" stroke="#1d1a16" stroke-width="2"/>
    ${collar}
    <rect x="44" y="64" width="12" height="16" fill="${c.skin}"/>
    <circle cx="50" cy="46" r="22" fill="${c.skin}" stroke="#1d1a16" stroke-width="2"/>
    ${hairTop}
    <circle cx="41" cy="47" r="2.4" fill="#1d1a16"/><circle cx="59" cy="47" r="2.4" fill="#1d1a16"/>
    <path d="M42 56 Q50 63 58 56" fill="none" stroke="#1d1a16" stroke-width="2.2" stroke-linecap="round"/>
    ${glasses}${hat}
  </svg>`;
}

const gwBoard = $("#gw-board");
const gwQuestions = $("#gw-questions");
const asked = new Set();

CHARACTERS.forEach((c) => {
  const card = el("div", { class: "gw-card", "data-id": c.id });
  card.innerHTML = `<div class="gw-flip"><div class="gw-front">${avatar(c)}<span class="gw-name"></span></div><div class="gw-back"></div></div>`;
  gwBoard.appendChild(card);
});

QUESTIONS.forEach((q) => {
  const b = el("button", { class: "q", type: "button", "data-key": q.key }, `<span>${q.text}</span><b class="ans"></b>`);
  b.addEventListener("click", () => ask(q.key));
  gwQuestions.appendChild(b);
});

function remaining() {
  return CHARACTERS.filter((c) => !c.miss.some((k) => asked.has(k)));
}

function renderGW() {
  CHARACTERS.forEach((c) => {
    const down = c.miss.some((k) => asked.has(k));
    gwBoard.querySelector(`[data-id="${c.id}"]`).classList.toggle("down", down);
  });
  gwQuestions.querySelectorAll(".q").forEach((b) => {
    const done = asked.has(b.dataset.key);
    b.disabled = done;
    b.querySelector(".ans").textContent = done ? "YES" : "";
  });
  const left = remaining().length;
  $("#gw-count").textContent = left === 1 ? "Only one left standing…" : `${left} people still standing`;
  if (left === 1) reveal();
}

function ask(key) {
  asked.add(key);
  renderGW();
}

function reveal() {
  $("#mystery").classList.add("revealed");
  $("#bio").hidden = false;
  $("#gw-skip").hidden = true;
  $("#gw-reset").hidden = false;
  const me = gwBoard.querySelector('[data-id="me"]');
  me.classList.add("winner");
  me.querySelector(".gw-name").textContent = "Rebecca";
}

$("#gw-skip").addEventListener("click", () => {
  QUESTIONS.forEach((q) => asked.add(q.key));
  renderGW();
  $("#bio").scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth", block: "start" });
});
$("#gw-reset").addEventListener("click", () => {
  asked.clear();
  $("#mystery").classList.remove("revealed");
  $("#bio").hidden = true;
  $("#gw-skip").hidden = false;
  $("#gw-reset").hidden = true;
  const me = gwBoard.querySelector('[data-id="me"]');
  me.classList.remove("winner");
  me.querySelector(".gw-name").textContent = "";
  renderGW();
});

$("#bio-text").innerHTML = SITE.bio.map((p) => `<p>${p}</p>`).join("");
$("#interests").innerHTML = SITE.interests.map((i) => `<li>${i}</li>`).join("");
renderGW();

// ── Career board ──
// Small animated mountain used by the Hiking space.
const MOUNTAIN = `<svg class="mtn" viewBox="0 0 64 48" aria-hidden="true">
  <circle class="mtn-sun" cx="48" cy="14" r="6" fill="#f4b400" stroke="#1d1a16" stroke-width="1.5"/>
  <path d="M2 46 L22 14 L34 32 L42 22 L62 46 Z" fill="#2e8b57" stroke="#1d1a16" stroke-width="2" stroke-linejoin="round"/>
  <path d="M22 14 L16.5 23 L20 21 L23 24 L26 20.5 Z" fill="#fff" stroke="#1d1a16" stroke-width="1.2" stroke-linejoin="round"/>
  <g class="mtn-flag"><path d="M22 14 V5" stroke="#1d1a16" stroke-width="1.5"/><path d="M22 5 L29 7.5 L22 10 Z" fill="#f26b1d" stroke="#1d1a16" stroke-width="1"/></g>
</svg>`;
const KIND_LABEL = { edu: "Education", exp: "Experience", honor: "Honors", paper: "Paper Line", chance: "Chance", chest: "Community Chest", boardwalk: "Top property", future: "Up next", corner: "" };
const monoBoard = $("#mono-board");
const deed = $("#deed");
let pos = 0;

// Board is a square ring: SIDE steps per edge, GO in the bottom-right corner.
const SIDE = BOARD.length / 4;
const N = SIDE + 1;
monoBoard.style.gridTemplateColumns = monoBoard.style.gridTemplateRows = `1.35fr repeat(${N - 2}, 1fr) 1.35fr`;
$(".mono-center").style.gridArea = `2 / 2 / ${N} / ${N}`;

function gridPos(i) {
  if (i <= SIDE) return [N, N - i];
  if (i <= 2 * SIDE) return [N - (i - SIDE), 1];
  if (i <= 3 * SIDE) return [1, 1 + (i - 2 * SIDE)];
  return [1 + (i - 3 * SIDE), N];
}

BOARD.forEach((s, i) => {
  const [r, c] = gridPos(i);
  const side = i % SIDE === 0 ? "" : ["side-b", "side-l", "side-t", "side-r"][Math.floor(i / SIDE)];
  const sq = el("button", { class: `sq ${s.kind} ${side}`, type: "button", "data-i": i, "aria-label": `${s.title}${s.when ? ", " + s.when : ""}` });
  sq.style.gridRow = r;
  sq.style.gridColumn = c;
  sq.innerHTML = `<i class="band"></i><span class="sq-icon">${iconHTML(s.icon)}</span><span class="sq-label">${s.short}</span>`;
  sq.addEventListener("click", () => moveTo(i));
  monoBoard.appendChild(sq);
});

const token = el("span", { class: "token", "aria-hidden": "true" });

function iconHTML(icon) {
  return icon === "mountain" ? MOUNTAIN : icon;
}

function showDeed(i) {
  const s = BOARD[i];
  const label = KIND_LABEL[s.kind];
  deed.className = `deed ${s.kind}`;
  deed.innerHTML = `
    <header><small>${label || "Space " + (i + 1)}</small><h3>${s.title}</h3></header>
    <div class="deed-body">
      ${s.icon === "mountain" ? `<div class="deed-art">${MOUNTAIN}</div>` : ""}
      ${s.sub ? `<p class="deed-sub">${s.sub}</p>` : ""}
      ${s.when || s.where ? `<p class="deed-meta">${[s.when, s.where].filter(Boolean).join(" · ")}</p>` : ""}
      ${s.body.length ? `<ul>${s.body.map((b) => `<li>${b}</li>`).join("")}</ul>` : ""}
      ${s.link ? `<a class="deed-link" href="${s.link.url}" target="_blank" rel="noopener">${s.link.label} ↗</a>` : ""}
    </div>
    <footer>Space ${i + 1} of ${BOARD.length}</footer>`;
}

function moveTo(i) {
  pos = i;
  monoBoard.querySelectorAll(".sq").forEach((n) => n.classList.toggle("here", +n.dataset.i === i));
  monoBoard.querySelector(`[data-i="${i}"]`).appendChild(token);
  showDeed(i);
}

function walk(steps) {
  if (prefersReducedMotion) return moveTo((pos + steps) % BOARD.length);
  let n = 0;
  const iv = setInterval(() => {
    moveTo((pos + 1) % BOARD.length);
    if (++n >= steps) clearInterval(iv);
  }, 160);
}

const monoDie = $("#mono-die");
drawDie(monoDie, 1);
$("#mono-roll").addEventListener("click", () => rollDie(monoDie, walk));
$("#mono-next").addEventListener("click", () => moveTo((pos + 1) % BOARD.length));
moveTo(0);

// ── Publications ──
const TYPE_LABEL = { journal: "Journal", conference: "Conference", workshop: "Workshop", thesis: "Thesis", article: "Article" };
const LINK_LABEL = { pdf: "PDF", arxiv: "arXiv", article: "Read article", code: "Code", slides: "Slides", poster: "Poster", scholar: "Google Scholar", doi: "DOI" };
const pubList = $("#pub-list");
const pubFilters = $("#pub-filters");
let pubFilter = "all";

const types = ["all", ...Object.keys(TYPE_LABEL).filter((t) => PUBLICATIONS.some((p) => p.type === t))];
types.forEach((t) => {
  const b = el("button", { class: "chip", type: "button", "data-t": t }, t === "all" ? "All cards" : TYPE_LABEL[t]);
  b.addEventListener("click", () => { pubFilter = t; renderPubs(); });
  pubFilters.appendChild(b);
});

function boldMe(authors) {
  return authors.replace(/Ansell, R\./g, "<strong>Ansell, R.</strong>");
}

function renderPubs() {
  pubFilters.querySelectorAll(".chip").forEach((b) => b.setAttribute("aria-pressed", b.dataset.t === pubFilter));
  pubList.innerHTML = "";
  PUBLICATIONS.filter((p) => pubFilter === "all" || p.type === pubFilter).forEach((p) => {
    const links = Object.entries(p.links || {}).filter(([, url]) => url)
      .map(([k, url]) => `<a href="${url}" target="_blank" rel="noopener">${LINK_LABEL[k] || k} ↗</a>`).join("");
    const who = p.authors ? boldMe(p.authors) : (p.role || "");
    pubList.appendChild(el("article", { class: `card ${p.type}` }, `
      <div class="card-top"><span class="card-type">${TYPE_LABEL[p.type]}</span><span class="card-year">${p.year}</span></div>
      <h3>${p.title}</h3>
      <p class="card-authors">${who}</p>
      <p class="card-venue">${p.venue}${p.where ? `<span class="card-where">📍 ${p.where}</span>` : ""}${p.note ? ` <span class="badge">${p.note}</span>` : ""}</p>
      ${links ? `<div class="card-links">${links}</div>` : ""}`));
  });
}
renderPubs();

// ── Talks ──
$("#talk-list").innerHTML = TALKS.map((t) => `
  <tr${t.upcoming ? ' class="upcoming"' : ""}>
    <td data-label="Date">${t.date}${t.upcoming ? ' <span class="badge">Upcoming</span>' : ""}</td>
    <td data-label="Event">${t.event}${t.where ? `<small>${t.where}</small>` : ""}</td>
    <td data-label="Title"><span class="hand">${t.link ? `<a href="${t.link}" target="_blank" rel="noopener">${t.title} ↗</a>` : t.title}</span>${t.files ? `<span class="talk-files">${t.files.map(([label, url]) => `<a href="${url}" target="_blank" rel="noopener">${label} ↗</a>`).join("")}</span>` : ""}</td>
    <td data-label="Play">${t.format ? `<span class="play">${t.format}</span>` : "—"}</td>
  </tr>`).join("");

// ── Contact ──
const CONTACT = [
  ["scholar", "Google Scholar", SITE.links.scholar],
  ["orcid", "ORCID", SITE.links.orcid],
  ["linkedin", "LinkedIn", SITE.links.linkedin],
  ["github", "GitHub", SITE.links.github],
  ["cv", "Download CV", SITE.links.cv],
];
const emailHTML = SITE.links.email ? `<a class="email-link" href="mailto:${SITE.links.email}">✉ ${SITE.links.email}</a>` : "";
const buttonsHTML = CONTACT.filter(([, , url]) => url)
  .map(([k, label, url]) => k === "cv"
    ? `<a class="btn btn-piece cv" href="${url}" download>${label} ↓</a>`
    : `<a class="btn btn-piece ${k}" href="${url}" target="_blank" rel="noopener">${label}</a>`).join("");
$("#contact-links").innerHTML = `${emailHTML}<div class="contact-buttons">${buttonsHTML}</div>`;
$("#player-links").innerHTML = `${emailHTML}<div class="contact-buttons">${buttonsHTML}</div>`;

// ── Say hi: drag the scrambled tiles into the rack ──
const WORD = [["S", 1], ["A", 1], ["Y", 4], ["H", 4], ["I", 1]];
const rack = $("#rack");
const tray = $("#tray");
const rackStatus = $("#rack-status");
let selected = null;

WORD.forEach(([letter], i) => {
  if (i === 3) rack.appendChild(el("span", { class: "rack-gap", "aria-hidden": "true" }));
  const slot = el("button", { class: "slot", type: "button", "data-letter": letter, "aria-label": `Slot ${i + 1}` });
  slot.addEventListener("click", () => { if (selected) place(selected, slot); });
  rack.appendChild(slot);
});

function scramble(arr) {
  const a = arr.slice();
  do {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
  } while (a.every((x, i) => x === arr[i]));
  return a;
}

scramble(WORD).forEach(([letter, pts]) => {
  const tile = el("button", { class: "tile big", type: "button", "data-letter": letter, "aria-label": `Tile ${letter}` }, `${letter}<sub>${pts}</sub>`);
  makeDraggable(tile);
  tray.appendChild(tile);
});

function select(tile) {
  if (selected) selected.classList.remove("selected");
  selected = selected === tile ? null : tile;
  if (selected) selected.classList.add("selected");
}

function place(tile, slot) {
  const current = slot.querySelector(".tile");
  if (current && current !== tile) toTray(current);
  slot.appendChild(tile);
  tile.classList.remove("selected");
  selected = null;
  tile.classList.toggle("ok", tile.dataset.letter === slot.dataset.letter);
  tile.classList.toggle("bad", tile.dataset.letter !== slot.dataset.letter);
  checkWord();
}

function toTray(tile) {
  tile.classList.remove("ok", "bad", "selected");
  tray.appendChild(tile);
  checkWord();
}

function checkWord() {
  const slots = [...rack.querySelectorAll(".slot")];
  const done = slots.every((s) => s.querySelector(".tile.ok"));
  rack.classList.toggle("solved", done);
  rackStatus.textContent = done ? "Hi! 👋" : "Drag the tiles into the rack to say hi.";
}

function slotAt(x, y) {
  return [...rack.querySelectorAll(".slot")].find((s) => {
    const r = s.getBoundingClientRect();
    return x >= r.left - 8 && x <= r.right + 8 && y >= r.top - 8 && y <= r.bottom + 8;
  });
}

function makeDraggable(tile) {
  let start = null, moved = false;
  tile.addEventListener("pointerdown", (e) => {
    start = { x: e.clientX, y: e.clientY };
    moved = false;
    tile.setPointerCapture(e.pointerId);
  });
  tile.addEventListener("pointermove", (e) => {
    if (!start) return;
    const dx = e.clientX - start.x, dy = e.clientY - start.y;
    if (!moved && Math.hypot(dx, dy) < 5) return;
    moved = true;
    tile.classList.add("dragging");
    tile.style.transform = `translate(${dx}px, ${dy}px) rotate(-4deg)`;
  });
  const end = (e) => {
    if (!start) return;
    start = null;
    tile.classList.remove("dragging");
    tile.style.transform = "";
    if (!moved) return;
    const slot = slotAt(e.clientX, e.clientY);
    if (slot) place(tile, slot);
    else toTray(tile);
  };
  tile.addEventListener("pointerup", end);
  tile.addEventListener("pointercancel", end);
  // A click without dragging selects the tile; then click a slot to place it.
  tile.addEventListener("click", (e) => {
    if (moved) { moved = false; return; }
    e.stopPropagation();
    if (tile.parentElement.classList.contains("slot")) toTray(tile);
    else select(tile);
  });
}
checkWord();
