document.querySelector('button').addEventListener('click', GetNasa)

function GetNasa(){
    let choice = document.querySelector('input').value
    console.log(choice)
    const url = `https://superheroapi.com/api.php/10162440883229488/search/${choice}`
    fetch(url)
    .then(res => res.json()) 
    .then(data => {
        // console.log(data)
        console.log(data)
        document.querySelector('h2').innerText = data.results[1].biography.publisher
        document.querySelector('h3').innerText = data.results[1].powerstats.speed
        document.querySelector('img').src = data.results[1].image.url

        let word = data.results[1].biography.publisher
        fetch(`http://www.omdbapi.com/?apikey=92e36a7b&t=${word}`)
        //  console.log(word)
         .then(res => res.json()) 
         .then(data => {
             console.log(word)
             console.log(data)
             document.querySelector('p').innerText = data.Title
             // document.querySelector('h3').innerText = data.results[1].powerstats.speed
             // document.querySelector('img').src = data.results[1].image.url
         })
       
    })

    .catch(err => {
        console.log('error ${err}')
        
    });
    
} 