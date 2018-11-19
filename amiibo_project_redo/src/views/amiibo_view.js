
const AmiiboView = function(container){
  this.container = container;
  this.amiiboSeries = [];
};

AmiiboView.prototype.render = function(){
  const amiiboContainer = document.createElement('div');
  amiiboContainer.classList.add('amiibo');

  const name = this.createAmiiboHeading();
  amiiboContainer.appendChild(name);

  const amiibosList = this.createAmiibosList();
  amiiboContainer.appendChild(amiibosList);

  this.container.appendChild(amiiboContainer);
};


AmiiboView.prototype.createAmiiboHeading = function(){
  const name = document.createElement('h2');
  name.classList.add('amiiboSeries-name');
  if(!this.amiiboSeries.name){
    name.textContent = "Misc";
  } else {
    name.textContent = this.amiiboSeries.name;
  }
  return name;
};

AmiiboView.prototype.createAmiibosList = function(){
  const amiibosList = document.createElement('ul');
  amiibosList.classList.add('amiibos');
  this.populateList(amiibosList);
  return amiibosList;
};

AmiiboView.prototype.populateList = function (list){
  this.amiiboSeries.amiibos.forEach((amiibo) =>{
    const amiiboListItem = document.createElement('li');
    amiiboListItem.textContent = amiibo.name;
    list.appendChild(amiiboListItem);
  });
};


 module.exports = AmiiboView;
