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


// Ensure the DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
  // Select modal and buttons
  const loginModal = document.getElementById('loginModal'); // Make sure the ID matches your HTML
  const closeModalBtn = document.getElementById('closeModalBtn'); // Make sure the ID matches your HTML
  const loginToggle = document.getElementById('loginToggle'); // Make sure the ID matches your HTML
  const signupToggle = document.getElementById('signupToggle'); // Make sure the ID matches your HTML
  const loginForm = document.getElementById('loginForm'); // Make sure the ID matches your HTML
  const signupForm = document.getElementById('signupForm'); // Make sure the ID matches your HTML

  // Show modal after 5 seconds
  setTimeout(() => {
    if (loginModal) {
      loginModal.style.display = 'flex';
    } else {
      console.error('loginModal element not found!');
    }
  }, 5000);

  // Close modal
  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', () => {
      if (loginModal) {
        loginModal.style.display = 'none';
      } else {
        console.error('loginModal element not found!');
      }
    });
  } else {
    console.error('closeModalBtn element not found!');
  }

  // Toggle between login and signup
  if (loginToggle && signupToggle && loginForm && signupForm) {
    loginToggle.addEventListener('click', () => {
      loginToggle.classList.add('active');
      signupToggle.classList.remove('active');
      loginForm.classList.add('active');
      signupForm.classList.remove('active');
    });

    signupToggle.addEventListener('click', () => {
      signupToggle.classList.add('active');
      loginToggle.classList.remove('active');
      signupForm.classList.add('active');
      loginForm.classList.remove('active');
    });
  } else {
    console.error('One or more elements related to toggle functionality are missing!');
  }

  // Form submission (you'll want to replace these with actual authentication logic)
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Login functionality to be implemented');
    });
  } else {
    console.error('loginForm element not found!');
  }

  if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Signup functionality to be implemented');
    });
  } else {
    console.error('signupForm element not found!');
  }
});
