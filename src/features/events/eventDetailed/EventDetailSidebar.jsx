import { Avatar, Box, Button, Card, CardContent, IconButton, Typography } from '@mui/material'
import React from 'react'
import InfoIcon from '@mui/icons-material/Info';
import EventIcon from '@mui/icons-material/Event';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function EventDetailSidebar() {
  return (
      <Box sx={{ml:2}}>
        <Typography 
     style={{color:'white',backgroundColor:'teal' , textAlign: "center" ,padding:'10px' ,borderRadius:"3px" }} >2 People Going</Typography>
    <Card sx={{mb:0.25}}>
        <CardContent>
        <Box
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <Avatar src="/assets/user.png"
              />
              <span
                style={{
                  marginLeft: "2rem",
                }}
              >
                Tom
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
           <Avatar src="/assets/user.png"
              />
          <span
            style={{
              marginLeft: "2rem",
            }}
          >
            Bob
          </span>
          </Box>
    </CardContent>
</Card>

</Box>
  )
}
