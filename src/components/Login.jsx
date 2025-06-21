import { Button, TextField } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
var naviagte=useNavigate()
const loginHandler=()=>{
  navigate("/signup")
}

  return (
    <div>
        <h1>Login Page</h1>
        <TextField label="Userame" variant="filled" /> <br /><br />
        <TextField label="Password" variant="filled"  /> <br /><br />
        <TextField label="Email id" variant="filled" /> <br /><br />
        <Button  variant="contained" color="secondary" onClick={loginHandler}>login</Button>
    </div>
  )
}
export default Login