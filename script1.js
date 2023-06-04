var a1 = document.getElementById("refresh");
//console.log(a1)



let random = Math.floor(Math.random()*100)
//console.log(random);

// let num = document.getElementsByClassName("d1")
// console.log(num.value);
let num = document.querySelector('input')

// let guess = document.getElementsByClassName("d1")
// console.log(guess.value);
let d2 = document.querySelector(".d2")
let cc=document.querySelectorAll('b')
let c2 = document.querySelector('.c2')
let body = document.querySelector('body')

let count=100;
function click1(){
      //console.log(num.value)
      if(parseInt(num.value)>random){
          //  console.log("hign")
         d2.innerHTML = "Your guess is High"
         count--;
        // console.log(count)
         cc[0].innerHTML=count
      } 
      else if(parseInt(num.value)<random){
            console.log('Your Guess is Low');
            d2.innerHTML = "Your guess is Low"
            count--;
         //console.log(count)
         cc[0].innerHTML=count
      }
      else{
          console.log('Hurray You Won')
          d2.innerHTML = "✨ 🏆 Hurray You Won 🏆 ✨"
          count--;
         // console.log(count)
          cc[0].innerHTML=count
          cc[1].innerHTML=count
          c2.innerHTML=num.value
         // body.style.backgroundColor ="linear-gradient(to bottom left, #000066 0%, #ff0066 100%)"
         // body.style.background = "linear-gradient(to bottom, #000066 0%, #ff0066 100%)";
         body.style.background = "linear-gradient(to right, red, blue)";
      }
}

a1.addEventListener('click',function(){
       window.location.reload();
})