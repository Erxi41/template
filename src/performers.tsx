import React from 'react';

export default function performers (props: { image: string; name: string; type: string }) {
    return (
      <div>
      <a className="links" href="index.html">
        <img className="cover" src={props.image} alt="cover-img"></img>
        <p className="box">
          {props.name}
        </p>
        <p className="box2">
            {props.type}
        </p>  
        </a>
    </div>
  );
}