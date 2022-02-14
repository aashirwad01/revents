import { Avatar, Box, Button, Card, CardContent, CardHeader, Divider, List, ListItem, Paper } from '@mui/material'
import React from 'react'
import { Typography } from '@mui/material'
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import RoomIcon from '@mui/icons-material/Room';
import EventListAttendee from './EventListAttendee';


export default function EventListItem() {
  return (
    <div>
       <Box >
        <Card elevation={3} sx={{marginTop:'1rem'}} >
            <CardHeader
            avatar={
                <Avatar src='/assets/user.png' alt="avatar"></Avatar>
            }
            title="Event Title"
            subheader=" Hosted by Me"
            />
          
            <CardContent >
            <Divider style={{marginBottom:'0.5rem'}} color='black' />
                <Box
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                }}
                
                >
                <WatchLaterIcon/><span 
                style={{
                   marginLeft:'0.2rem'
                }}
                >Date</span>
                <RoomIcon/><span
                style={{
                    marginLeft:'0.2rem'
                 }}
                >Venue</span>
                </Box>

               

                

            
            </CardContent>

          


        </Card >
        <Card variant="outlined" sx={{backgroundColor:'#E0E0E0' ,  
       
    }}  
        >
                    <List 
                    style={{display: 'flex',
                    flexDirection: 'row',
                    
                        padding: 0,}}>
                        <ListItem>
                            <EventListAttendee/>
                        </ListItem>
                        <ListItem>
                            <EventListAttendee/>
                        </ListItem>
                        <ListItem>
                            <EventListAttendee/>
                        </ListItem>
                        <ListItem>
                            <EventListAttendee/>
                        </ListItem>
                    </List>
                </Card>

               <Card sx={{display:'flex',justifyContent:'space-between', alignItems:'center' , padding:'0.5rem 0'}}>
                   <Typography sx={{marginLeft:'1rem'}} >Description yaha hai</Typography>
                   <Button sx={{marginRight:'1rem' , backgroundColor:'teal'}}  variant="contained" edge="end">View</Button>
                </Card> 
     
      
        </Box>
        
        
    </div>
  )
}
