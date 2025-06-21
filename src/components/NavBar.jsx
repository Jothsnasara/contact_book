import { AppBar,Button,Toolbar } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
       <AppBar>
            <Toolbar>
                <h3>Contact App  </h3> &nbsp;
                &nbsp;
                <Link to="/login">
                 <Button  variant="contained" color='secondary'>login</Button> 
                 </Link>&nbsp;
                 &nbsp;
                <Link to="/signup">
                <Button  variant="contained" color='secondary'>signup</Button> 
                </Link>&nbsp;
                &nbsp;
                {/*<Link to="/add">
                <Button  variant="contained" color='secondary'>add</Button> 
                </Link>&nbsp;
                &nbsp;
                 <Link to="/view">
                <Button  variant="contained" color='secondary'>view</Button> 
                </Link>&nbsp;
                &nbsp;*/}
            </Toolbar>
        </AppBar>
        <br /><br />
    </div>
  )
}

export default NavBar