import { Button, Card,  TextField, Typography } from "@mui/material";
import React from "react";
import { Box } from "@mui/material";
import { useState } from "react";
import cuid from "cuid";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createEvent, updateEvent } from "../eventActions";

export default function EventForm({ match , history }) {

  const dispatch=useDispatch()

  const selectedEvent = useSelector((state) =>
    state.event.events.find((e) => e.id === match.params.id)
  );

  const initialValues = selectedEvent ?? {
    title: "",
    category: "",
    description: "",
    city: "",
    venue: "",
    date: "",
  };
  const [values, setValues] = useState(initialValues);

  function handleFormSubmit(e) {
    e.preventDefault();

    selectedEvent
      ? dispatch(updateEvent({ ...selectedEvent, ...values }))
      : dispatch(createEvent({
          ...values,
          id: cuid(),
          hostedBy: "Me",
          attendees: [],
          hostPhotoURL: "/assets/user.png",
        }));
        history.push('/events')
    
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  }

  return (
    <Card
      style={{
        marginTop: "1rem",
        
        padding: "1rem",
      }}
    >
      <Typography variant="h6" color="primary" component="h2" gutterBottom>
        {selectedEvent ? "Edit the event" : "Create new event"}
      </Typography>

      <form noValidate autoComplete="off" onSubmit={handleFormSubmit}>
        <TextField
          sx={{ mb: "0.5rem" }}
          label="Event Title"
          variant="outlined"
          color="secondary"
          fullWidth
          required
          value={values.title}
          onChange={(e) => handleInputChange(e)}
          name="title"
        />

        <TextField
          label="Category"
          sx={{ mb: "0.5rem" }}
          variant="outlined"
          color="secondary"
          fullWidth
          required
          value={values.category}
          onChange={(e) => handleInputChange(e)}
          name="category"
        />

        <TextField
          label="Description"
          sx={{ mb: "0.5rem" }}
          variant="outlined"
          color="secondary"
          fullWidth
          required
          value={values.description}
          onChange={(e) => handleInputChange(e)}
          name="description"
        />

        <TextField
          label="City"
          sx={{ mb: "0.5rem" }}
          variant="outlined"
          color="secondary"
          fullWidth
          required
          value={values.city}
          onChange={(e) => handleInputChange(e)}
          name="city"
        />

        <TextField
          label="Venue"
          sx={{ mb: "0.5rem" }}
          variant="outlined"
          color="secondary"
          fullWidth
          required
          value={values.venue}
          onChange={(e) => handleInputChange(e)}
          name="venue"
        />

        <TextField
          sx={{ mb: "0.5rem" }}
          variant="outlined"
          color="secondary"
          type="date"
          fullWidth
          required
          value={values.date}
          onChange={(e) => handleInputChange(e)}
          name="date"
        />

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
        >
          <Button
            sx={{ mr: "0.5rem" }}
            type="submit"
            color="success"
            variant="contained"
          >
            Submit
          </Button>
          <Button
            type="submit"
            variant="contained"
            component={Link}
            to="/events"
          >
            Cancel
          </Button>
        </Box>
      </form>
    </Card>
  );
}
