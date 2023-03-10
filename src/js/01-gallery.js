// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

const galleryMarkUp = document.querySelector('.gallery');

const addGalleryContainer = galleryItems
  .map(
    ({ preview, description, original }) =>
      `<a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>`
  )
  .join('');

galleryMarkUp.insertAdjacentHTML('beforeend', addGalleryContainer);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
});

// Add imports above this line
// import galleryItems from './gallery-items';
// import SimpleLightbox from 'simplelightbox';
// import 'simplelightbox/dist/simple-lightbox.min.css';
// import templateGallery from '../templates/template-gallery.hbs';
// // Change code below this line

// const galleryContainer = document.querySelector('.gallery');
// const galleryMarkUp = addGalleryContainer(galleryItems);

// galleryContainer.insertAdjacentHTML('beforeend', galleryMarkUp);

// function addGalleryContainer(galleryItems) {
//   return galleryItems.map(templateGallery).join('');
// }
// // const addGalleryContainer = galleryItems.map(templateGallery).join('');

// const lightbox = new SimpleLightbox('.gallery a', {
//   captionsData: 'alt',
//   captionDelay: 250,
//   captionPosition: 'bottom',
// });
