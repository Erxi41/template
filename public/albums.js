const $albums = document.querySelector('#albums');

async function getAlbums() {
  const url = "https://api.spotify.com/v1/albums?ids=1SyTRxa2OlwnzXGyrGtfOU,6oBf10h9vqPnaA3GXuxgrZ,"+
  "3ONBhOKlsQ6MTyaWlM7EJE"
  return await request(url, 'GET');
}
  
debugger;
const albums = getAlbums();
albums.then((data) => {
    data.albums.forEach((item) => {
        $albums.insertAdjacentHTML(
        'beforeend',
        `<div>
            <a class="links" href="index.html">
            <img class="cover" src="${item.images[0].url}">
            <p class="box">${item.name}</p>
            <p class="box2">${multipleNames(item)}</p>
            </a>
        </div>`,
        );
    });
});