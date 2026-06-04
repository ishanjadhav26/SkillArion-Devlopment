import { injectComponents } from './components.js';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Inject Navbar and Footer
  injectComponents();

  // 2. Remove Page Loader
  const loader = document.querySelector('.page-loader');
  if (loader) {
    setTimeout(() => {
      loader.classList.add('hidden');
    }, 300); // Small delay for effect
  }

  // 3. Initialize Scroll Animations via Intersection Observer
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        // Optional: Stop observing once animated
        // observer.unobserve(entry.target); 
      }
    });
  }, observerOptions);

  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  animatedElements.forEach(el => observer.observe(el));

  // 4. Mobile Menu Toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');

  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
      navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
      navLinks.style.flexDirection = 'column';
      navLinks.style.position = 'absolute';
      navLinks.style.top = '80px';
      navLinks.style.left = '0';
      navLinks.style.right = '0';
      navLinks.style.background = 'rgba(11, 14, 20, 0.95)';
      navLinks.style.padding = '1rem';
      navLinks.style.borderBottom = '1px solid var(--glass-border)';
    });
  }

  // 5. Initialize tsparticles (Global Neural Network effect) - using v2 API
  const particlesContainer = document.getElementById('global-particles');
  if (particlesContainer) {
    const initParticles = async () => {
      try {
        if (window.tsParticles) {
          await window.tsParticles.load('global-particles', {
            background: { color: { value: 'transparent' } },
            fpsLimit: 60,
            interactivity: {
              events: { onHover: { enable: true, mode: 'grab' } },
              modes: { grab: { distance: 180, links: { opacity: 0.5 } } }
            },
            particles: {
              color: { value: ['#C89B5C', '#4a90e2', '#e0e0e0'] },
              links: {
                color: '#C89B5C', distance: 140, enable: true,
                opacity: 0.12, width: 1
              },
              move: {
                enable: true, speed: 0.7, direction: 'none',
                random: true, outModes: { default: 'bounce' }
              },
              number: { density: { enable: true, area: 900 }, value: 70 },
              opacity: {
                value: { min: 0.08, max: 0.4 },
                animation: { enable: true, speed: 0.8, sync: false }
              },
              shape: { type: 'circle' },
              size: {
                value: { min: 1, max: 3.5 },
                animation: { enable: true, speed: 1.5, sync: false }
              }
            },
            detectRetina: true
          });
        }
      } catch (e) {
        // Gracefully degrade if particles fail to load
        console.warn('tsParticles could not be initialized:', e);
      }
    };
    // Small delay to ensure the CDN script is fully ready
    setTimeout(initParticles, 200);
  }

  // 6. Lightbox functionality
  const createLightbox = () => {
    const overlay = document.createElement('div');
    overlay.className = 'lightbox-overlay';
    overlay.innerHTML = `
      <button class="lightbox-close">&times;</button>
      <img class="lightbox-content" src="" alt="Zoomed Diagram">
    `;
    document.body.appendChild(overlay);

    const closeBtn = overlay.querySelector('.lightbox-close');
    const content = overlay.querySelector('.lightbox-content');

    const closeLightbox = () => overlay.classList.remove('active');
    
    closeBtn.addEventListener('click', closeLightbox);
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeLightbox();
    });
    
    // Add escape key support
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeLightbox();
    });

    return { overlay, content };
  };

  const lightbox = createLightbox();

  document.querySelectorAll('.diagram-container').forEach(container => {
    container.addEventListener('click', () => {
      const img = container.querySelector('img');
      if (img) {
        lightbox.content.src = img.src;
        lightbox.overlay.classList.add('active');
      }
    });
  });

  // 7. Highlight active nav link based on current page
  const currentPath = window.location.pathname;
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href && currentPath.includes(href.replace('/', '')) && href !== '/index.html') {
      link.style.color = 'var(--color-primary)';
    } else if ((currentPath === '/' || currentPath.includes('index')) && href === '/index.html') {
      link.style.color = 'var(--color-primary)';
    }
  });

});
