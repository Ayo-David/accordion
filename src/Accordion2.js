import React from 'react';

import './accordion.css'



const Accordion = ({ children }) => {
    return (
        <ul className='accordion'>
            {children}
        </ul>
    );
}

export default Accordion;
