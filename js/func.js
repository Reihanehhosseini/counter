let numplus = document.querySelectorAll(".num");
let benefitsEelem =document.querySelector(".benefits")
let flagCounter = false


window.addEventListener("scroll" , function(){
  if(window.scrollY >= benefitsEelem.offsetTop){
    if(!flagCounter){
   numplus.forEach(function(numbers){
    let contentNum = numbers.dataset.count;
    let intervalNum = setInterval(function(){
      if(numbers.textContent == contentNum){
        clearInterval(intervalNum)
      }
      numbers.textContent++

    },1)
   })
   flagCounter = true
  }}
})