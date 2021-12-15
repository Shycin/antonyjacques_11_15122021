import React from 'react';
import Header from '../Components/Header';

import '../css/About.css';
 
class About extends React.Component {
    render() {
        return (
            <div id="about">
                <Header location={window.location.pathname} />
            </div>
        )
    }
}
export default About;