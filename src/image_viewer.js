export function append_img() {
  const img = document.createElement('img');
  img.src = 'https://placebear.com/400/400';
  document.body.appendChild(img);
}
