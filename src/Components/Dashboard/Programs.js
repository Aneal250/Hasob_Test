import React, { useState } from 'react'
import AddProgramsModal from '../Modals/AddProgramsModal'
import add from '../../img/add.svg'
import './Programs.css'

function Programs() {

    const [showModal, setShowModal] = useState(false)

    const ShowModal = () => {
        setShowModal(true)
    }

    const HideModal = () => {
        setShowModal(false)
    }

    return (
        <div className="container">
            <div className="row py-3">
                <div className="col-md-2">
                    <h3>Programs</h3>
                </div>
                <div className="col-md-4"></div>
                <div className="col-md-2">
                    <button onClick={ShowModal} >Add+</button>
                </div>
                <div className="col-md-4">
                    <select id="" class="form-select">
                        <option>Filter</option>
                    </select>
                    {/* <input type="text" className="form-control" id="username" placeholder="filter" /> */}
                </div>
            </div>

            {/* Modal Container */}
            {showModal && <AddProgramsModal HideModal={HideModal} />}

            {/* Semester List */}
            <div className="table_container">
                <table class="table">
                    <thead class="table-dark">
                        <tr>
                            <th scope="col">S/N</th>
                            <th scope="col">Program Code</th>
                            <th scope="col">Program Name</th>
                            <th scope="col">Department</th>
                            <th scope="col">Degree Name</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>E001</td>
                            <td>Electrical Engineering</td>
                            <td>Electrical</td>
                            <td>Undergraduate B-Eng</td>
                            <td><a href="http://">View</a><span>|</span><a href="http://">Edit</a></td>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>E001</td>
                            <td>Electrical Engineering</td>
                            <td>Electrical</td>
                            <td>Undergraduate B-Eng</td>
                            <td><a href="http://">View</a><span>|</span><a href="http://">Edit</a></td>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>E001</td>
                            <td>Electrical Engineering</td>
                            <td>Electrical</td>
                            <td>Undergraduate B-Eng</td>
                            <td><a href="http://">View</a><span>|</span><a href="http://">Edit</a></td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Programs
