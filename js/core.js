"use strict";

// Configuración centralizada de archivo base para la arquitectura de componentes
const BASE_PATH = location.hostname === 'localhost' || location.hostname === '127.0.0.1'
  ? ''
  : '/';

// Variables globales (usar con cautela)
let cache = {};
const CACHE_TTL = 5 * 60 * 1000; // 5 minutos en milisegundos

// Utilidades base
const utils = {
  // Delegación de eventos para reducir listeners
  on: function(selector, event, handler) {
    document.addEventListener(event, function(e) {
      if (e.target.closest(selector)) handler(e);
    });
  },

  // Formateador de precio - usado en múltiples páginas
  formatPrice: function(price) {
    if (price === null || price === undefined) return "Consultar precio";
    return "$" + Number(price).toLocaleString("es-AR");
  },

  // Safe querySelector
  sel: function(selector, context = document) {
    return context.querySelector(selector);
  },

  // Safe querySelectorAll
  selAll: function(selector, context = document) {
    return Array.from(context.querySelectorAll(selector));
  },

  // Debounce para mejorar rendimiento
  debounce: function(func, wait) {
    let timeout;
    return function() {
      const context = this,
        args = arguments;
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(context, args), wait);
    };
  }
};

// Cargar componentes compartidos
function loadHeader() {
  fetch(`${BASE_PATH}components/header.html`)
    .then(response => response.text())
    .then(html => {
      const headerContainer = document.createElement('div');
      headerContainer.innerHTML = html;
      const header = headerContainer.querySelector('.header');
      if (header) document.body.insertBefore(header, document.body.firstChild);
    })
    .catch(error => console.error('Error cargando header:', error));
}

function loadFooter() {
  fetch(`${BASE_PATH}components/footer.html`)
    .then(response => response.text())
    .then(html => {
      const footerContainer = document.createElement('div');
      footerContainer.innerHTML = html;
      const footer = footerContainer.querySelector('.footer');
      if (footer) document.body.appendChild(footer);
    })
    .catch(error => console.error('Error cargando footer:', error));
}

// Inicialización inteligente - solo lo necesario para cada página
function initPage() {
  const path = location.pathname;
  const isProductPage = path.includes('/producto.html') || path.includes('/producto');
  const isCatalogPage = path.includes('/productos.html') || path.includes('/productos');
  const isHome = path.includes('/index.html') || path === '/' || path.endsWith('/');

  // Componentes compartidos - Cargar en todas las páginas
  loadHeader();
  loadFooter();

  // Scripts específicos por página
  if (isProductPage) {
    import(`${BASE_PATH}js/product-detail.js`)
      .catch(error => console.error('Error cargando product-detail.js:', error));
  }

  if (isCatalogPage) {
    import(`${BASE_PATH}js/catalog.js`)
      .catch(error => console.error('Error cargando catalog.js:', error));
  }

  if (isHome) {
    import(`${BASE_PATH}js/hero.js`)
      .catch(error => console.error('Error cargando hero.js:', error));
  }

  // Inicializar AOS solo si está presente en la página
  if (typeof AOS !== 'undefined') {
    import(`${BASE_PATH}js/aos-config.js`)
      .catch(error => console.error('Error cargando aos-config.js:', error));
  }
}

// Inicializar al cargar el DOM
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initPage);
} else {
  initPage();
}
