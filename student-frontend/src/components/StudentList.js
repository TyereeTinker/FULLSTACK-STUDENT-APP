import React, { Fragment, useEffect, useState } from 'react'
import { Container, Paper, Table } from '@mui/material'

function StudentList() {

    const [student, setStudents] = useState([]);

    useEffect(() => {
      fetch("http://localhost:8080/student/getAll")
      .then(res=>res.json())
      .then((result) => {setStudents(result)});
    },[])

    return (
        <Fragment>
            <Table>
                <thead>
                    <tr>
                        <th> ID </th>
                        <th> Name </th>
                        <th> Gender </th>
                        <th> Deparment </th>
                        <th> Email </th>
                    </tr>
                </thead>
                <tbody>
                    {student.map((stud) =>{
                        return (
                            <tr>
                                <td> {stud.id} </td>
                                <td> {stud.fname} {stud.lname} </td>
                                <td> {stud.gender} </td>
                                <td> {stud.department} </td>
                                <td> {stud.email} </td>
                                <td colSpan={2}>
                                    <button className='btn btn-primary'> EDIT </button>
                                    <button className='btn btn-danger'> DELETE </button>
                                </td>
                            </tr>
                           
                        )
                    })}
                </tbody>
            </Table>
        </Fragment>
    )
}

export default StudentList