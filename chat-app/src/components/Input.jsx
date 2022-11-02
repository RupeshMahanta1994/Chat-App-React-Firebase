import React from 'react'

export default function Input() {
    return (
        <div className="input">
            <input type="text" placeholder='Write Something' />
            <input type="file" />
            <button>Send</button>

        </div>
    )
}