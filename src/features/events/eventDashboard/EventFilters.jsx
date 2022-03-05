import React from 'react'
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import CircleIcon from '@mui/icons-material/Circle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import MobileDatePicker from '@mui/lab/MobileDatePicker';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';



export default function EventFilters() {
    const [open, setOpen] = React.useState(true);
    const [value, setValue] = React.useState(new Date());


    const handleClick = () => {
      setOpen(!open);
    };
  return (
    <List
    sx={{ marginTop: "1rem" , width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
    component="nav"
    aria-labelledby="nested-list-subheader"
    subheader={
      <ListSubheader component="div" id="nested-list-subheader">
        Filter Events By
      </ListSubheader>
    }
  >
    
    
    <ListItemButton onClick={handleClick}>
      <ListItemIcon>
       <FilterAltIcon/>
      </ListItemIcon>
      <ListItemText primary="Filters" />
      {open ? <ExpandLess /> : <ExpandMore />}
    </ListItemButton>
    <Collapse in={open} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
        <ListItemButton sx={{ pl: 4 }}>
          <ListItemIcon>
            <StarBorder fontSize='small'/>
          </ListItemIcon>
          <ListItemText primary="I am Going" />
        </ListItemButton>
      </List>
      <List component="div" disablePadding>
        <ListItemButton sx={{ pl: 4 }}>
          <ListItemIcon>
          <StarBorder fontSize='small'/>
          </ListItemIcon>
          <ListItemText primary="I am Hosting" />
        </ListItemButton>
      </List>
      
    </Collapse>
    <ListItemButton>
     
      
      <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
          disableFuture
          label="Select Date"
          openTo="year"
          views={['year', 'month', 'day']}
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </ListItemButton>
    
  </List>
  )
}
