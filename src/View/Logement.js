import React from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../Components/Header';
import Banner from '../Components/Banner';
import Footer from '../Components/Footer';

import dataAPI from '../data/appart.json';

import '../css/Logement.css';
 
class Logement extends React.Component {  

    constructor(props) {
        super(props);
        this.state = {      
            appart: []
        };  
    }

    componentDidMount(){
        const id = this.props.match.params.id;
        
        this.setState({ appart: dataAPI.filter( (appart) => appart.id === id)[0] })
    }

    render() {
        return (
            <div id="home">
                <Header location={window.location.pathname} />
                <main>
                    <Banner />
                    {this.state.appart.id}
                </main>
                <Footer />
            </div>
        )
    }
}
export default withRouter(Logement);
