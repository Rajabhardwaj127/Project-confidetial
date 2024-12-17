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


// const carouselWrapper = document.getElementById("carouselWrapper");
//   const prevBtn = document.getElementById("prevBtn");
//   const nextBtn = document.getElementById("nextBtn");

//   let currentIndex = 0;
//   const totalItems = document.querySelectorAll(".product-card").length;
//   const itemsPerView = 5;

//   // Calculate max index for sliding
//   const maxIndex = totalItems - itemsPerView;

//   // Move to next items
//   nextBtn.addEventListener("click", () => {
//     if (currentIndex < maxIndex) {
//       currentIndex++;
//     } else {
//       currentIndex = 0; // Loop back to start
//     }
//     updateCarousel();
//   });

//   // Move to previous items
//   prevBtn.addEventListener("click", () => {
//     if (currentIndex > 0) {
//       currentIndex--;
//     } else {
//       currentIndex = maxIndex; // Loop to the end
//     }
//     updateCarousel();
//   });

//   // Update carousel position
//   function updateCarousel() {
//     const translateX = -currentIndex * (100 / itemsPerView);
//     carouselWrapper.style.transform = `translateX(${translateX}%)`;
//   }