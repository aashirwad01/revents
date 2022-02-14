import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import { purple } from "@mui/material/colors";
import EventDashboard from "../../features/events/eventDashboard/EventDashboard";
import NavBar from "../../features/nav/NavBar";
import { green } from "@mui/material/colors";
import { Container } from "@mui/material";
import { makeStyles } from "@mui/styles";




const theme=createTheme({
  palette:{
    primary:{
      main:'#000000'
    },
    secondary:green
  },
  typography:{
    fontFamily:'Quicksand',
    fontWeightLight:300,
    fontWeightRegular:400,
    fontWeightMedium:600,
    fontWeightBold:700,
  }
})

const useStyles=makeStyles((theme)=>{
  return{
    containingEvent:{
      marginTop:"2rem"
    }
    
  }
})


function App() {
  const classes=useStyles()

  return (
    <ThemeProvider theme={theme} >
    <div >
      <NavBar/>
      <Container className={classes.containingEvent}>
      <EventDashboard/>
      </Container>
     
    </div>
    
    </ThemeProvider>
  );
}

export default App;
