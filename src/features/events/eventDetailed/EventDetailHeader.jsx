import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';

const eventImageStyle = {
    minHeight:'20rem',
    filter: 'brightness(30%)'
};

// const eventImageTextStyle = {
//     position: "absolute", 
//     color: "white",
//     top: {xs:'30rem',},
//     left: {xs:"2rem",lg:"20rem"},
//     // transform: "translateX(-50%)"
// };

// style={eventImageTextStyle}

export default function EventDetailHeader() {
  return (
    <Card sx={{  mb:3  }}>
      <CardMedia
        component="img"
        alt="drinks"
        height="140"
        image="/assets/categoryImages/drinks.jpg"
        style={eventImageStyle}
      />
      <CardContent style={{
    position: "absolute", 
    color: "white",
    top: "18rem",
    left: {xs:"5rem",lg:"20rem"},
   
}}  >
        <Typography   gutterBottom variant="h5" component="div">
          Event Title
        </Typography>
        <p>Event Date</p>
        <p>Hosted By <strong>Me</strong></p>
       
      </CardContent>
      
      <CardActions sx={{display:'flex' ,justifyContent:'space-between'}}>
        <Button variant='contained'  color='grey'>Cancel My Place</Button>
        <Button  variant='contained' >Join this Event</Button>
        <Button  component={Link} to = {`/manage/`} 
        variant='contained'  color='secondary'>Manage Event</Button>
      </CardActions>
    </Card>
  )
}
