// counter.js

// Manuell anpassbare Baumanzahl – hier kannst du den Wert ändern
const treeCount = 3450;

// Container für die Anzeige holen
const container = document.getElementById("counter");

// Zahlen einzeln in Boxen rendern
treeCount.toString().split("").forEach(digit => {
  const digitBox = document.createElement("div");
  digitBox.className = "flip-digit";
  digitBox.textContent = digit;
  container.appendChild(digitBox);
});
