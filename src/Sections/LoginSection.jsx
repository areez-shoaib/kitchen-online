import React, { useState } from "react";
import {
  Box,
  Grid,
  Paper,
  Divider,
  Typography,
  Button,
  TextField,
  InputAdornment,
  IconButton,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import ErrorIcon from "@mui/icons-material/Error";
import WarningIcon from "@mui/icons-material/Warning";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Modal } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export default function LoginSection() {

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [strength, setStrength] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const openModal = () => {
    SetopenForgotModal(true);
  };
  const checkPasswordStrength = (value) => {
    setPassword(value);

    let score = 0;

    if (value.length >= 8) score++;
    if (/[A-Z]/.test(value)) score++;
    if (/[!@#$%^&*(),.?":{}|<>]/.test(value)) score++;

    setStrength(score);
  };
  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(value)) {
      setEmailError(false);
    } else {
      setEmailError(true);
    }
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          p: 3,
          justifyContent: "center",
          alignItems: "center",
          gap: 3,
          mt: 2,
        }}
      >
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          value={email}
          onChange={handleEmailChange}
          error={emailError}
          helperText={
            emailError ? "Please enter a valid email (example@gmail.com)" : ""
          }
          InputLabelProps={{
            shrink: true,
            sx: {
              color: "rgb(208 208 208)",
              fontSize: { lg: "16px", xs: "15px" },
              "&.Mui-focused": {
                color: "rgb(244 148 10)",
              },
            },
          }}
          InputProps={{
            startAdornment: (
              <EmailIcon sx={{ color: "rgb(204 155 32)", mr: 1 }} />
            ),
            sx: {
              "& input": {
                color: "white",
                fontSize: { lg: "16px", xs: "12px" },
              },
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "rgb(72 61 34)",
                borderWidth: "0.1px",
                borderRadius: "8px",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "rgb(204 155 32)",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "rgb(244 148 10)",
              },
            },
          }}
        />
        <TextField
          label="Password"
          variant="outlined"
          type={showPassword ? "text" : "password"} // 👈 toggle type
          fullWidth
          value={password}
          onChange={(e) => checkPasswordStrength(e.target.value)}
          InputLabelProps={{
            shrink: true,
            sx: {
              color: "rgb(208 208 208)",
              fontSize: { lg: "16px", xs: "15px" },
              "&.Mui-focused": { color: "rgb(244 148 10)" },
            },
          }}
          InputProps={{
            startAdornment: (
              <LockIcon sx={{ color: "rgb(204 155 32)", mr: 1 }} />
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end"
                  sx={{ color: "rgb(204 155 32)" }}
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
            sx: {
              "& input": {
                color: "white",
                fontSize: { lg: "16px", xs: "12px" },
              },
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "rgb(72 61 34)",
                borderWidth: "0.1px",
                borderRadius: "8px",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "rgb(204 155 32)",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "rgb(244 148 10)",
              },
            },
          }}
        />
        {password.length > 0 && (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              mt: 1,
            }}
          >
            {/* Strength Bar */}
            <Box
              sx={{
                width: "460px",
                height: "8px",
                backgroundColor: "#333",
                borderRadius: "10px",
                overflow: "hidden",
                display: "flex",
              }}
            >
              <Box
                sx={{
                  height: "100%",
                  width:
                    strength === 1
                      ? "33%"
                      : strength === 2
                        ? "66%"
                        : strength === 3
                          ? "100%"
                          : "10%",
                  backgroundColor:
                    strength === 1
                      ? "red"
                      : strength === 2
                        ? "dodgerblue"
                        : strength === 3
                          ? "limegreen"
                          : "gray",
                  transition: "all 0.4s ease",
                }}
              />
            </Box>

            {/* Strength Text */}
            <Typography
              sx={{
                fontSize: "13px",
                display: "flex",
                alignItems: "center",
                gap: 1,
                color:
                  strength === 1
                    ? "red"
                    : strength === 2
                      ? "dodgerblue"
                      : strength === 3
                        ? "limegreen"
                        : "gray",
              }}
            >
              {strength === 1 && (
                <>
                  <ErrorIcon fontSize="small" />
                </>
              )}

              {strength === 2 && (
                <>
                  <WarningIcon fontSize="small" />
                </>
              )}

              {strength === 3 && (
                <>
                  <CheckCircleIcon fontSize="small" />
                </>
              )}
            </Typography>
          </Box>
        )}
        <Button
          variant="contained"
          sx={{
            width: "100%",
            background: "linear-gradient(45deg,rgb(223 161 27),rgb(248 145 6))",
            py: 1.5,
            color: "black",
            fontWeight: 600,
            textTransform: "none",
            fontSize: "16px",
            outline: "none",
            "&:focus": {
              outline: "none",
            },
          }}
        >
          Login
        </Button>
        <Typography
          sx={{
            color: "rgb(218 165 32)",
            fontWeight: "bold",
            cursor: "pointer",
          }}
          onClick={() => setActiveTab("signup")} // optional: click to switch tab
        >
          Don't have account? Sign Up
        </Typography>
        <Typography
          sx={{
            color: "rgb(255 140 0)",
            fontWeight: "bold",
            cursor: "pointer",
          }}
          onClick={openModal}
        >
          Forgot Password?
        </Typography>
      </Box>
    </>
  );
}
