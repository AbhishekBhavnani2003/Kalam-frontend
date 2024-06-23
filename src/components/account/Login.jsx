import React, { useState, useContext } from "react";
import { Box, TextField, Button, styled, Typography } from "@mui/material";
import { DataContext } from "../context/DataProvider";
import { useNavigate } from "react-router-dom";
import myVideo from "../../static/v3.mp4";
import myLogo from "../../static/Logo.png";

const Component = styled(Box)`
  width: 400px;
  margin: auto;
  padding: 10px;
  box-shadow: 5px 2px 5px 2px rgb(0 0 0/0.6);
  background-color: rgba(255, 255, 255, 0.5);
`;
const Image = styled("img")({
  width: 100,
  margin: "20px auto 0 auto",
  display: "flex",
  backgroundColor: "#003135cc",
  padding: "10px",
});

const Wrapper = styled(Box)`
  padding: 15px 25px;
  display: flex;
  flex: 1;
  flex-direction: column;
  & > div,
  & > button,
  & > p {
    margin-top: 20px;
  }
`;

const VideoBackground = styled("video")`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1; /* Ensure the video is behind the component */
`;

function Login({ setauth }) {
  const [toggle, setToggle] = useState("login");
  const [signup, setSignup] = useState({
    name: "",
    username: "",
    password: "",
    email: "",
  });
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const { setaccount } = useContext(DataContext);

  const handleSignup = async (e) => {
    e.preventDefault();
    const url = "http://localhost:5000/signup";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: signup.name,
        username: signup.username,
        password: signup.password,
        email: signup.email,
      }),
    });

    const json = await response.json();
    console.log(json);

    if (response.status === 200) {
      setMessage("User Registered Successfully . Please Login to continue ");
    } else {
      setMessage("User Not Registered Successfully");
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const url = "http://localhost:5000/login";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: signup.username,
        password: signup.password,
      }),
    });

    const query = await response.json();
    console.log(query);

    if (response.status === 200) {
      setMessage("Logged in successfully");
      sessionStorage.setItem("accesstoken", `Bearer ${query.accesstoken}`);
      sessionStorage.setItem("refreshtoken", `Bearer ${query.refreshtoken}`);
      sessionStorage.setItem("username", `${query.username}`);
      setaccount({ username: query.username, name: query.name });
      setauth(true);
      navigate("/");
    } else {
      setMessage("Invalid details");
    }
  };

  const handleSendOtp = async (e) => {
    e.preventDefault();
    const url = "http://localhost:5000/send-otp";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: signup.email,
      }),
    });

    if (response.status === 200) {
      setMessage("OTP sent successfully");
      setOtpSent(true);
    } else {
      const errorText = await response.text();
      setMessage(`Error sending OTP: ${errorText}`);
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    const url = "http://localhost:5000/verify-otp";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: signup.email,
        otp,
      }),
    });

    if (response.status === 200) {
      setMessage("OTP verified successfully");
      await handleSignup(e); // Proceed with the signup process after OTP verification
    } else {
      setMessage("Invalid OTP");
    }
  };

  const onInputChange = (e) => {
    setSignup((prevSignup) => ({
      ...prevSignup,
      [e.target.name]: e.target.value,
    }));
  };

  const onOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const toggleSignup = () => {
    setToggle("signup");
  };

  const toggleLogin = () => {
    setToggle("login");
  };

  return (
    <>
      <VideoBackground
        autoPlay
        muted
        loop
        disablePictureInPicture
        controlsList="nodownload nofullscreen noremoteplayback"
      >
        <source src={myVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </VideoBackground>
      <Component style={{ marginTop: "30px", color: "white" }}>
        <Image src={myLogo} />
        <Box>
          {toggle === "login" ? (
            <Wrapper>
              <TextField
                label="Enter username"
                name="username"
                onChange={onInputChange}
                variant="standard"
                value={signup.username}
                sx={{
                  "& label": { color: "#003135cc" },
                  "& .MuiInput-underline:before": {
                    borderBottomColor: "#003135cc",
                  },
                  "& .MuiInput-underline:hover:before": {
                    borderBottomColor: "#003135cc",
                  },
                  "& .MuiInput-underline:after": {
                    borderBottomColor: "#003135cc",
                  },
                  "& .MuiInputBase-input": { color: "#fffff" },
                }}
              />
              <TextField
                label="Enter password"
                name="password"
                onChange={onInputChange}
                variant="standard"
                type="password"
                value={signup.password}
              />
              <Button
                variant="contained"
                style={{
                  textTransform: "none",
                  background: "#003135cc",
                  color: "#fff",
                  height: "48px",
                  borderRadius: "2px",
                }}
                onClick={handleLogin}
              >
                Login
              </Button>
              <Typography style={{ textAlign: "center" }}>OR</Typography>
              <Button
                style={{
                  textTransform: "none",
                  background: "#fff",
                  color: "#003135cc",
                  height: "48px",
                  borderRadius: "2px",
                  boxShadow: "0 2px 4px 0 rgb(0 0 0 / 20%)",
                }}
                onClick={toggleSignup}
              >
                Create an account
              </Button>
            </Wrapper>
          ) : otpSent ? (
            <Wrapper>
              <TextField
                label="Enter OTP"
                name="otp"
                onChange={onOtpChange}
                variant="standard"
                value={otp}
              />
              <Button
                variant="contained"
                style={{
                  textTransform: "none",
                  background: "#003135cc",
                  color: "#fff",
                  height: "48px",
                  borderRadius: "2px",
                }}
                onClick={handleVerifyOtp}
              >
                Verify OTP
              </Button>
              <Typography style={{ textAlign: "center" }}>OR</Typography>
              <Button
                style={{
                  textTransform: "none",
                  background: "#fff",
                  color: "#003135cc",
                  height: "48px",
                  borderRadius: "2px",
                  boxShadow: "0 2px 4px 0 rgb(0 0 0 / 20%)",
                }}
                onClick={toggleLogin}
              >
                Already have an account
              </Button>
            </Wrapper>
          ) : (
            <Wrapper>
              <TextField
                label="Enter Name"
                name="name"
                onChange={onInputChange}
                variant="standard"
                value={signup.name}
              />
              <TextField
                label="Enter username"
                name="username"
                onChange={onInputChange}
                variant="standard"
                value={signup.username}
              />
              <TextField
                label="Enter password"
                name="password"
                onChange={onInputChange}
                variant="standard"
                type="password"
                value={signup.password}
              />
              <TextField
                label="Enter email"
                name="email"
                onChange={onInputChange}
                variant="standard"
                value={signup.email}
              />
              <Button
                variant="contained"
                style={{
                  textTransform: "none",
                  background: "#003135cc",
                  color: "#fff",
                  height: "48px",
                  borderRadius: "2px",
                }}
                onClick={handleSendOtp}
              >
                Send OTP
              </Button>
              <Typography style={{ textAlign: "center" }}>OR</Typography>
              <Button
                style={{
                  textTransform: "none",
                  background: "#fff",
                  color: "#003135cc",
                  height: "48px",
                  borderRadius: "2px",
                  boxShadow: "0 2px 4px 0 rgb(0 0 0 / 20%)",
                }}
                onClick={toggleLogin}
              >
                Already have an account
              </Button>
            </Wrapper>
          )}
          {message && (
            <Typography
              style={{ textAlign: "center", marginTop: "20px", color: "red" }}
            >
              {message}
            </Typography>
          )}
        </Box>
      </Component>
    </>
  );
}

export default Login;
