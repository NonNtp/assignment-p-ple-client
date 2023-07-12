import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import "./Home.css"
import { useHistory } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.css'


const Home = () => {
    const history = useHistory()
    const [searchResults, setSearchResults] = useState([])
    const [isLoading, setIsLoading] = useState(false);

    const searchInputRef = useRef(null);

    const fetchData2 = async () => {
        const searchTerm = searchInputRef.current.value;

        setIsLoading(true);
        try {
            const response2 = await axios.get(
                `http://localhost:8082/api/v1/employee?employeeName=${searchTerm}`)
            setSearchResults(response2.data)
            setIsLoading(false)
        } catch (error) {
            console.log(error);
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchData2()
        // eslint-disable-next-line
    }, [])

    const handleReset = () => {
        setSearchResults([]);
        searchInputRef.current.value = '';
    };


    return (
        <div>

            {isLoading ? <div>
                <p>Loading ... </p>
            </div> : <form>
                <div className='card-container'>
                    {searchResults.map((data, index) => {
                        return (
                            <div key={index}>
                                <div className="card">
                                    {data.imageName ? <img src={`http://localhost:8082/api/v1/employee/image/download/${data.imageName}`} alt={data.firstName} /> : <img src={`https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png`} alt="default" />}
                                    <div className="card-info">
                                        <h3 className="card-title">Id : {data.employeeCode}</h3>
                                        <p className="card-description">Name : {data.employeeName}</p>
                                        <p className="card-email">Position : {data.position}</p>
                                        <button className="card-button btn btn-secondary" onClick={() => history.push(`/profile/${data.employeeCode}`)}>View Profile</button>
                                        <button className="card-button btn btn-primary" onClick={() => history.push(`/edit/${data.employeeCode}`)}>Edit</button>
                                        <button className="card-button btn btn-danger" onClick={async () => {
                                            const isConfirm = window.confirm(
                                                `Are you sure to delete ${data.employeeName} ? `
                                            );
                                            if (isConfirm) {
                                                const response = await axios.delete(
                                                    `http://localhost:8082/api/v1/employee/delete/${data.employeeId}`
                                                );
                                                alert(response.data);
                                                history.go(0);
                                            }
                                        }}>Delete</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}

                </div>
                <label>Search Employee Name : &nbsp;</label>
                <input type="text" ref={searchInputRef} />
                <button onClick={fetchData2}>Search</button>
                <button onClick={handleReset}>Reset</button>
            </form>}
        </div>
    )
}

export default Home

