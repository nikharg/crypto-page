import React, { useEffect, useState } from 'react'
import axios from 'axios'
import TopBar from './TopBar'
import TutBar from './TutBar'
import RewardBar from './RewardBar'
import LinkBar from './LinkBar'
import Tabs from './Tabs'

const middle = () => {

    const [userData, setUserData] = useState()
    const url = "https://raw.githubusercontent.com/akshita151199/APIs/main/data";

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get(url)
                setUserData(response.data)
            } catch (error) {
                console.log(error.message);
            }
        }
        fetchUserData()
    }, [setUserData])

    if (userData) {
        return (
            <section className="middle inactive">
                <TopBar/>
                <TutBar/> 
                <RewardBar/>
                <LinkBar/>
                <Tabs userData={userData} />
            </section>
        )
    }
    else {
        return (
            <h1>Loading...</h1>
        )
    }
}

export default middle