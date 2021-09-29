import React, { useState } from 'react';
import AccordionItem from './AccordionItem';
import { contents } from './data'
import './accordion.css'



const Accordion = (props) => {
    const [clicked, setClicked] = useState(0)
    const handleToggle = (index) => {
        if (index === clicked) return setClicked(0)
        setClicked(index)
    }
    return (
        <ul className='accordion'>
            {contents.map((content, index) => (
                <AccordionItem key={index} content={content} onToggle={() => handleToggle(index)} active={clicked === index} />
            ))}
        </ul>
    );
}

export default Accordion;
