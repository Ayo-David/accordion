import React, { useRef } from 'react';
import './accordionItem.css'

const AccordionItem = ({ key, faq, onClick, active, clicked, keyis }) => {
    //const [clicked, setClicked] = useState(0)
    const { question, answer } = faq
    console.log(keyis)
    const getHeight = useRef()

    // const handleToggle = (index) => {
    //     if (index === clicked) return setClicked(0)
    //     setClicked(index)
    // }

    //the concept for this solution is that when you click the button it set its key as setClicked
    //and then as it renders it will check if the index === set value and the show the hidden
    //if the button us clicked and set value is same as the index, then reset it to zero
    return (
        <li className='accordion__item' key={keyis}>
            <button className="button" onClick={onClick}>
                {question}
                <span className="control">{keyis !== clicked ? "+" : "-"}</span>
            </button>
            {/* <div className={`content__wrapper ${key === clicked ? "content__open" : ''} `}> */}
            <div ref={getHeight} className='content__wrapper' style={keyis === clicked ? { height: getHeight.current.scrollHeight } : { height: "0px" }}>
                <div className="answer">{answer}</div>
            </div>
            <hr />
        </li>
    );
}

export default AccordionItem;
