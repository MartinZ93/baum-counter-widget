// counter.js

const target = 3450;
const container = document.getElementById("flip-counter");

function createDigit(digit) {
  const card = document.createElement("div");
  card.className = "flip-card";

  const digitDiv = document.createElement("div");
  digitDiv.className = "digit";
  digitDiv.textContent = digit;

  card.appendChild(digitDiv);
  return card;
}

function updateCounter(value) {
  container.innerHTML = "";
  const str = value.toString().padStart(4, "0").split("");

  str.forEach((digit) => {
    const card = createDigit(digit);
    container.appendChild(card);

    setTimeout(() => {
      card.classList.add("flip");
    }, 100);
  });
}

function animateTo(targetValue) {
  let current = 0;
  const step = Math.ceil(targetValue / 20);

  const interval = setInterval(() => {
    current += step;
    if (current >= targetValue) {
      updateCounter(targetValue);
      clearInterval(interval);
    } else {
      updateCounter(current);
    }
  }, 80);
}

animateTo(target);
