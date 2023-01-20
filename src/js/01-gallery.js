import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


//                  ADD GALLERY

const galleryRef = document.querySelector('.gallery');
const cardGallery = galleryItems
  .map(({ preview, original, description }) => {
    return `<a class="gallery__item" href=${original}>
            <img class="gallery__image"
            src=${preview} 
            alt=${description} />
            </a>`;
  })
  .join('');

galleryRef.insertAdjacentHTML('afterbegin', cardGallery);

//                  ADD SimpleLightbox

new SimpleLightbox('.gallery .gallery__item', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250
})

