import { Box, Button } from "@mui/material";
import React from "react";

export default function SignedOutMenu({setAuthenticated}) {
  return (
    <Box position='right' sx={{display:'flex',flexDirection:'row'}}  >
      
      <Button
        onClick={()=>setAuthenticated(true)}
        variant="outlined"
        color="inherit"
        edge="end"
        sx={{
          padding:{ xs:"0.2rem"},
          fontSize:{ xs:"0.5rem" ,sm:"0.75rem"},
         minWidth:{xs:40,sm:64},
         marginLeft:{xs:"0.25rem" ,sm:"0rem"},
         
        }}
       
      >
        Login
      </Button>
      <Button
        variant="outlined"
        color="inherit"
        edge="end"
        sx={{
          padding:{ xs:"0.2rem"},
          fontSize:{xs:"0.5rem" ,sm:"0.75rem"},
          marginLeft:{xs:"0.5rem" ,sm:"1rem"},
          minWidth:{xs:30,sm:64}
          
        }}
        
      >
        Register
      </Button>
    </Box>
  );
}
