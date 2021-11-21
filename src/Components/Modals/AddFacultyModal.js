import React from 'react'
import CardModal from '../UI/CardModal'

function AddFacultyModal(props) {

    return (
        <CardModal>
            <p className="text-center mt-2">Create New Faculty</p>
            <div className="mb-2">
                <label for="username" className="form-label">Name</label>
                <input type="email" className="form-control" id="username" />
            </div>
            <div className="mb-2">
                <div className="row">
                    <div className="col">
                        <label for="username" className="form-label">ID</label>
                        <input type="password" className="form-control" id="username" />
                    </div>
                    <div className="col">
                        <label for="username" className="form-label">Phone</label>
                        <input type="password" className="form-control" id="username" />
                    </div>
                </div>
            </div>
            <div className="mb-2">
                <div className="row">
                    <div className="col">
                        <label for="username" className="form-label">Email</label>
                        <input type="password" className="form-control" id="username" />
                    </div>
                    <div className="col">
                        <label for="username" className="form-label">Web Page</label>
                        <input type="password" className="form-control" id="username" />
                    </div>
                </div>
            </div>
            <div className="mb-2">
                <label for="username" className="form-label">Address</label>
                <input type="email" className="form-control" id="username" />
            </div>
            <div className="mb-4">
                <div className="row">
                    <div className="col">
                        <label for="username" className="form-label">Head of Faculty</label>
                        <input type="password" className="form-control" id="username" />
                    </div>
                    <div className="col">
                        <label for="username" className="form-label">Faculty Logo(optional)</label>
                        <input type="password" className="form-control" id="username" />
                    </div>
                </div>
            </div>
            <div class="d-flex justify-content-around">
                <button onClick={props.HideModal}>cancel</button>
                <button>update</button>
            </div>

        </CardModal>
    )
}

export default AddFacultyModal
