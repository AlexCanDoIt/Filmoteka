// import modalCard from './templates/modal.hbs';

// const mainRef = document.querySelector('main');

// const BASE_URL = 'https://api.themoviedb.org/3/movie';
// const apiKey = 'ade6c0d166c517e1fe622025fc12c476';
// let idFilm;

// export default function modal() {
//   const listCard = document.querySelectorAll('#list-card');
//   listCard.forEach(e => {
//     e.addEventListener('click', modalOpen);
//   });

//   function modalOpen(e) {
//     idFilm = e.currentTarget.dataset.id;
//     fetchFilm().then(r => {
//       const markup = modalCard(r);
//       mainRef.insertAdjacentHTML('afterbegin', markup);
//     });
//   }
// }

// function fetchFilm() {
//   return fetch(`${BASE_URL}/${idFilm}?api_key=${apiKey}`).then(r => {
//     return r.json();
//   });
// }

// export default function closeModal() {
//   const modalClose = document.querySelector('.modal__close-btn');
//   const backdropRef = document.querySelector('.backdrop');
//   modalClose.addEventListener('click', closeModal);
//   function closeModal() {
//     backdropRef.classList.add('visually-hidden');
//   }
//   window.addEventListener('keydown', closeModalKey);
//   function closeModalKey(event) {
//     if (event.code === 'Escape') {
//       backdropRef.classList.add('visually-hidden');
//     }
//   }
//   backdropRef.addEventListener('click', closeModalBack);
//   function closeModalBack() {
//     backdropRef.classList.add('visually-hidden');
//   }
// }
