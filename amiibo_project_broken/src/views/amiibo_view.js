const PubSub = require('../helpers/pub_sub.js');
const AmiiboDetailView = require('./amiibo_detail_view.js');

const AmiiboView = function(container){
  this.container = container;
};

AmiiboView.prototype.bindEvents = function(){
  PubSub.subscribe('Amiibos:data-ready', (evt) => {
    console.log(evt);
  this.renderAmiiboDetailView(evt.detail.amiibo.amiibo);
});
}

AmiiboView.prototype.createAmiiboListItem = function (amiibo){
  const amiiboDetailView = new AmiiboDetailView();
  const amiiboDetail = amiiboDetailView.createAmiiboDetail(amiibo);
  return amiiboDetail;
};

AmiiboView.prototype.renderAmiiboDetailView = function(amiibos){
  amiibos.forEach((amiibo) => {
    const amiiboItem = createAmiiboListItem(amiibo);
    this.container.appendChild(amiiboItem);
  });
}




 module.exports = AmiiboView;
