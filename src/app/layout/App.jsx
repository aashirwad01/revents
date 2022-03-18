import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/material";
// import { purple } from "@mui/material/colors";
import EventDashboard from "../../features/events/eventDashboard/EventDashboard";
import NavBar from "../../features/nav/NavBar";
import { green } from "@mui/material/colors";
import { Container } from "@mui/material";
import { makeStyles } from "@mui/styles";

import { Route, useLocation } from "react-router-dom";
import HomePage from "../../features/home/HomePage";
import EventDetailedPage from "../../features/events/eventDetailed/EventDetailedPage";
import EventForm from "../../features/events/eventForm/EventForm";
import Sandbox from "../../features/sandbox/Sandbox";
import ModalManager from "../common/modals/ModalManager";
import { ToastContainer } from "react-toastify";
import ErrorComponent from "../common/errors/ErrorComponent";
import AccountPage from "../../features/auth/AccountPage";
import { useSelector } from "react-redux";
import LoadingComponent from "./LoadingComponent";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: green,
  },
  typography: {
    fontFamily: "Quicksand",
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});

const useStyles = makeStyles((theme) => {
  return {
    containingEvent: {
      marginTop: "2rem",
    },
  };
});

function App() {
  const classes = useStyles();

  const { key } = useLocation();
  const {initialized} = useSelector((state)=> state.async)

  if(!initialized) {
    
    return <LoadingComponent/>
  }

  return (
    <ThemeProvider theme={theme}>
      <div>
     
        <ModalManager/>
        <ToastContainer position="bottom-right" theme="colored" />
        <Route exact path="/" component={HomePage} />
        <Route
          path={"/(.+)"}
          render={() => (
            <>
              <NavBar />
              <Container className={classes.containingEvent}>
                <Route exact path="/events" component={EventDashboard} />
                <Route exact path="/sandbox" component={Sandbox} />

                <Route path="/events/:id" component={EventDetailedPage} />
                <Route
                  path={["/create", "/manage/:id"]}
                  component={EventForm}
                  key={key}
                />
                <Route path='/error' component={ ErrorComponent } />
                <Route path='/account' component={ AccountPage } />
              </Container>
            </>
          )}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
