import { faWallet } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const TopBar = () => {
    return (
        <div className="top-bar">
            <div className="title">
                <h2>Section</h2>
                <div className='line'></div>
            </div>
            <div className="wallet">
                <FontAwesomeIcon icon={faWallet} className="icon" />
                <div className="price"><p>0.2 $XYZ</p></div>
                <div className="tier"><p>Tier 1</p></div>
            </div>
        </div>
    )
}

export default TopBar