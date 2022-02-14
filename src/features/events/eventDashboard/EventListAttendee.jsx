import { List, ListItem } from '@mui/material'
import React from 'react'

export default function EventListAttendee() {
  return (
    <List>
        <ListItem>
           <img style={{width:20 , height:20}} src="/assets/user.png" alt="" />
        </ListItem>
    </List>
  )
}
