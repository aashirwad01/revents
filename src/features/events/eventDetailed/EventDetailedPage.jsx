import { Grid } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { listenToEventFromFirestore } from "../../../app/firestore/firestoreService";
import useFirestoreDoc from "../../../app/hooks/useFirestoreDoc";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { listenToEvents } from "../eventActions";
import EventDetailChat from "./EventDetailChat";
import EventDetailHeader from "./EventDetailHeader";
import EventDetailInfo from "./EventDetailInfo";
import EventDetailSidebar from "./EventDetailSidebar";

export default function EventDetailedPage({ match }) {

  const dispatch = useDispatch()
  const event = useSelector((state) =>
    state.event.events.find((e) => e.id === match.params.id)
  );

  const {loading , error} = useSelector( state => state.async)


  useFirestoreDoc({
    query: () => listenToEventFromFirestore(match.params.id),
    data: event => dispatch(listenToEvents([event])),
    deps:[match.params.id,dispatch],
  });

  
  return (
    <Grid container>
      <Grid item xs={8}>
        <EventDetailHeader event={event} />

        <EventDetailInfo event={event} />
        <EventDetailChat />
      </Grid>

      <Grid item xs={4}>
        <EventDetailSidebar attendees={event?.attendees} />
      </Grid>
    </Grid>
  );
}
