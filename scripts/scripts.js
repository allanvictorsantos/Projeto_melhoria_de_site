
      // CORREÇÃO: O script agora espera o DOM carregar completamente antes de executar
      document.addEventListener("DOMContentLoaded", () => {
        // Lógica para Animação de Scroll
        const sections = document.querySelectorAll(".fade-in-section");
        const observerOptions = {
          root: null,
          rootMargin: "0px",
          threshold: 0.15,
        };
        const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          });
        }, observerOptions);
        sections.forEach((section) => {
          observer.observe(section);
        });

        // Lógica para Menu Ativo
        const navLinks = document.querySelectorAll(".main-nav a");
        const allSections = document.querySelectorAll("main > section");
        window.addEventListener("scroll", () => {
          let current = "";
          allSections.forEach((section) => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 150) {
              current = section.getAttribute("id");
            }
          });
          navLinks.forEach((link) => {
            link.classList.remove("active-link");
            if (link.getAttribute("href").includes(current)) {
              link.classList.add("active-link");
            }
          });
        });

        // Seleção de todos os elementos
        const hamburgerBtn = document.getElementById("hamburger-btn");
        const mainNav = document.getElementById("main-nav");
        const loadMoreBtn = document.getElementById("load-more-btn");
        const hiddenTestimonials = document.querySelectorAll(
          ".testimonial-card.hidden"
        );
        const backToTopBtn = document.getElementById("back-to-top-btn");
        const accessibilityBtn = document.getElementById("accessibility-btn");
        const accessibilityPanel = document.getElementById(
          "accessibility-panel"
        );
        const closeAccessPanelBtn =
          document.getElementById("close-access-panel");
        const toggleThemeBtn = document.getElementById("toggle-theme");
        const increaseFontBtn = document.getElementById("increase-font");
        const decreaseFontBtn = document.getElementById("decrease-font");
        const body = document.body;
        const html = document.documentElement;

        // Adição de event listeners com verificação de existência do elemento
        if (hamburgerBtn && mainNav) {
          hamburgerBtn.addEventListener("click", () =>
            mainNav.classList.toggle("active")
          );
        }

        if (loadMoreBtn) {
          loadMoreBtn.addEventListener("click", () => {
            hiddenTestimonials.forEach(
              (card) => (card.style.display = "block")
            );
            loadMoreBtn.style.display = "none";
          });
        }

        window.addEventListener("scroll", () => {
          if (backToTopBtn) {
            backToTopBtn.classList.toggle("visible", window.scrollY > 300);
          }
        });

        if (accessibilityBtn && accessibilityPanel) {
          accessibilityBtn.addEventListener("click", () =>
            accessibilityPanel.classList.toggle("active")
          );
        }

        if (closeAccessPanelBtn && accessibilityPanel) {
          closeAccessPanelBtn.addEventListener("click", () =>
            accessibilityPanel.classList.remove("active")
          );
        }

        if (toggleThemeBtn) {
          toggleThemeBtn.addEventListener("click", () =>
            body.classList.toggle("light-theme")
          );
        }

        let currentFontSize = 16;
        const updateFontSize = () =>
          (html.style.fontSize = `${currentFontSize}px`);

        if (increaseFontBtn) {
          increaseFontBtn.addEventListener("click", () => {
            if (currentFontSize < 28) {
              currentFontSize++;
              updateFontSize();
            }
          });
        }

        if (decreaseFontBtn) {
          decreaseFontBtn.addEventListener("click", () => {
            if (currentFontSize > 14) {
              currentFontSize--;
              updateFontSize();
            }
          });
        }
      });
 