import { List, ListItem } from '@mui/material'
import React from 'react'

export default function EventListAttendee({attendee}) {
  return (
    <List>
        <ListItem>
           <img style={{borderRadius:'50%',width:20 , height:20}} src={attendee.photoURL} alt="" />
        </ListItem>
    </List>
  )
}
