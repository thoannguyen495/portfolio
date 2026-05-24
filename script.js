document.addEventListener("DOMContentLoaded", () => {
  const learnMoreButtons = document.querySelectorAll(".learn-more-btn");

  learnMoreButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const extraInfo = button.nextElementSibling;

      extraInfo.classList.toggle("show");

      button.textContent = extraInfo.classList.contains("show")
        ? "Show Less"
        : "Learn More";
    });
  });

  const form = document.querySelector("form");

  form.addEventListener("submit", (event) => {
    const name = document.querySelector('input[name="name"]').value.trim();
    const email = document.querySelector('input[name="email"]').value.trim();
    const message = document.querySelector('textarea[name="message"]').value.trim();

    if (name === "" || email === "" || message === "") {
      event.preventDefault();
      alert("Please fill in all fields.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      event.preventDefault();
      alert("Please enter a valid email address.");
      return;
    }
  });

  window.addEventListener("scroll", () => {
    const header = document.querySelector("header");

    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();

      const targetId = link.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      targetSection.scrollIntoView({
        behavior: "smooth"
      });
    });
  });
});
