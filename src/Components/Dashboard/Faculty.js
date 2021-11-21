import React, { useState } from 'react'
import AddFacultyModal from '../Modals/AddFacultyModal'
import CardFaculty from '../UI/CardFaculty'

function Faculty() {

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
                    <h3>Faculty</h3>
                </div>
                <div className="col-md-4"></div>
                <div className="col-md-2">
                    <button onClick={ShowModal}>Add+</button>
                </div>
                <div className="col-md-4">
                    <select id="" class="form-select">
                        <option>Filter</option>
                    </select>
                </div>
            </div>
            {showModal && <AddFacultyModal HideModal={HideModal} />}
            <CardFaculty />
        </div>
    )
}

export default Faculty
