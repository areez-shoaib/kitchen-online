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
import { Modal } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import ForgotPassword from "./ForgotPassword";
export default function UserLogin() {
  const [activeTab, setActiveTab] = useState("login");
  const [openForgotModal, SetopenForgotModal] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const openModal = () => {
    SetopenForgotModal(true);
  };

  return (
    <>
      <Modal open={openForgotModal}>
        <ForgotPassword />
      </Modal>
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          background: "linear-gradient(45deg,rgb(18 18 18),rgb(25 25 25))",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: 4,
          zIndex: "1000",
        }}
      >
        <Box
          sx={{
            width: "33%",

            height: activeTab === "login" ? "530px" : "720px",
            bgcolor: "rgb(34 34 34)",
            borderRadius: "20px",
            border: "1px solid rgb(223 161 27)",
            overflow: "hidden",
            transition: "all 0.3s ease",
            boxShadow: "0 0 10px rgba(223, 161, 27, 0.16)", // default
            "&:hover": {
              boxShadow: "0 0 25px rgba(223, 161, 27, 0.7)", // hover par strong glow
            },
          }}
        >
          <Box
            sx={{
              height: activeTab === "login" ? "20%" : "15%",

              background:
                "linear-gradient(45deg,rgb(223 161 27),rgb(248 145 6))",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                color: "black",
                fontFamily: "Times New Roman, serif",
                fontSize: "22px",
                fontWeight: "bold",
              }}
            >
              Kitchen Online
            </Typography>
            <Typography
              sx={{
                color: "rgb(59 43 16)",
                fontSize: "14px",
              }}
            >
              Authentic homemade meals delivered fresh
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                pt: 2,
                gap: 2,
              }}
            >
              <Typography
                onClick={() => setActiveTab("login")}
                sx={{
                  cursor: "pointer",
                  fontWeight: "bold",
                  color: activeTab === "login" ? "#e1a11b" : "rgb(208 208 208)",
                  borderBottom: activeTab === "login" ? "3px solid" : "none",
                  borderImage:
                    activeTab === "login"
                      ? "linear-gradient(45deg, #e1a11b, #f89106) 1"
                      : "none",
                  pb: 1,
                  width: "23%",
                  textAlign: "center",
                }}
              >
                USER LOGIN
              </Typography>

              <Typography
                onClick={() => setActiveTab("signup")}
                sx={{
                  cursor: "pointer",
                  fontWeight: "bold",
                  color:
                    activeTab === "signup" ? "#e1a11b" : "rgb(208 208 208)",
                  borderBottom: activeTab === "signup" ? "3px solid" : "none",
                  borderImage:
                    activeTab === "signup"
                      ? "linear-gradient(45deg, #e1a11b, #f89106) 1"
                      : "none",
                  pb: 1,
                  width: "18%",
                  textAlign: "center",
                }}
              >
                SIGN UP
              </Typography>
            </Box>
            <Divider
              sx={{
                borderColor: "#463b20",
                borderBottomWidth: "1px",
              }}
            />

            {activeTab === "login" && (
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
                  InputLabelProps={{
                    shrink: true, // 👈 ye label ko hamesha upar fix karega
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
                <Button
                  variant="contained"
                  sx={{
                    width: "100%",
                    background:
                      "linear-gradient(45deg,rgb(223 161 27),rgb(248 145 6))",
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
            )}

            {activeTab === "signup" && (
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
                  label="Full Name"
                  variant="outlined"
                  fullWidth
                  InputLabelProps={{
                    shrink: true, // 👈 ye label ko hamesha upar fix karega
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
                  InputLabelProps={{
                    shrink: true, // 👈 ye label ko hamesha upar fix karega
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
                  InputLabelProps={{
                    shrink: true, // 👈 ye label ko hamesha upar fix karega
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
                  InputLabelProps={{
                    shrink: true, // 👈 ye label ko hamesha upar fix karega
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
                <TextField
                  label="Confirm Password"
                  type={showPassword ? "text" : "password"}
                  variant="outlined"
                  fullWidth
                  InputLabelProps={{
                    shrink: true, // 👈 ye label ko hamesha upar fix karega
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
                <Button
                  variant="contained"
                  sx={{
                    width: "100%",
                    background:
                      "linear-gradient(45deg,rgb(223 161 27),rgb(248 145 6))",
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
                  onClick={() => setActiveTab("login")} // optional: click to switch tab
                >
                  Already have an account? Login
                </Typography>
              </Box>
            )}
          </Box>
        </Box>
        <Typography
          sx={{
            color: "rgb(208 208 208)",
            fontSize: "14px",
          }}
        >
          By signing up, you agree to our Terms of Service and Privacy Policy
        </Typography>
      </Box>
    </>
  );
}
