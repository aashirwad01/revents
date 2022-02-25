import { Box, Button, Card, CardContent, IconButton, Typography } from '@mui/material'
import React from 'react'
import InfoIcon from '@mui/icons-material/Info';
import EventIcon from '@mui/icons-material/Event';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { format } from "date-fns";


export default function EventDetailInfo({event}) {
  return (
      <Box>
    <Card sx={{mb:0.25}}>
        <CardContent>
        <Box
              style={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
              }}
            >
              <InfoIcon sx={{color:'teal',}}/>
              <span
                style={{
                  marginLeft: "2rem",
                }}
              >
               {event.description}
              </span>
              </Box>
        </CardContent>
    </Card>
    <Card sx={{mb:0.25}}>
    <CardContent>
    <Box
          style={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <EventIcon style={{color:'teal'}} />
          <span
            style={{
              marginLeft: "1rem",
            }}
          >
            {format(event.date,'MMMM d, yyyy h:mm a')}
          </span>
          </Box>
    </CardContent>
</Card>
<Card >
    <CardContent>
    <Box
          style={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            justifyContent:'space-between'
          }}
        >
            <Box>
           <LocationOnIcon  style={{color:'teal',}}/>
          <span
            style={{
              marginLeft: "1rem",
            }}
          >
            {event.venue}
          </span>
          </Box>
         
          <Button variant='contained' color='secondary'>Show Me</Button>
          </Box>
    </CardContent>
</Card>
</Box>
  )
}
