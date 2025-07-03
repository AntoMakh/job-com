import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

function LoginContainer() {
  const handleSubmit = (event) => {
    event.preventDefault();

    //checking username and pass here
  };
  return (
    //i hate the formatting too ngl
    <Box //box to center the whole form in the middle
      sx={{
        minHeight: "100vh",
        bgcolor: "#e3f2fd",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box //the actual box containing the form
        sx={{
          width: 400,
          height: 320,
          bgcolor: "white",
          border: "2px solid #1976d2",
          borderRadius: 4,
          boxShadow: 6,
          p: 4,
          color: "black",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          fontFamily: "monospace",
        }}
      >
        <Typography
          variant="h5" //this controls the actual text on the screen
          component="h1" //this is what appears in the source code of the page, so you use this for ahem "SEO and accesibility"
          sx={{
            alignSelf: "flex-start",
            mb: 3,
            fontFamily: "monospace",
          }}
        >
          Sign In
        </Typography>
        <Box //this box is necessary for the form stuff
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            flexGrow: 1,
            width: "100%",
          }}
        >
          <TextField
            label="Email"
            variant="outlined"
            type="email"
            fullWidth
            size="small"
            sx={{ mb: 2, mt: 2 }}
          />
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            fullWidth
            size="small"
          />
          <Box sx={{ flexGrow: 0.1 }} />{" "}
          {/* this is a visual spacer/seperator for the button to appear lower */}
          <Box //used to align the button in the bottom left corner, refer to "flexbox containers"
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              mt: 2,
              width: "100%",
            }}
          >
            <Button
              variant="contained"
              color="primary"
              size="large"
              type="submit"
              sx={{ mt: 4 }}
            >
              Login
            </Button>
          </Box>
        </Box>
        <Typography 
          variant="body2"
          sx={{
            mt: 2,
            color: "text.secondary",
            fontFamily: "monospace",
          }}
        >
          Don't have an account?{" "}
          <Link href="/signup" underline="hover" sx={{ fontWeight: "bold" }}> 
            Sign up
          </Link>
        </Typography>
      </Box>
    </Box>
  );
}

export default LoginContainer;
