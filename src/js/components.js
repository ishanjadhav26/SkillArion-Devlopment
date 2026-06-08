// Reusable Components: Navbar and Footer

const navbarTemplate = `
  <header class="header">
    <div class="container nav">
      <a href="/index.html" class="logo-container">
        <img src="/images/logo.jpg" alt="SkillArion Logo" class="brand-logo">
        <div class="logo-text-wrapper">
          <span class="logo-title">SkillArion Development</span>
          <span class="logo-tagline">Decoding Animal Intelligence Through Artificial Intelligence</span>
        </div>
      </a>
      
      <button class="mobile-menu-btn">☰</button>
      
      <nav class="nav-links">
        <a href="#vision" class="nav-link">Moonshot</a>
        <a href="#challenges" class="nav-link">Challenges</a>
        <a href="#stack" class="nav-link">Intelligence Stack</a>
        <a href="#research" class="nav-link">Research Lab</a>
        <a href="#roadmap" class="nav-link">Roadmap</a>
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
            Building foundational AI systems that enable communication, understanding, protection, and intelligence between humans and animals.
          </p>
        </div>
        
        <div class="footer-col">
          <h4>Explore</h4>
          <ul class="footer-links">
            <li><a href="#vision">The Moonshot Vision</a></li>
            <li><a href="#stack">Architecture Stack</a></li>
            <li><a href="#research">R&D Lab</a></li>
            <li><a href="#roadmap">Future Roadmap</a></li>
          </ul>
        </div>
        
        <div class="footer-col">
          <h4>Vision 2035</h4>
          <ul class="footer-links">
            <li><a href="#vision2035">Universal Platform</a></li>
            <li><a href="#vision2035">Veterinary AI</a></li>
            <li><a href="#vision2035">Wildlife Conservation</a></li>
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
