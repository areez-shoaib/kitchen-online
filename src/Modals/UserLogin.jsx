import React, { useState } from "react";
import { Box, Divider, Typography, Modal } from "@mui/material";
import ForgotPassword from "./ForgotPassword";
import LoginSection from "../Sections/LoginSection";
import SignUpSection from "../Sections/SignUpSection";

export default function UserLogin() {
  const [activeTab, setActiveTab] = useState("login");
  const [openForgotModal, SetopenForgotModal] = useState(false);

  return (
    <>
      <Modal open={openForgotModal}>
        <ForgotPassword />
      </Modal>

      <Box sx={{
        position: "fixed", top: 0, left: 0,
        width: "100vw", height: "100vh",
        background: "linear-gradient(135deg, #0a0a0a 0%, #111111 50%, #0d0d0d 100%)",
        display: "flex", justifyContent: "center", alignItems: "center",
        flexDirection: "column", gap: 2, zIndex: 1000,
        overflow: "auto",
        boxSizing: "border-box",
        py: { xs: 3, sm: 0 },
      }}>
        {/* Glow orbs */}
        <Box sx={{
          position: "fixed", top: "10%", left: "5%",
          width: 300, height: 300, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(218,165,32,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
        <Box sx={{
          position: "fixed", bottom: "10%", right: "5%",
          width: 250, height: 250, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,140,0,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        {/* Card */}
        <Box sx={{
          width: { xs: "calc(100vw - 32px)", sm: "420px" },
          maxWidth: "420px",
          background: "linear-gradient(145deg, rgba(28,28,28,0.98), rgba(22,22,22,0.95))",
          borderRadius: "24px",
          border: "1px solid rgba(218,165,32,0.3)",
          overflow: "hidden",
          boxShadow: "0 0 40px rgba(218,165,32,0.1), 0 20px 60px rgba(0,0,0,0.7)",
          transition: "box-shadow 0.3s ease",
          "&:hover": { boxShadow: "0 0 60px rgba(218,165,32,0.25), 0 20px 60px rgba(0,0,0,0.8)" },
          position: "relative",
        }}>
          {/* Top shimmer bar */}
          <Box sx={{
            height: 3,
            background: "linear-gradient(90deg, transparent, #daa520, #ff8c00, #daa520, transparent)",
          }} />

          {/* Header */}
          <Box sx={{
            background: "linear-gradient(135deg, #daa520 0%, #ff8c00 100%)",
            py: { xs: 2, sm: 2.5 },
            px: 3,
            display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center",
          }}>
            <Typography sx={{
              color: "#0a0a0a", fontFamily: "Times New Roman, serif",
              fontSize: { xs: "1.2rem", sm: "1.4rem" }, fontWeight: "bold",
              letterSpacing: 1,
            }}>
              🍛 Kitchen Online
            </Typography>
            <Typography sx={{ color: "rgba(0,0,0,0.6)", fontSize: { xs: "0.7rem", sm: "0.8rem" }, mt: 0.3 }}>
              Authentic homemade meals delivered fresh
            </Typography>
          </Box>

          {/* Tabs */}
          <Box sx={{ display: "flex", px: 3, pt: 2, gap: 1 }}>
            {["login", "signup"].map((tab) => (
              <Box key={tab} onClick={() => setActiveTab(tab)} sx={{
                cursor: "pointer", pb: 1.2, px: 1,
                fontWeight: "bold", fontSize: { xs: "0.8rem", sm: "0.9rem" },
                color: activeTab === tab ? "#daa520" : "rgba(208,208,208,0.6)",
                borderBottom: activeTab === tab ? "2.5px solid #daa520" : "2.5px solid transparent",
                transition: "all 0.2s ease",
                textTransform: "uppercase", letterSpacing: 0.5,
                "&:hover": { color: "#daa520" },
              }}>
                {tab === "login" ? "User Login" : "Sign Up"}
              </Box>
            ))}
          </Box>
          <Divider sx={{ borderColor: "rgba(218,165,32,0.15)" }} />

          {/* Scrollable content */}
          <Box sx={{
            overflowY: "auto",
            maxHeight: { xs: "65vh", sm: activeTab === "signup" ? "60vh" : "auto" },
            "&::-webkit-scrollbar": { width: "4px" },
            "&::-webkit-scrollbar-track": { background: "rgba(255,255,255,0.03)" },
            "&::-webkit-scrollbar-thumb": { background: "rgba(218,165,32,0.4)", borderRadius: "4px" },
          }}>
            {activeTab === "login" && <LoginSection setActiveTab={setActiveTab} />}
            {activeTab === "signup" && <SignUpSection setActiveTab={setActiveTab} />}
          </Box>
        </Box>

        <Typography sx={{
          color: "rgba(208,208,208,0.5)", fontSize: { xs: "0.65rem", sm: "0.75rem" },
          textAlign: "center", width: { xs: "calc(100vw - 32px)", sm: "340px" }, px: 2,
        }}>
          By signing up, you agree to our Terms of Service and Privacy Policy
        </Typography>
      </Box>
    </>
  );
}
