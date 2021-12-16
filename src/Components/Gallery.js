import React from 'react';

import dataAPI from '../data/appart.json';
import '../css/Gallery.css';
 
class Gallery extends React.Component {

    constructor(props) {
        super(props);
        this.state = {      
            data: []
        };  
    }

    componentWillMount() {
        this.setState({ data: dataAPI })
    }

    render() {
        return (
            <div className='gallery'>
                {
                    this.state.data.map( (appart,key) => 
                        <div key={key} className='gallery__card'>
                            <div className='gallery__card__background'></div>
                            <div className='gallery__card__image'>
                                <img src={appart.cover} alt={appart.title}/>
                            </div>
                            <div className='gallery__card__title'>
                                {appart.title}
                            </div>
                        </div>
                    )
                    /*this.state.data.forEach( (appart) => {
                        <div>{appart.id}</div>
                    })*/
                }
            </div>
        )
    }
}
export default Gallery;