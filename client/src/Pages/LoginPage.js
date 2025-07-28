import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Auth } from "../firebase"; //import the configured Firebase auth

function LoginContainer() {
  const auth = Auth;

  const [formData, setFormData] = useState(
    //basically we created the variable formdata, and we use setformdata to change it. its a good react practice
    {
      email: "", //default values..
      password: "",
    }
  );

  const handleChange = (e) => {
    setFormData({
      //here we save the form data when one of the input fields are changed.
      ...formData,
      [e.target.name]: e.target.value, //e.target.name is the name attribute on the html object (example: firstName), e.target.value is the actual value of said object.
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Check this data in server:", formData);

    signInWithEmailAndPassword(auth, formData.email, formData.password)
      .then((userCredential) => { //this is like a try catch statement. this line returns userCredential if signin function is succesful
        // Signed in
        const user = userCredential.user;
        console.log("Logged in user:", user);
      })
      .catch((error) => {
        console.error("Login failed:", error.message);
        alert("Login failed: " + error.message);
      });
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
            name="email"
            variant="outlined"
            type="email"
            fullWidth
            size="small"
            sx={{ mb: 2, mt: 2 }}
            value={formData.email}
            onChange={handleChange}
            error={!formData.email.includes("@")}
            helperText={
              !formData.email.includes("@") ? "Enter a valid email" : ""
            }
          />
          <TextField
            label="Password"
            name="password"
            variant="outlined"
            type="password"
            fullWidth
            size="small"
            value={formData.password}
            onChange={handleChange}
            error={formData.password.length < 8}
            helperText={
              formData.password.length < 8
                ? "Password must be at least 8 characters"
                : ""
            }
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
