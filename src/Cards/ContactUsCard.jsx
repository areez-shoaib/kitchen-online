import React from "react";
import { Box, Button, Typography, TextField } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CallIcon from "@mui/icons-material/Call";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import ContactUsButtons from "../Components/Buttons/ContactUsButtons";

const infoItems = [
  { icon: <CallIcon sx={{ fontSize: { xs: 22, sm: 34 }, color: "#daa520" }} />, label: "Phone", value: "+92-3310451716" },
  { icon: <WhatsAppIcon sx={{ fontSize: { xs: 22, sm: 34 }, color: "#4caf50" }} />, label: "WhatsApp", value: "+92-3310451716" },
  { icon: <EmailIcon sx={{ fontSize: { xs: 22, sm: 34 }, color: "#daa520" }} />, label: "Email", value: "AreezShoaib@gmail.com" },
  { icon: <LocationOnIcon sx={{ fontSize: { xs: 22, sm: 34 }, color: "#f44336" }} />, label: "Location", value: "Defence Colony Multan Road DGK" },
];

const fieldSx = {
  "& input, & textarea": { color: "white", fontSize: { xs: "0.75rem", sm: "0.95rem" } },
  "& .MuiInputLabel-root": { fontSize: { xs: "0.72rem", sm: "1rem" } },
  "& .MuiOutlinedInput-root": { fontSize: { xs: "0.75rem", sm: "0.95rem" } },
  "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(218,165,32,0.2)", borderRadius: "10px" },
  "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(218,165,32,0.5)" },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: "#daa520", borderWidth: 2 },
};

// xs placeholder style injected via sx on TextField
const placeholderSx = {
  "& input::placeholder": { fontSize: "0.6rem", opacity: 1 },
  "& textarea::placeholder": { fontSize: "0.6rem", opacity: 1 },
};

const labelSx = {
  sx: {
    color: "rgba(208,208,208,0.7)",
    "&.Mui-focused": { color: "#ff8c00" },
  },
};

export default function ContactUsCard() {
  return (
    <Box sx={{ px: { xs: 2, sm: 4, md: 6 }, pb: { xs: 4, sm: 6 }, maxWidth: 1100, mx: "auto", width: "100%", boxSizing: "border-box", overflowX: "hidden" }}>
      <Box sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap: 3,
        alignItems: { xs: "stretch", md: "flex-start" },
      }}>
        {/* Info cards column */}
        <Box sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr 1fr", md: "1fr" },
          gap: { xs: 1.5, sm: 2 },
          width: { xs: "100%", md: "260px" },
          flexShrink: 0,
        }}>
          {infoItems.map((item, i) => (
            <Box key={i} sx={{
              display: "flex", flexDirection: "column",
              alignItems: "center", justifyContent: "center",
              p: { xs: 1.5, sm: 2.5 }, gap: { xs: 0.5, sm: 0.8 },
              minHeight: { xs: 90, sm: "auto" },
              background: "linear-gradient(145deg, rgba(26,26,26,0.95), rgba(22,22,22,0.9))",
              border: "1px solid rgba(218,165,32,0.2)",
              borderRadius: "14px",
              transition: "all 0.3s ease",
              "&:hover": {
                border: "1px solid rgba(218,165,32,0.5)",
                boxShadow: "0 4px 20px rgba(218,165,32,0.12)",
                transform: "translateY(-2px)",
              },
            }}>
              {item.icon}
              <Typography sx={{
                fontSize: { xs: "0.75rem", sm: "0.95rem" },
                fontWeight: "bold", fontFamily: "Times New Roman, serif", color: "white",
              }}>
                {item.label}
              </Typography>
              <Typography sx={{
                color: "rgba(208,208,208,0.75)",
                fontSize: { xs: "0.62rem", sm: "0.8rem" },
                textAlign: "center",
                wordBreak: "break-word",
              }}>
                {item.value}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* Form */}
        <Box sx={{
          flex: 1,
          background: "linear-gradient(145deg, rgba(26,26,26,0.95), rgba(22,22,22,0.9))",
          border: "1px solid rgba(218,165,32,0.2)",
          borderRadius: "20px",
          overflow: "hidden",
        }}>
          {/* Form top bar */}
          <Box sx={{ height: 3, background: "linear-gradient(90deg, transparent, #daa520, #ff8c00, transparent)" }} />

          <Box sx={{ p: { xs: 2, sm: 3.5 }, display: "flex", flexDirection: "column", gap: { xs: 1.5, sm: 2.5 } }}>
            <Box>
              <Typography sx={{
                fontSize: { xs: "1rem", sm: "1.2rem" },
                fontWeight: "bold", fontFamily: "Times New Roman, serif", color: "white", mb: 0.3,
              }}>
                Send us a Message
              </Typography>
              <Typography sx={{ color: "rgba(208,208,208,0.6)", fontSize: { xs: "0.75rem", sm: "0.85rem" } }}>
                Fill out the form and we'll get back to you as soon as possible
              </Typography>
            </Box>

            {/* Row 1 */}
            <Box sx={{ display: "flex", gap: { xs: 1, sm: 2 }, flexDirection: { xs: "column", sm: "row" } }}>
              <TextField size="small" label="First Name *" placeholder="Your Full Name" variant="outlined" fullWidth
                sx={placeholderSx} InputLabelProps={labelSx} InputProps={{ sx: fieldSx }} />
              <TextField size="small" label="Phone Number *" placeholder="03310451716" variant="outlined" fullWidth
                sx={placeholderSx} InputLabelProps={labelSx} InputProps={{ sx: fieldSx }} />
            </Box>

            {/* Row 2 */}
            <TextField size="small" label="Email (optional)" placeholder="abc@gmail.com" variant="outlined" fullWidth
              sx={placeholderSx} InputLabelProps={labelSx} InputProps={{ sx: fieldSx }} />

            {/* Row 3 */}
            <TextField size="small" label="Delivery Address *" placeholder="Enter your complete address" variant="outlined" fullWidth
              sx={placeholderSx} InputLabelProps={labelSx} InputProps={{ sx: fieldSx }} />

            {/* Row 4 */}
            <TextField
              label="Special Instructions & Questions"
              placeholder="Tell us about your preferences, dietary restrictions, or any questions"
              variant="outlined" fullWidth multiline rows={3}
              sx={placeholderSx}
              InputLabelProps={labelSx}
              InputProps={{ sx: { ...fieldSx, "& textarea": { color: "white", fontSize: { xs: "0.75rem", sm: "0.9rem" } } } }}
            />

            <Button variant="contained" sx={{
              background: "linear-gradient(135deg, #daa520, #ff8c00)",
              color: "#0a0a0a", fontWeight: "bold", textTransform: "none",
              borderRadius: "12px", py: { xs: 1.2, sm: 1.4 },
              fontSize: { xs: "0.875rem", sm: "1rem" },
              boxShadow: "0 4px 15px rgba(218,165,32,0.35)",
              transition: "all 0.3s ease",
              "&:hover": { transform: "translateY(-1px)", boxShadow: "0 6px 22px rgba(218,165,32,0.55)" },
            }}>
              Send Message
            </Button>
          </Box>
        </Box>
      </Box>

      <Box sx={{ mt: 3 }}>
        <ContactUsButtons />
      </Box>
    </Box>
  );
}
