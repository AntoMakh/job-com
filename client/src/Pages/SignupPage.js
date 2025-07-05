import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

function SignupContainer() {
  const [formData, setFormData] = useState(
    //basically we created the variable formdata, and we use setformdata to change it. its a good react practice
    {
      firstName: "", //default values..
      lastName: "",
      email: "",
      password: "",
    }
  );
  const handleChange = (e) => {
    setFormData({
      //here we save the form data when one of the input fields are changed.
      ...formData, //(read below first). lets say this function is being accessed to change the email field, ...formdata is "everythign else stays the same" of the object, so firstName lastName and password. without this line, formdata would turn into just the email=[actual email] field
      [e.target.name]: e.target.value, //e.target.name is the name attribute on the html object (example: firstName), e.target.value is the actual value of said object.
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Save this data into Server:", formData);
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
          Create An Account
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
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              gap: 1,
            }}
          >
            <TextField
              label="First Name"
              name="firstName"
              variant="outlined"
              type="text"
              size="small"
              value={formData.firstName}
              onChange={handleChange}
            />
            <TextField
              label="Last Name"
              name="lastName"
              variant="outlined"
              type="text"
              size="small"
              value={formData.lastName}
              onChange={handleChange}
            />
          </Box>
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
              Sign Up
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
          Already have an account?{" "}
          <Link href="/login" underline="hover" sx={{ fontWeight: "bold" }}>
            Log in
          </Link>
        </Typography>
      </Box>
    </Box>
  );
}

export default SignupContainer;
