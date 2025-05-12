// JavaScript
const carruselFuncional = document.querySelector('.carrusel-funcional');
const slides = document.querySelectorAll('.carrusel-seccion');
const btnPrev = document.querySelector('.control-carrusel-back');
const btnNext = document.querySelector('.control-carrusel-next');
const modal = document.getElementById('ventana-modal');
const modalContent = document.querySelector('.modal');

let currentIndex = 0;
const slideWidth = 400; // Ancho exacto del slide

// Controles del carrusel con comportamiento infinito
btnPrev.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateCarousel();
});

btnNext.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateCarousel();
});

function updateCarousel() {
  // Asegurarse de que solo se muestre un proyecto completo
  carruselFuncional.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

// Modal
document.querySelectorAll('.carrusel-seccion-información').forEach((btn, index) => {
  btn.addEventListener('click', () => {
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    trapFocus(modal);
    // Aquí podrías cargar contenido específico del proyecto según el índice
  });
});

// Cerrar modal
modal.addEventListener('click', (e) => {
  if (e.target === modal || e.target.closest('.cerrar-modal')) {
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
});

// Focus trap
function trapFocus(element) {
  const focusableElements = element.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];

  element.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }

    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement.focus();
        e.preventDefault();
      }
    }
  });
}

// Inicialización
function initCarousel() {
  // Establecer el ancho total del carrusel
  carruselFuncional.style.width = `${slides.length * slideWidth}px`;
  
  // Establecer imágenes de fondo
  slides.forEach((slide, index) => {
    slide.style.backgroundImage = `url(Images/proyecto-${index + 1}.jpg)`;
  });

  // Asegurar que solo se muestre un proyecto
  updateCarousel();
}

// Llamar a la inicialización cuando el DOM esté completamente cargado
window.addEventListener('load', initCarousel);