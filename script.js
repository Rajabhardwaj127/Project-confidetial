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

// Product Cards Scroll Animation
gsap.from(".product-card", {
    scrollTrigger: {
        trigger: "#products",
        start: "top 80%", // Start animation when the section comes into view
        toggleActions: "play none none none", // Play animation once
    },
    duration: 1,
    opacity: 0,
    y: 50,
    stagger: 0.3 // Adds a delay between each card animation
});

