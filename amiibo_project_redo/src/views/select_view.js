// const PubSub = require('../helpers/pub_sub.js');
//
// const SelectView = function(selectElement){
//   this.element = selectElement;
// };
//
// SelectView.prototype.bindEvents = function(){
//   PubSub.subscribe('Amiibos:amiibos-data-ready', (evt) =>{
//     console.log('amiibodataready', evt);
//     this.populate(evt.detail.amiibo);
//     console.log('this.populate', evt.detail.amiibo);
//   });
//
//   this.element.addEventListener('change', (evt) =>{
//     console.log('change', evt);
//     const selectedIndex = evt.target.option;
//     PubSub.publish('SelectView:change', selectedIndex);
//   })
// };
//
// SelectView.prototype.populate = function (amiibos){
//   amiibos.forEach((amiibo, index) =>{
//     const amiiboOption = this.createOption(amiibo.name, index);
//     this.element.appendChild(amiiboOption);
//   });
// };
//
// SelectView.prototype.createOption = function(name, index){
//   const option = document.createElement('option');
//   option.textContent = name;
//   option.value = index;
//   return option;
// }
//
// module.exports = SelectView;
