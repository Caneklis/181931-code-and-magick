'use strict';

var showWindow = document.querySelector('.setup');
showWindow.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

var WIZARD_QUANTITY = 4;

var WIZARD_FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпина', 'Вашингтон'];

var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

var WIZARD_COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];

var WIZARD_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

var getRandomItem = function (array) {
  return Math.floor(Math.random() * array.length);
};

var createWizard = function (quantity) {
  var wizardArr = [];
  for (var i = 0; i < quantity; i++) {
    wizardArr[i] = {
      name: WIZARD_FIRST_NAMES[getRandomItem(WIZARD_FIRST_NAMES)] + ' ' + WIZARD_SURNAMES[getRandomItem(WIZARD_SURNAMES)],
      coatColor: WIZARD_COAT_COLOR[getRandomItem(WIZARD_COAT_COLOR)],
      eyesColor: WIZARD_EYES_COLOR[getRandomItem(WIZARD_EYES_COLOR)]
    };
  }
  return wizardArr;
};

var wizardArr = createWizard(WIZARD_QUANTITY);

var createWizardElement = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var repeatWizarElement = function () {
  var blockItem = document.createDocumentFragment();
  for (var i = 0; i < wizardArr.length; i++) {
    blockItem.appendChild(createWizardElement(wizardArr[i]));
  }

  similarListElement.appendChild(blockItem);
};

repeatWizarElement();
