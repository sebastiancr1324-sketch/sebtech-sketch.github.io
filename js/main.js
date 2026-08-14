document.addEventListener('DOMContentLoaded', () => {
  const boton = document.querySelector('.header__toggle');
  const menu = document.querySelector('.header__nav');

  if (boton && menu) {
    boton.addEventListener('click', () => {
      const abierto = menu.classList.toggle('is-open');
      boton.setAttribute('aria-expanded', abierto);
    });
  }
});