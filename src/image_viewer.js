
export function append_img() {
  const img = document.createElement('img');
  img.src = 'https://lorempixel.com/300/300';
  document.body.appendChild(img);
}
