// const PubSub = require('../helpers/pub_sub.js');
// const RequestHelper = require('../helpers/request_helper.js');
//
// const Amiibos = function(url){
//   this.url = url;
//   this.amiibos = [];
// };
//
// Amiibos.prototype.bindEvents = function(){
//   PubSub.subscribe('SelectView:change', (evt) =>{
//     console.log('selectview change', evt);
//     selectedIndex = evt.detail;
//     console.log(evt.detail);
//     const selectedAmiibo = this.amiibos[selectedIndex];
//     console.log('SelectAmiibo', selectedAmiibo);
//     PubSub.publish('Amiibos:selected-amiibo-ready', selectedAmiibo);
//   });
// };
//
// Amiibos.prototype.getData = function(){
//   const request = new RequestHelper(this.url);
//   request.get(data => this.handleData(data));
// };
//
// Amiibos.prototype.handleData = function(data){
//   this.amiibos = data;
//   PubSub.publish('Amiibos:amiibos-data-ready', this.amiibos);
// };
//
// Amiibos.prototype.modelAmiibos = function(amiibos, amiiboNames){
//   this.amiibos = amiiboNames.map((amiiboName) =>{
//     return{
//       name:
//     }
//   })
// }
//
// module.exports = Amiibos;
