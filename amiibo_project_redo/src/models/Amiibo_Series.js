const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const AmiiboSeries = function (){
  this.amiiboSeries = [];
};

AmiiboSeries.prototype.getData = function (){
  const request = new RequestHelper(this.url);
  request.get((data) =>{
    this.handleDataReady(data);
    console.log(data);
    PubSub.publish('AmiiboSeries:amiiboSeries-data-ready', this.amiiboSeries);
    console.log(this.amiiboSeries);
  });
};

AmiiboSeries.prototype.handleDataReady = function(amiibos){
  const seriesNames = this.getSeriesNames(amiibos);
  this.modelSeries(amiibos, seriesNames);
};

AmiiboSeries.prototype.getSeriesNames = function(amiibos){
  return amiiboSeries
  .map(amiibo => amiibo.amiiboSeries)
  .filter((series, index, amiiboSeries) => amiiboSeries.indexOf(series) === index);
};

AmiiboSeries.prototype.modelSeries = function (amiibos, seriesNames){
  this.amiiboSeries = seriesNames.map((seriesName) =>{
    return{
      name: seriesName,
      amiibos: this.amiibosBySeries(amiibos, seriesName)
    };
  });
};

AmiiboSeries.prototype.amiibosBySeries = function (amiibos, amiiboSeries){
  return amiibos.filter(seriesName => amiibo.amiiboSeries === amiiboSeries);
};

module.exports = AmiiboSeries;
