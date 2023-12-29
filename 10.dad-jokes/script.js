const jokeElem=document.getElementById('joke')
const jokeBtn=document.getElementById('jokeBtn')
const comment=["Want some more?","Dad jokes am I right?","Gimme another!","More Dad jokes!","This is traumatizing...",
"Don't spend the whole afternoon here.","I know I did..."]

let commentIdx=0
generateJoke()


async function generateJoke(){
    jokeBtn.innerHTML=comment[commentIdx]
    if(commentIdx==comment.length-1){
        commentIdx=0
    }else{
        commentIdx++
    }
    const config={
        headers:{
            Accept:'application/json',
        },
    }
    

    const res= await(fetch('https://icanhazdadjoke.com',config))
    const data=await res.json()
    jokeElem.innerHTML=data.joke

}
jokeBtn.addEventListener('click',()=>{generateJoke()})
