import React from 'react';
import Header from '../Components/Header';

import '../css/Home.css';
 
class Home extends React.Component {  
    render() {
        return (
            <div id="home">
                <Header location={window.location.pathname} />
            </div>
        )
    }
}
export default Home;
