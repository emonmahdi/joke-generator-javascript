const jokeContainer = document.getElementById('joke');
const btn = document.getElementById('btn');
const url = `https://v2.jokeapi.dev/joke/Programming,Miscellaneous?type=single`

const getJoke =() => {
    jokeContainer.classList.remove('fade')
    fetch(url)
    .then(res => res.json())
    .then(data => {
         jokeContainer.textContent = `${data.joke}`
         jokeContainer.classList.add('fade')
    })
}

btn.addEventListener('click',getJoke )
getJoke();