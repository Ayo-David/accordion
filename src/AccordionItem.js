import React, { useRef, useState } from 'react';
import './accordionItem.css'

const AccordionItem = ({ key, content, onToggle, active }) => {
    const [clicked, setClicked] = useState(0)
    const { question, answer } = content
    //console.log(content)
    const getHeight = useRef()

    const handleToggle = (index) => {
        if (index === clicked) return setClicked(0)
        setClicked(index)
    }
    return (
        <li className='accordion__item' key={key}>
            <button className="button" onClick={() => handleToggle(key)}>
                {question}
                <span className="control">{key !== clicked ? "+" : "-"}</span>
            </button>
            {/* <div className={`content__wrapper ${key === clicked ? "content__open" : ''} `}> */}
            <div ref={getHeight} className='content__wrapper' style={key === clicked ? { height: getHeight.current.scrollHeight } : { height: "0px" }}>
                <div className="answer">{answer}</div>
            </div>
            <hr />
        </li>
    );
}

export default AccordionItem;
