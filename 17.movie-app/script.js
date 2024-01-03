const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=81d536bb42cd0ced68393ba905135e74&page=1'
const IMAGE_URL='https://image.tmdb.org/t/p/w1280'
const SEARCH_URL='https://api.themoviedb.org/3/search/movie?api_key=81d536bb42cd0ced68393ba905135e74&query="' 
const main=document.getElementById('main')
const form=document.getElementById('form')
const search=document.getElementById('search')

getMovies(API_URL)

async function getMovies(url){
    const res=await fetch(url)
    const data= await res.json()
    showMovies(data.results)
    console.log('act')
}

function showMovies(movies){
    main.innerHTML=''
    movies.forEach(movie => {
        const { title, poster_path, vote_average, overview } = movie
        const movieEl=document.createElement('div')
        movieEl.classList.add('movie-card')
        movieEl.innerHTML = `
            <img src="${IMAGE_URL + poster_path}" alt="${title}">
            <div class="movie-info">
          <h3>${title}</h3>
          <span class="${getClassByRate(vote_average)}">${vote_average.toFixed(1)}</span>
            </div>
            <div class="overview">
          <h3>Overview</h3>
          ${overview}
        </div>`
        main.appendChild(movieEl)
    });
}

function getClassByRate(vote_average){
    if(vote_average>=8){
        return 'green'
    }else if(vote_average>=5){
        return 'orange'
    }else{
        return 'red'
    }
}
form.addEventListener('submit',(ev)=>{
    ev.preventDefault()
    console.log('activate')
    const searchVal=search.value
    if(searchVal&&searchVal!==''){
        getMovies(SEARCH_URL+searchVal)
        search.value=''
    }else{
        window.location.reload()
    
    }
})