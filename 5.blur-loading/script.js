const background=document.querySelector('.bg')
const loading=document.querySelector('.load')

let loader=0

let intercalc=setInterval(update,30)

function update(){
    loader++
    if (loader > 99){
        clearInterval(intercalc)
    }
    loading.innerText=`${loader}%`
    background.style.filter=`blur(${scale(loader,0,100,30,0)}px)`
    loading.style.opacity=`${scale(loader,0,100,1,0)}`
}



// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  }
