import { Alert, Button, Card,  FormControl,  TextField, Typography } from "@mui/material";
import React from "react";
import { Box } from "@mui/material";
import { useState } from "react";
import cuid from "cuid";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createEvent, listenToEvents, updateEvent } from "../eventActions";
import { Formik , Form, Field ,ErrorMessage } from "formik";
import * as Yup from 'yup'
import MyTextInput from "../../../app/common/form/MyTextInput";
import MyTextArea from "../../../app/common/form/MyTextArea";
import MySelectInput from "../../../app/common/form/MySelectInput";
import { categoryData } from "../../../app/api/categoryOptions";
import MyDateInput from "../../../app/common/form/MyDateInput";
import useFirestoreDoc from "../../../app/hooks/useFirestoreDoc";
import { addEventToFirestore, cancelEventToggle, listenToEventFromFirestore, listenToEventsFromFirestore, updateEventInFirestore } from "../../../app/firestore/firestoreService";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { Redirect } from "react-router-dom";
import { toast } from "react-toastify";
import { LoadingButton } from "@mui/lab";
import { Dialog } from "@mui/material";
import { DialogTitle } from "@mui/material";
import { DialogContent } from "@mui/material";
import { DialogContentText } from "@mui/material";
import { DialogActions } from "@mui/material";

export default function EventForm({ match , history }) {

  const dispatch=useDispatch()

  const [loadingCancel , setloadingCancel] =useState(false)
  const [open, setOpen] = React.useState(false);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  const selectedEvent = useSelector((state) =>
    state.event.events.find((e) => e.id === match.params.id)
  );

  const {loading,error} = useSelector(state => state.async)

  const initialValues = selectedEvent ?? {
    title: "",
    category: "",
    description: "",
    city: "",
    venue: "",
    date: "",
  };

  const validationSchema = Yup.object({
    title:Yup.string().required('You must provide a title'),
    category:Yup.string().required('You must provide a category'),
    description:Yup.string().required('You must provide details'),
    city:Yup.string().required('You must provide a city'),
    venue:Yup.string().required('You must provide a venue'),
    date:Yup.string().required('You must provide a date'),
  })


  async function handleCancelToggle(event){
    setOpen(false)
    setloadingCancel(true)
    try{
      await cancelEventToggle(event)
      setloadingCancel(false)

    }catch(error){
      setloadingCancel(true)
      toast.error(error.message)
    }
  }





  useFirestoreDoc({
    shouldExcecute: !!match.params.id,
    query: () => listenToEventFromFirestore(match.params.id),
    data: (event) => dispatch(listenToEvents([event])),
    deps:[match.params.id,dispatch],
  });

  // || (!selectedEvent && !error)

  if(loading ) return <LoadingComponent />
  if(error) return <Redirect to='/error' />

  


  // const [values, setValues] = useState(initialValues);

  // function handleFormSubmit(e) {
  //   e.preventDefault();

  //   selectedEvent
  //     ? dispatch(updateEvent({ ...selectedEvent, ...values }))
  //     : dispatch(createEvent({
  //         ...values,
  //         id: cuid(),
  //         hostedBy: "Me",
  //         attendees: [],
  //         hostPhotoURL: "/assets/user.png",
  //       }));
  //       history.push('/events')
    
  // }

  // function handleInputChange(e) {
  //   const { name, value } = e.target;
  //   setValues({ ...values, [name]: value });
  // }

  return (
    <Card
      style={{
        marginTop: "1rem",
        
        padding: "1rem",
      }}
    >
     
      <Formik 
      initialValues={initialValues}
      onSubmit={ async (values , {setSubmitting}) => {

        try{
          selectedEvent
        ? await updateEventInFirestore(values)
        // dispatch(updateEvent({ ...selectedEvent, ...values }))
        : 
        await addEventToFirestore(values);
        setSubmitting(false)
        // dispatch(createEvent({
        //     ...values,
        //     id: cuid(),
        //     hostedBy: "Me",
        //     attendees: [],
        //     hostPhotoURL: "/assets/user.png",
        //   }));
          history.push('/events')

        }catch(error){

          console.log(error.message)
        
          toast.error(error.message)
          setSubmitting(false)
        }
        
        
      }}
      validationSchema={validationSchema}
      
      >
        {/* {({values,handleChange,handleSubmit}) =>( */}
{({isSubmitting,dirty,isValid})=> (

<Form 
  // noValidate autoComplete="off" onSubmit={handleSubmit}
  >
{/* <TextField
  sx={{ mb: "0.5rem" }}
  label="Event Title"
  variant="outlined"
  color="secondary"
  fullWidth
  required
  value={values.title}
  onChange={handleChange}
  name="title"
/> */}
 <Typography variant="h6" color="primary" component="h2" gutterBottom>
        Event Details
      </Typography>

<Box sx={{display:'flex' , flexDirection:'column'}}>
<MyTextInput name='title' placeholder='Event title'/>

{/* <Field style={{padding:'1rem' , marginTop:'1rem'}} name='title' placeholder='Event title' />
<ErrorMessage name='title' render={error => <Alert severity="error">{error}</Alert> }  /> */}

<MySelectInput  name='category' placeholder='Event category' options={categoryData} />
<MyTextArea  name='description' placeholder='Event description' />
<Typography variant="h6" color="primary" component="h2" gutterBottom>
        Event Location Details
      </Typography>

<MyTextInput  name='city' placeholder='City' />
<MyTextInput  name='venue' placeholder='Venue' />
<MyDateInput  name='date' placeholderText='Event date' 
timeFormat='HH:mm'
showTimeSelect
timeCaption='true'
dateFormat='MMMM d, yyyy h:mm a'


/>
</Box>
{/* <TextField
  label="Category"
  sx={{ mb: "0.5rem" }}
  variant="outlined"
  color="secondary"
  fullWidth
  required
  value={values.category}
  onChange={handleChange}
  name="category"
/> */}

{/* <TextField
  label="Description"
  sx={{ mb: "0.5rem" }}
  variant="outlined"
  color="secondary"
  fullWidth
  required
  value={values.description}
  onChange={handleChange}
  name="description"
/> */}

{/* <TextField
  label="City"
  sx={{ mb: "0.5rem" }}
  variant="outlined"
  color="secondary"
  fullWidth
  required
  value={values.city}
  onChange={handleChange}
  name="city"
/> */}

{/* <TextField
  label="Venue"
  sx={{ mb: "0.5rem" }}
  variant="outlined"
  color="secondary"
  fullWidth
  required
  value={values.venue}
  onChange={handleChange}
  name="venue"
/> */}

{/* <TextField
  sx={{ mb: "0.5rem" }}
  variant="outlined"
  color="secondary"
  type="date"
  fullWidth
  required
  value={values.date}
  onChange={handleChange}
  name="date"
/> */}

<Box
  sx={{
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  }}
>
  
  <LoadingButton

    loading={isSubmitting}
    sx={{ mr: "0.5rem" }}
    disabled={!isValid || !dirty || isSubmitting}
    type="submit"
    color="success"
    variant="contained"
  >
    Submit
  </LoadingButton>
  <Button
    type="submit"
    disabled={isSubmitting}
    variant="contained"
    component={Link}
    to="/events"
  >
    Cancel
  </Button>

  {selectedEvent && <LoadingButton
  
  loading={loadingCancel}
   type='button'
   onClick={(e)=>{ 
     setOpen(true)
    // cancelEventToggle(selectedEvent)
    e.preventDefault() 

  
  
  }}
    color={selectedEvent.isCancelled ? 'success' : 'error' }
    variant="contained"
    component={Link}
    to="/events"
  >
    {selectedEvent.isCancelled ? 'Reactivate Event' : 'Cancel Event' }
  </LoadingButton>}
  
</Box>
</Form>




)

}

        {/* )} */}
      
      </Formik>

     

      <Dialog
        open={open}
        onClose={()=> setOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
        {selectedEvent?.isCancelled? ' Reactivate ' : ' Cancel '}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {selectedEvent?.isCancelled? ' This will reactivate the event are you sure ' : ' This will cancel the event are your sure ?'}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={()=> setOpen(false)} >Cancel</Button>
          <Button onClick={()=> handleCancelToggle(selectedEvent) } autoFocus>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>

    </Card>
  );
}
