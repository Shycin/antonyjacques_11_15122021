import React from 'react';
import { Link } from 'react-router-dom';

import dataAPI from '../../data/appart.json';
import './index.css';
 
class Gallery extends React.Component {

    constructor(props) {
        super(props);
        this.state = {      
            data: []
        };  
    }

    componentDidMount() {
        this.setState({ data: dataAPI })
    }

    render() {
        return (
            <div className='gallery'>
                {
                    this.state.data.map( (appart,key) =>
                        <Link to={"/Fiche-Logement/" + appart.id} key={key}>
                            <div className='gallery__card'>
                                <div className='gallery__card__background'></div>
                                <div className='gallery__card__image'>
                                    <img src={appart.cover} alt={appart.title}/>
                                </div>
                                <div className='gallery__card__title'>
                                    {appart.title}
                                </div>
                            </div>
                        </Link> 
                    )
                }
            </div>
        )
    }
}
export default Gallery;