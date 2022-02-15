import { Box } from "@mui/material";
import React from "react";
import EventListItem from "./EventListItem";

export default function EventList(props) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      {props.events.map((event) => (
        <EventListItem
          event={event}
          key={event.id}
          selectEvent={props.selectEvent}
          deleteEvent={props.deleteEvent}
        />
      ))}
    </Box>
  );
}
