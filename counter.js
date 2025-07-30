const targetNumber = 3450; // Deine Zielzahl
const digits = targetNumber.toString().length;
const counter = document.getElementById('flip-counter');
counter.innerHTML = '';

let currentNumberArr = Array(digits).fill(0);

for (let i = 0; i < digits; i++) {
    const digitContainer = document.createElement('div');
    digitContainer.className = 'digit';
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
    void digitEl.offsetWidth;
    digitEl.querySelector('.digit-flip').classList.add('animate');
    setTimeout(() => {
      digitEl.innerHTML = `<span class="digit-static">${to}</span>`;
    }, 400);
}

// Neue Logik: Nur veränderte Ziffern flippen!
function animateToNumber(newNumber) {
    const newArr = newNumber.toString().padStart(digits, '0').split('').map(Number);
    let i = digits - 1;
    function animateDigit() {
        if (i < 0) return;
        if (currentNumberArr[i] !== newArr[i]) {
            flipTo(counter.children[i], currentNumberArr[i], newArr[i]);
            currentNumberArr[i] = newArr[i];
        }
        i--;
        setTimeout(animateDigit, 120); // Versetzt für Flip-Effekt!
    }
    animateDigit();
}

// Init (startet Counter von 0 → Ziel)
function animatedCountUp(toNumber, duration = 1300) {
    let start = 0;
    const steps = 40;
    const diff = toNumber - start;
    let currentStep = 0;
    function step() {
        const value = Math.round(start + (diff * (currentStep / steps)));
        animateToNumber(value);
        if (currentStep < steps) {
            currentStep++;
            setTimeout(step, duration / steps);
        } else {
            animateToNumber(toNumber); // Letztes Mal Zielwert setzen
        }
    }
    step();
}

animatedCountUp(targetNumber);

