import React, { useState } from "react";
import {
  Box,
  Grid,
  Paper,
  Divider,
  Typography,
  Button,
  TextField,
  Avatar,
  InputAdornment,
  IconButton,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import { useNavigate } from "react-router-dom";
import { Modal } from "@mui/material";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import { Link } from "react-router-dom";
import UserLogin from "./UserLogin";
export default function ForgotPassword() {
  const navigate = useNavigate();
  const [isLoginOpen, SetisLoginOpen] = useState(false);
  const openLogin = () => {
    SetisLoginOpen(true);
  };

  return (
    <>
      <Modal open={isLoginOpen}>
        <UserLogin />
      </Modal>
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
          background: "linear-gradient(45deg,rgb(18 18 18),rgb(25 25 25))",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          position: "fixed",
          top: 0,
          left: 0,
          gap: 4,
        }}
      >
        <Box
          sx={{
            width: "21%",
            height: "68%",
            bgcolor: "rgb(34 34 34)",
            borderRadius: "20px",
            border: "1px solid rgb(65 54 27)",
            overflow: "hidden",
            p: 3,
            gap: 3,

            display: "flex",
            flexDirection: "column",

            transition: "all 0.3s ease", // smooth hover transition

            "&:hover": {
              boxShadow: "0 0 25px rgb(65 54 27)", // hover glow stronger
              transform: "translateY(-3px)", // optional: slight lift effect
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Avatar
              sx={{
                bgcolor: "rgb(54 47 27)",
                width: 70,
                height: 70,
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              <LocalDiningIcon
                sx={{ color: "rgb(218 165 32)", fontSize: "40px" }}
              />
            </Avatar>
          </Box>

          <Box>
            <Typography
              sx={{
                textAlign: "center",
                color: "rgb(218 165 32)",
                fontSize: "23px",
                fontWeight: "bold",
                fontFamily: "times new roman,serif",
              }}
            >
              Reset Password
            </Typography>
            <Typography
              sx={{
                textAlign: "center",
                color: "rgb(208 208 208)",
                fontSize: "15px",
              }}
            >
              Enter your email address and we'll send you a link to reset your
              password
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1.2,
            }}
          >
            <Typography
              sx={{
                color: "rgb(218 165 32)",
                fontWeight: "bold",
                fontSize: "15px",
              }}
            >
              Email Address
            </Typography>
            <TextField
              borderRadius="50px"
              variant="outlined"
              placeholder="Enter your Email"
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
                    borderColor: "black",
                    borderWidth: "0.1px",
                    borderRadius: "8px",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "white",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "rgb(244 148 10)",
                  },
                },
              }}
            />
          </Box>
          <Box>
            <Button
              variant="contained"
              sx={{
                color: "black",
                fontWeight: "600",
                borderRadius: "18px",
                background:
                  "linear-gradient(45deg,rgb(223 161 27),rgb(250 144 5))",
                width: "100%",
                textTransform: "none",
                fontSize: "17px",
                py: 1.8,
                outline: "none",
                "&:focus": {
                  outline: "none",
                },
              }}
            >
              Send Reset Link
            </Button>
          </Box>
          <Box
            sx={{
              border: "1px solid rgb(54 46 27)",
              borderRadius: "15px",
              bgcolor: "rgb(36 33 27)",
              height: "17%",
              display: "flex",

              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                color: "rgb(208 208 208)",
                width: "180%",
                ml: 2,
                fontSize: "14px",
              }}
            >
              <Typography component={"span"} sx={{ fontWeight: "bold" }}>
                Note:{" "}
              </Typography>{" "}
              If an account exists with this email, you'll receive a password
              reset link. The link will expire in 15 minutes for security
              reasons.
            </Typography>
          </Box>
          <Typography
            sx={{
              color: "rgb(208 208 208)",
              display: "flex",
              textAlign: "center",
              justifyContent: "center",
              fontSize: "15px",
            }}
          >
            Remember your password?
            <Typography
              component={"span"}
              sx={{
                color: "rgb(218 165 30)",
                fontWeight: "bold",
                fontSize: "15px",
                cursor: "pointer",
              }}
              onClick={openLogin}
            >
              Sign In
            </Typography>
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button
              onClick={() => navigate("/")}
              sx={{
                color: "rgb(218 165 32)",
                width: "50%",
                outline: "none",
                "&:focus": {
                  outline: "none",
                },
                "&:hover": {
                  bgcolor: "rgb(54 46 27)",
                  boxShadow: "0 0 25px rgb(65 54 27)",
                },
              }}
            >
              ← Back to Home
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}
