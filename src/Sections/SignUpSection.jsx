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
import { useNavigate } from "react-router-dom";

export default function SignUpSection() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: ""
  });
  const [emailError, setEmailError] = useState(false);
  const [strength, setStrength] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [confirmStrength, setConfirmStrength] = useState(0);
  
  const handleInputChange = (field) => (e) => {
    setFormData(prev => ({
      ...prev,
      [field]: e.target.value
    }));
    
    if (field === 'confirmPassword') {
      const match = e.target.value === formData.password;
      setPasswordMatch(match);
      if (match && e.target.value.length > 0) {
        checkConfirmPasswordStrength(e.target.value);
      }
    }
  };
  
  const handleSignUp = () => {
    // Validate all fields
    if (!formData.fullName || !formData.email || !formData.password || !formData.confirmPassword) {
      alert('Please fill in all required fields');
      return;
    }
    
    if (emailError) {
      alert('Please enter a valid email address');
      return;
    }
    
    if (!passwordMatch) {
      alert('Passwords do not match');
      return;
    }
    
    if (strength < 2) {
      alert('Password is too weak. Please use a stronger password.');
      return;
    }
    
    // All validations passed - navigate to home screen
    navigate("/HomeScreen");
  };
  const checkPasswordStrength = (value) => {
    setFormData(prev => ({ ...prev, password: value }));

    let score = 0;

    if (value.length >= 8) score++;
    if (/[A-Z]/.test(value)) score++;
    if (/[!@#$%^&*(),.?":{}|<>]/.test(value)) score++;

    setStrength(score);
  };
  
  const checkConfirmPasswordStrength = (value) => {
    let score = 0;

    if (value.length >= 8) score++;
    if (/[A-Z]/.test(value)) score++;
    if (/[!@#$%^&*(),.?":{}|<>]/.test(value)) score++;

    setConfirmStrength(score);
  };
  
  const handleEmailChange = (e) => {
    const value = e.target.value;
    setFormData(prev => ({ ...prev, email: value }));

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
          overflowY: "auto",
          maxHeight: "80vh",
         
        }}
      >
        <TextField
          label="Full Name"
          variant="outlined"
          fullWidth
          value={formData.fullName}
          onChange={handleInputChange('fullName')}
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
              <PersonIcon sx={{ color: "rgb(204 155 32)", mr: 1 }} />
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
          label="Email"
          variant="outlined"
          fullWidth
          value={formData.email}
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
          placeholder="Phone (optional)"
          variant="outlined"
          fullWidth
          value={formData.phone}
          onChange={handleInputChange('phone')}
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
          type={showPassword ? "text" : "password"}
          fullWidth
          value={formData.password}
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
        {formData.password.length > 0 && (
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
                width: "430px",
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
                  Weak
                </>
              )}

              {strength === 2 && (
                <>
                  <WarningIcon fontSize="small" />
                  Medium
                </>
              )}

              {strength === 3 && (
                <>
                  <CheckCircleIcon fontSize="small" />
                  Strong
                </>
              )}
            </Typography>
          </Box>
        )}
        <TextField
          label="Confirm Password"
          type={showPassword ? "text" : "password"}
          variant="outlined"
          fullWidth
          value={formData.confirmPassword}
          onChange={handleInputChange('confirmPassword')}
          error={!passwordMatch && formData.confirmPassword.length > 0}
          helperText={!passwordMatch && formData.confirmPassword.length > 0 ? "Passwords do not match" : ""}
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
              <LockIcon sx={{ color: "rgb(204 155 32)", mr: 1 }} />
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  edge="end"
                  onClick={() => setShowPassword(!showPassword)}
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
                borderColor: !passwordMatch && formData.confirmPassword.length > 0 ? "red" : "rgb(72 61 34)",
                borderWidth: "0.1px",
                borderRadius: "8px",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "rgb(204 155 32)",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: !passwordMatch && formData.confirmPassword.length > 0 ? "red" : "rgb(244 148 10)",
              },
            },
          }}
        />
        {formData.confirmPassword.length > 0 && passwordMatch && (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              mt: 1,
            }}
          >
            {/* Confirm Password Strength Bar */}
            <Box
              sx={{
                width: "420px",
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
                    confirmStrength === 1
                      ? "33%"
                      : confirmStrength === 2
                        ? "66%"
                        : confirmStrength === 3
                          ? "100%"
                          : "10%",
                  backgroundColor:
                    confirmStrength === 1
                      ? "red"
                      : confirmStrength === 2
                        ? "dodgerblue"
                        : confirmStrength === 3
                          ? "limegreen"
                          : "gray",
                  transition: "all 0.4s ease",
                }}
              />
            </Box>

            {/* Confirm Password Strength Text */}
            <Typography
              sx={{
                fontSize: "13px",
                display: "flex",
                alignItems: "center",
                gap: 1,
                color:
                  confirmStrength === 1
                    ? "red"
                    : confirmStrength === 2
                      ? "dodgerblue"
                      : confirmStrength === 3
                        ? "limegreen"
                        : "gray",
              }}
            >
              {confirmStrength === 1 && (
                <>
                  <ErrorIcon fontSize="small" />
                  Match 
                </>
              )}

              {confirmStrength === 2 && (
                <>
                  <WarningIcon fontSize="small" />
                  Match 
                </>
              )}

              {confirmStrength === 3 && (
                <>
                  <CheckCircleIcon fontSize="small" />
                  Match 
                </>
              )}
            </Typography>
          </Box>
        )}
        <Button
          onClick={handleSignUp}
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
          Sign Up
        </Button>
        <Typography
          sx={{
            color: "rgb(218 165 32)",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Already have an account? Login
        </Typography>
      </Box>
    </>
  );
}
