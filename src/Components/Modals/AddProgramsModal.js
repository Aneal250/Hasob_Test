import React, { useState } from 'react'
import CardModal from '../UI/CardModal'

function AddProgramsModal(props) {


    return (
        <CardModal>
            <p className="text-center mt-2">Edit Program</p>
            <div className="mb-2">
                <label for="username" className="form-label">Username</label>
                <input type="email" className="form-control" id="username" />
            </div>
            <div className="mb-2">
                <div className="row">
                    <div className="col">
                        <label for="username" className="form-label">Password</label>
                        <input type="password" className="form-control" id="username" />
                    </div>
                    <div className="col">
                        <label for="username" className="form-label">Password</label>
                        <input type="password" className="form-control" id="username" />
                    </div>
                </div>
            </div>
            <div className="mb-2">
                <div className="row">
                    <div className="col">
                        <label for="username" className="form-label">Departments</label>
                        <input type="password" className="form-control" id="username" />
                    </div>
                    <div className="col">
                        <label for="username" className="form-label">Degree</label>
                        <input type="password" className="form-control" id="username" />
                    </div>
                </div>
            </div>
            <div><p>Requirements</p></div>
            <div className="mb-2">
                <div className="row">
                    <div className="col">
                        <label for="username" className="form-label">Departments</label>
                        <input type="password" className="form-control" id="username" />
                    </div>
                    <div className="col">
                        <label for="username" className="form-label">Degree</label>
                        <input type="password" className="form-control" id="username" />
                    </div>
                </div>
            </div>
            <div className="mb-4">
                <div className="row">
                    <div className="col">
                        <label for="username" className="form-label">Maximiun Credit Load</label>
                        <input type="password" className="form-control" id="username" />
                    </div>
                    <div className="col">
                        <label for="username" className="form-label">Program Logo (Optional)</label>
                        <input type="password" className="form-control" id="username" />
                    </div>
                </div>
            </div>
            <div className="row">
                <div class="d-flex justify-content-around">
                    <button onClick={props.HideModal} >Cancel</button>
                    <button>Save</button>
                </div>
            </div>
        </CardModal>
    )
}

export default AddProgramsModal
