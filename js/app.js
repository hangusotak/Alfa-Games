/* Logika halaman. Tidak perlu diubah saat menambah game — edit js/games.js saja. */
const $ = id => document.getElementById(id);
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

// Warna otomatis dari judul, supaya game tanpa pengaturan tetap berwarna beda-beda
function hue(s) { let h = 0; for (const ch of s) h = (h * 31 + ch.charCodeAt(0)) % 360; return h; }
function style(x) {
  const cs = CATEGORY_STYLE[x.c] || {};
  const h = hue(x.t);
  return {
    e: x.e || cs.e || '🎮',
    g: x.g || [`hsl(${h} 60% 45%)`, `hsl(${(h + 40) % 360} 60% 22%)`],
  };
}
const css = g => `--c1:${g[0]};--c2:${g[1]}`;
const key = x => x.u || x.t;   // penanda favorit: link game (judul kembar tidak bentrok)
const isExt = u => /^https?:\/\//i.test(u);
const linkAttrs = u => u ? `href="${esc(u)}"${isExt(u) ? ' target="_blank" rel="noopener noreferrer"' : ''}` : 'href="#"';
const thumb = (x, e) => x.img ? `<img src="${esc(x.img)}" alt="" loading="lazy">` : `<div class="big">${e}</div>`;

let cat = 'Semua', query = '', onlyFav = false, favs = [];
try { favs = JSON.parse(localStorage.getItem('zg-fav') || '[]'); } catch (e) {}
const saveFavs = () => { try { localStorage.setItem('zg-fav', JSON.stringify(favs)); } catch (e) {} };

// Kategori dibuat otomatis dari daftar game
function renderCats() {
  const names = ['Semua', ...new Set(GAMES.map(x => x.c).filter(Boolean))];
  $('cats').innerHTML = names.map(n => {
    const cs = n === 'Semua' ? { e: '🎮', g: ['#6c3df5', '#3b1b9c'] } : style({ t: n, c: n });
    return `<button class="cat" style="${css(cs.g)}" data-c="${esc(n)}" aria-pressed="${n === cat}"><span>${cs.e}</span>${esc(n)}</button>`;
  }).join('');
}

function heroCard(x) {
  const s = style(x), bg = x.banner || x.img;
  const pic = bg ? `<img src="${esc(bg)}" alt="" loading="lazy">` : `<div class="big">${s.e}</div>`;
  const ic = x.icon ? `<img src="${esc(x.icon)}" alt="">` : s.e;
  return `<a class="hero" style="${css(s.g)}" ${linkAttrs(x.u)} aria-label="Main ${esc(x.t)}">${pic}
    <div class="meta"><div class="ico" style="${css(s.g)}">${ic}</div>
    <div><b>${esc(x.t)}</b><small>${esc(x.c || '')}</small></div><span class="play">Main</span></div></a>`;
}

// Semua game bertanda top:true tampil di banner; kalau tidak ada, pakai game pertama yang punya link
function renderHero() {
  let tops = GAMES.filter(g => g.top && g.u);
  if (!tops.length) tops = GAMES.filter(g => g.u).slice(0, 1);
  if (!tops.length) { $('topSec').hidden = true; return; }
  $('heroes').className = 'heroes' + (tops.length === 1 ? ' one' : '');
  $('heroes').innerHTML = tops.map(heroCard).join('');
}

function renderGrid() {
  const q = query.trim().toLowerCase();
  const list = GAMES.filter(x =>
    (cat === 'Semua' || x.c === cat) &&
    (!q || x.t.toLowerCase().includes(q)) &&
    (!onlyFav || favs.includes(key(x))));
  $('grid').innerHTML = list.map(x => {
    const s = style(x);
    return `<a class="card${x.u ? '' : ' soon'}" style="${css(s.g)}" ${linkAttrs(x.u)} aria-label="Main ${esc(x.t)}">
      ${thumb(x, s.e)}<span class="tag">${x.u ? esc(x.c || '') : 'Segera'}</span>
      <button class="fav" data-f="${esc(key(x))}" aria-pressed="${favs.includes(key(x))}" aria-label="Simpan ${esc(x.t)}">♥</button>
      <div class="name">${esc(x.t)}</div></a>`;
  }).join('');
  $('empty').hidden = list.length > 0;
  $('empty').textContent = onlyFav ? 'Belum ada game favorit. Ketuk ♥ pada game untuk menyimpannya.' : 'Game tidak ditemukan. Coba kata lain.';
  $('gridTitle').textContent = onlyFav ? 'Game saya' : (cat === 'Semua' ? 'Semua game' : 'Game ' + cat);
  $('topSec').hidden = !!(q || onlyFav || cat !== 'Semua');
}

const setNav = id => ['nHome', 'nSearch', 'nFav'].forEach(n => $(n).setAttribute('aria-current', n === id));
const toTop = () => scrollTo({ top: 0, behavior: 'smooth' });

$('cats').addEventListener('click', e => {
  const b = e.target.closest('[data-c]'); if (!b) return;
  cat = b.dataset.c; onlyFav = false; setNav('nHome'); renderCats(); renderGrid();
});
$('grid').addEventListener('click', e => {
  const b = e.target.closest('[data-f]'); if (!b) return;
  e.preventDefault(); e.stopPropagation();
  const t = b.dataset.f;
  favs = favs.includes(t) ? favs.filter(v => v !== t) : favs.concat(t);
  saveFavs(); renderGrid();
});
$('q').addEventListener('input', e => { query = e.target.value; renderGrid(); });
$('nHome').addEventListener('click', () => { cat = 'Semua'; onlyFav = false; query = ''; $('q').value = ''; setNav('nHome'); renderCats(); renderGrid(); toTop(); });
$('nSearch').addEventListener('click', () => { setNav('nSearch'); toTop(); $('q').focus(); });
$('nFav').addEventListener('click', () => { onlyFav = true; setNav('nFav'); renderGrid(); toTop(); });

renderCats(); renderHero(); renderGrid();
