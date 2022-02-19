import { Grid } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import EventDetailChat from "./EventDetailChat";
import EventDetailHeader from "./EventDetailHeader";
import EventDetailInfo from "./EventDetailInfo";
import EventDetailSidebar from "./EventDetailSidebar";

export default function EventDetailedPage({ match }) {
  const event = useSelector((state) =>
    state.event.events.find((e) => e.id === match.params.id)
  );
  return (
    <Grid container>
      <Grid item xs={8}>
        <EventDetailHeader event={event} />

        <EventDetailInfo event={event} />
        <EventDetailChat />
      </Grid>

      <Grid item xs={4}>
        <EventDetailSidebar attendees={event.attendees} />
      </Grid>
    </Grid>
  );
}
