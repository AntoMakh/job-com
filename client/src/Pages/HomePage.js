import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box'; // Box is a div component
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography'; // Typography is a fancy Text component
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom'; //this is the router thats gonna let us go from page to page

// for every ui thing youre gonna use, make sure to import it beforehand


const pages = [
  { label: "Browse jobs", path: "/" }, //TBD
  { label: "Post Jobs", path: "/" }, //TBD
  { label: "Account", path: "/login" },
];

function App() {
  const navigate = useNavigate();

  const checkForAccountBeforeNavigating = (path) =>{
    //check for account here

    if (path == "/login"){ 
      navigate(path);
    }
    else {
      alert("Log in first!");
    }
    //this logic is temporarily used instead of checking for an account, to display the alert if the user presses any button other than the account button
  } 
  return (
    <AppBar position="static"> {/* the top bar thing, stays in the same spot on the screen even when scrolling */}
      <Box sx={{ml: 5}}> {/* the sx attribute is used to write css, so sx={{ css stuff }}. ml means margin left, pd means padding down, etc pls learn diff between margin and padding */}
        <Toolbar disableGutters>  
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#"
            sx={{
              mr: 10,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            JOB-COM
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => ( 
              <Button
                key={page.label}
                sx={{ my: 2, color: 'white', display: 'block', mx: 3 }}
                onClick={() => checkForAccountBeforeNavigating(page.path)}
              > {/* this is like a for loop, for page in pages, page is gonna be the strings in the array. note that the actual text of the button is right under this line, whereas the key attribute of the button is used to uniquely identify the button */}
                {page.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Box>
    </AppBar>
  );
}

export default App;
