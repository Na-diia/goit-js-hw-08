// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const refs = {
    ulGallery : document.querySelector('.gallery'),
};

const createMarkupGallery = items =>  {
   return items.map((item) => `<div class="gallery__item"><a class="gallery__link" href="${item.original}">
    <img class="gallery__image" 
        src="${item.preview}" 
        alt="${item.description}"
        title="" /></a></div>`)
    .join("");
};

const addMarkupGallery = createMarkupGallery(galleryItems);

refs.ulGallery.innerHTML = addMarkupGallery;

const wonderfulGallery = new SimpleLightbox('.gallery a', {
    captionDelay : "250ms",
    captionsData : "alt", 
});