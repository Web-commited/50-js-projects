const buttons=document.querySelectorAll('.ripple')

buttons.forEach(button=>{
    button.addEventListener('click',function(ev){
        const x=ev.clientX
        const y=ev.clientY
        const absoluteX=x-ev.target.offsetLeft
        const absoluteY=y-ev.target.offsetTop

        const circle=document.createElement('span')
        circle.classList.add('circle')
        circle.style.top=absoluteY+'px'
        circle.style.left=absoluteX+'px'
        this.appendChild(circle)
        setTimeout(()=>{
            circle.remove()
        },500)
    })
})