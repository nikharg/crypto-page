import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight, faBorderAll, faChartColumn, faChartLine, faChartPie, faDatabase, faDollarSign, faFileLines, faGlobe, faMoon, faShareNodes, faSignal, faSquarePollVertical, faSun } from '@fortawesome/free-solid-svg-icons'

const LeftBar = ({isToggled, onToggle}) => {
    const [inactive, setInactive] = useState(false)    

  return (
    <nav className={`left-bar ${inactive?"inactive" : ""}`}>
              <div className="user">
                <div className="user-info">
                  <div className="user-avatar"><h2>N</h2></div>
                  <span className='user-name'><h2>Name</h2></span>
                </div>
                <div className="minimize" onClick={()=>setInactive(!inactive)}>
                  {inactive?<FontAwesomeIcon icon={faArrowRight} className="icon" />:<FontAwesomeIcon icon={faArrowLeft} className="icon" />}
                </div>
              </div>
              <div className="navigations">
                <div className="options">
                  <FontAwesomeIcon icon={faBorderAll} className="icon" />
                  <p>Home</p></div>
                <div className="options">
                  <FontAwesomeIcon icon={faSquarePollVertical} className="icon" />
                  <p>Section 1</p></div>
                <div className="options">
                  <FontAwesomeIcon icon={faChartColumn} className="icon" />
                  <p>Section 2</p></div>
                <div className="options">
                  <FontAwesomeIcon icon={faChartLine} className="icon" />
                  <p>Section 3</p></div>
                <div className="options">
                  <FontAwesomeIcon icon={faDollarSign} className="icon" />
                  <p>Section 4</p></div>
                <div className="options">
                  <FontAwesomeIcon icon={faDatabase} className="icon" />
                  <p>Section</p></div>
                <div className="options">
                  <FontAwesomeIcon icon={faChartPie} className="icon" />
                  <p>Section 6</p></div>
                <div className="options">
                  <FontAwesomeIcon icon={faSignal} className="icon" />
                  <p>Section 7</p></div>
                <div className="options">
                  <FontAwesomeIcon icon={faShareNodes} className="icon" />
                  <p>Section 8</p></div>
                <div className="options">
                  <FontAwesomeIcon icon={faFileLines} className="icon" />
                  <p>Documentation</p></div>
              </div>
              <div className="extras">
                <div className="buttons">
                  <div className="price"><div className="user-avatar"><h2>N</h2></div>
                    <p>$0.90</p>
                  </div>
                  <div className="buy"><p>Buy $XYZ</p></div>
                </div>
                <div className="toggles">
                  <FontAwesomeIcon icon={faGlobe} className="icon" />
                  <label className="switch">
                    <input type="checkbox" checked={isToggled} onClick={onToggle}/>
                    <span className='slider'>{ isToggled===true ? <FontAwesomeIcon icon={faMoon} className="moon" /> : <FontAwesomeIcon icon={faSun} className="sun" />}</span>
                  </label>
                </div>
              </div>
            </nav>
  )
}

export default LeftBar