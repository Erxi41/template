export default function sidebar(){
    return  (
        <div className="sidebar">
              <a className="links" href="/">
              <input type="image" className="banner" src="images/Spotify_Logo_RGB_White.png" alt="img"/>
              </a>
            <div className="navigation">
                <ul className="style_for_ul">
                  <li className="style_for_li">
                    <a className="links" href="/">
                      <input type="image" className="navigation_img" src="images/house.jpg" alt="img"/> 
                      Главная
                    </a>
                  </li>
                  <li className="style_for_li">
                    <a className="links" href="/">
                      <input type="image" className="navigation_img" src="images/751463.png" alt="img"/> 
                      Поиск
                    </a>
                  </li>
                  <li className="style_for_li">
                    <a className="links" href="/">
                      <img className="navigation_img" src="images/Bergmann-Bilder.png" alt="img"/> 
                      Медиатека
                    </a>
                  </li>
                </ul>
            </div>
            <div className="functions">
              <ul className="style_for_ul">
                <li className="style_for_li">
                  <a className="links" href="/">
                    <input type="image" className="navigation_img" src="images/plus.png" alt="img"/> 
                    Создать плейлист
                  </a>
                </li>
                <li className="style_for_li">
                <a className="links" href="/">
                  <img className="navigation_img" src="images/heart.png" alt="img"/> 
                  Любимые треки
                </a>
                </li> 
              </ul>
            </div>
            <div className="application">
              <a className="links" href="/">
                <input type="image" className="navigation_img" src="images/download.png" alt="img"/> 
                Скачать 
              </a>
            </div>
        </div>
            );
}