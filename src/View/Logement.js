import React from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../Components/Header';
import Slides from '../Components/Slides';
import Footer from '../Components/Footer';

import {star} from '../data/picto.js';
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

    star(max, score)
    {
        var elements = [];
        for(let i = 0; i < max; i++){
            elements.push(<div className={`${ i < score ? 'rateActive' : '' } `}>{star}</div>);
        }
        return elements;
    }

    render() {
        return (
            <div id="home">
                <Header location={window.location.pathname} />
                <main>
                    <Slides images={this.state.appart.pictures}/>
                    <div className='flex_container description'>
                        <div className='left'>
                            <h1 id="title">{this.state.appart.title}</h1>
                            <div id="location">{this.state.appart.location}</div>
                            <div id="tags">
                                {
                                    this.state.appart.tags.map( (tag, index) => {
                                        return (<div className='tag' key={index}>{tag}</div>)
                                    })
                                }
                            </div>
                        </div>
                        <div className='right'>
                            <div id="author">
                                <h2 id="authorName">{this.state.appart.host.name.split(' ')[0]}<br/>{this.state.appart.host.name.split(' ')[1]}</h2>
                                <div id="authorPicture"><img src={this.state.appart.host.picture} alt="auteur"/></div>
                            </div>
                            <div id="rating">
                                {
                                    this.star(5,this.state.appart.rating)
                                }
                            </div>
                        </div>
                    </div>

                </main>
                <Footer />
            </div>
        )
    }
}
export default withRouter(Logement);
