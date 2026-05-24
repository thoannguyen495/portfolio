/* Expandable project cards */

document.addEventListener("DOMContentLoaded", () => {

  const learnMoreButtons =
    document.querySelectorAll(".learn-more-btn");

  learnMoreButtons.forEach((button) => {

    button.addEventListener("click", () => {

      const extraInfo = button.nextElementSibling;

      extraInfo.classList.toggle("show");

      button.textContent =
        extraInfo.classList.contains("show")
          ? "Show Less"
          : "Learn More";

    });

  });

  /* Contact form validation */

  const form = document.querySelector("form");

  form.addEventListener("submit", (event) => {

    const name =
      document.querySelector('input[name="name"]').value.trim();

    const email =
      document.querySelector('input[name="email"]').value.trim();

    const message =
      document.querySelector('textarea[name="message"]').value.trim();

    if (name === "" || email === "" || message === "") {

      event.preventDefault();

      alert("Please fill in all fields.");

    } else {

      alert("Message sent successfully!");    } });});
