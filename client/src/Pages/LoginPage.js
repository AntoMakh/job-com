import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function LoginContainer() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: '#e3f2fd',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          width: 400,
          height: 320,
          bgcolor: 'white',
          border: '2px solid #1976d2',
          borderRadius: 4,
          boxShadow: 6,
          p: 4,
          color: 'black',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          fontFamily: 'monospace',
        }}
      >
        <Box
          component="h2"
          sx={{
            alignSelf: 'flex-start',
            mb: 3,
            fontFamily: 'monospace',
          }}
        >
          Sign In
        </Box>

        <TextField
          label="Email"
          variant="outlined"
          type="email"
          fullWidth
          size="small"
          sx={{ mb: 2 }}
        />
        <TextField
          label="Password"
          variant="outlined"
          type="password"
          fullWidth
          size="small"
        />
      </Box>
    </Box>
  );
}

export default LoginContainer;
  