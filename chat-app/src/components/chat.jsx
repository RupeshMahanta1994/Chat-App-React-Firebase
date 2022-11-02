import React from 'react'
import "./comp.scss"
import Messages from './Messages'
import Input from './Input'
import VideoC from '../images/video-camera.png'
import addFriend from '../images/add-user.png'
import menu from '../images/menu.png'

export default function Chat() {
    return (
        <>
            <div className="chat">
                <div className="chatInfo">
                    <h3>Username</h3>
                    <div className="chaticons">
                        <img src={VideoC} alt="" />
                        <img src={addFriend} alt="" />
                        <img src={menu} alt="" />

                    </div>
                </div>

                <Messages />
                <Input />
            </div>
        </>
    )
}