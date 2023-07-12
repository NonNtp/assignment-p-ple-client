import React, { useRef, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import axios from 'axios';

const EmployeeForm = () => {
    const history = useHistory()

    const [company, setCompany] = useState([])
    const [department, setDeaprtment] = useState([])
    const [position , setPosition] = useState([])
    


    const fetchData = async () => {
        const response = await axios.get(
            'http://localhost:8082/api/v1/company'
        )

        const response2 = await axios.get(
            'http://localhost:8082/api/v1/department'
        )
        const response3 = await axios.get(
            `http://localhost:8082/api/v1/position`
        )

        setCompany(response.data)
        setDeaprtment(response2.data)
        setPosition(response3.data)
    }

    useEffect(() => {
        fetchData()
        // eslint-disable-next-line
    }, [])

    const firstNameInputRef = useRef()
    const lastnameInputRef = useRef()
    const employeeCodeInputRef = useRef()
    const companyInputRef = useRef()
    const salaryInputRef = useRef()
    const contactNumberInputRef = useRef()
    const positionInputRef = useRef()
    const departmentInputRef = useRef()
    const hiredDateInputRef = useRef()


    const submitHandler = async (event) => {
        event.preventDefault()

        const enteredFirstName = firstNameInputRef.current.value
        const enteredLastName = lastnameInputRef.current.value
        const enteredEmployeeCode = employeeCodeInputRef.current.value
        const enteredCompany = companyInputRef.current.value
        const enteredSalary = salaryInputRef.current.value
        const enteredContactNumber = contactNumberInputRef.current.value
        const enteredPosition = positionInputRef.current.value
        const enteredDepartment = departmentInputRef.current.value
        const enteredHredDate = hiredDateInputRef.current.value


        const enteredData = {
            employeeCode: enteredEmployeeCode,
            firstName: enteredFirstName,
            lastName: enteredLastName,
            employeeName: null,
            email: null,
            userLogin: null,
            company: enteredCompany,
            salary: enteredSalary,
            contactNumber: enteredContactNumber,
            position: enteredPosition,
            department: enteredDepartment,
            hiredDate: enteredHredDate,
            resignedDate: null,
            image: null,
            imageType: null,
            imageName: null
        }

        try {
            await axios.post("http://localhost:8082/api/v1/employee", enteredData)
            event.target.reset()
            history.push('/')
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <form onSubmit={submitHandler}>
            <div>
                <label htmlFor='firstName'>First Name:</label>
                <input
                    type="text"
                    id='firstName'
                    ref={firstNameInputRef}
                    required
                />
            </div>
            <div>
                <label htmlFor='lastName'>Last Name:</label>
                <input
                    type="text"
                    id='lastName'
                    ref={lastnameInputRef}
                    required
                />
            </div>
            <div>
                <label htmlFor='employeeCode'>Employee Code:</label>
                <input
                    type="text"
                    id='employeeCode'
                    ref={employeeCodeInputRef}
                    required
                />
            </div>
            <div>
                <label htmlFor='contactNumber'>contactNumber:</label>
                <input
                    type="text"
                    id='contactNumber'
                    ref={contactNumberInputRef}
                    required
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
                <select ref={departmentInputRef} >
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
                />
            </div>
            <div>
                <label htmlFor='hiredDate'>hiredDate:</label>
                <input
                    type="date"
                    id='hiredDate'
                    ref={hiredDateInputRef}
                    required
                />
            </div>
            <button type="submit">Create Employee</button>
        </form>
    );
};

export default EmployeeForm 