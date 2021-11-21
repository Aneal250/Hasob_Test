import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import Button from '../UI/Button'
import close from '../../img/close.svg'
import './LoginModal.css'
import CardModal from '../UI/CardModal';
import { LoggedIn, LoggedOut } from '../Store/authSlice'

function LoginModal(props) {

    const dispatch = useDispatch()


    const [isLoggedIn, setisLoggedIn] = useState(false)

    const history = useHistory()

    const loggedIn = () => {
        setisLoggedIn(true)
        dispatch(LoggedIn())
        history.replace('/dashboard')
    }

    return (
        <CardModal>
            <div className="mt-3 d-flex justify-content-end"><img src={close} alt="" onClick={props.hideModal} /></div>
            <h2 className="text-center">Welcome Back</h2>
            <p className="text-center">Learn on Your own, Study Course work, Titles on your own</p>
            <div className="mb-3">
                <label for="username" className="form-label">Username</label>
                <input type="email" className="form-control" id="username" />
            </div>
            <div className="mb-3">
                <label for="username" className="form-label">Password</label>
                <input type="password" className="form-control" id="username" />
                <div id="emailHelp" className="form-text mb-4">Between 6 to 12 Characters</div>
            </div>
            <button className="login_button" onClick={loggedIn}>Login </button>
        </CardModal>

    )
}

export default LoginModal
