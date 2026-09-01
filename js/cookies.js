// =====================================================
// BANNER DE COOKIES
// Guarda la decisión del usuario en localStorage.
// =====================================================
document.addEventListener('DOMContentLoaded', function() {
  const CLAVE = 'sebtech_cookies_aceptadas';
  const banner = document.getElementById('cookie-banner');
  if (!banner) return;

  function ocultar() {
    banner.classList.remove('is-visible');
    banner.classList.add('is-hidden');
    setTimeout(function() {
      banner.style.display = 'none';
    }, 300);
  }

  // Si ya decidió, no mostrar
  if (localStorage.getItem(CLAVE) !== null) return;

  // Mostrar el banner luego de un pequeño delay
  setTimeout(function() {
    banner.classList.add('is-visible');
  }, 800);

  var btnAceptar = banner.querySelector('[data-cookie="aceptar"]');
  var btnRechazar = banner.querySelector('[data-cookie="rechazar"]');

  if (btnAceptar) {
    btnAceptar.addEventListener('click', function() {
      localStorage.setItem(CLAVE, 'true');
      ocultar();
    });
  }

  if (btnRechazar) {
    btnRechazar.addEventListener('click', function() {
      localStorage.setItem(CLAVE, 'false');
      ocultar();
    });
  }
});
