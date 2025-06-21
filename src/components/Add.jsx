import { Button, TextField } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Add = () => 
{
  var navigate=useNavigate()
  const viewHandler=()=>{
    navigate("/view")
  }

  
  return (
    <div>
          <h1>Contacts</h1>
       <TextField label="Name" variant="filled" /> <br /><br />
       <TextField label="Phone number" variant="filled"  /> <br /><br />
       <TextField label="Email id" variant="filled" /> <br /><br />
       <Button  variant="contained" onClick={viewHandler}>add</Button>
    </div>
  )
}

export default Add