import React, { useState } from 'react'
import './Style.css';

import { Container, Paper, TextField, Select, MenuItem, InputLabel, FormControl, Button } from '@mui/material';

function StudentEntry() {
const paperStyle={padding: "50px 30px", width: "600px", margin: "20px auto"}
const genWidth={width: "200px"}

const [fname, setFname] = useState("");
const [lname, setLname] = useState("");
const [departmentId, setDepartId] = useState(1);
const [email, setEmail] = useState("");
const [gender, setGender] = useState(0);

const genChange = (event) => {
  setGender(parseInt(event.target.value));
};

const addStudent = (e) => {
  e.preventDefault()
  const student = {departmentId, fname, lname, email, gender}
  console.log(student);
  fetch("http://localhost:8080/student/add", {
    method:"POST", 
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(student)
  }).then(() => {console.log("STUDENT ADDED")})
}


  return (
    <Container>
      <Paper elevation={3} style={paperStyle}>
        <form>
          <TextField id="outlined-basic" label="First Name" variant="outlined" onChange={((e) => {setFname(e.target.value)})}/>
          <TextField id="outlined-basic" label="Last Name" variant="outlined" onChange={((e) => {setLname(e.target.value)})}/> 

          <br/> <br/>

          <FormControl style={genWidth}>
            <InputLabel id="genId"> Gender </InputLabel>
            <Select labelId="genId" value={gender} label="Gender" onChange={genChange}>
              <MenuItem value={0}> MALE </MenuItem> 
              <MenuItem value={1}> FEMALE </MenuItem>
            </Select>
          </FormControl>
          <TextField id="outlined-basic" label="DepartmentId" variant="outlined" onChange={((e) => {setDepartId(parseInt(e.target.value))})}/> 
          <br/> <br/>

          <TextField id="outlined-basic" label="E-mail" variant="outlined" fullWidth onChange={((e) => {setEmail(e.target.value)})}/>
          <br/>  <br/>

          <Button size='' variant='contained' onClick={addStudent}> ADD STUDENT </Button>
        </form>
      </Paper>
    </Container>
  )
}

export default StudentEntry