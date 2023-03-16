//

import logo from '../../../assets/logo.png'

import './Logo.css'


const Logo = () => {
    return (
        <div className="Logo">
            <a href="/">
                <img src={logo} className="Logo_img" alt="Логотип Руна Йера" />
            </a>
        </div>
    )
}

export default Logo
