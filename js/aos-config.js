// =====================================================
// AOS — Configuración de animaciones al hacer scroll
// Agrega los atributos data-aos a elementos según su clase,
// manteniendo el HTML limpio. Se editan los efectos aquí.
// =====================================================

// Cada entrada: claseCSS -> { efecto, delay }
var AOS_ELEMENTOS = {
  '.card-categoria':      { efecto: 'fade-up', delay: 0 },
  '.card-producto':       { efecto: 'fade-up', delay: 0 },
  '.envios-card':         { efecto: 'fade-up', delay: 0 },
  '.envios__grid':        { efecto: 'fade-up', delay: 0 },
  '.envios-nota':         { efecto: 'fade-up', delay: 150 },
  '.card-valor':          { efecto: 'zoom-in', delay: 0 },
  '.nosotros__text':      { efecto: 'fade-right', delay: 0 },
  '.contacto-directo__item': { efecto: 'fade-right', delay: 0 },
  '.form-contacto':       { efecto: 'fade-left', delay: 100 },
  '.producto-detail__gallery': { efecto: 'fade-right', delay: 0 },
  '.producto-detail__info': { efecto: 'fade-left', delay: 150 }
};

// Selectores que SOLO se animan con scroll en móvil.
// En escritorio/tablet horizontal usan animación de carga por CSS.
var AOS_SOLO_MOVIL = ['.envios-card', '.envios__grid', '.envios-nota'];

function aplicarAtributos() {
  // Aplicar efectos a elementos de las clases configuradas
  var esMovil = window.matchMedia('(max-width: 767px)').matches;
  var claves = Object.keys(AOS_ELEMENTOS);
  for (var c = 0; c < claves.length; c++) {
    var selector = claves[c];
    var config = AOS_ELEMENTOS[selector];
    // Saltar los que son solo-movil cuando NO estamos en móvil
    if (!esMovil && AOS_SOLO_MOVIL.indexOf(selector) !== -1) continue;
    var elementos = document.querySelectorAll(selector);
    for (var e = 0; e < elementos.length; e++) {
      if (!elementos[e].hasAttribute('data-aos')) {
        elementos[e].setAttribute('data-aos', config.efecto);
        // Escalonar: cada elemento siguiente de la misma clase se retrasa un poco
        var delay = config.delay + e * 80;
        elementos[e].setAttribute('data-aos-delay', delay);
      }
    }
  }
}

function configurarAOS() {
  if (typeof AOS === 'undefined') return;

  aplicarAtributos();

  if (window.__aosIniciado) {
    AOS.refreshHard();
  } else {
    window.__aosIniciado = true;
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true
    });
  }
}

// Ejecutar cuando el DOM esté listo
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function() { configurarAOS(); });
} else {
  configurarAOS();
}

// Re-evaluar tras cargas dinámicas (grids generados por JS)
window.addEventListener('load', function() {
  if (typeof AOS !== 'undefined') {
    configurarAOS();
  }
});
