/* =========================================================
   PORTFOLIO SCRIPT
   Handles: mobile menu, active nav link on scroll,
   scroll-reveal animations, back-to-top button,
   and frontend-only contact form validation.
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* ---------- Mobile hamburger menu ---------- */
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");

  hamburger.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    hamburger.classList.toggle("is-open", isOpen);
    hamburger.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  // Close the mobile menu whenever a nav link is clicked
  navLinks.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("is-open");
      hamburger.classList.remove("is-open");
      hamburger.setAttribute("aria-expanded", "false");
    });
  });

  /* ---------- Active nav link based on scroll position ---------- */
  const sections = document.querySelectorAll("main section[id]");
  const navLinkEls = document.querySelectorAll(".nav-link");

  const setActiveLink = () => {
    let currentSectionId = sections[0]?.id;
    const scrollPos = window.scrollY + 120; // offset for sticky navbar

    sections.forEach((section) => {
      if (scrollPos >= section.offsetTop) {
        currentSectionId = section.id;
      }
    });

    navLinkEls.forEach((link) => {
      const linkTarget = link.getAttribute("href").replace("#", "");
      link.classList.toggle("active-link", linkTarget === currentSectionId);
    });
  };

  window.addEventListener("scroll", setActiveLink);
  setActiveLink();

  /* ---------- Scroll reveal animations ---------- */
  // Add the .reveal class to the main content blocks we want to animate in.
  const revealTargets = document.querySelectorAll(
    ".section-head, .about-grid, .skills-grid, .timeline, .projects-grid, .cert-grid, .achievements-grid, .resume-inner, .contact-grid"
  );
  revealTargets.forEach((el) => el.classList.add("reveal"));

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealTargets.forEach((el) => revealObserver.observe(el));

  /* ---------- Back to top button ---------- */
  const backToTop = document.getElementById("backToTop");

  window.addEventListener("scroll", () => {
    backToTop.classList.toggle("is-visible", window.scrollY > 500);
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  /* ---------- Contact form (frontend-only) ---------- */
  const contactForm = document.getElementById("contactForm");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const messageError = document.getElementById("messageError");
  const formSuccess = document.getElementById("formSuccess");

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const clearErrors = () => {
    [nameInput, emailInput, messageInput].forEach((input) =>
      input.classList.remove("input-error")
    );
    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
  };

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    clearErrors();
    formSuccess.textContent = "";

    let isValid = true;

    if (nameInput.value.trim().length === 0) {
      nameError.textContent = "Please enter your name.";
      nameInput.classList.add("input-error");
      isValid = false;
    }

    if (!emailPattern.test(emailInput.value.trim())) {
      emailError.textContent = "Please enter a valid email address.";
      emailInput.classList.add("input-error");
      isValid = false;
    }

    if (messageInput.value.trim().length === 0) {
      messageError.textContent = "Please enter a message.";
      messageInput.classList.add("input-error");
      isValid = false;
    }

    if (!isValid) return;

    // No backend is connected. Show a success message and reset the form.
    formSuccess.textContent = "Thanks for reaching out! Your message has been noted.";
    contactForm.reset();
  });
});
