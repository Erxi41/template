const $performers = document.querySelector('#performers');

async function getPerformers() {
    const url = "https://api.spotify.com/v1/artists?ids=4q3ewBCX7sLwd24euuV69X,5IS4dQ9lDW01IY1buR7bW7," +
    "2znSAMoC2z72k1BNWVMzKW,6iQqWcDg92kre5ykFLwqD8,5K4W6rqBFWDnAN6FQUkS6x"
    return await request(url, 'GET');
  }
  
const performers = getPerformers();

performers.then((data) => {
    for (let i = 0; i < data.artists.length; i++){
        $performers.insertAdjacentHTML(
            'beforeend',
            `<div>
            <a class="links" href="index.html">
              <img class="cover" src="${data.artists[i].images[0].url}">
              <p class="box">${data.artists[i].name}</p>
              <p class="box2">${data.artists[i].type}</p>
            </a>
          </div>`,
        );
    }
})