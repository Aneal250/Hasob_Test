import React from 'react'
import logo from '../../img/Logo.png'
import './CardFaculty.css'

function CardFaculty() {
    return (
        <div>
            <div className="card f_card p-4">
                <div className="row">
                    <div className="col-4 px-2">
                        <div className="circle">
                            <img src={logo} alt="" className="fluid image" />
                        </div>
                    </div>
                    <div className="col-1"></div>
                    <div className="col-7 px-2">
                        <h4 className="header">Faculty of Engineering</h4>
                        <p className="para">Engineering Block</p>
                        <p className="para">0803569785678</p>
                        <p className="para_small">facultyofengineering@onopoly.com</p>
                        <p className="para semester_links"><span>Edit</span> || <span>Delete</span></p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardFaculty
