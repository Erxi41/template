const $playlists = document.querySelector('#playlists');

async function getPlaylistsSerega() {
  const url = "https://api.spotify.com/v1/playlists/4eDP60dozhUYWSaiJvTzqw"
  return await request(url, 'GET');
}

async function getPlaylistsPhonk() {
  const url = "https://api.spotify.com/v1/playlists/37i9dQZF1DWWY64wDtewQt"
  return await request(url, 'GET');
}

async function getPlaylistsShlepa() {
  const url = "https://api.spotify.com/v1/playlists/71Cq08P9gdUCXix16Gw1dA"
  return await request(url, 'GET');
}

async function getPlaylistsNami() {
  const url = "https://api.spotify.com/v1/playlists/0SEw3LE8NY58qC6i4U3CVx"
  return await request(url, 'GET');
}

async function getPlaylists() {
  const url = "https://api.spotify.com/v1/playlists/0go5cJ42UZJ4TRMeMVl1G1"
  return await request(url, 'GET');
}
  
const playlists = [getPlaylistsSerega(),getPlaylistsPhonk(),getPlaylistsShlepa(),getPlaylistsNami(),getPlaylists()];


playlists.forEach((value)=>value.then((item) => 
{
  $playlists.insertAdjacentHTML(
      'beforeend',
      `<div>
      <a class="links" href="index.html">
        <img class="cover" src="${item.images[0].url}">
        <p class="box">${item.name}</p>
        <p class="box2">Автор: ${item.owner.display_name}</p>
      </a>
    </div>`,
  );
}))
