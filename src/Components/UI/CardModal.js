import React from 'react'
import './CardModal.css'

function CardModal(props) {
    return (
        <div className="modal_card" >
            {props.children}
        </div>
    )
}

export default CardModal
