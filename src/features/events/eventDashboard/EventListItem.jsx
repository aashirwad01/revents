import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  List,
  ListItem,
 
} from "@mui/material";
import React from "react";
import { Typography } from "@mui/material";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import RoomIcon from "@mui/icons-material/Room";
import EventListAttendee from "./EventListAttendee";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteEvent } from "../eventActions";
import { format } from "date-fns";
import { deleteEventInFirestore } from "../../../app/firestore/firestoreService";



export default function EventListItem({ event }) {

  const dispatch =useDispatch()


  return (
    <div>
      <Box>
        <Card elevation={3} sx={{ marginTop: "1rem" }}>
          <CardHeader
            avatar={<Avatar src={event.hostPhotoURL} alt="avatar"></Avatar>}
            title={event.title}
            subheader={"Hosted By " + event.hostedBy}
            
          />
          {event.isCancelled && (
              <span style={{color:'red', marginRight: "0.2rem",marginLeft: "1rem"}}>Event is cancelled</span>
            )}

          <CardContent>
            <Divider style={{ marginBottom: "0.5rem" }} color="black" />
            <Box
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >

             
              <WatchLaterIcon />
              <span
                style={{
                  marginLeft: "0.2rem",
                }}
              >
                {format(event.date,'MMMM d, yyyy h:mm a')}
              </span>
              <RoomIcon />
              <span
                style={{
                  marginLeft: "0.2rem",
                }}
              >
                {event.venue}
              </span>
            </Box>
          </CardContent>
        </Card>
        <Card variant="outlined" sx={{ backgroundColor: "#E0E0E0" }}>
          <List
            style={{
              display: "flex",
              flexDirection: "row",

              padding: 0,
            }}
          >
            {event.attendees.map((attendee) => (
              <ListItem
                sx={{ paddingRight: "0rem", paddingLeft: "0rem", width: "5%" }}
                key={attendee.id}
              >
                <EventListAttendee attendee={attendee} />
              </ListItem>
            ))}
          </List>
        </Card>

        <Card
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0.5rem 0",
          }}
        >
          <Typography  style={{ marginLeft: "1rem" ,marginBottom:"2rem" }}>
            {event.description}
          </Typography>

          
          <Button
            component={Link}
            to={`/events/${event.id}`}
            sx={{ marginRight: "1rem", backgroundColor: "teal" }}
            variant="contained"
            edge="end"
            // onClick={() => selectEvent(event)}
          >
            View
          </Button>
          <Button

            sx={{ marginRight: "1rem", backgroundColor: "red" }}
            variant="contained"
            edge="end"
            onClick={() => deleteEventInFirestore(event.id)
              
              
              // dispatch(deleteEvent(event.id))
            
            }
          >
            Delete
          </Button>
        </Card>
      </Box>
    </div>
  );
}
