import React from 'react';

export default function header(){
    return  (
        <div className="player">
          <div className="mini_photo">
            <input type="image" src="images/music.PNG" className="mini" alt="img"/> 
          </div>
          <div className="name">
            <a className="links" href="index.html">
              <span className = "name_">Старое кино</span>
            </a>
          </div>
          <div className="author">
            <a className="links" href="index.html">
              <span className = "author_">Перемотка</span></a>
          </div>
          <div className="like">
            <a className="links" href="index.html">
              <input type="image" src="images/like.PNG" className="icon" alt="img"/>
            </a>
            <a className="links" href="index.html">
              <input type="image" src="images/icon3.PNG" className="icon" alt="img"/>
            </a>
          </div>
          <div>
            <audio controls className="volume"></audio>
          </div>
        </div>
        );
}