import React from 'react';
import { Link } from 'react-router-dom';

import {kasa} from '../data/picto.js';
import '../css/Header.css';
 
class Header extends React.Component {

    render() {
        const { location } = this.props;
        return (
            <header>
                <div className="logo">{kasa}</div>
                <nav>
                    <ol>
                        <li>
                            <Link className={`home ${location==='/' ? "active" : ""}`} to="/">Accueil</Link>
                        </li>
                        <li>
                            <Link className={`about ${location==='/about' ? "active" : ""}`} to="/about">A Propos</Link>
                        </li>
                    </ol>
                </nav>
            </header>
        )
    }
}
export default Header;
