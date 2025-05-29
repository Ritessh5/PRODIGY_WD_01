window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.style.background = 'rgba(0, 0, 0, 0.8)';
  } else {
    navbar.style.background = 'rgba(0, 0, 0, 0.4)';
  }
});
