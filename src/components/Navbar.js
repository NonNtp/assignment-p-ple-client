import React, { useState, useEffect } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import axios from 'axios'


import './Navbar.css'


const Navbar = () => {
    const [company, setCompany] = useState([])

    const fetchData = async () => {
        const response = await axios.get(
            'http://localhost:8082/api/v1/company')
        setCompany(response.data)
      
    }

    useEffect(() => {
        fetchData()
        // eslint-disable-next-line
    }, [])

    return (
        <div>
            <nav className="navbar">
                <div className="logo">
                    {company.map((data, index) => {
                        return (
                            <NavLink to="/" key={index}>{data.companyName}</NavLink>
                        )
                    })}
                </div>
                <ul className="nav-links">
                    <li><NavLink to="/" exact>Home</NavLink></li>
                    <li><NavLink to="/employee">Employee</NavLink></li>
                    <li><NavLink to="/department">Department</NavLink></li>
                </ul>
            </nav>
        </div>

    )
}

export default withRouter(Navbar)