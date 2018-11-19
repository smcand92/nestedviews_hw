const AmiiboDetailView = function(){

}

AmiiboDetailView.prototype.createAmiiboDetail = function(amiibo){
  const amiiboDetail = document.createElement('div');
  amiiboDetail.classlist.add('amiibo-detail');

  const amiiboImage = document.createElement('img');
  amiiboImage.src = amiibo.image;
  this.container.appendChild(amiiboImage);

  const character = document.createElement('h3');
  character.textContent = amiibo.character;
  amiiboDetail.appendChild(character);

  const detailsList = document.createElement('h2');
  const gameSeries = this.createDetailListItem('Game Series', amiibo.gameSeries);
  detailsList.appendChild(gameSeries);

  const release = this.createDetailListItem('Release Date', amiibo.release);
  detailsList.appendChild(release);

  const amiiboSeries = thiscreateDetailListItem('Amiibo Series', amiibo.amiiboSeries);
  detailsList.appendChild(amiiboSeries);

  return amiiboDetail;
};

AmiiboDetailView.prototype.createDetailListItem = function (label, property){
  const element = document.createElement('li');
  element.textContent = `${label}: ${property}`;
  return element;
};

AmiiboDetailView.prototype.createAmiibolListItem = function(amiibo){
  const amiiboDetailView = new AmiiboDetailView();
  const amiiboDetail = ammiboDetailView.createAmiiboDetail(amiibo);
  return amiiboDetail
};

module.exports = AmiiboDetailView;
