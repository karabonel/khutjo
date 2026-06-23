// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
  // Add any theme-specific JavaScript here
  
  // Example: Close mobile menu when link is clicked
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      // Handle navigation
    });
  });
  
  // Product image gallery functionality
  const thumbnails = document.querySelectorAll('.thumbnail');
  const mainImage = document.querySelector('.main-image');
  
  if (thumbnails.length > 0 && mainImage) {
    thumbnails.forEach(thumbnail => {
      thumbnail.addEventListener('click', function() {
        mainImage.src = this.src.replace('width=100', 'width=500');
      });
    });
  }
});
