const targetNumber = 3450;
const counter = document.getElementById('flip-counter');
const digits = targetNumber.toString().length;
let current = Array(digits).fill(0);

counter.innerHTML = '';
for (let i = 0; i < digits; i++) {
    const digit = document.createElement('div');
    digit.className = 'flip-digit';
    digit.innerHTML = `<span class="digit-inner">0</span>`;
    counter.appendChild(digit);
}

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
    }, 120); // schnelle Animation!
    setTimeout(() => {
        if (flip.parentNode) flip.parentNode.removeChild(flip);
    }, 180);
}

function animateTo(target, duration = 500) {
    const startNum = parseInt(current.join(''), 10);
    const steps = 25;
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
            let endStr = target.toString().padStart(digits, '0').split('');
            for (let i = 0; i < digits; i++) {
                counter.children[i].querySelector('.digit-inner').textContent = endStr[i];
                current[i] = endStr[i];
            }
        }
    }
    step();
}

animateTo(targetNumber, 500); // 500 ms Animation
