import React from 'react'
import SemesterCard from '../UI/SemesterCard'
import './Semester.css'


function Semester() {
    return (
        <div >
            <div className="container">
                <div className="row py-3">
                    <div className="col-md-2">
                        <h3>Semester</h3>
                    </div>
                    <div className="col-md-4"></div>
                    <div className="col-md-2">
                        <button  >Add</button>
                    </div>
                    <div className="col-md-4">
                        <select id="" class="form-select">
                            <option>Filter</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="s_container p-3 m-3">
                <div className="row mb-4">
                    <table className="p-3">
                        <tr>
                            <td>Programs</td>
                            <td>Electrical Engineering (EE01)</td>
                        </tr>
                        <tr>
                            <td>Type:</td>
                            <td>Undergraduate</td>
                        </tr>
                        <tr>
                            <td>Degree:</td>
                            <td>Bachelor in Bsc</td>
                        </tr>
                        <tr>
                            <td>options:</td>
                            <td>
                                <button>Full Time</button>
                                <button>Full Time</button>
                            </td>
                        </tr>
                    </table>
                </div>
                <div className="row">
                    <div className="col-6">
                        <SemesterCard />
                    </div>
                    <div className="col-6">
                        <SemesterCard />
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <SemesterCard />
                    </div>
                    <div className="col-6">
                        <SemesterCard />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Semester
