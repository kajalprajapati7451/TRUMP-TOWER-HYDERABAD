   // Set current year in footer
        document.getElementById('currentYear').textContent = new Date().getFullYear();

        // Scroll to Top Button
        const scrollToTopBtn = document.getElementById('scrollToTop');
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                scrollToTopBtn.classList.add('visible');
            } else {
                scrollToTopBtn.classList.remove('visible');
            }
            
            // Navbar shrink on scroll
            if (window.scrollY > 100) {
                document.querySelector('.navbar-glass').classList.add('shrink');
            } else {
                document.querySelector('.navbar-glass').classList.remove('shrink');
            }
        });
        
        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // Hamburger Menu
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');

        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close menu when clicking a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });

        // Modal functionality
        const modal = document.getElementById('registerModal');
        const registerBtn = document.getElementById('registerBtn');
        const closeBtn = document.querySelector('.modal-close');

        registerBtn.addEventListener('click', () => {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });

        closeBtn.addEventListener('click', () => {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        });

        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });

        // Typing effect for "COMING SOON"
        const typingText = document.querySelector('.typing-text');
        const text = 'COMING SOON';
        let index = 0;
        
        function typeEffect() {
            if (index < text.length) {
                typingText.textContent += text[index];
                index++;
                setTimeout(typeEffect, 150);
            } else {
                typingText.style.animation = 'blink 1s infinite';
            }
        }
        
        setTimeout(typeEffect, 2000);

        // Scroll reveal animation
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        // Observe elements
        const elementsToObserve = [
            '#aboutTitle', '#aboutText', '#aboutImg',
            '#locationTitle', '#locationImage', '#locationText', '#mapBox',
            '#contactTitle', '#contactForm',
            '#footer'
        ];

        elementsToObserve.forEach(selector => {
            const element = document.querySelector(selector);
            if (element) observer.observe(element);
        });

        // Location items staggered animation
        const locationItems = document.querySelectorAll('.location-item');
        const locationObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('visible');
                    }, index * 200);
                }
            });
        }, observerOptions);

        locationItems.forEach(item => locationObserver.observe(item));

        // Form submissions
        document.getElementById('contactForm').addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const message = document.getElementById('message').value.trim();
            
            if (!name || !email || !phone) {
                alert('Please fill in all required fields');
                return;
            }
            
            const btn = e.target.querySelector('.submit-btn');
            const originalText = btn.textContent;
            
            btn.innerHTML = '<i class="fas fa-check"></i> Submitted!';
            btn.style.background = 'linear-gradient(135deg, #48BB78 0%, #38A169 100%)';
            btn.disabled = true;
            
            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.style.background = '';
                btn.disabled = false;
                e.target.reset();
                alert('Thank you for your inquiry! We will contact you shortly.');
            }, 2000);
        });

        document.getElementById('modalForm').addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('modalName').value.trim();
            const email = document.getElementById('modalEmail').value.trim();
            const phone = document.getElementById('modalPhone').value.trim();
            
            if (!name || !email || !phone) {
                alert('Please fill in all required fields');
                return;
            }
            
            const btn = e.target.querySelector('.submit-btn');
            const originalText = btn.textContent;
            
            btn.innerHTML = '<i class="fas fa-check"></i> Registered!';
            btn.style.background = 'linear-gradient(135deg, #48BB78 0%, #38A169 100%)';
            btn.disabled = true;
            
            setTimeout(() => {
                modal.classList.remove('active');
                document.body.style.overflow = 'auto';
                btn.innerHTML = originalText;
                btn.style.background = '';
                btn.disabled = false;
                e.target.reset();
                alert(`Thank you ${name}! You have been successfully registered. We will contact you at ${email} with exclusive updates about Trump Tower Hyderabad.`);
            }, 2000);
        });

        // Smooth scroll for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Initialize on load
        window.addEventListener('load', () => {
            setTimeout(() => {
                document.querySelectorAll('.section-title').forEach(title => {
                    if (isElementInViewport(title)) {
                        title.classList.add('visible');
                    }
                });
            }, 500);
        });

        function isElementInViewport(el) {
            const rect = el.getBoundingClientRect();
            return (
                rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
                rect.bottom >= 0
            );
        }
     // Modal Functions
function openModal() {
    document.getElementById('registerModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('registerModal').classList.remove('active');
    document.body.style.overflow = 'auto';
    // Reset form
    document.getElementById('modalForm').reset();
}

function submitForm(event) {
    event.preventDefault();
    
    // Get form values
    const formData = {
        firstName: document.getElementById('firstName').value.trim(),
        lastName: document.getElementById('lastName').value.trim(),
        email: document.getElementById('email').value.trim(),
        phone: document.getElementById('phone').value.trim(),
        propertyType: document.getElementById('propertyType').value,
        budget: document.getElementById('budget').value,
        purpose: document.getElementById('purpose').value,
        message: document.getElementById('message').value.trim(),
        agreeTerms: document.getElementById('agreeTerms').checked
    };
    
    // Validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || 
        !formData.propertyType || !formData.budget || !formData.purpose || !formData.agreeTerms) {
        alert('Please fill in all required fields marked with *');
        return false;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
        alert('Please enter a valid email address.');
        return false;
    }
    
    // Phone validation
    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (cleanPhone.length < 10) {
        alert('Please enter a valid phone number with at least 10 digits.');
        return false;
    }
    
    // Show loading state
    const submitBtn = document.querySelector('.modal-submit-btn');
    const originalContent = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i><span>Processing...</span>';
    submitBtn.disabled = true;
    
    // Simulate API submission
    setTimeout(() => {
        // Success message
        alert(`Thank you ${formData.firstName} ${formData.lastName}!\n\nYour interest in Trump Tower Hyderabad has been registered successfully.\n\nWe will contact you at ${formData.email} within 24 hours with exclusive updates.\n\nProperty Interest: ${document.getElementById('propertyType').options[document.getElementById('propertyType').selectedIndex].text}\nBudget: ${document.getElementById('budget').options[document.getElementById('budget').selectedIndex].text}`);
        
        // Reset form
        document.getElementById('modalForm').reset();
        
        // Reset button
        submitBtn.innerHTML = originalContent;
        submitBtn.disabled = false;
        
        // Close modal
        closeModal();
    }, 1500);
    
    return false;
}

// Close modal when clicking outside
document.getElementById('registerModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});
// Navbar scroll
window.addEventListener('scroll', function() {
  document.getElementById('mainNav').classList.toggle('tt-nav-scrolled', window.scrollY > 60);
});

// Scroll-reveal animations
(function() {
  var els = document.querySelectorAll('.tt-animate, .tt-animate-left, .tt-animate-right');
  if (!els.length || !window.IntersectionObserver) {
    els.forEach(function(el) { el.classList.add('visible'); });
    return;
  }
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // also trigger gold underline on sibling h2
        var h2 = entry.target.querySelector('.tt-h2') || entry.target.closest('.text-center');
        if (h2) {
          var heading = h2.querySelector ? h2.querySelector('.tt-h2') : h2;
          if (heading) heading.classList.add('visible');
        }
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  els.forEach(function(el) { observer.observe(el); });

  // Also animate section heading wrappers
  document.querySelectorAll('.text-center').forEach(function(el) {
    var h2 = el.querySelector('.tt-h2');
    if (!h2) return;
    var obs2 = new IntersectionObserver(function(entries) {
      if (entries[0].isIntersecting) { h2.classList.add('visible'); obs2.disconnect(); }
    }, { threshold: 0.3 });
    obs2.observe(el);
  });
})();

// Form submit
function submitForm(e, formId) {
  e.preventDefault();
  var form = document.getElementById(formId);
  var btn = form.querySelector('button[type="submit"]');
  btn.textContent = 'Submitting...';
  btn.disabled = true;
  fetch('/submit', { method: 'POST', body: new FormData(form) })
    .catch(function() {})
    .finally(function() {
      form.innerHTML = '<div class="text-center py-4"><i class="fa fa-check-circle tt-gold fa-3x mb-3 d-block"></i><h5>Thank you! Our team will call you within 30 minutes.</h5></div>';
    });
}