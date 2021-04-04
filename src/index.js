import './sass/main.scss';


import listPop from './pop'

listPop()





// import movieCardTpl from './templates/movie-card.hbs';
// const refs = {
//   cardContainer: document.querySelector('.gallery__list'),
// };

// fetch('https://api.themoviedb.org/3/trending/movie/week?api_key=ade6c0d166c517e1fe622025fc12c476')
//   .then(response => {
//     return response.json();
//   })
//   .then(trending => {
//     console.log(trending);
//     const markUp = movieCardTpl(trending);
//     console.log(markUp);
//     refs.cardContainer.innerHtml = markUp;
//   })
//   .catch(error => {
//     console.log(error);
//   });
