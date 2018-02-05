'use strict';
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_TEXT_FIRST = 'Ура вы победили!';
var CLOUD_TEXT_SECOND = 'Список результатов:';
var FONT_SIZE_STYLE = '16px PT Mono'

var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var TEXT_HEIGHT = 20;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;
var COLOMN_GAP = 50;

var randomOpacity = function (min, max) {
  return Math.random() * (max - min) + min;
};

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var renderText = function (ctx) {
  ctx.font = FONT_SIZE_STYLE;
  ctx.fillStyle = '#000';
  ctx.fillText(CLOUD_TEXT_FIRST, CLOUD_X + COLOMN_GAP, CLOUD_Y + (GAP * 2));
  ctx.fillText(CLOUD_TEXT_SECOND, CLOUD_X + COLOMN_GAP, CLOUD_Y + (GAP * 4));
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  renderText(ctx, '#000');

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    if (names[i] === 'Вы') {
      ctx.fillStyle = '#000';
      ctx.fillText(Math.floor(times[i]), CLOUD_X + COLOMN_GAP + (BAR_WIDTH + COLOMN_GAP) * i, CLOUD_HEIGHT - CLOUD_Y - TEXT_HEIGHT - (BAR_HEIGHT * times[i]) / maxTime);
      ctx.fillText(names[i], CLOUD_X + COLOMN_GAP + (BAR_WIDTH + COLOMN_GAP) * i, CLOUD_Y + CLOUD_HEIGHT + GAP - TEXT_HEIGHT);
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      ctx.fillRect(CLOUD_X + COLOMN_GAP + (BAR_WIDTH + COLOMN_GAP) * i, CLOUD_HEIGHT - CLOUD_Y - GAP, BAR_WIDTH, (-BAR_HEIGHT * times[i]) / maxTime);
    } else {
      ctx.fillStyle = '#000';
      ctx.fillText(Math.floor(times[i]), CLOUD_X + COLOMN_GAP + (BAR_WIDTH + COLOMN_GAP) * i, CLOUD_HEIGHT - CLOUD_Y - TEXT_HEIGHT - (BAR_HEIGHT * times[i]) / maxTime);
      ctx.fillStyle = '#000';
      ctx.fillText(names[i], CLOUD_X + COLOMN_GAP + (BAR_WIDTH + COLOMN_GAP) * i, CLOUD_Y + CLOUD_HEIGHT + GAP - TEXT_HEIGHT);
      ctx.fillStyle = 'rgba(0, 0, 255, ' + randomOpacity(0.1, 1) + ' )';
      ctx.fillRect(CLOUD_X + COLOMN_GAP + (BAR_WIDTH + COLOMN_GAP) * i, CLOUD_HEIGHT - CLOUD_Y - GAP, BAR_WIDTH, (-BAR_HEIGHT * times[i]) / maxTime);
    }
  }
};
