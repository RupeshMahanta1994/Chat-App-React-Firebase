import React from 'react'
import "./comp.scss"

export default function Search() {
    return (
        <>
            <div className="search">
                <div className="searchForm">
                    <input type="text" placeholder='Enter contact name' />
                </div>

                <div className="userChat">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBcg5OV7m4Ojt-6P7o0JwzgBcZosZwisJw0A&usqp=CAU" alt="" />
                    <div className="userChatInfo">
                        <span>Billo</span>
                    </div>
                </div>
            </div>

        </>
    )
}