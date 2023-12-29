const container=document.querySelector('.container')
const typebox=document.querySelector('.typebox')

window.addEventListener('keydown',(ev)=>{
    container.innerHTML=`<div class="key">
    ${ev.key}
    <small>
        event.key
    </small>
</div>
<div class="key">
    ${ev.keyCode}
    <small>
        event.Keycode
    </small>
</div>
<div class="key">
    ${ev.code}
    <small>
        event.code
    </small>
</div>`
})

window.addEventListener('keydown',(ev)=>{
    if(ev.key!='Backspace'){
        typebox.appendChild(document.createTextNode(`${ev.key}`))
    }
    

})
