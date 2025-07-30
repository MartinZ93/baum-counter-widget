const targetNumber = 3450;
const flipContainer = document.getElementById('flip-counter');

function createDigitElement(digit) {
  const digitEl = document.createElement('div');
  digitEl.className = 'digit';

  const span = document.createElement('span');
  span.textContent = digit;

  digitEl.appendChild(span);
  return digitEl;
}

function animateCounter(number) {
  const digits = number.toString().padStart(4, '0').split('');
  flipContainer.innerHTML = '';
  digits.forEach((digit, i) => {
    const digitEl = createDigitElement(digit);
    flipContainer.appendChild(digitEl);
  });
}

let current = 0;
const interval = setInterval(() => {
  if (current <= targetNumber) {
    animateCounter(current);
    current++;
  } else {
    clearInterval(interval);
  }
}, 30);
