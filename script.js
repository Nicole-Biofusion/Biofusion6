const scrollToTopButton = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollToTopButton.classList.add('show');
  } else {
    scrollToTopButton.classList.remove('show');
  }
});

scrollToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior:'smooth' });
});

// Testimonial slider
const testimonialSlider = document.querySelector('.testimonial-slider');
const testimonialSlides = document.querySelectorAll('.testimonial-slide');
const testimonialNav = document.querySelectorAll('.testimonial-nav');
let currentTestimonial = 0;

testimonialNav.forEach((nav, index) => {
  nav.addEventListener('click', () => {
    currentTestimonial = index;
    testimonialSlides.forEach((slide, i) => {
      slide.classList.remove('active');
      if (i === currentTestimonial) {
        slide.classList.add('active');
      }
    });
  });
});

// Features hover effect
const featureCards = document.querySelectorAll('.feature-card');

featureCards.forEach((card) => {
  card.addEventListener('mouseover', () => {
    card.classList.add('hover');
  });
  card.addEventListener('mouseout', () => {
    card.classList.remove('hover');
  });
});

// Call to action button hover effect
const ctaButtons = document.querySelectorAll('.call-to-action button');

ctaButtons.forEach((button) => {
  button.addEventListener('mouseover', () => {
    button.classList.add('hover');
  });
  button.addEventListener('mouseout', () => {
    button.classList.remove('hover');
  });
});

// Mobile menu
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('show');
});