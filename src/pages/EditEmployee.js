import React, { useState, useEffect, useRef } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import axios from 'axios'


const EditEmployee = () => {
    const history = useHistory()
    const [employee, setEmployee] = useState('');

    const [company, setCompany] = useState([])
    const [department, setDeaprtment] = useState([])
    const [position, setPosition] = useState([])


    const { employeeCode } = useParams()

    const firstNameInputRef = useRef()
    const lastnameInputRef = useRef()
    const companyInputRef = useRef()
    const salaryInputRef = useRef()
    const contactNumberInputRef = useRef()
    const positionInputRef = useRef()
    const departmentInputRef = useRef()
    const resignedDateInputRef = useRef()
    const statusInputRef = useRef()


    const fetchData = async (employeeCode) => {
        const response = await axios.get(
            'http://localhost:8082/api/v1/employee/' + employeeCode)
        setEmployee(response.data)

        const response4 = await axios.get(
            'http://localhost:8082/api/v1/company'
        )

        const response2 = await axios.get(
            'http://localhost:8082/api/v1/department'
        )
        const response3 = await axios.get(
            'http://localhost:8082/api/v1/position'
        )

        setCompany(response4.data)
        setDeaprtment(response2.data)
        setPosition(response3.data)
    }

    useEffect(() => {
        fetchData(employeeCode)
        // eslint-disable-next-line
    }, [employeeCode])

    const submitHandler = async (event) => {
        event.preventDefault()

        const enteredFirstName = firstNameInputRef.current.value
        const enteredLastName = lastnameInputRef.current.value
        const enteredCompany = companyInputRef.current.value
        const enteredSalary = salaryInputRef.current.value
        const enteredContactNumber = contactNumberInputRef.current.value
        const enteredPosition = positionInputRef.current.value
        const enteredDepartment = departmentInputRef.current.value
        const enteredResignedDate = resignedDateInputRef.current.value
        const enteredStatus = statusInputRef.current.value


        const enteredData = {
            firstName: enteredFirstName,
            lastName: enteredLastName,
            company: enteredCompany,
            salary: enteredSalary,
            contactNumber: enteredContactNumber,
            position: enteredPosition,
            department: enteredDepartment,
            status : enteredStatus ,
            resignedDate : enteredResignedDate
        }

        try {
            await axios.put("http://localhost:8082/api/v1/employee/" + employeeCode, enteredData)
            history.push('/')
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor='firstName'>First Name:</label>
                    <input
                        type="text"
                        id='firstName'
                        ref={firstNameInputRef}
                        required
                        defaultValue={employee.firstName}
                        
                    />
                </div>
                <div>
                    <label htmlFor='lastName'>Last Name:</label>
                    <input
                        type="text"
                        id='lastName'
                        ref={lastnameInputRef}
                        required
                        defaultValue={employee.lastName}
                    />
                </div>

                <div>
                    <label htmlFor='contactNumber'>contactNumber:</label>
                    <input
                        type="text"
                        id='contactNumber'
                        ref={contactNumberInputRef}
                        required
                        defaultValue={employee.contactNumber}
                    />
                </div>
                <div>
                    <label htmlFor='company'>Company:</label>
                    <select ref={companyInputRef}>
                        {company.map((company, index) => {
                            return (
                                <option
                                    key={index}
                                    value={company.companyName}
                                    label={company.companyName}
                                ></option>
                            )
                        })}
                    </select>
                </div>
                <div>
                    <label htmlFor='department'>department:</label>
                    <select ref={departmentInputRef}>
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
                </div>
                <div>
                    <label htmlFor='position'>position:</label>
                    <select ref={positionInputRef}>
                        {position.map((position, index) => {
                            return (
                                <option
                                    key={index}
                                    value={position.positionName}
                                    label={position.positionName}
                                ></option>
                            )
                        })}
                    </select>
                </div>
                <div>
                    <label htmlFor='salary'>salary:</label>
                    <input
                        type="text"
                        id='salary'
                        ref={salaryInputRef}
                        required
                        defaultValue={employee.salary}
                    />
                </div>
                <div>
                    <label htmlFor='status'>status:</label>
                    <input
                        type="text"
                        id='status'
                        ref={statusInputRef}
                        required
                        defaultValue={employee.status}
                    />
                </div> 
                <div>
                    <label htmlFor='resignedDate'>resignedDate:</label>
                    <input
                        type="date"
                        id='resignedDate'
                        ref={resignedDateInputRef}
                        defaultValue={employee.resignedDate}
                    />
                </div>
                <button type="submit">Edit Employee</button>
            </form>
        </div>
    )
}

export default EditEmployee