(function () {
  const ham = document.getElementById('hamburger');
  const drawer = document.getElementById('mobileMenu');

  if (ham && drawer) {
    ham.addEventListener('click', () => {
      drawer.classList.toggle('active');
      ham.classList.toggle('active');
    });
  }

  const year = document.getElementById('yr');
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  const reveals = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
      }
    });
  });

  reveals.forEach((el) => observer.observe(el));
})();


