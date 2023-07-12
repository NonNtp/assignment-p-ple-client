import React, { useState, useEffect } from 'react'
import axios from 'axios'

import "./Department.css"

const Department = () => {
  const [department, setDeaprtment] = useState([])
  const [position, setPosition] = useState([])
  const [departmentId, setDepartmentId] = useState(0);



  const fetchData = async () => {
    const response = await axios.get(
      'http://localhost:8082/api/v1/department')
    setDeaprtment(response.data)

  }

  const fetchData2 = async () => {
    const response = await axios.get(
      `http://localhost:8082/api/v1/position/${departmentId}`)
    setPosition(response.data)
  }

  useEffect(() => {
    fetchData()
    fetchData2()
    // eslint-disable-next-line
  }, [departmentId])

  return (
    <div>
      <label htmlFor='company'>Department : &nbsp;</label>
      <select onChange={(event) => setDepartmentId(event.target.value)} >
      <option value={0} label='Please select department name'></option>
        {department.map((department, index) => {
          return (
            <option
              key={index}
              value={department.departmentId}
              label={department.departmentName}
            ></option>
          )
        })}
      </select>
      
      <table className="table">
        <thead>
          <tr>
            <th>positionId</th>
            <th>positionName</th>
            <th>positionDescription</th>
            <th>employmentType</th>
            <th>positionLevel</th>
            <th>startingSalary</th>
            <th>maxSalary</th>
          </tr>
        </thead>
        <tbody>
          {position.map((item, index) => (
            <tr key={index}>
              <td>{item.positionId}</td>
              <td>{item.positionName}</td>
              <td>{item.positionDescription}</td>
              <td>{item.employmentType}</td>
              <td>{item.positionLevel}</td>
              <td>{item.startingSalary}</td>
              <td>{item.maxSalary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Department