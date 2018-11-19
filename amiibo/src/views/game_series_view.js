const GameSeriesView = function(container, amiibo){
  this.gameSeriesContainer = container;
  this.amiibo = amiibo;
};

GameSeriesView.prototype.render = function(){
  const gameSeriesContainer = document.createElement('div');
  gameSeriesContainer.classList.add('gameSeries');

  const name = this.createGameSeriesHeading();
  gameSeriesContainer.appendChild(name);

  const amiibosList = this.createAmiibosList();
  gameSeriesContainer.appendChild(amiibosList);

  this.gameSeriesContainer.appendChild(gameSeriesContainer);
};

GameSeriesView.prototype.createGameSeriesHeading = function(){
  const name = document.createElement('h2');
  name.classList.add('gameSeries-name');
  if (!this.amiibo.gameSeries){
    name.textContent = 'Misc';
  } else {
    name.textContent = this.amiibo.gameSeries;
  }
  return name;
};

GameSeriesView.prototype.createAmiibosList = function(){
  const amiibosList = document.createElement('ul');
  amiibosList.classList.add('amiibos');
  this.populateList(amiibosList);
  return amiibosList;
};

GameSeriesView.prototype.populateList = function(list){
  this.amiibos.gameSeries.forEach((amiibo) => {
    const amiiboListItem = document.createElement('li');
    amiiboListItem.textContent = amiibo.gameSeries;
    list.appendChild(amiiboListItem);
  });
};


 module.exports = GameSeriesView;
