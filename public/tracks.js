const $tracks = document.querySelector('#tracks');

async function getTracks() {
    const url = "https://api.spotify.com/v1/tracks?ids=4stWOQpaEynPUlVAb4Jtw9,1Kp2TF4fFYjJPqEMf1U0RK," +
    "3WgPWpJC7I4M64p1jrKLWH,5MAQgObkQo8YHICDRqdYcg"
    return await request(url, 'GET');
}

const tracks = getTracks();

tracks.then((data) => {
  data.tracks.forEach((item) => {
    $tracks.insertAdjacentHTML(
      'beforeend',
      `<div>
        <a class="links" href="index.html">
          <img class="cover" src="${item.album.images[0].url}">
          <p class="box">${item.name}</p>
          <p class="box2">${multipleNames(item)}</p>
        </a>
      </div>`,
    );
  });
})
  