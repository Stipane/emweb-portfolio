// Dynamic year for the footer
document.getElementById('year').innerHTML = new Date().getFullYear();

// Slideshow of Programming Languages in main title section
const icons = document.querySelectorAll('.section-1-icons img');
let i = 1;

setInterval(() => {
  i++;
  const icon = document.querySelector('.section-1-icons .change');
  icon.classList.remove('change');

  if (i > icons.length) {
    icons[0].classList.add('change');
    i = 1;
  } else {
    icon.nextElementSibling.classList.add('change');
  }
}, 4000);


