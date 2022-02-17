import { Grid } from '@mui/material'
import React from 'react'
import EventDetailChat from './EventDetailChat'
import EventDetailHeader from './EventDetailHeader'
import EventDetailInfo from './EventDetailInfo'
import EventDetailSidebar from './EventDetailSidebar'

export default function EventDetailedPage() {
  return (
    <Grid container>
      <Grid item xs={8} >
        <EventDetailHeader/>
       
        <EventDetailInfo/>
        <EventDetailChat/>
       



      </Grid>

      <Grid item xs={4}>
        <EventDetailSidebar/>
      </Grid>

    </Grid>
  )
}
