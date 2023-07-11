import React, { useRef } from 'react';

const DepartmentForm = () => {
    const departmentNameInputRef = useRef()
    const departmentDescriptionInputRef = useRef()

    const submitHandler = async (event) => {
        event.preventDefault()

        const enteredDepartmentName = departmentNameInputRef.current.value
        const enteredDepartmentDescription= departmentDescriptionInputRef.current.value
        


        const enteredData = {
            departmentName: enteredDepartmentName,
            departmentDescription: enteredDepartmentDescription,
            
        }

        try {
            const response = await fetch('http://localhost:8082/api/v1/department', {
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
        } catch (err) {
            console.log(err)
        }
    }


  return (
    <form onSubmit={submitHandler}>
            <div>
                <label htmlFor='departmentName'>DepartmentName : </label>
                <input
                    type="text"
                    id='departmentName'
                    ref={departmentNameInputRef}
                    required
                />
            </div>
            <div>
                <label htmlFor='departmentDescription'>DepartmentDescription</label>
                <input
                    type="text"
                    id='departmentDescription'
                    ref={departmentDescriptionInputRef}
                    required
                />
            </div>
            
            <button type="submit">Create Employee</button>
        </form>
  )
}

export default DepartmentForm