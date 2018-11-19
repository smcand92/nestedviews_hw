const PubSub = require('../helpers/pub_sub.js');
const FilmsView = require('./films_view.js');

const FilmsListView = function (container) {
  this.container = container;
};

FilmsListView.prototype.bindEvents = function () {
  PubSub.subscribe('Films:films-data-ready', (evt) => {
    this.films = evt.detail;
    this.films.render();
  });
};

FilmsListView.prototype.render = function () {
  this.films.forEach((film) => {
    const filmView = new FilmView(this.container, film);
    filmView.render();
  });
};



module.exports = FilmsListView;
