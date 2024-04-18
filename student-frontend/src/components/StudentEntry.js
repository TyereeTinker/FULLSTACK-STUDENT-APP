import React, { useState } from 'react'
import './Style.css';

import { Container, Paper, TextField, Select, MenuItem, InputLabel, FormControl } from '@mui/material';

function StudentEntry() {
const paperStyle={padding: "50px 30px", width: "600px", margin: "20px auto"}
const genWidth={width: "200px"}

const [Gender, setGender] = useState('');



  return (
    <Container>
      <Paper elevation={3} style={paperStyle}>
        <form>
          <TextField id="outlined-basic" label="First Name" variant="outlined"/>
          <TextField id="outlined-basic" label="Last Name" variant="outlined"/> 

          <br/> <br/>

          <FormControl style={genWidth}>
            <InputLabel id="genId"> Gender </InputLabel>
            <Select labelId="genId" value={Gender} label="Gender">
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
            </Select>
          </FormControl>
          <TextField id="outlined-basic" label="DepartmentId" variant="outlined"/> 
          <br/> <br/>

          <TextField id="outlined-basic" label="E-mail" variant="outlined" fullWidth/>
        </form>
      </Paper>
    </Container>
  )
}

export default StudentEntry