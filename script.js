const learnMoreButtons=document.querySelectorAll(".learn-more-btn");

learnMoreButtons.forEach((button)=>{
  button.addEventListener("click",()=>{

    const extraInfo = button.nextElementSibling;

    if (extraInfo.style.display=="block"){
      extraInfo.style.display="none";
      button.textContent="LearnMore";
    }

    else {
      extraInfo.style.display="block";
      button.textContent="Show Less";
    }
  });
});

const form=document.querySelector("form");

form.addEventListener("submit", (event) =>
  {
    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const message = document.querySelector('textarea[name="message"]').value;
    if (name===""||email===""||message===""){
      event.preventDefault();
      alert("Please fill in all fields.");}});


      
