const target = 3450; // Deine Zielzahl
const digits = String(target).padStart(4, "0").split(""); // Für führende Nullen
const flipCounter = document.getElementById("flip-counter");

let current = 0;

function createFlipDigit(initialDigit) {
  const card = document.createElement("div");
  card.className = "flip-card";

  const digit = document.createElement("div");
  digit.className = "flip-digit";

  const top = document.createElement("div");
  top.className = "top";
  const topValue = document.createElement("span");
  topValue.className = "digit-value";
  topValue.textContent = initialDigit;
  top.appendChild(topValue);

  const bottom = document.createElement("div");
  bottom.className = "bottom";
  const bottomValue = document.createElement("span");
  bottomValue.className = "digit-value";
  bottomValue.textContent = initialDigit;
  bottom.appendChild(bottomValue);

  digit.appendChild(top);
  digit.appendChild(bottom);
  card.appendChild(digit);
  return card;
}

function updateFlip(card, newDigit) {
  const digit = card.querySelector(".flip-digit");
  const top = digit.querySelector(".top .digit-value");
  const bottom = digit.querySelector(".bottom .digit-value");
  const oldDigit = top.textContent;

  if (oldDigit === newDigit) return;

  const topFlip = document.createElement("div");
  topFlip.className = "top-flip";
  const topFlipValue = document.createElement("span");
  topFlipValue.className = "digit-value";
  topFlipValue.textContent = oldDigit;
  topFlip.appendChild(topFlipValue);

  const bottomFlip = document.createElement("div");
  bottomFlip.className = "bottom-flip";
  const bottomFlipValue = document.createElement("span");
  bottomFlipValue.className = "digit-value";
  bottomFlipValue.textContent = newDigit;
  bottomFlip.appendChild(bottomFlipValue);

  topFlip.addEventListener("animationend", function () {
    top.textContent = newDigit;
    topFlip.remove();
  });
  bottomFlip.addEventListener("animationend", function () {
    bottom.textContent = newDigit;
    bottomFlip.remove();
  });

  digit.appendChild(topFlip);
  digit.appendChild(bottomFlip);
}

function showNumber(num) {
  const numStr = String(num).padStart(digits.length, "0");
  for (let i = 0; i < digits.length; i++) {
    const card = flipCounter.children[i];
    updateFlip(card, numStr[i]);
  }
}

function setup() {
  flipCounter.innerHTML = "";
  for (const d of digits) {
    flipCounter.appendChild(createFlipDigit("0"));
  }
  showNumber(0);
}

async function animateToTarget(current, target) {
  for (let n = 1; n <= target; n++) {
    showNumber(n);
    await new Promise(res => setTimeout(res, 30)); // Geschwindigkeit
  }
}

setup();
animateToTarget(0, target);
