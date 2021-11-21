import React from 'react'
import './Button.css'

function Button(props) {
    return (
        <div>
            <button onClick={props.onClick} type={props.type}>{props.children}</button>
        </div>
    )
}

export default Button
