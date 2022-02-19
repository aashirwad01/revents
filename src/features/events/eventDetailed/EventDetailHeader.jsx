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

export default function EventDetailHeader({event}) {
  const img=`/assets/categoryImages/${event.category}.jpg`
  return (
    <Card sx={{  mb:3  }}>
      <CardMedia
        component="img"
        alt="drinks"
        height="140"
        image={img}
        style={eventImageStyle}
      />
      <CardContent style={{
    position: "absolute", 
    color: "white",
    top: "18rem",
    left: {xs:"5rem",lg:"20rem"},
   
}}  >
        <Typography   gutterBottom variant="h5" component="div">
          {event.title}
        </Typography>
        <p>{event.date}</p>
        <p>Hosted By <strong>{event.hostedBy}</strong></p>
       
      </CardContent>
      
      <CardActions sx={{display:'flex' ,justifyContent:'space-between'}}>
        <Button variant='contained'  color='grey'>Cancel My Place</Button>
        <Button  variant='contained' >Join this Event</Button>
        <Button  component={Link} to = {`/manage/${event.id}`} 
        variant='contained'  color='secondary'>Manage Event</Button>
      </CardActions>
    </Card>
  )
}
