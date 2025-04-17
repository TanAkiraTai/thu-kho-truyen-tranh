const danhSachTruyen = [
  {
    id: 'solo-leveling',
    ten: 'Solo Leveling',
    anh: 'assets/solo-leveling/cover.jpg',
    chuong: ['chap1']
  },
  {
    id: 'one-piece',
    ten: 'One Piece',
    anh: 'assets/one-piece/cover.jpg',
    chuong: ['chap1']
  }
];

const container = document.getElementById('truyen-list');
danhSachTruyen.forEach(truyen => {
  const item = document.createElement('div');
  item.className = 'item';
  item.innerHTML = \`
    <a href="detail.html?id=\${truyen.id}">
      <img src="\${truyen.anh}" alt="\${truyen.ten}">
      <p>\${truyen.ten}</p>
    </a>
  \`;
  container.appendChild(item);
});

// Theme toggle
document.getElementById('toggle-theme')?.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});
