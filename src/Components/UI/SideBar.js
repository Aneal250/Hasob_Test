import React from 'react'
import logo from '../../img/Logo.png'
import email from '../../img/email.svg'
import phone from '../../img/phone.svg'
import link from '../../img/link.svg'
import logout from '../../img/logout_black.svg'
import notification from '../../img/notification.svg'
import './SideBar.css'

function SideBar() {
    return (
        <div className="container p-2 ">
            <div className="row mb-4">
                <div className="col-6"></div>
                <div className="col-2">
                    <img src={notification} alt="" />
                </div>
                <div className="col-2">
                    <img src={logout} alt="" />
                </div>
            </div>
            <div className="card p-1 mb-4 sidebar">
                <div className="row mb-4">
                    <div className="col-5">
                        <img src={logo} alt="" class="img-thumbnail logo_img" />
                    </div>
                    <div className="col">
                        <h6>Moshood Abiola Polytechnic Abeaokuta (MAPOLY)</h6>
                    </div>
                </div>
                <div className="row">
                    <div className="col-2 ">
                        <img src={email} alt="" className="px-1" />
                    </div>
                    <div className="col">
                        <p className="links">rector@mapoly.edu.ng</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-2">
                        <img src={phone} alt="" className="px-1" />
                    </div>
                    <div className="col">
                        <p className="links">07063332134</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-2">
                        <img src={link} alt="" className="px-1" />
                    </div>
                    <div className="col">
                        <p className="links">https://monopoly.edu.ng</p>
                    </div>
                </div>
            </div>
            <div className="card date mb-4">

            </div>
            <div className="card quick_links p-2">
                <h5>Quick Links</h5>
                <p className="q_links">Staff Forum</p>
                <p className="q_links">Learning Resources</p>
                <p className="q_links">Time Table</p>
            </div>

        </div>
    )
}

export default SideBar
