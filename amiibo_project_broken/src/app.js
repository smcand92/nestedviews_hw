const Amiibos = require('./models/amiibo.js');
const AmiiboView = require('./views/amiibo_view.js');

document.addEventListener('DOMContentLoaded', () => {
  const listContainer = document.querySelector('#amiibo');
  const amiiboView = new AmiiboView(listContainer);
  amiiboView.bindEvents();
  const amiibos = new Amiibos;
  amiibos.getData();
})
