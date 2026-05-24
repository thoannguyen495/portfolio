document.addEventListener("DOMContentLoaded", () => {

  /* Navbar scroll effect */
  const header = document.querySelector("header");
  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 30);
  });

  /* Animated counter for stats */
  const statNumbers = document.querySelectorAll(".stat-number");
  const observer = new IntersectionObserver((entries) => {
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
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  statNumbers.forEach(el => observer.observe(el));

  /* Scroll reveal */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

  /* Learn More toggle */
  const learnMoreButtons = document.querySelectorAll(".learn-more-btn");
  learnMoreButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const extraInfo = button.nextElementSibling;
      const isOpen = extraInfo.classList.contains("open");
      extraInfo.classList.toggle("open", !isOpen);
      button.textContent = isOpen ? "Learn More" : "Show Less";
      button.classList.toggle("active", !isOpen);
    });
  });

  /* Contact form validation */
  const form = document.querySelector("form");
  form.addEventListener("submit", (event) => {
    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const message = document.querySelector('textarea[name="message"]').value;
    if (name === "" || email === "" || message === "") {
      event.preventDefault();
      showToast("Please fill in all fields.");
    }
  });

  /* Toast notification */
  function showToast(msg) {
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.textContent = msg;
    document.body.appendChild(toast);
    setTimeout(() => toast.classList.add("show"), 10);
    setTimeout(() => { toast.classList.remove("show"); setTimeout(() => toast.remove(), 300); }, 3000);
  }

  /* Typing animation */
  const roles = ["Entrepreneur", "Lewis & Clark Scholar", "Student Leader", "Mathematician", "Problem Solver"];
  let roleIndex = 0, charIndex = 0, deleting = false;
  const typingEl = document.getElementById("typing-text");
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
  if (typingEl) typeLoop();
});
