import React, { useState } from "react";
import {
  Box, Typography, Button, TextField, InputAdornment,
  IconButton, Checkbox, Radio, RadioGroup, FormControlLabel,
  FormControl, Modal,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import PersonIcon from "@mui/icons-material/Person";
import ErrorIcon from "@mui/icons-material/Error";
import WarningIcon from "@mui/icons-material/Warning";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
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

const StrengthBar = ({ strength }) => {
  const colors = ["gray", "red", "dodgerblue", "limegreen"];
  const labels = ["", "Weak", "Medium", "Strong"];
  const icons = [null, <ErrorIcon fontSize="small" />, <WarningIcon fontSize="small" />, <CheckCircleIcon fontSize="small" />];
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, width: "100%" }}>
      <Box sx={{ flex: 1, height: 6, bgcolor: "#222", borderRadius: 3, overflow: "hidden" }}>
        <Box sx={{
          height: "100%", borderRadius: 3, transition: "all 0.4s ease",
          width: strength === 1 ? "33%" : strength === 2 ? "66%" : strength === 3 ? "100%" : "8%",
          bgcolor: colors[strength] || "gray",
        }} />
      </Box>
      {strength > 0 && (
        <Typography sx={{ fontSize: "0.75rem", color: colors[strength], display: "flex", alignItems: "center", gap: 0.5, whiteSpace: "nowrap" }}>
          {icons[strength]} {labels[strength]}
        </Typography>
      )}
    </Box>
  );
};

const modalWrapSx = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100vw",
  height: "100vh",
  px: 2,
  boxSizing: "border-box",
  outline: "none",
};

const modalBoxSx = {
  width: "100%",
  maxWidth: 400,
  background: "linear-gradient(145deg, #111, #1a1a1a)",
  border: "1px solid rgba(218,165,32,0.4)",
  borderRadius: "20px",
  boxShadow: "0 0 50px rgba(218,165,32,0.2), 0 20px 60px rgba(0,0,0,0.8)",
  p: { xs: 3, sm: 4 },
  outline: "none",
  animation: "modalIn 0.35s cubic-bezier(0.34,1.56,0.64,1) forwards",
};

export default function SignUpSection({ setActiveTab }) {
  const navigate = useNavigate();
  const { signup } = useAuth();
  const [formData, setFormData] = useState({ fullName: "", email: "", phone: "", password: "", confirmPassword: "" });
  const [emailError, setEmailError] = useState(false);
  const [strength, setStrength] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [showWelcomeModal, setShowWelcomeModal] = useState(false);
  const [userName, setUserName] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [confirmStrength, setConfirmStrength] = useState(0);
  const [isPromoMember, setIsPromoMember] = useState("");
  const [showPromoModal, setShowPromoModal] = useState(false);
  const [showDiscountModal, setShowDiscountModal] = useState(false);
  const [promoCode, setPromoCode] = useState("");

  const handleInputChange = (field) => (e) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
    if (field === "confirmPassword") {
      const match = e.target.value === formData.password;
      setPasswordMatch(match);
      if (match && e.target.value.length > 0) {
        let s = 0;
        if (e.target.value.length >= 8) s++;
        if (/[A-Z]/.test(e.target.value)) s++;
        if (/[!@#$%^&*(),.?":{}|<>]/.test(e.target.value)) s++;
        setConfirmStrength(s);
      }
    }
  };

  const checkPasswordStrength = (value) => {
    setFormData(prev => ({ ...prev, password: value }));
    let s = 0;
    if (value.length >= 8) s++;
    if (/[A-Z]/.test(value)) s++;
    if (/[!@#$%^&*(),.?":{}|<>]/.test(value)) s++;
    setStrength(s);
  };

  const handleEmailChange = (e) => {
    const v = e.target.value;
    setFormData(prev => ({ ...prev, email: v }));
    setEmailError(v.length > 3 && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v));
  };

  const handlePromoMemberChange = (e) => {
    const v = e.target.value;
    setIsPromoMember(v);
    if (v === "yes") setShowPromoModal(true);
  };

  const handlePromoCodeSubmit = () => {
    if (!promoCode.trim()) return;
    setShowPromoModal(false);
    setShowDiscountModal(true);
    setTimeout(() => {
      setShowDiscountModal(false);
      const result = signup(formData, true, promoCode);
      if (result.success) {
        setUserName(formData.fullName || formData.email.split("@")[0].toUpperCase());
        setShowWelcomeModal(true);
        setTimeout(() => navigate("/PromocodeCustomer"), 3000);
      }
    }, 3000);
  };

  const handleSignUp = () => {
    if (isPromoMember === "yes" && !promoCode) { setShowPromoModal(true); return; }
    if (!formData.fullName || !formData.email || !formData.password || !formData.confirmPassword) { alert("Please fill in all required fields"); return; }
    if (emailError) { alert("Please enter a valid email address"); return; }
    if (!passwordMatch) { alert("Passwords do not match"); return; }
    if (strength < 2) { alert("Password is too weak. Please use a stronger password."); return; }
    const result = signup(formData, isPromoMember === "yes" && promoCode, promoCode || "");
    if (result.success) {
      setUserName(formData.fullName || formData.email.split("@")[0].toUpperCase());
      setShowWelcomeModal(true);
      setTimeout(() => navigate(isPromoMember === "yes" && promoCode ? "/PromocodeCustomer" : "/CustomerDashboard"), 3000);
    } else {
      alert("Signup failed. Please try again.");
    }
  };

  return (
    <>
      <WelcomeModal open={showWelcomeModal} onClose={() => setShowWelcomeModal(false)} userType="customer" userName={userName} />

      <Box sx={{ display: "flex", flexDirection: "column", p: { xs: 2.5, sm: 3 }, gap: 2 }}>
        {/* Full Name */}
        <TextField label="Full Name" variant="outlined" fullWidth
          value={formData.fullName} onChange={handleInputChange("fullName")}
          InputLabelProps={labelSx}
          InputProps={{ startAdornment: <PersonIcon sx={{ color: "rgba(218,165,32,0.7)", mr: 1, fontSize: 20 }} />, sx: fieldSx }}
        />

        {/* Email */}
        <TextField label="Email" variant="outlined" fullWidth
          value={formData.email} onChange={handleEmailChange}
          error={emailError} helperText={emailError ? "Please enter a valid email (example@gmail.com)" : ""}
          FormHelperTextProps={{ sx: { color: "#ff5252", ml: 0.5 } }}
          InputLabelProps={labelSx}
          InputProps={{ startAdornment: <EmailIcon sx={{ color: "rgba(218,165,32,0.7)", mr: 1, fontSize: 20 }} />, sx: fieldSx }}
        />

        {/* Phone */}
        <TextField placeholder="Phone (optional)" variant="outlined" fullWidth
          value={formData.phone} onChange={handleInputChange("phone")}
          InputProps={{ sx: fieldSx }}
        />

        {/* Password */}
        <Box>
          <TextField label="Password" variant="outlined" fullWidth
            type={showPassword ? "text" : "password"}
            value={formData.password} onChange={(e) => checkPasswordStrength(e.target.value)}
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
          {formData.password.length > 0 && <Box sx={{ mt: 1 }}><StrengthBar strength={strength} /></Box>}
        </Box>

        {/* Confirm Password */}
        <Box>
          <TextField label="Confirm Password" variant="outlined" fullWidth
            type={showPassword ? "text" : "password"}
            value={formData.confirmPassword} onChange={handleInputChange("confirmPassword")}
            error={!passwordMatch && formData.confirmPassword.length > 0}
            helperText={!passwordMatch && formData.confirmPassword.length > 0 ? "Passwords do not match" : ""}
            FormHelperTextProps={{ sx: { color: "#ff5252", ml: 0.5 } }}
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
              sx: {
                ...fieldSx,
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: !passwordMatch && formData.confirmPassword.length > 0 ? "#ff5252" : "rgba(218,165,32,0.25)",
                  borderRadius: "10px",
                },
              },
            }}
          />
          {formData.confirmPassword.length > 0 && passwordMatch && (
            <Box sx={{ mt: 1 }}><StrengthBar strength={confirmStrength} /></Box>
          )}
        </Box>

        {/* Promo Member Checkbox */}
        <Box sx={{
          display: "flex", alignItems: "center", gap: 1,
          background: "rgba(218,165,32,0.05)", borderRadius: "10px",
          border: "1px solid rgba(218,165,32,0.15)", px: 1.5, py: 1,
        }}>
          <Checkbox
            checked={isPromoMember !== ""}
            onChange={(e) => setIsPromoMember(e.target.checked ? "no" : "")}
            sx={{ color: "rgba(218,165,32,0.6)", "&.Mui-checked": { color: "#daa520" }, p: 0.5 }}
          />
          <LocalOfferIcon sx={{ color: "rgba(218,165,32,0.6)", fontSize: 16 }} />
          <Typography sx={{ color: "rgba(208,208,208,0.8)", fontSize: { xs: "0.75rem", sm: "0.8rem" } }}>
            I am a promo code member
          </Typography>
        </Box>

        {/* Yes/No Radio */}
        {isPromoMember !== "" && (
          <FormControl component="fieldset">
            <RadioGroup row value={isPromoMember} onChange={handlePromoMemberChange} sx={{ gap: 2 }}>
              {["yes", "no"].map(v => (
                <FormControlLabel key={v} value={v}
                  control={<Radio size="small" sx={{ color: "rgba(218,165,32,0.5)", "&.Mui-checked": { color: "#daa520" } }} />}
                  label={<Typography sx={{ color: "rgba(208,208,208,0.8)", fontSize: "0.875rem" }}>{v === "yes" ? "Yes, I have a code" : "No"}</Typography>}
                />
              ))}
            </RadioGroup>
          </FormControl>
        )}

        {/* Sign Up Button */}
        <Button variant="contained" onClick={handleSignUp} sx={{
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
        }}>
          Sign Up
        </Button>

        <Typography
          onClick={() => setActiveTab && setActiveTab("login")}
          sx={{ color: "#daa520", fontWeight: "bold", cursor: "pointer", textAlign: "center", fontSize: { xs: "0.8rem", sm: "0.875rem" }, "&:hover": { color: "#ff8c00" }, transition: "color 0.2s" }}
        >
          Already have an account? Login
        </Typography>
      </Box>

      {/* ── PROMO CODE MODAL ── */}
      <Modal open={showPromoModal} onClose={() => setShowPromoModal(false)}>
        <Box sx={modalWrapSx}>
          <Box sx={modalBoxSx}>
            <Box sx={{ textAlign: "center", mb: 3 }}>
              <LocalOfferIcon sx={{ color: "#daa520", fontSize: 40, mb: 1 }} />
              <Typography sx={{
                color: "#daa520", fontFamily: "Times New Roman, serif",
                fontSize: { xs: "1.1rem", sm: "1.3rem" }, fontWeight: "bold",
              }}>
                Enter Promo Code
              </Typography>
              <Typography sx={{ color: "rgba(208,208,208,0.6)", fontSize: "0.8rem", mt: 0.5 }}>
                Enter your promo code to unlock 15% discount
              </Typography>
            </Box>

            <TextField
              placeholder="e.g. PROMO-XXXXXXXX"
              variant="outlined" fullWidth
              value={promoCode} onChange={(e) => setPromoCode(e.target.value)}
              sx={{ mb: 3 }}
              InputProps={{
                sx: {
                  borderRadius: "10px",
                  "& input": { color: "white", textAlign: "center", letterSpacing: 2, fontSize: "1rem" },
                  "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(218,165,32,0.4)", borderRadius: "10px" },
                  "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "#daa520" },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: "#daa520", borderWidth: 2 },
                  "& input::placeholder": { color: "rgba(255,255,255,0.25)", letterSpacing: 1 },
                },
              }}
            />

            <Box sx={{ display: "flex", gap: 2 }}>
              <Button onClick={handlePromoCodeSubmit} variant="contained" fullWidth sx={{
                background: "linear-gradient(135deg, #daa520, #ff8c00)",
                color: "#0a0a0a", fontWeight: "bold", borderRadius: "10px",
                py: 1.3, textTransform: "none",
                "&:hover": { background: "linear-gradient(135deg, #ff8c00, #daa520)", transform: "scale(1.02)" },
              }}>
                Submit
              </Button>
              <Button onClick={() => setShowPromoModal(false)} variant="outlined" fullWidth sx={{
                borderColor: "rgba(218,165,32,0.4)", color: "rgba(218,165,32,0.8)",
                borderRadius: "10px", py: 1.3, textTransform: "none",
                "&:hover": { borderColor: "#daa520", color: "#daa520", background: "rgba(218,165,32,0.05)" },
              }}>
                Cancel
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>

      {/* ── DISCOUNT MODAL ── */}
      <Modal open={showDiscountModal} onClose={() => setShowDiscountModal(false)} sx={{ zIndex: 9999 }}>
        <Box sx={{
          position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh",
          bgcolor: "rgba(0,0,0,0.96)",
          display: "flex", flexDirection: "column", justifyContent: "center",
          alignItems: "center", textAlign: "center", px: 3,
          animation: "fadeIn 0.5s ease-in",
          "@keyframes fadeIn": { "0%": { opacity: 0 }, "100%": { opacity: 1 } },
        }}>
          <Typography sx={{
            color: "#daa520", fontWeight: "bold", fontFamily: "Times New Roman, serif",
            fontSize: { xs: "2rem", sm: "3rem", md: "3.5rem" },
            textShadow: "0 0 40px rgba(218,165,32,0.9)",
            animation: "glow 1.5s ease-in-out infinite alternate",
            "@keyframes glow": {
              "0%": { textShadow: "0 0 30px rgba(218,165,32,0.8)" },
              "100%": { textShadow: "0 0 60px rgba(218,165,32,1), 0 0 80px rgba(255,140,0,0.8)" },
            },
          }}>
            🎉 HURRAY! 🎉
          </Typography>

          <Typography sx={{
            color: "white", fontWeight: "bold", fontFamily: "Times New Roman, serif",
            fontSize: { xs: "1.2rem", sm: "1.8rem", md: "2rem" }, mt: 3, lineHeight: 1.4,
            animation: "slideUp 1s ease-out 0.5s both",
            "@keyframes slideUp": { "0%": { opacity: 0, transform: "translateY(40px)" }, "100%": { opacity: 1, transform: "translateY(0)" } },
          }}>
            You won{" "}
            <span style={{ color: "rgb(76,175,80)", fontSize: "1.3em" }}>15% DISCOUNT</span>
            {" "}on whole menu!
          </Typography>

          <Typography sx={{
            color: "rgba(208,208,208,0.9)", fontSize: { xs: "1rem", sm: "1.2rem" }, mt: 3,
            animation: "slideUp 1s ease-out 1s both",
          }}>
            Use promo code:{" "}
            <strong style={{ color: "#daa520", fontSize: "1.2em", letterSpacing: 2 }}>{promoCode}</strong>
          </Typography>

          <Typography sx={{
            color: "rgba(156,163,175,0.8)", fontSize: { xs: "0.85rem", sm: "1rem" }, mt: 2,
            animation: "slideUp 1s ease-out 1.5s both",
          }}>
            Redirecting to your dashboard...
          </Typography>
        </Box>
      </Modal>

      <style>{`
        @keyframes modalIn {
          from { opacity: 0; transform: scale(0.85); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </>
  );
}
