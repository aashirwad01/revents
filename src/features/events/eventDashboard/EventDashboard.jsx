import { Container, Grid } from '@mui/material'
import React from 'react'
import { Paper } from '@mui/material'
import EventList from './EventList'
import EventForm from '../eventForm/EventForm'

export default function EventDashboard() {
  return (
     
    <Grid container spacing={2}>
      <Grid item xs={8}>
      <EventList/>
        </Grid>
       
        <Grid item xs={4}>
       <EventForm/>
        </Grid>

    </Grid>
   
  )
}
