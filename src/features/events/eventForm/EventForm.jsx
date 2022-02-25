import { Alert, Button, Card,  FormControl,  TextField, Typography } from "@mui/material";
import React from "react";
import { Box } from "@mui/material";
import { useState } from "react";
import cuid from "cuid";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createEvent, updateEvent } from "../eventActions";
import { Formik , Form, Field ,ErrorMessage } from "formik";
import * as Yup from 'yup'
import MyTextInput from "../../../app/common/form/MyTextInput";
import MyTextArea from "../../../app/common/form/MyTextArea";
import MySelectInput from "../../../app/common/form/MySelectInput";
import { categoryData } from "../../../app/api/categoryOptions";
import MyDateInput from "../../../app/common/form/MyDateInput";


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

  const validationSchema = Yup.object({
    title:Yup.string().required('You must provide a title'),
    category:Yup.string().required('You must provide a category'),
    description:Yup.string().required('You must provide details'),
    city:Yup.string().required('You must provide a city'),
    venue:Yup.string().required('You must provide a venue'),
    date:Yup.string().required('You must provide a date'),
  })
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
      onSubmit={(values) => {
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
  <Button

    sx={{ mr: "0.5rem" }}
    disabled={!isValid || !dirty || isSubmitting}
    type="submit"
    color="success"
    variant="contained"
  >
    Submit
  </Button>
  <Button
    type="submit"
    disabled={isSubmitting}
    variant="contained"
    component={Link}
    to="/events"
  >
    Cancel
  </Button>
</Box>
</Form>




)

}

        {/* )} */}
      
      </Formik>
    </Card>
  );
}
