import React, { useState } from "react";
import {
  Box, Typography, Button, TextField,
  InputAdornment, IconButton, Modal,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import ForgotPassword from "../Modals/ForgotPassword";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import WelcomeModal from "../Modals/WelcomeModal";

const fieldSx = {
  borderRadius: "10px",
  "& input": { color: "white", fontSize: { xs: "0.875rem", sm: "1rem" } },
  "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(218,165,32,0.25)", borderRadius: "10px" },
  "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(218,165,32,0.6)" },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: "#daa520", borderWidth: 2 },
  "& input::placeholder": { color: "rgba(255,255,255,0.3)" },
};

const labelSx = {
  shrink: true,
  sx: {
    color: "rgba(208,208,208,0.7)",
    fontSize: { xs: "0.875rem", sm: "1rem" },
    "&.Mui-focused": { color: "#ff8c00" },
  },
};

export default function LoginSection({ setActiveTab }) {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [openForgotModal, setOpenForgotModal] = useState(false);
  const [showWelcomeModal, setShowWelcomeModal] = useState(false);
  const [userType, setUserType] = useState("customer");
  const [userName, setUserName] = useState("");

  const handleEmailKeyPress = (e) => {
    if (e.key === "Enter") {
      setEmailError(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value));
    }
  };

  const handleLogin = () => {
    if (!email.trim() || !password.trim()) { alert("Please fill in all fields"); return; }
    if (emailError) { alert("Please enter a valid email address"); return; }
    const result = login(email, password);
    if (result.success) {
      setUserType(result.role);
      setUserName(result.role === "admin" ? "AREEZ KORAI" : email.split("@")[0].toUpperCase());
      setShowWelcomeModal(true);
      setTimeout(() => navigate(result.role === "admin" ? "/AdminDashboard" : "/CustomerDashboard"), 3000);
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <>
      <Modal open={openForgotModal}><ForgotPassword onClose={() => setOpenForgotModal(false)} /></Modal>
      <WelcomeModal open={showWelcomeModal} onClose={() => setShowWelcomeModal(false)} userType={userType} userName={userName} />

      <Box sx={{ display: "flex", flexDirection: "column", p: { xs: 2.5, sm: 3 }, gap: 2.5 }}>
        {/* Email */}
        <TextField
          label="Email" variant="outlined" fullWidth
          value={email} onChange={(e) => setEmail(e.target.value)}
          onKeyPress={handleEmailKeyPress}
          error={emailError}
          helperText={emailError ? "Please enter a valid email (example@gmail.com)" : ""}
          FormHelperTextProps={{ sx: { color: "#ff5252", ml: 0.5 } }}
          InputLabelProps={labelSx}
          InputProps={{
            startAdornment: <EmailIcon sx={{ color: "rgba(218,165,32,0.7)", mr: 1, fontSize: 20 }} />,
            sx: fieldSx,
          }}
        />

        {/* Password */}
        <TextField
          label="Password" variant="outlined" fullWidth
          type={showPassword ? "text" : "password"}
          value={password} onChange={(e) => setPassword(e.target.value)}
          InputLabelProps={labelSx}
          InputProps={{
            startAdornment: <LockIcon sx={{ color: "rgba(218,165,32,0.7)", mr: 1, fontSize: 20 }} />,
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end" sx={{ color: "rgba(218,165,32,0.7)" }}>
                  {showPassword ? <Visibility fontSize="small" /> : <VisibilityOff fontSize="small" />}
                </IconButton>
              </InputAdornment>
            ),
            sx: fieldSx,
          }}
        />

        {/* Login Button */}
        <Button
          variant="contained" onClick={handleLogin}
          sx={{
            background: "linear-gradient(135deg, #daa520 0%, #ff8c00 100%)",
            color: "#0a0a0a", fontWeight: "bold", borderRadius: "12px",
            py: { xs: 1.3, sm: 1.5 }, textTransform: "none",
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
          Login
        </Button>

        {/* Links */}
        <Box sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 1,
        }}>
          <Typography
            onClick={() => setActiveTab("signup")}
            sx={{ color: "#daa520", fontWeight: "bold", cursor: "pointer", fontSize: { xs: "0.8rem", sm: "0.875rem" }, "&:hover": { color: "#ff8c00" }, transition: "color 0.2s", textAlign: "center" }}
          >
            Don't have an account? Sign Up
          </Typography>
          <Typography
            onClick={() => setOpenForgotModal(true)}
            sx={{ color: "rgba(255,140,0,0.8)", fontWeight: "bold", cursor: "pointer", fontSize: { xs: "0.8rem", sm: "0.875rem" }, "&:hover": { color: "#ff8c00" }, transition: "color 0.2s", textAlign: "center" }}
          >
            Forgot Password?
          </Typography>
        </Box>
      </Box>
    </>
  );
}
