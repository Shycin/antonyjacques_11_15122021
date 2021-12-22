import React from 'react';
import PropTypes from 'prop-types';

import {star} from '../data/picto.js';

import '../css/Rating.css';
 
class Rating extends React.Component {  

    constructor(props) {
        super(props);

        this.state = {
            Rates: null
        }
    }

    componentDidMount()
    {
        const elements = [];
        for(let i = 0; i < this.props.maxrate; i++){
            elements.push(<div key={i} className={`${ i < this.props.rate ? 'rateActive' : '' } `}>{star}</div>);
        }
        this.setState({Rates: elements});
    }

    render() {
        return (
            <div className="rating">
                {
                    this.state.Rates?.map( (rate) => {
                        return (rate)
                    })
                }
            </div>
        )
    }
}
export default Rating;


Rating.defaultProps = {
    rate: 0,
    maxrate: 5,
}

Rating.propTypes = { 
    rate: PropTypes.number.isRequired,
    maxrate: PropTypes.number.isRequired,
};
