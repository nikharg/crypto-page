import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const RewardBar = () => {
    return (
        <div className="reward-bar">
            <div className="title">
                <p>Your rewards</p>
            </div>
            <div className="amount">
                <div className="amt"><p>$ 0.26231428</p></div>
                <div className="btn">
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="icon" />
                    <p>Custom link</p>
                </div>
            </div>
            <div className="etc">
                <div className="btn"><p>$40 AVAX</p></div>
                <div className="btn"><p>$10 BNB</p></div>
                <div className="btn"><p>$210 BTC</p></div>
            </div>
        </div>
    )
}

export default RewardBar