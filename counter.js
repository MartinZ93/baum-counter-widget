// Zielwert für die Anzeige (hier manuell festlegen)
const finalCount = 123456; // ← Hier die gewünschte Baumanzahl eintragen

// Element, in dem der Zähler angezeigt wird
const counterElement = document.getElementById('counter');

// Hilfsfunktion zum Auffüllen mit führenden Nullen
function padNumber(num, length) {
  return num.toString().padStart(length, '0');
}

// Aktualisiert die Anzeige im HTML
function updateCounter(value) {
  counterElement.textContent = padNumber(value, 6); // Immer 6-stellig anzeigen
}

// Animation: von 0 bis zum Zielwert zählen
function animateCounter(target, duration = 2000) {
  let current = 0;
  const steps = Math.ceil(duration / 30);        // ca. 30 fps
  const increment = Math.max(1, Math.ceil(target / steps));

  const interval = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(interval);
    }
    updateCounter(current);
  }, 30);
}

// Startet die Animation, sobald Seite geladen ist
document.addEventListener('DOMContentLoaded', () => {
  animateCounter(finalCount);
});
