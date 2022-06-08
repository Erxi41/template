import React from 'react';

export default function albums (props: { image: string; name: string; author_name: any[] }) {
    return (
      <div>
      <a className="links" href="index.html">
        <img className="cover" src={props.image} alt="cover-img"></img>
        <p className="box">
          {props.name}
        </p>
        <p className="box2">
            {props.author_name}
        </p>  
        </a>
    </div>
  );
}