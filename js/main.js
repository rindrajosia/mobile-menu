const hamburger = document.querySelector('.icon');
const active = document.querySelector('.active');
const close = document.querySelector('.close');
const navLink = document.querySelectorAll('.mobile-link');

function myFunction() {
  const x = document.getElementById('myLinks');
  if (x.style.display === 'block') {
    x.style.display = 'none';
    close.style.display = 'none';
    active.style.display = 'block';
  } else {
    x.style.display = 'block';
    close.style.display = 'block';
    active.style.display = 'none';
  }
}

hamburger.addEventListener('click', myFunction);
navLink.forEach((n) => n.addEventListener('click', myFunction));
