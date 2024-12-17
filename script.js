const video = document.getElementById("scrollVideo");

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY; // How far the user has scrolled
  const videoHeight = document.querySelector(".video-container").offsetHeight;

  // Factor to reduce the speed of the animation (higher = slower)
  const speedFactor = 1; // Adjust this value to control the speed

  // Scale the scroll percentage by the speed factor
  const scrollPercent = Math.min((scrollTop / videoHeight) * speedFactor, 1);

  // Control video playback based on adjusted scroll percentage
  if (video.readyState >= 3) {
    video.currentTime = video.duration * scrollPercent;
  }
});

window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
  } else {
      navbar.classList.remove('scrolled');
  }
});

// GSAP animations
gsap.registerPlugin(ScrollTrigger);

// Hero Section Animation
gsap.from(".hero", { duration: 1, opacity: 0, y: -50 });

// Navbar Animation
gsap.from(".navbar", { duration: 1, opacity: 0, y: -20, delay: 0.5 });

gsap.from(".product-card", {
  scrollTrigger: {
      trigger: "#products", // Section to trigger animation
      start: "top 80%", // Start when the section is 80% into the viewport
      toggleActions: "play none none none", // Play animation only once
  },
  duration: 1.2, // Animation duration in seconds
  opacity: 0, // Start with full transparency
  y: 50, // Move up 50px from the initial position
  ease: "power2.out", // Smooth easing effect
  stagger: 0.2, // Add a delay between each product card animation
});


// Select DOM elements
const carouselWrapper = document.querySelector('#carouselWrapper');
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');
const productCards = document.querySelectorAll('.product-card img');

// Carousel settings
let currentIndex = 0;
const visibleItems = 5;
const totalItems = document.querySelectorAll('.product-card').length;

// Function to update carousel position
function updateCarousel() {
  const itemWidth = document.querySelector('.product-card').offsetWidth;
  carouselWrapper.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}

// Move to next set of products
nextBtn.addEventListener('click', () => {
  if (currentIndex < totalItems - visibleItems) {
    currentIndex++;
  } else {
    currentIndex = 0; // Loop back to start
  }
  updateCarousel();
});

// Move to previous set of products
prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = totalItems - visibleItems; // Loop to end
  }
  updateCarousel();
});

// Hover Image Change
productCards.forEach((img) => {
  const originalSrc = img.src;
  const hoverSrc = img.getAttribute('data-hover');

  img.addEventListener('mouseover', () => {
    if (hoverSrc) img.src = hoverSrc;
  });

  img.addEventListener('mouseout', () => {
    img.src = originalSrc;
  });
});
