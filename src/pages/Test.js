import React from 'react'
import "./Test.css"

const Test = () => {
    return (
        <div>
            <div className="card">
                {/* <img src="employee.jpg" alt="Employee Image" /> */}
                <div className="card-info">
                    <h3 className="card-title">John Doe</h3>
                    <p className="card-description">Software Engineer</p>
                    <p className="card-email">john.doe@example.com</p>
                    <button className="card-button">View Profile</button>
                </div>
            </div>
        </div>
    )
}

export default Test