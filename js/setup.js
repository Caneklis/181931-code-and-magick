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

function Wizard(name, surname, coatColor, eyesColor) {
  this.name = name + ' ' + surname;
  this.coatColor = coatColor;
  this.eyesColor = eyesColor;
}

var wizardArr = [];

for (i = 0; i < WIZARD_QUANTITY; i++) {
  var randomName = Math.floor(Math.random() * WIZARD_FIRST_NAMES.length);
  var randomSurname = Math.floor(Math.random() * WIZARD_SURNAMES.length);
  var randomCoat = Math.floor(Math.random() * WIZARD_COAT_COLOR.length);
  var randomEyes = Math.floor(Math.random() * WIZARD_EYES_COLOR.length);

  wizardArr[i] = new Wizard(WIZARD_FIRST_NAMES[randomName], WIZARD_SURNAMES[randomSurname], WIZARD_COAT_COLOR[randomCoat], WIZARD_EYES_COLOR[randomEyes]);
}

for (var i = 0; i < wizardArr.length; i++) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizardArr[i].name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizardArr[i].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizardArr[i].eyesColor;

  similarListElement.appendChild(wizardElement);
}
