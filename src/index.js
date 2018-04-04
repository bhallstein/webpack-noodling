import '../styles/image_viewer.css';


import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
const images = [ img1, img2 ];


// Create button
document.body.innerHTML += '<button id="btn">Click</button><br><br>';
const btn = document.getElementById('btn');
btn.addEventListener('click', add_img);

function add_img() {
  import(/* webpackChunkName: "image_viewer" */ './image_viewer')
    .then(function(mod) {
      const i = Math.floor(Math.random() * images.length);
      mod.append_img(images[i]);
    });
}
