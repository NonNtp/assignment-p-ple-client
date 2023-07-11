import React, { useState, useEffect } from 'react'
import axios from 'axios'
import "./Home.css"

const Home = () => {
    const [value, setValue] = useState([])

    const fetchData = async () => {
        const response = await axios.get(
            'http://localhost:8082/api/v1/employee')
        setValue(response.data)
    }

    useEffect(() => {
        fetchData()
        // eslint-disable-next-line
    }, [])

    return (
        <div className='card-container'> 
            {value.map((data, index) => {
                return (
                    <div key={index}>
                        <div className="card">
                        {data.imageName ? <img src={`http://localhost:8082/api/v1/employee/image/download/${data.imageName}`} alt={data.firstName} /> : <img src={`https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png`} alt="default" />}
                            <div className="card-info">
                                <h3 className="card-title">Id : {data.employeeCode}</h3>
                                <p className="card-description">Name : {data.employeeName}</p>
                                <p className="card-email">Position : {data.position}</p>
                                <button className="card-button">View Profile</button>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Home

