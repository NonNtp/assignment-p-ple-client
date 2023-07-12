import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'

import "./Department.css"

const Department = () => {
  const [department, setDeaprtment] = useState([])
  const [departmentId, setDeaprtmentId] = useState([])
  const [position, setPosition] = useState([])

  const departmentInputRef = useRef()


  const fetchData = async () => {
    const response = await axios.get(
      'http://localhost:8082/api/v1/department')
    setDeaprtment(response.data)
  }

  const fetchData2 = async () => {
    const response = await axios.get(
      `http://localhost:8082/api/v1/position/2`)
    setPosition(response.data)
  }

  useEffect(() => {
    fetchData()
    fetchData2()
    // eslint-disable-next-line
  }, [])



  return (
    <div>
      <label htmlFor='company'>Department : &nbsp;</label>
      <select>
        {department.map((department, index) => {
          return (
            <option
              key={index}
              value={department.departmentName}
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