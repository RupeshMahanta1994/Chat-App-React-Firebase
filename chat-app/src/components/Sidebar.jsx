import React from 'react'
import UserDetails from './UserDetails'
import ContactList from './ContactList'

const Sidebar = () => {
    return (
        <div className='sideBar'>
            <UserDetails />
            <ContactList />
        </div>
    )
}

export default Sidebar
