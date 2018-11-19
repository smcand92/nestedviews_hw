const FilmListView = require("./views/film_list_view.js");
const Films = require("./models/films.js");

document.addEventListener('DOMContentLoaded', () => {
  const filmContainer = document.querySelector('#films');
  const filmsListView = new FilmsListView(filmContainer);
  filmsListView.bindEvents();

  const film = new Films();
  films.getData();
});
