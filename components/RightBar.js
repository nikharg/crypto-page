import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowLeft, faArrowRightFromBracket, faArrowUpRightFromSquare, faWallet } from '@fortawesome/free-solid-svg-icons'

const RightBar = () => {
  return (
    <div className="right-bar">
            <div className="btns">
              <div className="cryptoDrop">
                <img src="/avalanche-avax-logo.png " alt="avax" />
                <p>Avalanche</p>
                <FontAwesomeIcon icon={faArrowDown} className="icon" />
              </div>
              <div className="wallet">
              <FontAwesomeIcon icon={faWallet} className="icon wallet-icon" />
                <p>0xf6...1353</p>
                <FontAwesomeIcon icon={faArrowDown} className="icon-arrow" />
              </div>
            </div>
            <div className="link-sec">
              <div className="title">
                <FontAwesomeIcon icon={faArrowLeft} className="icon" />
                <p>Custom Link</p>
              </div>
              <div className="link">
                <p>https://testnet.xyz.xyz/trade?ref=</p>
                <input type="text" placeholder='ENTER' />
              </div>
              <div className="btns">
                <div className="cLink">
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="icon" />
                  <p>Custom Link</p></div>
                <div className="cancel">
                  <FontAwesomeIcon icon={faArrowRightFromBracket} className="icon" />
                  <p>Cancel</p></div>
              </div>
            </div>
          </div>
  )
}

export default RightBar