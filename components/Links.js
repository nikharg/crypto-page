import { faClone, faHandHoldingDollar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Links = () => {
  return (
    <div className="links">
                <div className="fee">
                    <FontAwesomeIcon icon={faHandHoldingDollar} className="icon" />
                    <h3>12.5%</h3> <span>of fee</span>
                </div>
                <div className="title">
                    <p>Your Referral Link for xyz</p>
                </div>
                <div className="link">
                    <p>https://unityexchange.design</p>
                    <FontAwesomeIcon icon={faClone} className="icon" />
                </div>
            </div>
  )
}

export default Links