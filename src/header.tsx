
export default function header(){
    return  (
        <div className="header">
        <a className="links" href="/">
          <input type="image" className="left_arrow" src="images/left.png" alt="img"/>
        </a>
        <a className="links" href="/">
          <input type="image" className="right_arrow" src="images/right.png" alt="img"/>
        </a>
        <a className="reg" href="/">
          <h3 className="style_for_h3">Регистрация</h3>
        </a>
        <a className="user" href="/">
          <h3 className="style_for_h3">Войти</h3>
        </a>
    </div>
    );
}