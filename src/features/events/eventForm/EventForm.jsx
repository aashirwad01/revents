import { Button, Card, Container, TextField, Typography } from '@mui/material'
import React from 'react'
import { Box } from '@mui/material'

export default function EventForm() {
  return (
      
    <Card 
    style={{marginTop:'1rem',
            // textAlign:'center',
        padding: '1rem',}}
    >
        <Typography 
       
        variant="h6"
        color="primary"
        component="h2"
        gutterBottom
        fullWidth
        
        >
            Create new Event

        </Typography>

        <form noValidate autoComplete='off'>
            <TextField
             sx={{mb:'0.5rem'}}
            label='Event Title'
            variant='outlined'
            color='secondary'
            fullWidth
            required
            />

<TextField
            label='Category'
            sx={{mb:'0.5rem'}}
            variant='outlined'
            color='secondary'
            fullWidth
            required
            />

<TextField
            label='Description'
             sx={{mb:'0.5rem'}}
             variant='outlined'
            color='secondary'
            fullWidth
            required
            />

<TextField
            label='City'
             sx={{mb:'0.5rem'}}
             variant='outlined'
            color='secondary'
            fullWidth
            required
            />

<TextField
            label='Venue'
             sx={{mb:'0.5rem'}}
             variant='outlined'
            color='secondary'
            fullWidth
            required
            />

<TextField
             sx={{mb:'0.5rem'}}

            variant='outlined'
            color='secondary'
            type="date"
            fullWidth
            required
            />

        <Box sx={{display:'flex',flexDirection:'row',justifyContent:'flex-end'}} >
        <Button sx={{mr:'0.5rem' }} type="submit" color="success" variant='contained'>
            Submit
        </Button>
        <Button type="submit"  variant='contained'>
            Cancel
        </Button>
        </Box>
        
        </form>
    </Card>
  )
}
