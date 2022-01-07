import React from 'react';

import {kasa} from '../../data/picto.js';
import './index.css';
 
class Footer extends React.Component {

    render() {
        return (
            <footer>
                <div className="logo">{kasa}</div>
                <div className="copyright">© 2020 Kasa. All rights reserved</div>
            </footer>
        )
    }
}
export default Footer;