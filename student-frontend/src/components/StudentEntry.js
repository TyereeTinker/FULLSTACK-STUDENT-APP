import React, { useState } from 'react'
import './Style.css';

import { Container, Paper, TextField, Select, MenuItem, InputLabel, FormControl, Button } from '@mui/material';

function StudentEntry() {
const paperStyle={padding: "50px 30px", width: "600px", margin: "20px auto"}
const genWidth={width: "200px"}

const [fname, setFname] = useState("");
const [lname, setLname] = useState("");
const [departId, setDepartId] = useState(0);
const [email, setEmail] = useState("");
const [Gender, setGender] = useState("");

const genChange = (event) => {
  setGender(event.target.value);
};

const addStudent = () => {
  console.log(fname, lname, departId, email, Gender);
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
            <Select labelId="genId" value={Gender} label="Gender" onChange={genChange}>
              <MenuItem value={"female"}> FEMALE </MenuItem>
              <MenuItem value={"male"}> MALE </MenuItem>
            </Select>
          </FormControl>
          <TextField id="outlined-basic" label="DepartmentId" variant="outlined" onChange={((e) => {setDepartId(e.target.value)})}/> 
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