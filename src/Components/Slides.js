import React from 'react';
import PropTypes from 'prop-types';

import {arrowLeft, arrowRight} from '../data/picto.js';

import '../css/Slides.css';
 
class Slides extends React.Component {

    constructor(props) {
        super(props);

        this.state = {      
            images: props.images,
            currentImageIndex: 0
        };  
    }

    componentDidMount(){
        
    }

    changeSlide(direction = 0)
    {
        var futureSlide = this.state.currentImageIndex + direction;
        const maxImage = this.state.images.length - 1;

        if(futureSlide < 0)
            futureSlide = maxImage;
        if(futureSlide > maxImage)
            futureSlide = 0

        this.setState({ currentImageIndex: futureSlide });
    }

    render() {
        const {images, currentImageIndex} = this.state;
        return (
            <div className='slides'>
                <div className={`prevSlide slides__swipe ${images.length <= 1 ? 'hidden' : ''}`} onClick={this.changeSlide.bind(this,-1)}>{arrowLeft}</div>
                {
                    images.map( (image,key) => 
                        <div key={key} className={`slide ${currentImageIndex !== key ? 'hidden' : ''}`}>
                            <img src={image} alt='appartement'/>
                            <p className='slide__position'>{currentImageIndex+1}/{images.length}</p>
                        </div>
                    )
                }
                <div className={`nextSlide slides__swipe ${images.length <= 1 ? 'hidden' : ''}`} onClick={this.changeSlide.bind(this,1)}>{arrowRight}</div>
            </div>
        )
    }
}
export default Slides;

Slides.propTypes = { 
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
};