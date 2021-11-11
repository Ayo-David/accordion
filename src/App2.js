import React, { useState } from 'react'
import './App.css';
import Header from './Header';
import Accordion from './Accordion2';
import { contents } from './data'
import AccordionItem from './AccordionItem2';


function App() {
    const [clicked, setClicked] = useState(0)
    const handleToggle = (e) => {
        const key = e
        if (key === clicked) return setClicked(0)
        setClicked(key)
        //console.log(key)
    }
    return (
        <div className="container">
            <div className="app__container">
                <Header />
                <Accordion>
                    {
                        contents.map((faq, i) => (
                            < AccordionItem faq={faq} onClick={() => handleToggle(i)} clicked={clicked} keyis={i} />
                        ))
                    }

                </Accordion>

            </div>
        </div>
    );
}

export default App;
