const FilmsView = function (container, films) {
  this.FilmsContainer = container;
  this.Films = films;
};

FilmsView.prototype.render = function () {
  const FilmsContainer = document.createElement('div');
  FilmsContainer.classList.add('Films');

  const name = this.createFilmsHeading();
  FilmsContainer.appendChild(name);

  const filmsList = this.createFilmsList();
  FilmsContainer.appendChild(filmsList);

  this.FilmsContainer.appendChild(FilmsContainer);
};

FilmsView.prototype.createFilmsHeading = function () {
  const title = document.createElement('h2');
  title.classList.add('Films-title');
  if (!this.Films.title) {
    title.textContent = "Misc";
  } else {
    title.textContent = this.Films.title;
  }
  return title;
};

FilmsView.prototype.createFilmsList = function () {
  const filmsList = document.createElement('ul');
  filmsList.classList.add('films');
  this.populateList(filmsList);
  return filmsList;
};

FilmsView.prototype.populateList = function (list) {
  this.Films.titles.forEach((title) => {
    const filmsListItem = document.createElement('li');
    filmsListItem.textContent = film.title;
    list.appendChild(filmsListItem);
  });
};

module.exports = FilmsView;
