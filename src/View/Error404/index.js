import React from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import { Link } from 'react-router-dom';

import './index.css';
 
class Error404 extends React.Component {
    render() {
        return (
            <div id="error404">
                <Header location={window.location.pathname} />
                <main>
                    <div className='main_message'>404</div>
                    <div className='second_message'>Oups! La page que vous demandez n'existe pas.</div>
                    <div className='back_home'>
                        <Link to="/">Retourner sur la page d’accueil</Link>
                    </div>
                </main>
                <Footer />
            </div>
        )
    }
}
export default Error404;
