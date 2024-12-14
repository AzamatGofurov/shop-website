// script.js
document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.querySelector('.burger-menu');
    const navLinks = document.querySelector('.nav-links');
    const searchIcon = document.querySelector('.search-icon');
    const searchBox = document.querySelector('.search-box');
  
    // Burger menu functionality
    burgerMenu.addEventListener('click', () => {
      burgerMenu.classList.toggle('open');
      navLinks.classList.toggle('active');
    });
  
    // Search icon functionality
    searchIcon.addEventListener('click', (e) => {
      e.preventDefault(); // Prevent form submission
      searchBox.classList.toggle('open');
    });
  });
  
  // brand
// Duplicate the brand items to create an infinite effect
const brandSlider = document.querySelector('.brand-slider');

// Clone brand items for infinite scrolling effect
const brandItems = [...brandSlider.children];
brandItems.forEach(item => {
  const clone = item.cloneNode(true);
  brandSlider.appendChild(clone);
});


// carusel rewiev
const carousel = document.querySelector('.carousel');

// Karuselni boshlash uchun animatsiya
function startCarousel() {
  const cardWidth = document.querySelector('.testimonial-card').offsetWidth + 16; // Kartaning kengligi + bo'shliq
  carousel.style.transition = 'transform 0s linear';
  carousel.style.transform = `translateX(0)`; // Bosh holatga qaytarish

  let offset = 0;

  function move() {
    offset -= 1; // Har bir intervalda 1px chapga harakat
    carousel.style.transform = `translateX(${offset}px)`;

    // Karusel oxiriga yetganda boshidan boshlash
    if (Math.abs(offset) >= carousel.scrollWidth / 2) {
      offset = 0; // Bosh holatga qaytarish
    }

    requestAnimationFrame(move);
  }

  move();
}

startCarousel();
