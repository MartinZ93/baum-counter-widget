const targetNumber = 3450; // Zielzahl
const duration = 1200; // Animationsdauer (nicht ganz verwendet)
const digits = targetNumber.toString().length;

const counter = document.getElementById('counter');
counter.innerHTML = '';
for (let i = 0; i < digits; i++) {
    const digitContainer = document.createElement('div');
    digitContainer.className = 'digit';
    counter.appendChild(digitContainer);
}

function flipTo(digitEl, from, to) {
    digitEl.innerHTML = `
      <div class="digit-flip">
        <span class="digit-top">${from}</span>
        <span class="digit-bottom">${to}</span>
      </div>
    `;
    // Trigger reflow to re-apply the animation class
    void digitEl.offsetWidth;
    digitEl.querySelector('.digit-flip').classList.add('animate');
    setTimeout(() => {
      // Nach der Animation: Nur noch die neue Ziffer zeigen
      digitEl.innerHTML = `
        <span class="digit-static">${to}</span>
      `;
    }, 450); // Passe zur Animationsdauer in CSS an!
}

async function animateCounter(toNumber) {
    const numberArr = toNumber.toString().padStart(digits, '0').split('');
    for (let i = 0; i < digits; i++) {
        const digit = counter.children[i];
        const targetDigit = Number(numberArr[i]);
        let currentDigit = 0;
        function step() {
            if (currentDigit < targetDigit) {
                flipTo(digit, currentDigit, currentDigit + 1);
                currentDigit++;
                setTimeout(step, 80); // Geschwindigkeit pro Flip
            } else {
                flipTo(digit, currentDigit, targetDigit);
            }
        }
        step();
    }
}
animateCounter(targetNumber);
