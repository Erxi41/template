const client_id = '28f8eb4f59284f899690424d836cef63';
const client_secret = '916beb7bd1fb4922ad4fb9d062401fb7';

async function getToken() {
  try {
    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      body: 'grant_type=client_credentials',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Basic ' + btoa(client_id + ':' + client_secret),
      },
    });
    const token = await response.json();
    return token.access_token;
  } catch (e) {
    console.log(e);
  }
}
  

const request = async (url, method) => {
  const token = await getToken();
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ` + token,
  };

  try {
    const response = await fetch(url, {
      method: method,
      headers: headers,
    });

    return response.json();
  } catch (err) {
    console.error('Error', err);
  }
};
  
function multipleNames(item){
  let authors = [];
  for (let i = 0; i < item.artists.length; i++){
    if (i == item.artists.length - 1)
      authors[i] = item.artists[i].name;
    else
      authors[i] = item.artists[i].name;
  }
  return authors;
}

