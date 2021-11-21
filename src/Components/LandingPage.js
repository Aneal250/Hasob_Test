import React from 'react'
import './LandingPage.css'
import Hero from '../img/hero_img.jpg'
import Hero_2 from '../img/hero_img_2.jpg'
import Button from './UI/Button'
import LoginModal from './Modals/LoginModal'
import NavBar from './NavBar'

function LandingPage(props) {


    return (
        <>
            <NavBar />
            <section className="landing-container">
                {props.showModalLogin && <LoginModal hideModal={props.hideModal} />}
                <div className="landing-row">
                    <div className="left">
                        <h1>MOSHOOD ABIOLA POLYTECHNIC</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod tempora dolorem
                            quae beatae explicabo nulla eum ab temporibus quo placeat suscipit veritatis.</p>
                        <div className="button-row">
                            <Button onClick={props.showModal} >Login</Button>
                            <Button >Register</Button>
                        </div>
                    </div>
                    <div className="right">
                        <img className="hero_img" src={Hero_2} alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default LandingPage
