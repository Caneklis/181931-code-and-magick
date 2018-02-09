'use strict';

var WIZARD_QUANTITY = 4;
var WIZARD_FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпина', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var setupWindow = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setupWindow.querySelector('.setup-close');
var setupOpenIcon = document.querySelector('.setup-open-icon');
setupOpenIcon.setAttribute('tabindex', 0);
setupClose.setAttribute('tabindex', 0);

/**
 * Функция закрытия окна по клавише ESC
 * @param {object} evt
 */
var onWindowEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE && userNameInput !== document.activeElement) {
    closeWindow();
  }
};

/**
 * Функция открытия окна настроек
 */
var openWindow = function () {
  setupWindow.classList.remove('hidden');
  document.addEventListener('keydown', onWindowEscPress);
};

/**
 * Функция закрытия окна настроек
 */
var closeWindow = function () {
  setupWindow.classList.add('hidden');
  document.removeEventListener('keydown', onWindowEscPress);
};

setupOpen.addEventListener('click', function () {
  openWindow();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openWindow();
  }
});

setupClose.addEventListener('click', function () {
  closeWindow();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closeWindow();
  }
});

var setupForm = document.querySelector('.setup-wizard-form');
setupForm.setAttribute('action', 'https://js.dump.academy/code-and-magick');

var userNameInput = setupWindow.querySelector('.setup-user-name');
userNameInput.setAttribute('minlength', 2);

userNameInput.addEventListener('invalid', function () {
  if (userNameInput.validity.tooShort) {
    userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else if (userNameInput.validity.valueMissing) {
    userNameInput.setCustomValidity('Обязательное поле');
  } else {
    userNameInput.setCustomValidity('');
  }
});

var submitButton = document.querySelector('.button');

/**
 * Функция отправки формы по нажатию ENTER
 * @param {object} evt
 */
var submitForm = function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    evt.form.submit();
  }
};

submitButton.addEventListener('keydow', submitForm);

/**
 * Функция изменения цвета глаз при клике
 */
var changeEyesColor = function () {
  document.body.querySelector('.setup-player .wizard-eyes').style.fill = getRandomItem(WIZARD_EYES_COLOR);
};

document.body.querySelector('.setup-player .wizard-eyes').addEventListener('click', changeEyesColor);

/**
 * Функция изменения цвета мантии при клике
 */
var changeCoatColor = function () {
  document.body.querySelector('.setup-player .wizard-coat').style.fill = getRandomItem(WIZARD_COAT_COLOR);
};
document.body.querySelector('.setup-player .wizard-coat').addEventListener('click', changeCoatColor);


/**
 * Функция изменения цвета фаербола при клике
 */
var changeFireballColor = function () {
  document.body.querySelector('.setup-fireball-wrap').style.backgroundColor = getRandomItem(FIREBALL_COLOR);
};
document.body.querySelector('.setup-fireball-wrap').addEventListener('click', changeFireballColor);

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
