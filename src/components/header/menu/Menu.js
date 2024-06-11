//

import logo from '../../../assets/logo.png'

import './Menu.css'


 const Menu = () => {

    return (
        <>
            <div className="menu">
                <div className="line-menu logo">
                    <a className="btn btn-danger home" href="/">ХуторянинЪ</a>
                </div>
                <nav className="line-menu nav">
                    <a class="btn btn-outline-dark" href="/public/esp8684-wroom-01c">Публикации</a>
                    <a className="btn btn-outline-primary" href="/products">Товары</a> 
                    {/* <a className="btn btn-outline-success" href="/promo">Акции</a> */}
                    <a className="btn btn-outline-warning" href="/support">Тех.поддержка</a>
                    {/* <a className="btn btn-outline-violet" href="/lk">Л.К.</a> */}
                </nav>
            </div>

            <div className="menu-mobile">
                <div className="topmenu logo">
                    <a className="btn btn-outline-danger" href="/">ХуторянинЪ</a>
                </div>  
                <input type="checkbox" id="check" />
                <label for="check">
                    <i className="fa fa-bars fa-lg" aria-hidden="true" id="btn"></i>
                    <i className="fa fa-times fa-lg" id="cancel"></i>
                    
                    <i id="fon"></i>
                </label>
                <div className="sidebar">
                    <header>&nbsp;М&nbsp;Е&nbsp;Н&nbsp;Ю&nbsp;</header>
                    <ul>
                    <li><a className="btn btn-outline-danger" href="/">Главная</a></li>
                    {/* <li><a class="btn btn-outline-dark" href="/public/1">Публикации</a></li> */}
                    <li><a className="btn btn-outline-primary" href="/products">Товары</a></li>
                    <li><a className="btn btn-outline-success" href="/promo">Акции</a></li>
                    <li><a className="btn btn-outline-warning" href="/support">Тех.поддержка</a></li>
                    <li><a className="btn btn-outline-violet" href="/lk">Л.К.</a></li>
                    </ul>
                </div>
            </div>
        </>
    )
 }

 export default Menu
 