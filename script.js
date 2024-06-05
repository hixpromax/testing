let currency = 100;
let rollButton = document.getElementById('roll-button');
let resultElement = document.getElementById('result');
let currencyElement = document.getElementById('currency');
let addMoneyButton = document.getElementById('add-money-button');
let chatbox = document.getElementById('chatbox');
let moneyInput = document.getElementById('money-input');
let submitMoneyButton = document.getElementById('submit-money-button');

rollButton.addEventListener('click', rollTheDice);
addMoneyButton.addEventListener('click', showChatbox);
submitMoneyButton.addEventListener('click', addMoney);

function rollTheDice() {
  if (currency < 1) {
    resultElement.textContent = 'Lütfen Para Yükleyiniz';
    resultElement.className = 'error';
    return;
  }

  currency--;
  currencyElement.textContent = currency;

  let randomNum = Math.random();
  let rarity;

  if (randomNum < 0.7) {
    rarity = 'rare';
  } else if (randomNum < 0.9) {
    rarity = 'super rare';
  } else if (randomNum < 0.978) {
    rarity = 'epic';
  } else if (randomNum < 0.993) {
    rarity = 'mysterious';
  } else {
    rarity = 'legendary';
  }

  let message;

  switch (rarity) {
    case 'rare':
      message = 'Rare Item';
      break;
    case 'super rare':
      message = 'Super Rare Item';
      break;
    case 'epic':
      message = 'EPIC Item';
      break;
    case 'mysterious':
      message = 'MYSTERY Item';
      currency++;
      break;
    case 'legendary':
      message = 'LEGENDARY ITEM';
      currency += 5;
      break;
  }

  resultElement.textContent = message;
  resultElement.className = '';
}

function showChatbox() {
  chatbox.style.display = 'block';
}

function addMoney() {
  let userInput = parseInt(moneyInput.value);
  if (isNaN(userInput) || userInput <= 0) {
    alert('Lütfen Yüklemek İstediğiniz Miktarı Sayı ile Yazınız!!!');
    return;
  }
  currency += userInput;
  currencyElement.textContent = currency;
  chatbox.style.display = 'none';
}