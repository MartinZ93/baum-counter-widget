let count = 0;
const target = 12345; // ← Hier kannst du später dynamisch Supabase-Werte einfügen
const speed = 50; // je kleiner, desto schneller

function updateCounter() {
  const counter = document.getElementById('flip-counter');

  if (count < target) {
    count += Math.ceil((target - count) / 20); // animiertes Hochzählen
    counter.innerText = count.toLocaleString('de-DE');
    setTimeout(updateCounter, speed);
  } else {
    counter.innerText = target.toLocaleString('de-DE');
  }
}

document.addEventListener('DOMContentLoaded', updateCounter);
