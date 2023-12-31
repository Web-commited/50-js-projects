const cupButton=document.querySelector('.cup')
const cupIcon=document.getElementById('smallcup')
const background=document.querySelector('.background')
let cups=0

cupButton.addEventListener('click',()=>{
    cupIcon.classList.add('fa-bounce')
    cupButton.classList.add('active')
    background.style.height=`${cups*10}%`
    cups++
    setTimeout(()=>{
        cupIcon.classList.remove('fa-bounce')
        cupButton.classList.remove('active')
    },500)
    
})

