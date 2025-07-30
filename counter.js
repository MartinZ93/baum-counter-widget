const targetNumber = 3450;
const flipContainer = document.getElementById('flip-counter');

function renderCounter(number) {
  flipContainer.innerHTML = ''; // Clear existing digits
  const digits = number.toString().padStart(4, '0').split('');
  digits.forEach((digit, i) => {
    const digitEl = document.createElement('div');
    digitEl.className = 'digit';

    const span = document.createElement('span');
    span.textContent = digit;

    digitEl.appendChild(span);
    flipContainer.appendChild(digitEl);
  });
}

let current = 0;
const interval = setInterval(() => {
  current += Math.ceil((targetNumber - current) / 10);
  renderCounter(current);
  if (current >= targetNumber) {
    renderCounter(targetNumber);
    clearInterval(interval);
  }
}, 100);
