import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import axios from 'axios'

import './Profile.css'

const Profile = () => {
  const history = useHistory()

  const { employeeCode } = useParams()

  const [employee, setEmployee] = useState('')


  const fetchData = async (employeeCode) => {
    const response = await axios.get(
      'http://localhost:8082/api/v1/employee/' + employeeCode)
    setEmployee(response.data)
  }

  useEffect(() => {
    fetchData(employeeCode)
    // eslint-disable-next-line
  }, [employeeCode])




  return (
    <div>
      <p>employeeCode : {employee.employeeCode}</p>
      <p>employeeName : {employee.employeeName}</p>
      <p>email : {employee.email}</p>
      <p>userLogin : {employee.userLogin}</p>
      <p>company : {employee.company}</p>
      <p>department : {employee.department}</p>
      <p>position : {employee.position}</p>
      <p>salary : {employee.salary}</p>
      <p>status : {employee.status}</p>
      {employee.imageName ? <img src={`http://localhost:8082/api/v1/employee/image/download/${employee.imageName}`} alt={employee.firstName} /> : <img src={`https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png`} alt="default" />}

    </div>
  )
}

export default Profile