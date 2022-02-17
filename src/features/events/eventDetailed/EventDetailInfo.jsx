import { Box, Button, Card, CardContent, IconButton, Typography } from '@mui/material'
import React from 'react'
import InfoIcon from '@mui/icons-material/Info';
import EventIcon from '@mui/icons-material/Event';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function EventDetailInfo() {
  return (
      <Box>
    <Card sx={{mb:0.25}}>
        <CardContent>
        <Box
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <InfoIcon style={{color:'teal'}}/>
              <span
                style={{
                  marginLeft: "2rem",
                }}
              >
                Event Description
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
              marginLeft: "2rem",
            }}
          >
            Event Date
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
           <LocationOnIcon  style={{color:'teal',position:'absolute',top:'41.2rem'}}/>
          <span
            style={{
              marginLeft: "3.25rem",
            }}
          >
            Event Venue
          </span>
          </Box>
         
          <Button variant='contained' color='secondary'>Show Me</Button>
          </Box>
    </CardContent>
</Card>
</Box>
  )
}
