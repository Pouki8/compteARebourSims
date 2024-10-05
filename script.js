const text = document.querySelector(".countDown");

function countdown() {
  const now = new Date().getTime();

  const countdownDate = new Date("October 30, 2024 18:00:00").getTime();

  const distanceBase = countdownDate - now;

  const month = Math.floor(distanceBase / (1000 * 60 * 60 * 24 * 30));
  const days = Math.floor(
    (distanceBase % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)
  );
  const hours = Math.floor(
    (distanceBase % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );

  const minutes = Math.floor((distanceBase % (1000 * 60 * 60)) / (1000 * 60));

  const secondes = Math.floor((distanceBase % (1000 * 60)) / 1000);

  text.innerText = `${days}Jours ${hours}h ${minutes}m ${secondes}s`;
}

countdown();

const countdownInterval = setInterval(() => {
  countdown();
}, 1000);

// Fonction pour incrémenter et afficher le compteur de visites
function updateVisitCounter() {
  let visits;

  if (localStorage.getItem("visits")) {
    visits = parseInt(localStorage.getItem("visits")) + 1;
  } else {
    visits = 1;
  }

  localStorage.setItem("visits", visits);

  document.getElementById(
    "visitCounter"
  ).textContent = `Nombre de visites : ${visits}`;
}

// Appeler la fonction lorsque la page est chargée
document.addEventListener("DOMContentLoaded", updateVisitCounter);
