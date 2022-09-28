// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

function makeGallery(galleryArray) {
  return galleryArray
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
          <img
          class="gallery__image"
          src="${preview}" 
          alt="${description}"
        />
        </a>`;
    })
    .join('');
}
galleryEl.insertAdjacentHTML('beforeend', makeGallery(galleryItems));

var lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});
