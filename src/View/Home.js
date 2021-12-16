import React from 'react';
import Header from '../Components/Header';
import Banner from '../Components/Banner';
import Gallery from '../Components/Gallery';
import Footer from '../Components/Footer';

import '../css/Home.css';
 
class Home extends React.Component {  
    render() {
        return (
            <div id="home">
                <Header location={window.location.pathname} />
                <main>
                    <Banner />
                    <Gallery />
                </main>
                <Footer />
            </div>
        )
    }
}
export default Home;
