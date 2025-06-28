// Toggle mobile nav menu
const toggleButton = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

toggleButton.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Add animation to nav links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('mouseenter', () => link.style.transform = 'scale(1.1)');
  link.addEventListener('mouseleave', () => link.style.transform = 'scale(1)');
});