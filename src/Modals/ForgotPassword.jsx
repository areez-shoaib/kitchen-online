import React, { useState } from "react";
import {
  Box, Typography, Button, TextField, Avatar, Modal,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import { useNavigate } from "react-router-dom";
import UserLogin from "./UserLogin";

export default function ForgotPassword() {
  const navigate = useNavigate();
  const [isLoginOpen, SetisLoginOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <>
      <Modal open={isLoginOpen}>
        <UserLogin />
      </Modal>

      <Box sx={{
        width: "100vw", height: "100vh",
        background: "linear-gradient(135deg, #0a0a0a 0%, #111111 50%, #0d0d0d 100%)",
        display: "flex", justifyContent: "center", alignItems: "center",
        flexDirection: "column", position: "fixed", top: 0, left: 0,
        boxSizing: "border-box",
        gap: 2,
      }}>
        {/* Glow orbs */}
        <Box sx={{
          position: "fixed", top: "15%", right: "10%",
          width: 200, height: 200, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(218,165,32,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        {/* Card */}
        <Box sx={{
          width: { xs: "calc(100vw - 32px)", sm: "380px" },
          maxWidth: "380px",
          background: "linear-gradient(145deg, rgba(28,28,28,0.98), rgba(22,22,22,0.95))",
          borderRadius: "24px",
          border: "1px solid rgba(218,165,32,0.3)",
          overflow: "hidden",
          boxShadow: "0 0 40px rgba(218,165,32,0.1), 0 20px 60px rgba(0,0,0,0.7)",
          transition: "all 0.3s ease",
          "&:hover": {
            boxShadow: "0 0 60px rgba(218,165,32,0.2), 0 20px 60px rgba(0,0,0,0.8)",
            transform: "translateY(-2px)",
          },
        }}>
          {/* Top shimmer bar */}
          <Box sx={{
            height: 3,
            background: "linear-gradient(90deg, transparent, #daa520, #ff8c00, #daa520, transparent)",
          }} />

          <Box sx={{ p: { xs: 3, sm: 4 }, display: "flex", flexDirection: "column", gap: 3 }}>
            {/* Icon */}
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Avatar sx={{
                bgcolor: "rgba(218,165,32,0.12)",
                width: { xs: 60, sm: 72 }, height: { xs: 60, sm: 72 },
                border: "2px solid rgba(218,165,32,0.3)",
                boxShadow: "0 0 20px rgba(218,165,32,0.2)",
              }}>
                <LocalDiningIcon sx={{ color: "#daa520", fontSize: { xs: 30, sm: 38 } }} />
              </Avatar>
            </Box>

            {/* Title */}
            <Box sx={{ textAlign: "center" }}>
              <Typography sx={{
                color: "#daa520", fontSize: { xs: "1.3rem", sm: "1.5rem" },
                fontWeight: "bold", fontFamily: "Times New Roman, serif",
                mb: 0.8,
              }}>
                Reset Password
              </Typography>
              <Typography sx={{
                color: "rgba(208,208,208,0.7)", fontSize: { xs: "0.8rem", sm: "0.875rem" },
                lineHeight: 1.5,
              }}>
                Enter your email and we'll send you a link to reset your password
              </Typography>
            </Box>

            {/* Email field */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Typography sx={{ color: "#daa520", fontWeight: "bold", fontSize: "0.875rem" }}>
                Email Address
              </Typography>
              <TextField
                variant="outlined"
                placeholder="Enter your email"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                InputProps={{
                  startAdornment: <EmailIcon sx={{ color: "rgba(218,165,32,0.7)", mr: 1, fontSize: 20 }} />,
                  sx: {
                    borderRadius: "10px",
                    "& input": { color: "white", fontSize: { xs: "0.875rem", sm: "1rem" } },
                    "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(218,165,32,0.25)", borderRadius: "10px" },
                    "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(218,165,32,0.6)" },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: "#daa520", borderWidth: 2 },
                    "& input::placeholder": { color: "rgba(255,255,255,0.3)" },
                  },
                }}
              />
            </Box>

            {/* Button */}
            <Button
              variant="contained"
              onClick={() => email && setSent(true)}
              sx={{
                background: "linear-gradient(135deg, #daa520 0%, #ff8c00 100%)",
                color: "#0a0a0a", fontWeight: "bold", borderRadius: "12px",
                py: { xs: 1.3, sm: 1.6 }, textTransform: "none",
                fontSize: { xs: "0.9rem", sm: "1rem" },
                boxShadow: "0 4px 20px rgba(218,165,32,0.35)",
                transition: "all 0.3s ease",
                "&:hover": {
                  background: "linear-gradient(135deg, #ff8c00 0%, #daa520 100%)",
                  transform: "translateY(-1px)",
                  boxShadow: "0 6px 25px rgba(218,165,32,0.5)",
                },
              }}
            >
              {sent ? "✅ Reset Link Sent!" : "Send Reset Link"}
            </Button>

            {/* Note box */}
            <Box sx={{
              border: "1px solid rgba(218,165,32,0.2)",
              borderRadius: "12px",
              background: "rgba(218,165,32,0.05)",
              p: { xs: 1.5, sm: 2 },
            }}>
              <Typography sx={{ color: "rgba(208,208,208,0.7)", fontSize: { xs: "0.75rem", sm: "0.8rem" }, lineHeight: 1.6 }}>
                <span style={{ color: "#daa520", fontWeight: "bold" }}>Note: </span>
                If an account exists with this email, you'll receive a reset link. The link expires in 15 minutes.
              </Typography>
            </Box>

            {/* Back to login */}
            <Typography sx={{
              color: "rgba(208,208,208,0.7)", textAlign: "center",
              fontSize: { xs: "0.8rem", sm: "0.875rem" },
            }}>
              Remember your password?{" "}
              <Typography component="span" onClick={() => SetisLoginOpen(true)} sx={{
                color: "#daa520", fontWeight: "bold", cursor: "pointer",
                "&:hover": { color: "#ff8c00", textDecoration: "underline" },
                transition: "color 0.2s ease",
              }}>
                Sign In
              </Typography>
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}
