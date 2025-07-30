const targetNumber = 3450; // ← Hier später dynamisch via Supabase/API
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
  const digits = number.toString().padStart(4, "0").split("");
  digits.forEach((digit) => {
    counterDiv.appendChild(createFlipDigit(digit));
  });
}

function animateFlipUp(toNumber, duration = 2000) {
  let start = 0;
  const frameRate = 40;
  const steps = Math.ceil(duration / frameRate);
  let currentStep = 0;

  const interval = setInterval(() => {
    currentStep++;
    const progress = currentStep / steps;
    const value = Math.floor(progress * toNumber);
    updateCounter(value);

    if (currentStep >= steps) {
      updateCounter(toNumber);
      clearInterval(interval);
    }
  }, frameRate);
}

animateFlipUp(targetNumber);
