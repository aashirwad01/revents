import { Grid } from "@mui/material";
import React, { useEffect } from "react";

import EventList from "./EventList";

import { useDispatch, useSelector } from "react-redux";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import EventListItemPlaceholder from "./EventListItemPlaceholder";
import EventFilters from "./EventFilters";
import { dataFromSnapshot, getEventsFromFirestore, listenToEventsFromFirestore } from "../../../app/firestore/firestoreService";

import { asynActionError, asynActionFinish, asynActionStart } from "../../../app/async/asyncReducer";
import useFirestoreCollection from "../../../app/hooks/useFirestoreCollection";
import { listenToEvents } from "../eventActions";


export default function EventDashboard() {

  const dispatch = useDispatch()
  const { events } = useSelector((state) => state.event);
  const {loading} = useSelector(state => state.async);

  useFirestoreCollection({
    query: () => listenToEventsFromFirestore(),
    data: events => dispatch( listenToEvents(events) ),
    deps:[dispatch]
  })

  // useEffect(()=>{
  //   dispatch(asynActionStart())
  //   const unsubscribe = getEventsFromFirestore({
  //     next: snapshot => { 
  //       dispatch(listenToEvents(snapshot.docs.map(docSnapshot => dataFromSnapshot(docSnapshot) )));
  //       dispatch(asynActionFinish())
  //     }
  //     ,
  //     error: error => dispatch(asynActionError(error)),
  //     complete: () => console.log('Never see it')
  //   })

  //   return unsubscribe

  // },[dispatch])
 
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
