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
    Skeleton,
   
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


export default function EventListItemPlaceholder() {
  return (
    <div> <Card elevation={3} sx={{ marginTop: "1rem" }}>
    <CardHeader
      avatar={<Skeleton animation="wave" variant="circular" width={40} height={40} />}
      title= {<Skeleton animation="wave"   width='5rem' />}
            subheader={<Skeleton animation="wave"   width='3rem' />}
    />

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
         <Skeleton animation="wave"   width='3rem' />
        </span>
        <RoomIcon />
        <span
          style={{
            marginLeft: "0.2rem",
          }}
        >
          <Skeleton animation="wave"  width="3rem" />
        </span>

        

      </Box>
    </CardContent>
  </Card>
  <Card variant="outlined" sx={{ backgroundColor: "#E0E0E0" }}>
   
      <Skeleton
              animation="wave"
              height={100}
              width="100%"
            //   style={{ marginBottom: 6 }}
            />
   
  </Card>
  <Card
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0.5rem 0",
          }}
        >
          <Skeleton
              animation="wave"
              height={100}
              width="90%"
              style={{ marginBottom: 6 }}
            />

          
          <Button
            
            sx={{ marginRight: "1rem", backgroundColor: "teal" }}
            variant="contained"
            edge="end"
            // onClick={() => selectEvent(event)}
          >
             <Skeleton
              animation="wave"
              
            />
          </Button>
          <Button

            sx={{ marginRight: "1rem", backgroundColor: "red" }}
            variant="contained"
            edge="end"
            
          >
           <Skeleton
              animation="wave"
              
              
            />
          </Button>
        </Card>
  
  </div>
  )
}
