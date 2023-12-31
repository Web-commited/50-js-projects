const tagArr=document.getElementById('tags')
const textarea=document.getElementById('textarea')
const finchoice=document.querySelector('.finchoice')

textarea.addEventListener('keyup',(ev) => {
    createTags(ev.target.value)
    if(ev.key=='Enter'){
        while(finchoice.hasChildNodes()){
            finchoice.removeChild(finchoice.firstChild)
        }
        setTimeout(() => {
            ev.target.value = ''
        },10)
        randomSelect()
    }
})

function createTags(value){
    //split by comma, filter out whitespace and empty strings
    const tags = value.split(',')
        .filter(tag => tag.trim() !== '')
        .map(tag => tag.trim())
    tagArr.innerHTML = ''
    tags.forEach(element => {
        const tagEl = document.createElement('span')
        tagEl.classList.add('tag')
        tagEl.innerText = element
        tagArr.appendChild(tagEl)
    });


}

function randomSelect(){
    const randTime=25
    const randInterval = setInterval(() => {
        const randomTag = pickRandomTag()
        randomTag.classList.add('highlight')
        setTimeout(() => {
            randomTag.classList.remove('highlight')
        },80)
    },80)
    setTimeout(()=>{
        clearInterval(randInterval)
        setTimeout(()=>{
            const randomTag=pickRandomTag()
            finchoice.appendChild(randomTag)
            finchoice.classList.add('active')
            randomTag.classList.add('highlight')
        },80)
    },randTime * 80)

}

function pickRandomTag(){
    const tags=document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random() * tags.length)]
}

