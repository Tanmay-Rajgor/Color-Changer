const colors = ["GREEN", "RED", "RGBA(133,122,200)", "#F15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function (){
          // get random number between 0 - 3
      const randomNumber = getRandomNumber();
           document.body.style.backgroundColor = colors[randomNumber];
           color.textContent = colors[randomNumber];
})

function getRandomNumber(){
    return Math.floor(Math.random() * (3-0+1) + 0);
}