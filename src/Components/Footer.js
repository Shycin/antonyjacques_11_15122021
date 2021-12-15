import React from 'react';

import logo from '../img/logo_white.svg';
import '../css/Footer.css';
 
class Footer extends React.Component {

    render() {
        return (
            <footer>
                <div className="logo"><img src={logo} alt="Logo" /></div>
                <div className="copyright">© 2020 Kasa. All rights reserved</div>
            </footer>
        )
    }
}
export default Footer;