/*Expandable project cards*/
document.addEventListener("DOMContentLoaded",()=>{
  const learnMoreButtons=document.querySelectorAll(".learn-more-btn"); 
  
  learnMoreButtons.forEach((button)=>{
    button.addEventListener("click",()=>{

      const extraInfo = button.nextElementSibling;
      
      /*Show/hide project information */
      extraInfo.style.display =
        extraInfo.style.display === "block" ? "none" : "block";

      button.textContent =
        extraInfo.style.display === "block" ? "Show Less" : "Learn More";
    });
  });

/*Contact form validation*/
const form=document.querySelector("form");

form.addEventListener("submit", (event) =>
  {
    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const message = document.querySelector('textarea[name="message"]').value;
    if (name===""||email===""||message===""){
      event.preventDefault();
      alert("Please fill in all fields.");}});});


      
