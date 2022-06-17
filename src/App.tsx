import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { client_id, client_secret } from './client';
import Header from './header';
import SideBar from './sidebar';
import Player from './player';
import Album from './albums';
import Performer from './performers';
import multipleNames from './funcMultipleNames'
import { ContentSection } from "./contentSection";
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

  function useContent(url: string, action: (value: AxiosResponse<any, any>) => void) {
    useEffect(() => {
      axios
        .get(url, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token,
          },
        })
        .then(action)
        .catch((error) => {
          console.log(error);
        });
    }, [token]);
  }

  useContent(
    "https://api.spotify.com/v1/albums?ids=1SyTRxa2OlwnzXGyrGtfOU,6oBf10h9vqPnaA3GXuxgrZ,3ONBhOKlsQ6MTyaWlM7EJE",
    response => setAlbums(response.data.albums)
  )

  useContent(
    "https://api.spotify.com/v1/artists?ids=4q3ewBCX7sLwd24euuV69X,5IS4dQ9lDW01IY1buR7bW7,2znSAMoC2z72k1BNWVMzKW,6iQqWcDg92kre5ykFLwqD8,5K4W6rqBFWDnAN6FQUkS6x",
    response => setPerfomers(response.data.artists)
  )

  useContent(
    "https://api.spotify.com/v1/tracks?ids=4stWOQpaEynPUlVAb4Jtw9,1Kp2TF4fFYjJPqEMf1U0RK,3WgPWpJC7I4M64p1jrKLWH,5MAQgObkQo8YHICDRqdYcg",
    response => setTracks(response.data.tracks)
  )

  return (
    <div id="root">
        <Header/>
        <SideBar/>
        <div className="content">
            {token ? (
                <>
                <ContentSection
                headerText = "Недавно прослушано"
                sectionId = "albums"
                content = {albums.map(({ id, name, images, artists }) => {
                  return <Album key={id} image={images[0].url} name={name} author_name={multipleNames(artists)} />;
                  })}
                />
                <ContentSection
                headerText = "Популярные исполнители"
                sectionId = "performers"
                content = {performers.map(({ id, type, name, images }) => {
                  return <Performer key={id} image={images[0].url} name={name} type={type} />;
                  })}
                />
                <ContentSection
                headerText = "Чарт треков"
                sectionId = "tracks"
                content = {tracks.map(({ id, name, album, artists }) => {
                  return <Album key={id} image={album.images[0].url} name={name} author_name={multipleNames(artists)} />;
                  })}
                />
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
