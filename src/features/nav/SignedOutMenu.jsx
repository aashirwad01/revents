import { Box, Button } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { openModal } from "../../app/common/modals/modalReducer";

export default function SignedOutMenu({ setAuthenticated }) {

  const dispatch = useDispatch()


  return (
    <Box position="right" sx={{ display: "flex", flexDirection: "row" }}>
      <Button
        // onClick={() => setAuthenticated(true)}
        onClick={() => dispatch(openModal({modalType:'LoginForm'}))}
        variant="outlined"
        color="inherit"
        edge="end"
        sx={{
          padding: { xs: "0.2rem" },
          fontSize: { xs: "0.5rem", sm: "0.75rem" },
          minWidth: { xs: 40, sm: 64 },
          marginLeft: { xs: "0.25rem", sm: "0rem" },
        }}
      >
        Login
      </Button>
      <Button
        variant="outlined"
        color="inherit"
        edge="end"
        sx={{
          padding: { xs: "0.2rem" },
          fontSize: { xs: "0.5rem", sm: "0.75rem" },
          marginLeft: { xs: "0.5rem", sm: "1rem" },
          minWidth: { xs: 30, sm: 64 },
        }}
      >
        Register
      </Button>
    </Box>
  );
}
