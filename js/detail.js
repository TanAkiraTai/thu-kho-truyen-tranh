const params = new URLSearchParams(window.location.search);
const id = params.get('id');
const danhSachTruyen = {
  'solo-leveling': {
    ten: 'Solo Leveling',
    moTa: 'Thợ săn cấp E yếu nhất Sung Jin-Woo và hành trình trở thành bá đạo.',
    chuong: ['chap1']
  },
  'one-piece': {
    ten: 'One Piece',
    moTa: 'Cuộc phiêu lưu của Luffy đi tìm kho báu One Piece.',
    chuong: ['chap1']
  }
};

const data = danhSachTruyen[id];
const container = document.getElementById('truyen-detail');
if (data) {
  container.innerHTML = \`
    <h1>\${data.ten}</h1>
    <p>\${data.moTa}</p>
    <h3>Danh sách chương</h3>
    <ul>
      \${data.chuong.map(c => \`<li><a href="reader.html?id=\${id}&chap=\${c}">\${c}</a></li>\`).join('')}
    </ul>
  \`;
}
