const targetNumber = 3450; // Deine Zielzahl
const duration = 1200; // Animationsdauer in ms
const digits = targetNumber.toString().length;

// Counter-Container leeren & neue Ziffern anlegen
const counter = document.getElementById('counter');
counter.innerHTML = '';
for (let i = 0; i < digits; i++) {
    const digitContainer = document.createElement('div');
    digitContainer.className = 'digit';
    counter.appendChild(digitContainer);
}

// Hilfsfunktion: Animation pro Ziffer
function flipTo(digitEl, from, to) {
    digitEl.innerHTML = '';
    const digitTop = document.createElement('div');
    digitTop.className = 'digit-top';
    digitTop.textContent = from;
    const digitBottom = document.createElement('div');
    digitBottom.className = 'digit-bottom';
    digitBottom.textContent = to;

    digitEl.appendChild(digitTop);
    digitEl.appendChild(digitBottom);

    setTimeout(() => {
        digitTop.classList.add('flip');
        digitTop.textContent = to;
    }, 30);
}

async function animateCounter(toNumber) {
    const numberArr = toNumber.toString().padStart(digits, '0').split('');
    for (let i = 0; i < digits; i++) {
        let d = 0;
        const digit = counter.children[i];
        const targetDigit = Number(numberArr[i]);
        let currentDigit = 0;
        function step() {
            if (currentDigit < targetDigit) {
                flipTo(digit, currentDigit, currentDigit + 1);
                currentDigit++;
                setTimeout(step, 60); // Geschwindigkeit je Ziffer!
            } else {
                flipTo(digit, currentDigit, targetDigit);
            }
        }
        step();
    }
}
animateCounter(targetNumber);
