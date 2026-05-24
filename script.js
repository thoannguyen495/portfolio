document.addEventListener("DOMContentLoaded", () => {

  /* Navbar scroll effect */
  const header = document.querySelector("header");
  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 30);
  });

  /* Scroll reveal — with guaranteed fallback after 800ms */
  const revealEls = document.querySelectorAll(".reveal");

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.05 });

  revealEls.forEach(el => revealObserver.observe(el));

  // Fallback: reveal everything that is still hidden after 800ms
  setTimeout(() => {
    revealEls.forEach(el => el.classList.add("revealed"));
  }, 800);

  /* Animated counters */
  const statNumbers = document.querySelectorAll(".stat-number");
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.target);
        let current = 0;
        const increment = target / 60;
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) { current = target; clearInterval(timer); }
          el.textContent = Math.floor(current) + (el.dataset.suffix || "");
        }, 20);
        counterObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  statNumbers.forEach(el => counterObserver.observe(el));

  /* Learn More toggle */
  document.querySelectorAll(".learn-more-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const extraInfo = button.closest(".project-header").nextElementSibling;
      const isOpen = extraInfo.classList.contains("open");
      extraInfo.classList.toggle("open", !isOpen);
      button.textContent = isOpen ? "Learn More" : "Show Less";
      button.classList.toggle("active", !isOpen);
    });
  });

  /* Contact form validation */
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", (event) => {
      const name = form.querySelector('input[name="name"]').value.trim();
      const email = form.querySelector('input[name="email"]').value.trim();
      const message = form.querySelector('textarea[name="message"]').value.trim();
      if (!name || !email || !message) {
        event.preventDefault();
        showToast("Please fill in all fields.");
      }
    });
  }

  /* Toast */
  function showToast(msg) {
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.textContent = msg;
    document.body.appendChild(toast);
    setTimeout(() => toast.classList.add("show"), 10);
    setTimeout(() => {
      toast.classList.remove("show");
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  }

  /* Typing animation */
  const roles = ["Entrepreneur", "Lewis & Clark Scholar", "Student Leader", "Mathematician", "Problem Solver"];
  let roleIndex = 0, charIndex = 0, deleting = false;
  const typingEl = document.getElementById("typing-text");
  if (typingEl) {
    function typeLoop() {
      const current = roles[roleIndex];
      if (!deleting) {
        typingEl.textContent = current.slice(0, ++charIndex);
        if (charIndex === current.length) { deleting = true; setTimeout(typeLoop, 1800); return; }
      } else {
        typingEl.textContent = current.slice(0, --charIndex);
        if (charIndex === 0) { deleting = false; roleIndex = (roleIndex + 1) % roles.length; }
      }
      setTimeout(typeLoop, deleting ? 55 : 90);
    }
    typeLoop();
  }
});
