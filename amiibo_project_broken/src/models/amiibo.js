const PubSub = require('../helpers/pub_sub.js');
const RequestHelper = require('../helpers/request_helper.js');

const Amiibos = function(){
  this.data = null
};

Amiibos.prototype.getData = function (){
  const url = 'http://www.amiiboapi.com/api/amiibo/';
  const request = new RequestHelper(url);
  request.get((amiibos) => {
    this.data = amiibos;
    PubSub.publish('Amiibos:data-ready', this.data);
    console.log(amiibos);
  })
};

module.exports = Amiibos;
