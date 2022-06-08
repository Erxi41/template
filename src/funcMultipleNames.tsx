import React from 'react';

export default function multipleNames(artists : any[]){
    let authors = [];
    for (let i = 0; i < artists.length; i++){
      if (i == artists.length - 1)
        authors[i] = artists[i].name;
      else
        authors[i] = artists[i].name + ",";
    }
    return authors;
}