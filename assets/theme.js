// Theme initialization
document.addEventListener('DOMContentLoaded', function() {
  initializeMobileMenu();
  initializeDropdowns();
  initializeProductGallery();
  initializeNewsletterForm();
});

// Mobile menu toggle functionality
function initializeMobileMenu() {
  const toggle = document.querySelector('.mobile-menu-toggle');
  const navigation = document.querySelector('.navigation');
  
  if (!toggle || !navigation) return;
  
  toggle.addEventListener('click', function() {
    toggle.classList.toggle('active');
    navigation.classList.toggle('active');
  });
  
  // Close menu when a link is clicked
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      // Don't close if it's a link with dropdown
      const parent = link.parentElement;
      if (parent.querySelector('.dropdown-menu')) {
        e.preventDefault();
        handleDropdownToggle(parent);
      } else {
        toggle.classList.remove('active');
        navigation.classList.remove('active');
      }
    });
  });
}

// Dropdown menu functionality
function initializeDropdowns() {
  const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
  
  dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', function(e) {
      e.preventDefault();
      const navItem = toggle.parentElement;
      handleDropdownToggle(navItem);
    });
  });
}

function handleDropdownToggle(navItem) {
  const toggle = navItem.querySelector('.dropdown-toggle');
  const menu = navItem.querySelector('.dropdown-menu');
  
  if (!toggle || !menu) return;
  
  // Close other open dropdowns
  document.querySelectorAll('.nav-item').forEach(item => {
    if (item !== navItem) {
      const otherToggle = item.querySelector('.dropdown-toggle');
      const otherMenu = item.querySelector('.dropdown-menu');
      if (otherToggle && otherMenu) {
        otherToggle.classList.remove('active');
        otherMenu.classList.remove('active');
      }
    }
  });
  
  // Toggle current dropdown
  toggle.classList.toggle('active');
  menu.classList.toggle('active');
}

// Close dropdowns when clicking outside
document.addEventListener('click', function(e) {
  const nav = document.querySelector('.navigation');
  if (nav && !nav.contains(e.target)) {
    document.querySelectorAll('.dropdown-menu.active').forEach(menu => {
      menu.classList.remove('active');
      const toggle = menu.previousElementSibling;
      if (toggle) {
        toggle.classList.remove('active');
      }
    });
  }
});

// Product image gallery functionality
function initializeProductGallery() {
  const thumbnails = document.querySelectorAll('.thumbnail');
  const mainImage = document.querySelector('.main-image');
  
  if (thumbnails.length > 0 && mainImage) {
    thumbnails.forEach(thumbnail => {
      thumbnail.addEventListener('click', function() {
        mainImage.src = this.src.replace('width=100', 'width=500');
        
        // Update active thumbnail
        thumbnails.forEach(thumb => {
          thumb.classList.remove('active');
        });
        this.classList.add('active');
      });
    });
  }
}

// Newsletter form functionality
function initializeNewsletterForm() {
  const form = document.querySelector('.newsletter-form');
  
  if (!form) return;
  
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const input = form.querySelector('input[type="email"]');
    const button = form.querySelector('button');
    const email = input.value.trim();
    
    if (!email) return;
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address');
      return;
    }
    
    // Show success message
    const originalText = button.textContent;
    button.textContent = 'Subscribed! ✓';
    button.disabled = true;
    
    // Reset after 3 seconds
    setTimeout(function() {
      input.value = '';
      button.textContent = originalText;
      button.disabled = false;
    }, 3000);
  });
}

// Smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href !== '#') {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  });
});

// Accessibility: Handle keyboard navigation
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    // Close mobile menu and dropdowns
    const toggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('.navigation');
    if (toggle && nav) {
      toggle.classList.remove('active');
      nav.classList.remove('active');
    }
    
    // Close all dropdowns
    document.querySelectorAll('.dropdown-menu.active').forEach(menu => {
      menu.classList.remove('active');
      const toggleBtn = menu.previousElementSibling;
      if (toggleBtn) {
        toggleBtn.classList.remove('active');
      }
    });
  }
});
