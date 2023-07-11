import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom'

const EmployeeForm = () => {
    const history = useHistory()

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
            const response = await fetch('http://localhost:8082/api/v1/employee', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(
                    enteredData
                ),
            })
            const responseData = await response.json()
            console.log(responseData)
            console.log(enteredData);
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
                <input
                    type="text"
                    id='company'
                    ref={companyInputRef}
                    required
                />
            </div>
            <div>
                <label htmlFor='department'>department:</label>
                <input
                    type="text"
                    id='department'
                    ref={departmentInputRef}
                    required
                />
            </div>
            <div>
                <label htmlFor='position'>position:</label>
                <input
                    type="text"
                    id='position'
                    ref={positionInputRef}
                    required
                />
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