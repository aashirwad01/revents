import {
  Avatar,
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { signoutUser } from "../auth/authActions";

export default function SignedInMenu() {
  const [age, setAge] = React.useState("");

  const history = useHistory()

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const dispatch = useDispatch();

  const {currentUser} = useSelector(state=>state.auth)

  //   <Avatar src="/assets/user.png" sx={{marginLeft:'1rem'}}/>
  return (
    <Box sx={{ marginLeft: "1rem" }}>
      <FormControl fullWidth>
        <InputLabel sx={{ color: "white"  }} id="demo-simple-select-label">
          {currentUser.email}
        </InputLabel>
        <Select
          sx={{ width: { sm: "12rem", xs: "0rem" } }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
          IconComponent={() => (
            <Avatar
              sx={{
                marginRight: "0.23rem",
                width: { sm: 40, xs: "1rem" },
                height: { sm: 40, xs: "1rem" },
              }}
              src=   {currentUser.photoURL|| "/assets/user.png"}
            />
          )}
        >
          <MenuItem component={Link} to="/create">
            Create Event
          </MenuItem>
          <MenuItem
          // component={Link}
          // to='/create'
          >
            My Profile
          </MenuItem>
          <MenuItem
            // component={Link}
            // to='/create'
            onClick={() => {
              dispatch(signoutUser());
              history.push("/");
            }}
          >
            SignOut
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
