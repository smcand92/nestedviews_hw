const AmiiboSeries = require('./models/Amiibo_Series.js');
const AmiiboListView = require('./views/amiibo_view.js');


document.addEventListener('DOMContentLoaded', () => {
const amiibosListContainer = document.querySelector('select#amiibos');
const amiiboView = new AmiiboListView(amiiboView);
amiiboView.bindEvents();

// const amiiboContainer = document.querySelector('select#amiibo');
// const amiiboView = new AmiiboView(amiiboContainer);
// amiiboView.bindEvents();

const amiibos = new AmiiboSeries('http://www.amiiboapi.com/api/amiibo/');
amiibos.bindEvents();
amiibos.getData();
});
