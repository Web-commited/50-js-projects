const counter=document.querySelector('.counter')

counter.innerText='0'
let target=0

function updateCounter(){
    counter.innerText=`${target++}`
}

const count=setInterval(updateCounter,1000)