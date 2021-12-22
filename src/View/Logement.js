import React from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../Components/Header';
import Slides from '../Components/Slides';
import Rating from '../Components/Rating';
import Collapse from '../Components/Collapse';
import Footer from '../Components/Footer';

import dataAPI from '../data/appart.json';

import RenderValueInString from '../Components/RenderValueInString';
import RenderArrayInString from '../Components/RenderArrayInString';

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
        const {
            pictures,
            title,
            description,
            equipments,
            tags,
            rating,
            host,
            location
        } = this.state.appart

        return (
            <div id="home">
                <Header location={window.location.pathname} />
                <main>
                    <Slides images={pictures}/>
                    <div className='flex_container description'>
                        <div className='left'>
                            <h1 id="title">{title}</h1>
                            <div id="location">{location}</div>
                            <div id="tags">
                                {
                                    tags.map( (tag, index) => {
                                        return (<div className='tag' key={index}>{tag}</div>)
                                    })
                                }
                            </div>
                        </div>
                        <div className='right'>
                            <div id="author">
                                <h2 id="authorName">{host.name.split(' ')[0]}<br/>{host.name.split(' ')[1]}</h2>
                                <div id="authorPicture"><img src={host.picture} alt="auteur"/></div>
                            </div>
                            <div id="rating">
                                <Rating rate={parseInt(rating)} maxrate={5}/>
                            </div>
                        </div>
                    </div>
                    <div className='flex_container information'>
                        <Collapse name="Description" description={<RenderValueInString value={description}/>} />
                        <Collapse name="Équipements" description={<RenderArrayInString array={equipments}/>} />
                    </div>
                </main>
                <Footer />
            </div>
        )
    }
}
export default withRouter(Logement);
