import React from 'react';
import Header from '../../Components/Header';
import Banner from '../../Components/Banner';
import Gallery from '../../Components/Gallery';
import Footer from '../../Components/Footer';

import banner from '../../img/banner.png';

import './index.css';
 
class Home extends React.Component {  
    render() {
        return (
            <div id="home">
                <Header location={window.location.pathname} />
                <main>
                    <Banner banner={banner}>                
                        <h1 className='title'>
                            Chez vous, <br />
                            partout et ailleurs
                        </h1>
                    </Banner>
                    <Gallery />
                </main>
                <Footer />
            </div>
        )
    }
}
export default Home;
