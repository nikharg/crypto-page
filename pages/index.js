import { useState } from 'react'
import LeftBar from '../components/LeftBar'
import Middle from '../components/Middle'
import RightBar from '../components/RightBar'
import Announcement from '../components/Announcement'


export default function Home(props) {
  const [isToggled, setIsToggled] = useState(true)
  const onToggle = ()=>{
    setIsToggled(!isToggled)
  }

  return (
    <>
      <main className="main-container">
        <Announcement/>
        <div className={`inner-container ${isToggled?"":"light"}`}>
          <LeftBar isToggled={isToggled} onToggle={onToggle} />
          <Middle />
          <RightBar/>
        </div>
      </main>
    </>
  )
}

