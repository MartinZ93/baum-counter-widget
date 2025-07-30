const targetNumber = 3450; // Deine Zielzahl
const digits = targetNumber.toString().length;
const counter = document.getElementById('flip-counter');
counter.innerHTML = '';

for (let i = 0; i < digits; i++) {
    const digitContainer = document.createElement('div');
    digitContainer.className = 'digit';
    // Starte alle mit "0"
    digitContainer.innerHTML = `<span class="digit-static">0</span>`;
    counter.appendChild(digitContainer);
}

function flipTo(digitEl, from, to) {
    digitEl.innerHTML = `
      <div class="digit-flip">
        <span class="digit-top">${from}</span>
        <span class="digit-bottom">${to}</span>
      </div>
    `;
    // Animation triggern
    void digitEl.offsetWidth;
    digitEl.querySelector('.digit-flip').classList.add('animate');
    setTimeout(() => {
      digitEl.innerHTML = `<span class="digit-static">${to}</span>`;
    }, 400); // Synchron zur CSS-Animation (0.4s)
}

function animateCounter(toNumber) {
    const numberArr = toNumber.toString().padStart(digits, '0').split('');
    for (let i = 0; i < digits; i++) {
        const digit = counter.children[i];
        const targetDigit = Number(numberArr[i]);
        let currentDigit = 0;
        // Wenn Zielziffer 0: Keine Animation
        if (targetDigit === 0) {
            digit.innerHTML = `<span class="digit-static">0</span>`;
            continue;
        }
        function step() {
            if (currentDigit < targetDigit) {
                flipTo(digit, currentDigit, currentDigit + 1);
                currentDigit++;
                setTimeout(step, 80); // Geschwindigkeit je Flip
            } else {
                flipTo(digit, currentDigit, targetDigit);
            }
        }
        step();
    }
}

animateCounter(targetNumber);
