const targetNumber = 3450;
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

// Flip-Animation für EINEN DIGIT
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
    }, 250); // schnellere Animation!
    setTimeout(() => {
        if (flip.parentNode) flip.parentNode.removeChild(flip);
    }, 350);
}

// SYNCHRONES Hochzählen
function animateTo(target, duration = 600) {
    const startNum = parseInt(current.join(''), 10);
    const steps = 40;
    let frame = 0;
    const stepTime = duration / steps;

    function step() {
        const progress = frame / steps;
        let val = Math.round(startNum + (target - startNum) * progress);
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
            let endStr = target.toString().padStart(digits, '0').split('');
            for (let i = 0; i < digits; i++) {
                counter.children[i].querySelector('.digit-inner').textContent = endStr[i];
                current[i] = endStr[i];
            }
        }
    }
    step();
}

// Start: alles gleichzeitig, schnell
animateTo(targetNumber, 600); // Hier kannst du noch schneller/langsamer machen
