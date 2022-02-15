import { Container, Grid } from '@mui/material'
import React from 'react'
import { Paper } from '@mui/material'
import EventList from './EventList'
import EventForm from '../eventForm/EventForm'
import { sampleData } from '../../../app/api/sampleData'
import { useState } from 'react'


export default function EventDashboard({formOpen,setFormOpen}) {
  const [events,setEvents]=useState(sampleData)
  


  return (
    
     
    <Grid container spacing={2} >
      <Grid item xs={12} md={8} lg={8} >
      <EventList events={events}/>
        </Grid>
       
        <Grid item xs={12}  md={4} lg={4}>
          {formOpen && 
       <EventForm setFormOpen={setFormOpen}/> }
        </Grid>

    </Grid>
   
  )
}
