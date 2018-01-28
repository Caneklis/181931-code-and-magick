'use strict';
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_TEXT_FIRST = 'Ура вы победили!';
var CLOUD_TEXT_SECOND = 'Список результатов:';
var FONT_SIZE_STYLE = '16px PT Mono'

var CLOUD_X = 0;
var CLOUD_Y = 270;
var GAP = 50;
var TEXT_HEIGHT = 20;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;

var randomOpacity = function(min, max) {
  return Math.random() * (max - min) + min;
};

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var renderText = function(ctx, color) {
  ctx.font = FONT_SIZE_STYLE;
  ctx.fillStyle = '#000';
  ctx.fillText(CLOUD_TEXT_FIRST, 20, 45);
  ctx.fillText(CLOUD_TEXT_SECOND, 20, 65);
};

var getMaxElement = function(arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function(ctx, names, times) {
  renderCloud(ctx, 20, 20, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, 10, 10, '#fff');
  renderText(ctx, '#000');

  var maxTime = getMaxElement(times);

  var players = ['Вы', 'Кекс', 'Катя', 'Игорь'];

  for (var i = 0; i < players.length; i++) {
    if (i > 0) {
      ctx.fillStyle = '#000';
      ctx.fillText(Math.floor(times[i]), CLOUD_X + GAP + (BAR_WIDTH + GAP) * i, CLOUD_Y - (BAR_HEIGHT * times[i]) / maxTime - TEXT_HEIGHT - GAP);
      ctx.fillStyle = '#000';
      ctx.fillText(players[i], CLOUD_X + GAP + (BAR_WIDTH + GAP) * i, CLOUD_Y);
      ctx.fillStyle = 'rgba(0, 0, 255, ' + randomOpacity(0.1, 1) + ' )';
      ctx.fillRect(CLOUD_X + GAP + (BAR_WIDTH + GAP) * i, CLOUD_Y - BAR_HEIGHT - TEXT_HEIGHT, BAR_WIDTH, (BAR_HEIGHT * times[i]) / maxTime);
    } else {
      ctx.fillStyle = '#000';
      ctx.fillText(Math.floor(times[i]), CLOUD_X + GAP + (BAR_WIDTH + GAP) * i, CLOUD_Y - (BAR_HEIGHT * times[i]) / maxTime - TEXT_HEIGHT - GAP);
      ctx.fillText(players[i], CLOUD_X + GAP + (BAR_WIDTH + GAP) * i, CLOUD_Y);
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      ctx.fillRect(CLOUD_X + GAP + (BAR_WIDTH + GAP) * i, CLOUD_Y - BAR_HEIGHT - TEXT_HEIGHT, BAR_WIDTH, (BAR_HEIGHT * times[i]) / maxTime);
    };
  };
};
