import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

import '../css/Home.css';
 
class Home extends React.Component {  
    render() {
        return (
            <div id="home">
                <Header location={window.location.pathname} />
                <Footer />
            </div>
        )
    }
}
export default Home;
