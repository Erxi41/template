import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { client_id, client_secret } from './client';
import Header from './header';
import SideBar from './sidebar';
import Player from './player';
import Album from './albums';
import Performer from './performers';
import multipleNames from './funcMultipleNames'
import {IAlbum, IPerformers, ITracks} from './interfaces'

function App() {
  const [token, setToken] = useState('');
  const [albums, setAlbums] = useState<IAlbum[]>([]);
  const [performers, setPerfomers] = useState<IPerformers[]>([]);
  const [tracks, setTracks] = useState<ITracks[]>([]);

  useEffect(() => {
    const data = new URLSearchParams();
    data.append('grant_type', 'client_credentials');
    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Basic ' + btoa(client_id + ':' + client_secret),
    };
    axios
      .post('https://accounts.spotify.com/api/token', data, {
        headers: headers,
      })
      .then((response) => {
        setToken(response.data.access_token);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://api.spotify.com/v1/albums?ids=1SyTRxa2OlwnzXGyrGtfOU,6oBf10h9vqPnaA3GXuxgrZ,"+
      "3ONBhOKlsQ6MTyaWlM7EJE", {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
        },
      })
      .then((response) => {
        setAlbums(response.data.albums);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [token]);

  useEffect(() => {
    axios
      .get("https://api.spotify.com/v1/artists?ids=4q3ewBCX7sLwd24euuV69X,5IS4dQ9lDW01IY1buR7bW7," +
      "2znSAMoC2z72k1BNWVMzKW,6iQqWcDg92kre5ykFLwqD8,5K4W6rqBFWDnAN6FQUkS6x", {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
        },
      })
      .then((response) => {
        setPerfomers(response.data.artists);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [token]);

  useEffect(() => {
    axios
      .get("https://api.spotify.com/v1/tracks?ids=4stWOQpaEynPUlVAb4Jtw9,1Kp2TF4fFYjJPqEMf1U0RK," +
      "3WgPWpJC7I4M64p1jrKLWH,5MAQgObkQo8YHICDRqdYcg", {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
        },
      })
      .then((response) => {
        setTracks(response.data.tracks);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [token]);

  return (
    <div id="root">
        <Header/>
        <SideBar/>
        <div className="content">
            {token ? (
                <>
                <h2 className="style_for_h2">Недавно прослушано</h2>
                <section className="flex-container" id="albums">
                    {albums.map(({ id, name, images, artists }) => {
                    return <Album key={id} image={images[0].url} name={name} author_name={multipleNames(artists)} />;
                    })}
                </section>
                <h2 className="style_for_h2">Популярные исполнители</h2>
                <section className="flex-container" id="performers">
                  {performers.map(({ id, type, name, images }) => {
                    return <Performer key={id} image={images[0].url} name={name} type={type} />;
                  })}
                </section>
                <h2 className="style_for_h2">Чарт треков</h2>
                <section className="flex-container" id="tracks">
                  {tracks.map(({ id, name, album, artists }) => {
                    return <Album key={id} image={album.images[0].url} name={name} author_name={multipleNames(artists)} />;
                  })}
                </section>
                </>
            ): (
                <div>Something went wrong...</div>
            )}
        </div>
        <Player/>
    </div>
  );
}

export default App;
