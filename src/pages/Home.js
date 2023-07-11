import React, { useState, useEffect } from 'react'
import axios from 'axios'
import "./Home.css"
import { useHistory } from 'react-router-dom'

const Home = () => {
    const history = useHistory()
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
                        {data.imageName ? <img src={`http://localhost:8082/api/v1/employee/image/download/${data.imageName}`} alt={data.firstName} /> : <img src={`https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png`} alt="default" />}
                            <div className="card-info">
                                <h3 className="card-title">Id : {data.employeeCode}</h3>
                                <p className="card-description">Name : {data.employeeName}</p>
                                <p className="card-email">Position : {data.position}</p>
                                <button className="card-button" onClick={() => history.push(`/profile/${data.employeeCode}`)}>View Profile</button>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Home

