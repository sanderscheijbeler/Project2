$(document).ready(function(){

   //FAQ section, accordion
   $('.accordion-toggle').on('click', function (){
       $('.turn').removeClass('turn');
       $(this).addClass('turn');
       //wich tab is clicked?
       const tabToShow = $(this).attr('rel');
       //hide current active tab
       $('.active').slideUp(300, showNextTab);
       //Show new one
       function showNextTab(){
         $(this).removeClass('active');

         $('#'+tabToShow).slideDown(300, function (){
             $(this).addClass('active');
         });
         };
   });
});

//// Menu toggle
const menuBtn = document.querySelector(".menu-logo")
const nav = document.querySelector("nav")

menuBtn.addEventListener('click', function(){
  menuBtn.classList.toggle("menu-close");
  nav.classList.toggle("open");
});



//// Form validation on contact page
const name = document.querySelector("#name")
const email = document.querySelector("#email")
const tel = document.querySelector("#tel")
const msg = document.querySelector("#msg")
const feedbackmsg = document.getElementById("sendmsg")
const submitbtn = document.getElementById("send")

const regExName = /^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/
const regExMail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const regExTel = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im


// Fire function on change with the params
name.addEventListener("change", function(){
  const inputName = name.value;
  verifyInput(inputName, regExName)

});

email.addEventListener("change", function(){
  const inputMail = email.value;
  verifyInput(inputMail, regExMail)
});

tel.addEventListener("change", function(){
  const inputTel = tel.value;
  verifyInput(inputTel, regExTel)
});

submitbtn.addEventListener("click", cancelSubmit); // 💩


//Validation a la Sander
function verifyInput(input, regEx){

  if (regEx.test(input)){
    feedbackmsg.innerHTML += `${input} is goed! 🔥 <br>` ;

  } else {
    feedbackmsg.innerHTML += `${input} is onjuist!!!! 💩 <br>`;
  }

};

// small function to prevent the form from resetting
function cancelSubmit(e){
  e.preventDefault()
  document.getElementById('sendmsg').innerHTML = "<p>Zoals ik al zei, dit is alleen het 'Front end' deel van het formulier.</p>"
}
