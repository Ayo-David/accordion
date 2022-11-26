import React, { useRef, useState } from 'react';
import './accordionItem.css'

const AccordionItem = ({ key, content, onToggle, active, keyis }) => {
    //with inner clicked, each accordion has it own clicked state 
    //and each changes as you click on a specific accordion
    //to achieve this we can use a boolean state for each accordionitem.
    //this boolean is peculiar ro each accordion item and changes per each
    const [clicked, setClicked] = useState(0)
    const { question, answer } = content
    //console.log('key:', keyis)
    //console.log('clicked:', clicked)
    const getHeight = useRef()

    const handleToggle = (index) => {
        if (index === clicked) return setClicked(0)
        setClicked(index)
    }
    return (
        <li className='accordion__item' key={key}>
            {/* <button className="button" onClick={onToggle}> */}
            <button className="button" onClick={() => handleToggle(key)}>
                {question}
                <span className="control">{key !== clicked ? "+" : "-"}</span>
                {/* <span className="control">{active ? "+" : "-"}</span> */}
            </button>
            <div className={`content__wrapper ${key === clicked ? "content__open" : ''} `}>
                {/* <div className={`content__wrapper ${active ? "content__open" : ''} `}> */}
                {/* <div ref={getHeight} className='content__wrapper' style={key === clicked ? { height: getHeight.current.scrollHeight } : { height: "0px" }}> */}
                <div className="answer">{answer}</div>
            </div>
            <hr />
        </li>
    );
}

export default AccordionItem;
