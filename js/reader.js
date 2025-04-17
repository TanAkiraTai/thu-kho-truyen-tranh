const params = new URLSearchParams(window.location.search);
const id = params.get('id');
const chap = params.get('chap');
const container = document.getElementById('doc-truyen');

for (let i = 1; i <= 5; i++) {
  const img = document.createElement('img');
  img.src = \`assets/\${id}/\${chap}/\${i}.jpg\`;
  container.appendChild(img);
}
