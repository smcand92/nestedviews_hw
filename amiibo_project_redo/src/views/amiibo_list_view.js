const PubSub = require('../helpers/pubSub.js');
const AmiiboView = require('./amiibo_view.js');

const AmiiboListView = function (container){
  this.container = container;
};

AmiiboListView.prototype.bindEvents = function(){
  PubSub.subscribe('Amiibo:amiibos-data-ready', (evt) =>{
    this.amiibos = evt.detail;
    this.render();
  });
};

AmiiboListView.prototype.render = function(){
  this.amiibos.forEach((amiibo) =>{
    const amiiboView = new AmiiboView(this.container, amiibo);
    amiiboView.render();
  });
};

module.exports = AmiiboListView;
