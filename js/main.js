(function () {
  const ham = document.getElementById('hamburger');
  const drawer = document.getElementById('drawer');
  const scrim = document.getElementById('scrim');

  if (ham && drawer) {
    ham.addEventListener('click', () => {
      drawer.classList.toggle('open');
      ham.classList.toggle('open');
      if (scrim) scrim.classList.toggle('open');
    });
  }

  if (scrim) {
    scrim.addEventListener('click', () => {
      drawer.classList.remove('open');
      ham.classList.remove('open');
      scrim.classList.remove('open');
    });
  }

  const year = document.getElementById('yr');
  if (year) year.textContent = new Date().getFullYear();

  document.querySelectorAll('.reveal').forEach(el => {
    el.classList.add('in');
  });
})();
