import React from 'react'
import './SemesterCard.css'

function SemesterCard() {
    return (
        <div className=" semester_card p-3 mb-3">
            <p>Year 1 Semester 1</p>
            <table className="mb-3" >
                <tr>
                    <td>1</td>
                    <td>EE1 Introduction to Electrical Engineering</td>
                    <td>3 Core</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>EE1 Introduction to Electrical Engineering</td>
                    <td>3 Core</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>EE1 Introduction to Electrical Engineering</td>
                    <td>3 Core</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>EE1 Introduction to Electrical Engineering</td>
                    <td>3 Core</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>EE1 Introduction to Electrical Engineering</td>
                    <td>3 Core</td>
                </tr>
            </table>
            <table>
                <tr>
                    <td><p>Total Credit Units: 23  </p></td>
                    <td><p className="semester_links">Edit</p></td>
                    <td><p className="semester_links">Delete</p></td>
                    <td><p className="semester_links">Add+</p></td>
                </tr>

            </table>
        </div>
    )
}

export default SemesterCard
