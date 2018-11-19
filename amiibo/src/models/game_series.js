const PubSub = require('../helpers/pub_sub.js');
const RequestHelper = require('../helpers/request_helper.js');

const GameSeries = function (){
  this.gameSeries = [];
};

GameSeries.prototype.getData = function(){
  const request = new RequestHelper('http://www.amiiboapi.com/api/amiibo/');
  request.get((data) =>{
    this.handleData(data);
    console.log(data);
    PubSub.publish('GameSeries:gameseries-data-ready', data.amiibo);
    console.log(data.amiibo);
  });
};

GameSeries.prototype.handleData = function(amiibos){
  const seriesNames = this.getSeriesNames(amiibos);
  this.modelGameSeries(amiibos, seriesNames);
};

GameSeries.prototype.getSeriesNames = function(amiibos){
  return amiibos.amiibo
  .map(amiibo => amiibo.gameSeries)
  .filter((seriesName, index, gameSeries) => gameSeries.indexOf(seriesName) === index);
};

GameSeries.prototype.modelGameSeries = function(amiibos, seriesNames){
  this.gameSeries = seriesNames.map((seriesName) => {
    return{
      name: seriesName,
      amiibos: this.amiibosBySeries(amiibos, seriesName)
    };
  });
};

GameSeries.prototype.amiibosBySeries = function(amiibos, gameSeries){
  return amiibos.amiibo.filter(amiibo => amiibo.gameSeries === gameSeries);
};

module.exports = GameSeries;
