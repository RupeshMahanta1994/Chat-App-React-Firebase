import React from 'react'
import "./comp.scss"

const UserDetails = () => {
    return (
        <div className='UserDetails'>
            <div className="userDetailsLogo">We Chat</div>
            <div className="user">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBcg5OV7m4Ojt-6P7o0JwzgBcZosZwisJw0A&usqp=CAU" alt="" />
                <span>Name</span>
                <button>SignOut</button>
            </div>

        </div>
    )
}

export default UserDetails
