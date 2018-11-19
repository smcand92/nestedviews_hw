const GameSeriesListView = require('./views/game_series_list_view.js');
const GameSeries = require('./models/game_series.js');

document.addEventListener('DOMContentLoaded', () => {
  const gameSeriesListContainer = document.querySelector('#gameSeries');
  const gameSeriesListView = new GameSeriesListView(gameSeriesListContainer);
  gameSeriesListView.bindEvents();

  const gameSeries = new GameSeries();
  gameSeries.getData();
});
