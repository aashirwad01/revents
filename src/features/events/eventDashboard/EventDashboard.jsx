import { Grid } from "@mui/material";
import React from "react";

import EventList from "./EventList";

import { useSelector } from "react-redux";

export default function EventDashboard() {
  const { events } = useSelector((state) => state.event);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={8} lg={8}>
        <EventList events={events} />
      </Grid>

      <Grid item xs={12} md={4} lg={4}>
        <h1>Event Filters</h1>
      </Grid>
    </Grid>
  );
}
