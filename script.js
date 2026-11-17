/* ================= CONFIGURAÇÕES ================= */
// 👇 SEU WHATSAPP: 55 + DDD + número, só dígitos (ex.: 5531912345678)
const WHATSAPP = "5500000000000";
// 👇 SEU INSTAGRAM
const INSTAGRAM = "https://instagram.com/SEU_USUARIO";
// 👇 PASTA DAS FOTOS (dentro de atelier-cintia-ribas) — todas .png
const PASTA = "imagens/";

const wa = t => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(t)}`;
const $ = s => document.querySelector(s);
const src = f => PASTA + encodeURI(f) + ".png";

/* ================= PRODUTOS =================
   P(categoria, nome, preço, [fotos], destaque, material, tipo)
   - fotos: nomes dos arquivos na pasta "imagens", sem o .png (a 1ª aparece primeiro)
   - destaque true = aparece em "Mais pedidos" no Início (só os 6 primeiros)
   ⚠️ PREÇOS E NOMES SÃO EXEMPLOS: troque pelos seus! */
const P = (cat, nome, preco, fotos, destaque = false, mat = "PLA", tipo = "3d") =>
  ({ tipo, cat, nome, mat, preco, fotos, destaque });
const seq = (base, n) => Array.from({ length: n }, (_, i) => `${base}-${i + 1}`);

const produtos = [
  // ---- Colecionáveis ----
  P("Action Figures/Colecionáveis", "Tiamat", "R$ 129,90", ["Tiamat-frente", "Tiamat-lado", "Tiamat-costas"], true),
  P("Action Figures/Colecionáveis", "Tiamat Versão 2", "R$ 119,90", ["tiama2-preto", "tiamat2-lado"]),
  P("Action Figures/Colecionáveis", "Tarrasque", "R$ 99,90", ["terrasque-pintado", "terrasque-lado"]),
  P("Action Figures/Colecionáveis", "Igris (Solo Leveling)", "R$ 89,90", ["Igris-solo-leveling-ja-pintado", "Igris-solo-leveling", "Igris-solo-leveling-corpo-todo"]),
  P("Action Figures/Colecionáveis", "Avatar da Brecha", "R$ 79,90", ["avatar-da-brecha", "avatar-da-brecha-branco"]),
  P("Action Figures/Colecionáveis", "Avatar 3D", "R$ 79,90", ["avatar-3d-visao"]),

  // ---- Miniaturas RPG ----
  P("Miniaturas RPG", "Beholder", "R$ 69,90", ["beholder-preto", "beholder-branco"], true),
  P("Miniaturas RPG", "Paladino em Miniatura", "R$ 29,90", ["paladino-em-miniatura", "paladino-em-miniatura-foto-real"]),
  P("Miniaturas RPG", "Pacote 1: 12 Personagens", "R$ 249,90", seq("pacote-1-personagem", 12), true),
  P("Miniaturas RPG", "Pacote 2: 5 Personagens", "R$ 129,90", ["pacote-2", "pacote-2-costas", ...seq("pacote-2-personagem", 5)]),
  P("Miniaturas RPG", "Pacote de Miniaturas", "R$ 99,90", ["pacote-de-miniaturas-1"]),
  P("Miniaturas RPG", "Guerreiro Espada e Escudo", "R$ 34,90", ["guerreiro-espadaeescudo-erguido-frente", "guerreiro-espadaeescudo-erguido-costas", "guerreiro-espadaeescudo-agaichado-frente", "guerreiro-espadaeescudo-agaichado-costas"]),
  P("Miniaturas RPG", "Guerreiro de Espada", "R$ 29,90", ["guerreiro-espada-erguido-frente", "guerreiro-espada-erguido-costas"]),
  P("Miniaturas RPG", "Aranha na Caverna", "R$ 39,90", ["aranha-na-caverna-frente", "aranha-na-caverna-lado"]),
  P("Miniaturas RPG", "Cabana RPG", "R$ 44,90", ["cabana-rpg-frente", "cabana-rpg-costas"]),

  // ---- Decoração ----
  P("Decoração", "Estátua de Jesus Geométrica", "R$ 79,90", ["estatua-jesus-geometrica-frente", "estatua-jesus-geometrica-lado", "estatua-jesus-geometrica-costas"], true),
  P("Decoração", "Cruz de Parede", "R$ 34,90", ["cruz-parede", "cruz parede2"]),
  P("Decoração", "Dragão Tigela", "R$ 59,90", ["dragao-tigeladedados"]),

  // ---- Suportes/Organizadores ----
  P("Suportes/Organizadores", "Suporte de Celular Dragão", "R$ 54,90", ["suporte-de-celular-dragao-frente", "suporte-de-celular-dragao-lado", "suporte-de-celular-dragao-costas"], true),

  // ---- Utilidades ----
  P("Utilidades", "Torre de Dados Dragão RPG", "R$ 89,90", ["torre-dragao-frente", "torre-dragao-lado", "torre-dragao-costas"], true),
  P("Utilidades", "Torre de Dados 3D", "R$ 79,90", ["torre-dados-1", "torre-dados-2"]),
  P("Utilidades", "Chaveiro com Nome", "R$ 12,90", ["chaveiro"]),   // sem foto ainda

  // ---- Sob medida ----
  P("Projetos Sob Medida", "Peça Sob Medida", "Sob consulta", ["sob-medida"], false, "PLA ou PETG"),   // sem foto ainda

  // ---- Artesanato (coloque as fotos na pasta "imagens", em .png) ----
  P("Terços Artesanais", "Terço de Cristal", "R$ 59,90", ["terco-cristal"], false, "Contas de cristal", "art"),
  P("Terços Artesanais", "Terço de Madeira Rústico", "R$ 39,90", ["terco-madeira"], false, "Madeira", "art"),
  P("Canecas Personalizadas", "Caneca com Nome", "R$ 34,90", ["caneca-nome"], false, "Porcelana", "art"),
  P("Canecas Personalizadas", "Caneca Mágica", "R$ 49,90", ["caneca-magica"], false, "Muda de cor com calor", "art"),
  P("Camisas Personalizadas", "Camisa com Estampa Exclusiva", "R$ 59,90", ["camisa-exclusiva"], false, "Algodão", "art"),
  P("Camisas Personalizadas", "Camisas para Grupo ou Família", "A partir de R$ 54,90", ["camisa-grupo"], false, "Algodão", "art")
];

/* ================= CARD COM CARROSSEL ================= */
// Se uma foto não existir, ela some; se nenhuma existir, aparece o espaço listrado
function semFoto(img) {
  const ph = img.closest(".photo");
  img.remove();
  if (!ph.querySelector(".slider img")) ph.innerHTML = "";
}

const card = p => {
  const n = p.fotos.length;
  return `
<article class="card">
  <div class="photo">
    <div class="slider">
      ${p.fotos.map(f => `<img src="${src(f)}" alt="${p.nome}" loading="lazy" onerror="semFoto(this)">`).join("")}
    </div>
    ${n > 1 ? `
    <button type="button" class="seta esq" aria-label="Foto anterior">‹</button>
    <button type="button" class="seta dir" aria-label="Próxima foto">›</button>
    <div class="dots">${p.fotos.map((_, i) => `<i class="${i ? "" : "on"}"></i>`).join("")}</div>` : ""}
  </div>
  <div class="body">
    <span class="tag">${p.cat} · ${p.mat}</span>
    <h3>${p.nome}</h3>
    <span class="price">${p.preco}</span>
    <a class="btn" target="_blank" rel="noopener" href="${wa(`Olá! Quero encomendar: ${p.nome} (${p.preco}).`)}">Encomendar no WhatsApp</a>
  </div>
</article>`;
};

// Setas: passam a foto (na última, volta para a primeira)
document.addEventListener("click", e => {
  const b = e.target.closest(".seta"); if (!b) return;
  const s = b.parentElement.querySelector(".slider");
  const dir = b.classList.contains("dir") ? 1 : -1;
  const fim = s.scrollLeft + s.clientWidth >= s.scrollWidth - 2;
  if (dir === 1 && fim) s.scrollTo({ left: 0, behavior: "smooth" });
  else if (dir === -1 && s.scrollLeft < 2) s.scrollTo({ left: s.scrollWidth, behavior: "smooth" });
  else s.scrollBy({ left: dir * s.clientWidth, behavior: "smooth" });
});

// Bolinhas acompanham a foto atual (funciona com setas e com deslize do dedo)
document.addEventListener("scroll", e => {
  const s = e.target;
  if (!s.classList || !s.classList.contains("slider")) return;
  const i = Math.round(s.scrollLeft / s.clientWidth);
  s.parentElement.querySelectorAll(".dots i").forEach((d, k) => d.classList.toggle("on", k === i));
}, true);

/* ================= RENDERIZAÇÃO ================= */
$("#destaques").innerHTML = produtos.filter(p => p.destaque).slice(0, 6).map(card).join("");

const p3d = produtos.filter(p => p.tipo === "3d");
const cats = ["Todos", ...new Set(p3d.map(p => p.cat))];
$("#filtros").innerHTML = cats.map((c, i) => `<button class="chip${i ? "" : " on"}" data-c="${c}">${c}</button>`).join("");
const desenhar = c => $("#grid3d").innerHTML = p3d.filter(p => c === "Todos" || p.cat === c).map(card).join("");
$("#filtros").onclick = e => {
  const b = e.target.closest(".chip"); if (!b) return;
  document.querySelectorAll("#filtros .chip").forEach(x => x.classList.toggle("on", x === b));
  desenhar(b.dataset.c);
};
desenhar("Todos");

const subs = [
  ["Terços Artesanais", "Montados conta por conta, com acabamento delicado."],
  ["Canecas Personalizadas", "Com nome, foto ou arte exclusiva para presentear."],
  ["Camisas Personalizadas", "Estampas únicas para você, seu grupo ou sua família."]
];
$("#artesanato").innerHTML = subs.map(([t, d]) =>
  `<div class="sub"><h3>${t}</h3><p>${d}</p><div class="grid">${produtos.filter(p => p.cat === t).map(card).join("")}</div></div>`).join("");

/* ================= NAVEGAÇÃO ENTRE ABAS ================= */
const views = [...document.querySelectorAll(".view")];
const links = [...document.querySelectorAll("nav a")];
function rota() {
  const v = views.find(x => x.id === location.hash.slice(1)) || views[0];
  views.forEach(x => x.classList.toggle("active", x === v));
  links.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + v.id));
  $("#menu").classList.remove("open");
  window.scrollTo(0, 0);
}
addEventListener("hashchange", rota);
rota();
$("#burger").onclick = () => $("#menu").classList.toggle("open");

/* ================= CONTATO ================= */
document.querySelectorAll(".js-zap").forEach(a => a.href = wa("Olá! Vim pelo site do Atelier Cintia Ribas."));
$("#insta").href = INSTAGRAM;
$("#ano").textContent = new Date().getFullYear();

$("#orcamento").onsubmit = e => {
  e.preventDefault();
  const f = new FormData(e.target);
  window.open(wa(`Olá! Gostaria de um orçamento.\n*Nome:* ${f.get("nome")}\n*Tipo:* ${f.get("tipo")}\n*Ideia:* ${f.get("ideia")}`), "_blank");
};