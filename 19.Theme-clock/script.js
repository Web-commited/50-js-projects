const hourEl=document.querySelector('.hour')
const minuteEl=document.querySelector('.minute')
const secondEl=document.querySelector('.second')
const time=document.querySelector('.time')
const date=document.querySelector('.date')
const toggle=document.querySelector('.toggle')

const days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
const months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']

toggle.addEventListener('click',(e)=>{
    const html=document.querySelector('html')
    if(html.classList.contains('dark')){
        html.classList.remove('dark')
        e.target.innerHTML='Dark mode'
    }else{
        html.classList.add('dark')
        e.target.innerHTML='Light mode'
    }
})

function setTime(){
    const timeNow = new Date()
    const month = timeNow.getMonth()
    const day = timeNow.getDay()
    const hour = timeNow.getHours()
    const hoursForclock = hour % 12
    const minute = timeNow.getMinutes()
    const second = timeNow.getSeconds()
    hourEl.style.transform=`translate(-50%, -100%) rotate(${scale(hoursForclock,0,11,0,360)}deg)`
    minuteEl.style.transform=`translate(-50%, -100%) rotate(${scale(minute,0,59,0,360)}deg)`
    secondEl.style.transform=`translate(-50%, -100%) rotate(${scale(second,0,59,0,360)}deg)`
    time.innerHTML=`${hoursForclock}:${minute < 10 ? `0${minute}` : minute}:${second < 10 ? `0${second}` : second}`
    date.innerHTML=`${days[day]}, ${months[month]} ${timeNow.getDate()}`
}


function scale(num,in_min,in_max,out_min,out_max){
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min
}

setTime()

setInterval(setTime,1000)