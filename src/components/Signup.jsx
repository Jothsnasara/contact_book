import { Button, TextField } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  var navigate=useNavigate()
  const addHandler=()=>{
    navigate("/add")
  }
  return (
    <div>
        <h1>Sign Up Page</h1>
       <TextField label="Username" variant="filled"/> <br /><br />
       <TextField label="Password" variant="filled" type='password'/> <br /><br />
       <Button variant="contained"color ="secondary" onClick={addHandler}>Signup</Button>
    </div>
  )
}

export default Signup
