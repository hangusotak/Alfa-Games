/* =====================================================================
   DAFTAR GAME — satu-satunya file yang perlu kamu edit untuk menambah game.

   Cara tambah game: salin satu baris di bawah, lalu ganti isinya.
   Wajib   : t (judul), u (link game), c (kategori)
   Opsional: img (gambar thumbnail), e (emoji), g (2 warna latar), top:true (jadi banner utama)

   - u boleh link dalam situs ini ('games/air-force/index.html') atau link situs lain ('https://...').
     Link situs lain otomatis dibuka di tab baru.
   - u dikosongkan  -> kartu tampil redup berlabel "Segera".
   - c kategori baru -> tombol kategorinya muncul otomatis.
   - Tanpa img/e/g   -> emoji dan warna dibuat otomatis.
   - Opsional: img (gambar kartu), banner (gambar banner), icon (ikon kecil di banner), e (emoji), g (2 warna latar), top:true (tampil di banner)

   =======================
   thumb/air-force.png          (512×512)
   thumb/air-force-banner.png   (1280×800)
   thumb/air-force-icon.png     (128×128)

   =======================
   Kartu grid (img)	512 × 512 px	100 KB (idealnya 50 sampai 80 KB)
   Banner (banner)	1280 × 800 px	200 KB (idealnya 120 sampai 180 KB)
   Ikon (icon)	128 × 128 px	20 KB
   ===================================================================== */
const GAMES = [
  { t: 'Air Force',   u: 'https://hangusotak.github.io/Air-Force/', c: 'Aksi',   top: true,
    img: 'thumb/air-force.webp', banner: 'thumb/air-force-banner.webp', icon: 'thumb/air-force-icon.webp' },
  { t: 'Car Racing',  u: 'https://mzalfa08.github.io/Car-Racing/',  c: 'Balap',  top: true,
    img: 'thumb/car-racing.webp', banner: 'thumb/car-racing-banner.webp', icon: 'thumb/car-racing-icon.png' },
  { t: 'Block Blast', u: 'https://mzalfa08.github.io/Block-Blast/', c: 'Puzzle', top: true,
    img: 'thumb/block-blast.webp', banner: 'thumb/block-blast-banner.jpg', icon: 'thumb/block-blast-icon.webp' },
  { t: 'Calculator',  u: 'https://hangusotak.github.io/kalkulator-sederhana/', c: 'Tools',
    img: 'thumb/calculator.webp' },
  { t: 'Motor Trail',   u: '',   c: 'Aksi' },
  { t: 'Contoh Arcade',   u: '',   c: 'Arcade', img: '' },
  // { t: 'Judul Game', u: 'https://link-game', c: 'Arcade', img: 'img/judul.jpg' },
];

/* Gaya kategori (opsional). Kategori yang tidak ada di sini tetap tampil dengan gaya otomatis. */
const CATEGORY_STYLE = {
  Aksi:   { e: '💥', g: ['#1b6ca8', '#0b3d6e'] },
  Puzzle: { e: '🧠', g: ['#0ca678', '#087f5b'] },
  Arcade: { e: '👾', g: ['#d6336c', '#8f1f4d'] },
  Balap:  { e: '🏁', g: ['#f76707', '#b04500'] },
  Tools:  { e: '🛠️', g: ['#f76707', '#b04500'] },
};
