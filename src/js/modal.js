import modalCard from '../templates/modal.hbs';
import settings from './settings';
import refs from './refs';
import lS from './settingsLs';
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
  // функция проверяет есть ли списки фильмов, 
  // если не создает массивы в localStorage
    onLoadModalConditionBtn();
  //----------------------------------------- 
    const idFilm = e.currentTarget.id;
    console.log(idFilm);
    fetchFilm().then(r => {
      const markup = modalCard(r);
      mainRef.insertAdjacentHTML('afterbegin', markup);
      modalClose();
    });

    function fetchFilm() {
      return fetch(`${BASE_URL}/movie/${idFilm}?api_key=${API_KEY}`).then(r => {
        return r.json();
      });
    }
  },
};

function modalClose() {
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

// функция для проверки состояния localStorage при открытии,
// и состояние активности кнопок.
function onCheckKeyFromLs(data){
  if(localStorage.getItem(data) == null){
    localStorage.setItem(data, '[]');
  }
}

function onCheckBtnActive(key, array, btn){
  onCheckKeyFromLs(key);
  if(!array) return;
  else if(array.includes(refs.modal.id)){
    btn.classList.add(refs.btnIsActive);
  } else {
    return;
  } 
}

function onLoadModalConditionBtn(){
  onCheckBtnActive(lS.queueKey, lS.queueArray, refs.queueBtn);
  onCheckBtnActive(lS.watchedKey, lS.watchedArray, refs.watchedBtn);
}
// -------------------------------------------------

export default modal;
