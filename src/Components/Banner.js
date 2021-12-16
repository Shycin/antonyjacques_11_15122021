import React from 'react';

import banner from '../img/banner.png';
import '../css/Banner.css';
 
class Banner extends React.Component {

    render() {
        return (
            <div>
                <div className="banner">
                    <h1 className='title'>
                        Chez vous, <br />
                        partout et ailleurs
                    </h1>
                    <img src={banner} alt="Bannière" />
                </div>
            </div>
        )
    }
}
export default Banner;