import { Container, Grid } from "@mui/material";
import React from "react";
import { Paper } from "@mui/material";
import EventList from "./EventList";
import EventForm from "../eventForm/EventForm";
import { sampleData } from "../../../app/api/sampleData";
import { useState } from "react";

export default function EventDashboard({
  formOpen,
  setFormOpen,
  selectEvent,
  selectedEvent,
}) {
  const [events, setEvents] = useState(sampleData);

  function handleCreateEvent(event) {
    setEvents([...events, event]);
  }

  function handleUpdateEvent(updatedEvent){
    setEvents(events.map(evt => evt.id===updatedEvent.id ?updatedEvent:evt))
    selectEvent(null)
    // setFormOpen(false)
  }

  function handleDeleteEvent(eventId){
    setEvents(events.filter(evt=>evt.id!==eventId))
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={8} lg={8}>
        <EventList selectEvent={selectEvent} events={events} deleteEvent={handleDeleteEvent} />
      </Grid>

      <Grid item xs={12} md={4} lg={4}>
        {formOpen && (
          <EventForm
            setFormOpen={setFormOpen}
            setEvents={setEvents}
            createEvent={handleCreateEvent}
            selectedEvent={selectedEvent}
            updateEvent={handleUpdateEvent}
            key={selectedEvent ? selectedEvent.id :null}
            
          />
        )}
      </Grid>
    </Grid>
  );
}
