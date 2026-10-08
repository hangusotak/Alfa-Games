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
   ===================================================================== */
const GAMES = [
  { t: 'Air Force',   u: 'https://hangusotak.github.io/Air-Force/', c: 'Aksi',   top: true },
  { t: 'Car Racing',   u: 'https://mzalfa08.github.io/Car-Racing/',  c: 'Balap', top: true },
  { t: 'Block Blast',   u: 'https://mzalfa08.github.io/Block-Blast/', c: 'Puzzle' },
  { t: 'Contoh Arcade',   u: '',                           c: 'Arcade', img: '' },
  // { t: 'Judul Game', u: 'https://link-game', c: 'Arcade', img: 'img/judul.jpg' },
];

/* Gaya kategori (opsional). Kategori yang tidak ada di sini tetap tampil dengan gaya otomatis. */
const CATEGORY_STYLE = {
  Aksi:   { e: '💥', g: ['#1b6ca8', '#0b3d6e'] },
  Puzzle: { e: '🧠', g: ['#0ca678', '#087f5b'] },
  Arcade: { e: '👾', g: ['#d6336c', '#8f1f4d'] },
  Balap:  { e: '🏁', g: ['#f76707', '#b04500'] },
};
