import React from 'react';
import PropTypes from 'prop-types';

import {arrowUp, arrowDown} from '../../data/picto.js';

import './index.css';
 
class Collapse extends React.Component {

    constructor(props) {
        super(props);

        this.state = {      
           open: false
        };  
    }

    componentDidMount(){
        
    }

    openCollapse()
    {
        if(this.state.open)
            this.setState({open: false})
        else
            this.setState({open: true}) 
    }



    
    render() {
        const {name, description, minHeight} = this.props;
        return (
            <div className='collapse'>
                <div className='collapse__header' onClick={this.openCollapse.bind(this)}><h2 className='collapse__header__name'>{name}</h2><div className='collapse__header__switch'>{this.state.open ? arrowUp : arrowDown }</div></div>
                <div className={`collapse__description ${minHeight ? 'minHeight' : ''} ${this.state.open ? '' : 'hidden'}`}>{description}</div>
            </div>
        )
    }
}
export default Collapse;

Collapse.defaultProps = {
    minHeight: false,
}

Collapse.propTypes = { 
    name: PropTypes.string.isRequired,
    description: PropTypes.object.isRequired,
};