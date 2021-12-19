import React from 'react';

import leftSign from '../img/chevron-left.svg';
import rightSign from '../img/chevron-right.svg';

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
        return (
            <div className='slides'>
                <div className='prevSlide slides__swipe' onClick={this.changeSlide.bind(this,-1)}><img src={leftSign} alt='previous' /></div>
                {
                    this.state.images.map( (image,key) => 
                        <div key={key} className={`slide ${this.state.currentImageIndex !== key ? 'hidden' : ''}`}>
                            <img src={image} alt='appartement'/>
                        </div>
                    )
                }
                <div className='nextSlide slides__swipe' onClick={this.changeSlide.bind(this,1)}><img src={rightSign} alt='next' /></div>
            </div>
        )
    }
}
export default Slides;