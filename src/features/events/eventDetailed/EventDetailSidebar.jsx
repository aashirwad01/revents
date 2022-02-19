import { Avatar, Box,  Card, CardContent,  Typography } from '@mui/material'
import React from 'react'

export default function EventDetailSidebar({attendees}) {
  return (
      <Box sx={{ml:2}}>
        <Typography 
     style={{color:'white',backgroundColor:'teal' , textAlign: "center" ,padding:'10px' ,borderRadius:"3px" }} >{attendees.length} {attendees.length>1?'People':'Person'} Going</Typography>

     {attendees.map(attendee =>(

<Card key={attendee.id} sx={{mb:0.25}}>
<CardContent>
<Box
      style={{
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <Avatar src={attendee.photoURL || `/assets/user.png`}
      />
      <span
        style={{
          marginLeft: "2rem",
        }}
      >
        {attendee.displayName}
      </span>
      </Box>
</CardContent>
</Card>

     ))}
   
    

</Box>
  )
}
