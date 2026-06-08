// Reusable Components: Navbar and Footer

const navbarTemplate = `
  <header class="header">
    <div class="container nav">
      <a href="/index.html" class="logo-container">
        <img src="/images/logo.jpg" alt="SkillArion Logo" class="brand-logo">
        <div class="logo-text-wrapper">
          <span class="logo-title">SkillArion Development</span>
          <span class="logo-tagline">Bridging Academia to Industry Excellence</span>
        </div>
      </a>
      
      <button class="mobile-menu-btn">☰</button>
      
      <nav class="nav-links">
        <a href="/index.html" class="nav-link">Home</a>
        <a href="/index.html#about" class="nav-link">About Us</a>
        <a href="/animal-ai.html" class="nav-link">Animal Emotion Detection</a>
        <a href="#contact" class="btn btn-primary" style="padding: 0.5rem 1rem;">Partnerships</a>
      </nav>
    </div>
  </header>
`;

const footerTemplate = `
  <footer class="footer" id="contact">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-col">
          <a href="/index.html" class="logo-container" style="margin-bottom: 1rem;">
            <img src="/images/logo.jpg" alt="SkillArion Logo" class="brand-logo">
            <div class="logo-text-wrapper">
              <span class="logo-title">SkillArion</span>
            </div>
          </a>
          <p class="text-muted" style="margin-bottom: 1rem;">
            Pioneering the future of AI in education and animal welfare.
          </p>
        </div>
        
        <div class="footer-col">
          <h4>Products</h4>
          <ul class="footer-links">
            <li><a href="/animal-ai.html">Animal Emotion Detection & Protection System</a></li>
          </ul>
        </div>
        
        <div class="footer-col">
          <h4>Company</h4>
          <ul class="footer-links">
            <li><a href="/index.html#about">About Us</a></li>
            <li><a href="/index.html#vision">Vision & Mission</a></li>
            <li><a href="/index.html#partnerships">Partnerships</a></li>
          </ul>
        </div>
        
        <div class="footer-col">
          <h4>Contact</h4>
          <ul class="footer-links">
            <li><a href="mailto:info@skillariondevelopment.in">info@skillariondevelopment.in</a></li>
            <li><a href="tel:+917673925472">+91 76739 25472</a></li>
          </ul>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p>&copy; 2026 SkillArion Development. All Rights Reserved.</p>
      </div>
    </div>
  </footer>
`;

export function injectComponents() {
  const app = document.getElementById('app');
  if (!app) return;

  // Insert Navbar at the top
  app.insertAdjacentHTML('afterbegin', navbarTemplate);
  
  // Insert Footer at the bottom
  app.insertAdjacentHTML('beforeend', footerTemplate);
}
