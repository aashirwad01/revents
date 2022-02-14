import { Avatar, Button, ButtonGroup, IconButton, Toolbar, Typography } from '@mui/material'
import { AppBar } from '@mui/material'
import { Container } from '@mui/material'
import React from 'react'

import { makeStyles } from "@mui/styles";



const useStyles=makeStyles((theme)=>{
  return{
    appbar:{
      background:"linear-gradient( 135deg ,rgb(24,42,115) 0% , rgb(33,138,174) 69% , rgb(32,167,172) 89% )" ,
     
      
    },
    avt:{
      width:56,
      height:58
    },
    createEvents:{

    }
   

    
  }
})

export default function NavBar() {
  const classes=useStyles()

  return (
    

    <AppBar position='static'  className={classes.appbar} >
      <Container>
        <Toolbar >
        <IconButton edge="start" color="inherit" sx={{ p: 0 }}  >
            <Avatar src="data:image/png;base64,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" 
            alt="Logo" 
            sx={{
              marginRight:'0.4rem',
             width:58,
             height:56
     
           
           }} 
            className={classes.avt}
            />

        </IconButton>
        <Typography variant="h6">Revents</Typography>

        <IconButton 

        sx={{
          borderLeft:'0.2rem solid black',
          padding: '1rem',
          marginLeft:'1rem'
         
 
       
       }} 
        
        className={classes.eventsicon}  color='inherit'>
        <Typography variant="h6">Events</Typography>
        </IconButton >

        <Button variant="outlined" 

        sx={{
        color:'white' ,
        backgroundColor:'#006400' ,
        border: '2px solid #E8E8E8'

      
      }}  
        
        className={classes.createEvents}>Create Events</Button>
        
        <Button variant="outlined" color="inherit" edge="end" 

        sx={{
         marginLeft:'auto'
        

      
      }}  
        className={classes.login} >Login</Button>
        <Button variant="outlined" color="inherit" edge="end"
        sx={{
          marginLeft:'1rem'
         
 
       
       }}  
        className={classes.register} >Register</Button>

       
        
        </Toolbar>
        </Container>
    </AppBar>
  )
}
