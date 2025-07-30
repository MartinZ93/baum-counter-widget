const targetNumber = 1745; // ← Zielwert hier setzen
const counterDiv = document.getElementById("counter");

function createFlipDigit(digit) {
  const flipBox = document.createElement("div");
  flipBox.className = "flip-box";

  const flipInner = document.createElement("div");
  flipInner.className = "flip-inner";

  const top = document.createElement("div");
  top.className = "flip-top";
  top.textContent = digit;

  const bottom = document.createElement("div");
  bottom.className = "flip-bottom";
  bottom.textContent = digit;

  flipInner.appendChild(top);
  flipInner.appendChild(bottom);
  flipBox.appendChild(flipInner);

  return flipBox;
}

function updateCounter(number) {
  counterDiv.innerHTML = "";
  const digits = number.toString().padStart(4, "0").split(""); // z. B. 01745
  digits.forEach((digit) => {
    counterDiv.appendChild(createFlipDigit(digit));
  });
}

function animateFlipUp(toNumber, duration = 1000) {
  let current = 0;
  const step = Math.ceil(toNumber / 20); // schneller hochzählen

  const interval = setInterval(() => {
    current += step;
    if (current >= toNumber) {
      updateCounter(toNumber);
      clearInterval(interval);
    } else {
      updateCounter(current);
    }
  }, 50); // kürzerer Intervall für schnelleres Flippen
}

animateFlipUp(targetNumber);
