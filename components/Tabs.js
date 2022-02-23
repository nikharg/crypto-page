import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

const Tabs = ({userData}) => {
    
    const [active, setActive] = useState(1)

    const truncate = (str) => {
        return str.substring(0, 5) + ".." + str.slice(35)
    }
    const toggleState = (i) => {
        setActive(i)
    }

    return (
        <div className="tabs">
            <div className="select-tab">
                <div onClick={() => toggleState(1)} className={`tab first-tab ${active === 1 ? "active" : ""}`}  >
                    <p>First Tab</p>
                    <div className="line"></div>
                </div>
                <div onClick={() => toggleState(2)} className={`tab second-tab ${active === 2 ? "active" : ""}`}>
                    <p>Second Tab</p>
                    <div className="line"></div>
                </div>
            </div>
            <div className="info">
                <div className="titles">
                    <div className="title"><p>ASSET</p></div>
                    <div className="title"><p>AMOUNT</p></div>
                    <div className="title"><p>USER ACCOUNT</p></div>
                    <div className="title"><p>REFERRAL EARNING</p></div>
                </div>
                <div className={`details ${active === 1 ? "active-user" : ""}`}>
                    <div className="tab asset">
                        <img src={userData.data[0].img} alt="btc" />
                        <div className="info">
                            <p>{userData.data[0].asset}</p>
                            <div className="detail">
                                <p>{userData.data[0].type}</p>
                                <div className="btn">
                                    <img src={userData.data[0].chain.img} alt="avax" />
                                    <p>{userData.data[0].chain.name}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab amount">
                        <p>{userData.data[0].amount} BNB</p>
                        <div className="status">
                            <p>{userData.data[0].state}</p>
                        </div>
                    </div>
                    <div className="tab user">
                        <p>{truncate(userData.data[0].user)}</p>
                    </div>
                    <div className="tab referral">
                        <p>{userData.data[0].referral_earnings}. BNB</p>
                        <div className="link">
                            <p>View on BSC Scan</p>
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="icon" />
                        </div>
                    </div>
                </div>

                <div className={`details ${active === 2 ? "active-user" : ""}`}>
                    <div className="tab asset">
                        <img src={userData.data[1].img} alt="btc" />
                        <div className="info">
                            <p>{userData.data[1].asset}</p>
                            <div className="detail">
                                <p>{userData.data[1].type}</p>
                                <div className="btn">
                                    <img src={userData.data[1].chain.img} alt="avax" />
                                    <p>{userData.data[1].chain.name}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab amount">
                        <p>{userData.data[1].amount} BNB</p>
                        <div className="status">
                            <p>{userData.data[1].state}</p>
                        </div>
                    </div>
                    <div className="tab user">
                        <p>{truncate(userData.data[1].user)}</p>
                    </div>
                    <div className="tab referral">
                        <p>{userData.data[1].referral_earnings}. BNB</p>
                        <div className="link">
                            <p>View on BSC Scan</p>
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="icon" />
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Tabs