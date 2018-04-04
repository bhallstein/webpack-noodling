export function append_img(src) {
  const img = document.createElement('img');
  img.src = src;
  document.body.appendChild(img);
}

export function append_imgs(images) {
  images.forEach(append_img);
}
