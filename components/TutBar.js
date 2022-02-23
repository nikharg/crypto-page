import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

const TutBar = () => {
    const [cross, setCross] = useState(false)

    return (
        <div className={`tut-bar ${cross ? "hide-tut" : ""}`}><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, cum.</p>
            <div className="button"><p>Tutorial</p></div>
            <img src="/bitcoin-tut.png" alt="tut" className='tut-image' />
            <div className="cross" onClick={() => setCross(!cross)}><FontAwesomeIcon icon={faXmark} className="icon" /></div>
        </div>
    )
}

export default TutBar