import React from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../Components/Header';
import Slides from '../Components/Slides';
import Footer from '../Components/Footer';

import dataAPI from '../data/appart.json';

import '../css/Logement.css';
 
class Logement extends React.Component {  

    constructor(props) {
        super(props);

        const id = this.props.match.params.id;
        this.state = {      
            appart: dataAPI.filter( (appart) => appart.id === id)[0]
        };  
    }

    render() {
        return (
            <div id="home">
                <Header location={window.location.pathname} />
                <main>
                    <Slides images={this.state.appart.pictures}/>
                    {this.state.appart.id}
                </main>
                <Footer />
            </div>
        )
    }
}
export default withRouter(Logement);
