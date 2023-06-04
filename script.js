let first = document.getElementById("first")
console.log(first)

let second = document.getElementsByTagName("h1")
console.log(second[0]);

let third = document.getElementsByClassName("a1")
console.log(third);

let fourth = document.getElementsByTagName("h1")
console.log(fourth[2]);

fourth[2].innerHTML = "Hello World"

let fifth = document.querySelector(".hello")
console.log(fifth)

function here(){
    fifth.innerHTML = "Welcome to Elevation academy"
}


let a = document.getElementById('style')
a.style.color='red'

let b = document.querySelector('.box')
let count = true;
function bx(){
    // b.style.display='block'
    // b.style.color. ='red'
    if(count){
        b.style.display='block'
        b.style.gap = '10px'
        count = false
        b.style.Color='red'
    }
    else{
        b.style.display='flex'
        count = true;
    }
    // b.style.flex-direction ='coloumn'
    // b.style.background-color ="red"
}


let c = document.querySelectorAll('h1')


c[6].addEventListener('click',()=>{
    function startClock(){
        let time = new Date();
        
        let hrs = time.getHours();
        let min = time.getMinutes();
        let sec = time.getSeconds();
        let AMPM = "AM"

        if(hrs>12){
            hrs-=12;
            ampm = "pm"
        }
        console.log(`Time : ${hrs}:${min}:${sec}:${AMPM}`);
        
        c[7].innerHTML = `${hrs}:${min}:${sec}:${AMPM}`
    }

setInterval(()=>{
    startClock()
},1000)
})