const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const Films = function () {
  this.films = [];
};

Films.prototype.getData = function () {
  const requestHelper = new RequestHelper('https://ghibliapi.herokuapp.com/films');
  requestHelper.get((data) => {
    this.handleDataReady(data);
    PubSub.publish('Films:films-data-ready', this.films);
  });
};

Films.prototype.handleDataReady = function (films) {
  const filmTitle = this.getFilmTitle(films);
  this.modelFilms(films, filmTitle);
};

Films.prototype.getFilmTitle = function (films) {
  return films
    .map(film => film.title)
    .filter((title, index, titles) => titles.indexOf(title) === index);
};

Films.prototype.modelFilms = function (films, filmTitle) {
  this.films = filmTitle.map((filmTitle) => {
    return {
      name: filmTitle,
      films: this.filmsByTitle(films, filmTitle)
    };
  });
};

Films.prototype.filmsByTitle = function (films, title) {
  return films.filter(film => film.title === title);
};

module.exports = Films;
