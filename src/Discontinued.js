import React from 'react';

import imageOui from './assets/oui.jpg';
import imageNo from './assets/grumpy-cat-no-1.jpg';

const Discontinued = (props) => {
    return (
        props.discontinued ?
        <img src={imageOui} alt="oui" style={{margin: '10px', width: '60px'}}/>
        : <img src={imageNo} alt="non" style={{margin: '10px', width: '60px'}}/>
    );
}

export default Discontinued;