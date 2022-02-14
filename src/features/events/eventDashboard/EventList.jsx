import { Box } from '@mui/material'
import React from 'react'
import EventListItem from './EventListItem'

export default function EventList() {
  return (
    <Box sx={{display:'flex' , flexDirection:'column' }}>
    <EventListItem />
    <EventListItem />
    <EventListItem />
    <EventListItem />
       
    </Box>
  )
}
