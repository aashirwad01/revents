import { Grid } from "@mui/material";
import React from "react";

import EventList from "./EventList";

import { useSelector } from "react-redux";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import EventListItemPlaceholder from "./EventListItemPlaceholder";
import EventFilters from "./EventFilters";


export default function EventDashboard() {
  const { events } = useSelector((state) => state.event);
  const {loading} = useSelector(state => state.async)

 
  return (
    <>
    <LoadingComponent/>
    <Grid container spacing={4}>
      <Grid item xs={12} md={8} lg={8}>
        {loading &&  <><EventListItemPlaceholder/>
          <EventListItemPlaceholder/></> }
        <EventList events={events} />
      </Grid>

      <Grid item xs={12} md={4} lg={4}>
        <EventFilters/>
      </Grid>
    </Grid>
    </>
  );
}
