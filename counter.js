const targetNumber = 17.450;
const counterDiv = document.getElementById("counter");

function createDigitElement(digit) {
  const digitEl = document.createElement("div");
  digitEl.className = "flip-digit";
  digitEl.textContent = digit;
  return digitEl;
}

function updateCounter(number) {
  counterDiv.innerHTML = "";
  const digits = number.toString().padStart(4, "0").split("");
  digits.forEach((digit) => {
    counterDiv.appendChild(createDigitElement(digit));
  });
}

function animateCountUp(toNumber, duration = 1500) {
  const start = 0;
  const frameRate = 30;
  const steps = Math.ceil(duration / frameRate);
  let currentStep = 0;

  const interval = setInterval(() => {
    currentStep++;
    const progress = currentStep / steps;
    const currentValue = Math.floor(progress * toNumber);
    updateCounter(currentValue);

    if (currentStep >= steps) {
      updateCounter(toNumber);
      clearInterval(interval);
    }
  }, frameRate);
}

animateCountUp(targetNumber);
