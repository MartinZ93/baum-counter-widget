const counterElement = document.getElementById('counter');
const targetNumber = 3450; // Hier gewünschte Zahl eintragen

function createDigitElement(digit) {
  const digitDiv = document.createElement('div');
  digitDiv.classList.add('flip-digit');
  digitDiv.textContent = digit;
  digitDiv.setAttribute('data-digit', digit);
  return digitDiv;
}

function renderCounter(number) {
  const digits = number.toString().padStart(4, '0').split('');
  counterElement.innerHTML = '';
  digits.forEach(d => {
    const el = createDigitElement(d);
    el.classList.add('flip');
    counterElement.appendChild(el);
  });
}

renderCounter(targetNumber);
