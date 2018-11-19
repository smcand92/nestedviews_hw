const PubSub = require('../helpers/pub_sub.js');
const GameSeriesView = require('./game_series_view.js');

const GameSeriesListView = function(container){
  this.container = container;
  this.gameSeries = null;
}

GameSeriesListView.prototype.bindEvents = function(){
  PubSub.subscribe('GameSeries:gameseries-data-ready', (evt) => {
    console.log(evt.detail);
    this.gameSeries = evt.detail;
    console.log(evt.detail);
    this.render();
  });
};

GameSeriesListView.prototype.render = function(){
  this.gameSeries.forEach((game) => {
    const gameSeriesView = new GameSeriesView(container, game);
    gameSeriesView.render();
  });
};



module.exports = GameSeriesListView;
