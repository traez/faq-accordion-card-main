/*
#################################
Boomers Playground attempt
#################################

const p = document.getElementsByTagName("p");
const pic = document.getElementsByClassName("pic");
const answer = document.getElementsByClassName("answer");

for( i = 0; i < question.length; i++) {
  question[i].addEventListener('click', function () {
      this.classList.toggle('hide');
  })
};
question.classList.add("bold");

   let sel = e.target;
    console.log(sel);
    console.log(bu);

*/

// This tells the browser to pay attention to the following elements:
(function(){
const question = document.querySelectorAll(".question");

question.forEach((qu) => {
  qu.addEventListener("click", (e) => {
    qu.classList.toggle("bold");
    qu.nextElementSibling.classList.toggle("block");
    qu.children[0].classList.toggle("rotate");
  })
})


})();




