import {
  Avatar,
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function SignedInMenu({ signOut }) {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  //   <Avatar src="/assets/user.png" sx={{marginLeft:'1rem'}}/>
  return (
    <Box sx={{ marginLeft: "1rem" }}>
      <FormControl fullWidth>
        <InputLabel sx={{ color: "white" }} id="demo-simple-select-label">
          User
        </InputLabel>
        <Select
          sx={{ width: { sm: "6rem", xs: "0rem" } }}
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
              src="/assets/user.png"
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
            onClick={signOut}
          >
            SignOut
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
