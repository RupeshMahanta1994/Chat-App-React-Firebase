import React from 'react'
import "./Login.scss";
import Sidebar from '../components/Sidebar'
import ChatBox from '../components/ChatBox'


const Home = () => {
    return (
        <div className='homePage'>
            <Sidebar />
            <ChatBox />

        </div>
    )
}

export default Home
