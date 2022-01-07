import React from 'react';
import PropTypes from 'prop-types';

import './index.css';
 
class Banner extends React.Component {

    render() {
        const {banner} = this.props
        const title = this.props.children
        return (
            <div className="banner">
                {title}
                <img src={banner} alt="Bannière" />
            </div>
        )
    }
}
export default Banner;

Banner.propTypes = { 
    banner: PropTypes.string.isRequired,
    title: PropTypes.object
};