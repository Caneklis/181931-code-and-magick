'use strict';
var WIZARD_QUANTITY = 4;

var WIZARD_FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпина', 'Вашингтон'];

var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

var WIZARD_COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];

var WIZARD_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

var showWindow = document.querySelector('.setup');
showWindow.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;
/**
 * Функция генерации случайного числа
 * @param   {number} min Минимальное значение
 * @param   {number} max Максимальное знаение
 * @return {number} [[Description]]
 */
var getRandomNumber = function (min, max) {
  return Math.round(Math.random() * (max - min) + min);
};
/**
 * Функция генерации рандомного элемента массива
 * @param   {number} array Массив
 * @return {number} Номер элемента из массива
 */
var getRandomItem = function (array) {
  return array[getRandomNumber(0, array.length - 1)];
};
/**
 * Функция генерации одного волшебника
 * @return {object} Объект
 */
var createWizard = function () {
  var wizard = {
    name: getRandomItem(WIZARD_FIRST_NAMES) + ' ' + getRandomItem(WIZARD_SURNAMES),
    coatColor: getRandomItem(WIZARD_COAT_COLOR),
    eyesColor: getRandomItem(WIZARD_EYES_COLOR)
  };
  return wizard;
};

var wizardArr = [];

for (var i = 0; i < WIZARD_QUANTITY; i++) {
  wizardArr.push(createWizard());
}
/**
 * Функция добавления в разметку элемента
 * @param   {object}   wizard Объект
 * @return {string} [[Description]]
 */
var createWizardElement = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

/**
 * Функция отрисовывает необходимое количество элементов в разметке
 */
var repeatWizarElement = function () {
  var blockItem = document.createDocumentFragment();
  for (i = 0; i < wizardArr.length; i++) {
    blockItem.appendChild(createWizardElement(wizardArr[i]));
  }

  similarListElement.appendChild(blockItem);
};

repeatWizarElement();
