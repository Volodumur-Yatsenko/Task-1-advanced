'use sctict'

const buttons = document.querySelectorAll('.scroll');

buttons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const target = document.getElementById('price');
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  });
});