// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryItemsRef = galleryItems;
const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryItemsMarkup(galleryItemsRef);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryItemsMarkup(img) {
  return img
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}" onclick="return false" rel="noreferrer noopener">
   <img class="gallery__image"  src="${preview}" alt="${description}"  />
 </a>`;
    })
    .join('');
}
const galleryImg = document.querySelectorAll('.gallery__image');

function createImgTitle() {
  for (let i = 0; i < galleryImg.length; i += 1) {
    const imgRef = galleryImg[i];
    imgRef.title = imgRef.alt;
  }
}
createImgTitle(galleryImg);

const ligthbox = new SimpleLightbox('.gallery__item', {
  captionDelay: 250,
});

// console.log(galleryImg);
