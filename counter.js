const targetNumber = 13450;
const counter = document.getElementById('flip-counter');
const digits = targetNumber.toString().length;

// Startwert
let current = Array(digits).fill(0);

// Digit-Container bauen
counter.innerHTML = '';
for (let i = 0; i < digits; i++) {
    const digit = document.createElement('div');
    digit.className = 'flip-digit';
    digit.innerHTML = `<span class="digit-inner">0</span>`;
    counter.appendChild(digit);
}

// Flip-Animation für EINEN DIGIT (animiert nur, wenn sich Ziffer ändert)
function flipDigit(digitEl, from, to) {
    if (from === to) return;
    const flip = document.createElement('span');
    flip.className = 'flip';
    flip.textContent = from;
    digitEl.appendChild(flip);

    setTimeout(() => {
        flip.style.transform = 'rotateX(-90deg)';
        flip.style.opacity = 0;
        digitEl.querySelector('.digit-inner').textContent = to;
    }, 400);
    setTimeout(() => {
        if (flip.parentNode) flip.parentNode.removeChild(flip);
    }, 500);
}

// Hochzählen – echtes Tacho-Verhalten
function animateTo(target, duration = 10) {
    const startNum = parseInt(current.join(''), 10);
    let frame = 0;
    const steps = Math.max(20, Math.abs(target - startNum));
    const stepTime = duration / steps;

    function step() {
        let val = Math.round(startNum + (target - startNum) * (frame / steps));
        let strVal = val.toString().padStart(digits, '0').split('');
        for (let i = 0; i < digits; i++) {
            const from = current[i];
            const to = strVal[i];
            if (from !== to) {
                flipDigit(counter.children[i], from, to);
            }
            current[i] = to;
        }
        frame++;
        if (frame <= steps) {
            setTimeout(step, stepTime);
        } else {
            // Nachanimation: Endwert sauber setzen
            for (let i = 0; i < digits; i++) {
                counter.children[i].querySelector('.digit-inner').textContent = strVal[i];
            }
        }
    }
    step();
}

// Los geht's!
animateTo(targetNumber);
