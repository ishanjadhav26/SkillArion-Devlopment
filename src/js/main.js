// SkillArion Development — Main JS
// Minimal, purposeful interactions only

// =========================================
// Page Loader
// =========================================
function initLoader() {
  const loader = document.getElementById('page-loader');
  if (!loader) return;

  window.addEventListener('load', () => {
    setTimeout(() => {
      loader.classList.add('hidden');
    }, 300);
  });
}

// =========================================
// Sticky Nav
// =========================================
function initNav() {
  const nav = document.getElementById('nav');
  if (!nav) return;

  const onScroll = () => {
    if (window.scrollY > 20) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// =========================================
// Mobile Menu
// =========================================
function initMobileMenu() {
  const mobileMenu = document.getElementById('mobile-menu');
  const openBtn = document.getElementById('mobile-open');
  const closeBtn = document.getElementById('mobile-close');

  if (!mobileMenu) return;

  const open = () => {
    mobileMenu.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  const close = () => {
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  };

  if (openBtn) openBtn.addEventListener('click', open);
  if (closeBtn) closeBtn.addEventListener('click', close);

  // Close on link click
  mobileMenu.querySelectorAll('.mobile-menu-link').forEach(link => {
    link.addEventListener('click', close);
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') close();
  });
}

// =========================================
// Scroll Reveal
// =========================================
function initScrollReveal() {
  const elements = document.querySelectorAll('[data-reveal]');
  if (!elements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px',
    }
  );

  elements.forEach((el) => observer.observe(el));
}

// =========================================
// Smooth anchor scrolling
// =========================================
function initAnchorScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const offset = 80; // nav height
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
}

// =========================================
// Active nav link based on current page
// =========================================
function initActiveNav() {
  const path = window.location.pathname;
  document.querySelectorAll('.nav-link, .mobile-menu-link').forEach((link) => {
    const href = link.getAttribute('href');
    if (!href) return;

    // Normalize both
    const linkPath = href.split('#')[0];
    const currentPage = path.split('/').pop() || 'index.html';

    if (
      linkPath === `/${currentPage}` ||
      (currentPage === '' && linkPath === '/index.html') ||
      (currentPage === 'index.html' && linkPath === '/') ||
      linkPath === path
    ) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// =========================================
// Init all
// =========================================
document.addEventListener('DOMContentLoaded', () => {
  initLoader();
  initNav();
  initMobileMenu();
  initScrollReveal();
  initAnchorScroll();
  initActiveNav();
});
