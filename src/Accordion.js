import React, { useState } from 'react';
import AccordionItem from './AccordionItem';
import { contents } from './data'
import './accordion.css'

const Accordion = (props) => {
    //from outside, only one clicked is set for all the accordion 
    //and it changes as you click on any of the accordion
    const [clicked, setClicked] = useState("0") //if useState(0) as number and not string "0", the first accordion will automatically open onload
    const handleToggle = (index) => {
        if (index === clicked) return setClicked(0)
        setClicked(index)
    }
    return (
        <ul className='accordion'>
            {contents.map((content, index) => (
                <AccordionItem key={index} keyis={index} content={content} onToggle={() => handleToggle(index)} active={clicked === index} />
            ))}
        </ul>
    );
}

export default Accordion;
