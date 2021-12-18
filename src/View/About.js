import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

import '../css/About.css';
 
class About extends React.Component {
    render() {
        return (
            <div id="about">
                <Header location={window.location.pathname} />
                <main>
                    about
                </main>
                <Footer />
            </div>
        )
    }
}
export default About;