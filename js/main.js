const hamburger = document.querySelector('.icon');
const active = document.querySelector('.active');
const close = document.querySelector('.close');
const navLink = document.querySelectorAll('.mobile-link');

function myFunction() {
  const link = document.getElementById('myLinks');
  if (link.style.display === 'block') {
    link.style.display = 'none';
    close.style.display = 'none';
    active.style.display = 'block';
  } else {
    link.style.display = 'block';
    close.style.display = 'block';
    active.style.display = 'none';
  }
}

hamburger.addEventListener('click', myFunction);
navLink.forEach((n) => n.addEventListener('click', myFunction));
