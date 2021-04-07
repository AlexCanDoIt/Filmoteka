import modalCard from '../templates/modal.hbs'
import settings from './settings'
const { BASE_URL, API_KEY } = settings;
const mainRef = document.querySelector('main');

const modal = {
    
     modalOpen() {
         const listCard = document.querySelectorAll('.movies__card');
         listCard.forEach(e => {
             e.addEventListener('click', this.open);
        });
    },
    open(e) {
         
        const idFilm = e.currentTarget.id;
        console.log(idFilm);
         fetchFilm().then(r => {
         const markup = modalCard(r);
         mainRef.insertAdjacentHTML('afterbegin', markup);
         modalClose();
         });
          
         function  fetchFilm() {
         return fetch(`${BASE_URL}/movie/${idFilm}?api_key=${API_KEY}`).then(r => {
         return r.json();
      });
         }
        
    },
}
 
    function modalClose(){
        const closeIcon = document.querySelector('.modal__close-icon');
        const backdropRef = document.querySelector('.backdrop');
        closeIcon.addEventListener('click', close);
        function close() {
        backdropRef.classList.add('visually-hidden');
        }
        window.addEventListener('keydown', closeModalKey);
        function closeModalKey(event) {
        if (event.code === 'Escape') {
        backdropRef.classList.add('visually-hidden');
       }
      }
       backdropRef.addEventListener('click', closeModalBack);
       function closeModalBack() {
       backdropRef.classList.add('visually-hidden');
      }
    }


export default modal;

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
