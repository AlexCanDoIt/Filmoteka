import refs from './refs';
import lS from './settingsLs';

function addMovieIdToLs(event, currentBtn ,currentArr, currentKey, secondBtn, secondArr, secondKey){
  const movieId = event.currentTarget.id;
  // if(!array) return; else
  if(array.includes(movieId)){
    const index = array.indexOf(movieId);
    currentArr.splice(index, 1);
    currentBtn.classList.remove(refs.btnIsActive);
  } 
  else {  
    if(secondArr.includes(movieId)) {
      const index = secondArr.indexOf(movieId);
      secondArr.splice(index, 1);
      localStorage.setItem(secondKey, JSON.stringify(secondArr));
      secondBtn.classList.remove(refs.btnIsActive);
    }
    currentArr.push(movieId);
    currentBtn.classList.add(refs.btnIsActive);
  }
  localStorage.setItem(currentKey, JSON.stringify(currentArr));
}

function addMovieToList(event){
  if(event.target === refs.queueBtn){
    addMovieIdToLs(event, refs.queueBtn, lS.queueArray, lS.queueKey, refs.watchedBtn, lS.watchedArray, lS.watchedKey);
  } 
  else if(event.target === refs.watchedBtn){
    addMovieIdToLs(event, refs.watchedBtn, lS.watchedArray, lS.watchedKey, refs.queueBt, lS.queueArray, lS.queueKey);
  } 
  else{
    return;
  }
}

export default addMovieToList;
