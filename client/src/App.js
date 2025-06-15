import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box'; 
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography'; 
import Button from '@mui/material/Button';
{/* for every ui thing youre gonna use, make sure to import it beforehand */}
{/* Box is a div component, Typography is a fancy Text component */}

const pages = ['Browse jobs', 'Post Jobs', 'Account'];

function App() {

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
                key={page}
                sx={{ my: 2, color: 'white', display: 'block', mx: 3 }}
              > {/* this is like a for loop, for page in pages, page is gonna be the strings in the array. note that the actual text of the button is right under this line, whereas the key attribute of the button is used to uniquely identify the button */}
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Box>
    </AppBar>
  );
}

export default App;
