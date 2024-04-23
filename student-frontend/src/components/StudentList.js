import React, { useEffect, useState } from 'react'
import { Container, Paper } from '@mui/material'


function StudentList() {
    const paperStyle={padding: "50px 30px", width: "600px", margin: "20px auto"}

    const [student, setStudents] = useState([]);

    useEffect(() => {
      fetch("http://localhost:8080/student/getAll")
      .then(res=>res.json())
      .then((result) => {setStudents(result)});
    },[])

    return (
       <div>
            {student.map((stud) =>{
                return (
                    <Container>
                        <Paper elevation={3} style={paperStyle}>
                            {stud.fname}
                        </Paper>
                    </Container>
                )
            })}
        </div>
    )
}

export default StudentList