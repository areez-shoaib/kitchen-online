import { Box, Typography, Button, Drawer, IconButton, Divider } from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import NavBarButtons from "../Components/Buttons/NavBarButtons";
import { Link, useNavigate } from "react-router-dom";
import UserLogin from "../Modals/UserLogin";
import LogoutModal from "../Modals/LogoutModal";
import { useAuth } from "../Context/AuthContext";

export default function NavBar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [logoutModalOpen, setLogoutModalOpen] = useState(false);
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleAuthClick = () => {
    if (isAuthenticated) setLogoutModalOpen(true);
    else navigate("/UserLogin");
  };

  const handleLogout = () => {
    logout();
    setLogoutModalOpen(false);
    navigate("/");
  };

  return (
    <>
      <Box sx={{
        height: { xs: "56px", sm: "64px" },
        background: "linear-gradient(90deg, #0f0f0f 0%, #1a1a1a 50%, #0f0f0f 100%)",
        borderBottom: "1px solid rgba(218,165,32,0.15)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        px: { xs: 2, sm: 4, md: 6, lg: 8 },
        position: "sticky",
        top: 0,
        zIndex: 100,
        boxShadow: "0 2px 20px rgba(0,0,0,0.5)",
      }}>
        {/* Logo */}
        <Typography
          component={Link} to="/"
          sx={{
            fontSize: { xs: "1.1rem", sm: "1.3rem", lg: "1.5rem" },
            fontFamily: "Times New Roman, serif",
            fontWeight: "bold",
            background: "linear-gradient(135deg, #daa520, #ff8c00)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textDecoration: "none",
            cursor: "pointer",
            transition: "all 0.3s ease",
            "&:hover": { filter: "brightness(1.2)", transform: "scale(1.04)" },
            flexShrink: 0,
          }}
        >
          🍛 Kitchen Online
        </Typography>

        {/* Desktop nav */}
        <Box sx={{ display: { xs: "none", sm: "flex" }, alignItems: "center", gap: 1 }}>
          <NavBarButtons />
        </Box>

        {/* Desktop auth button */}
        <Box sx={{ display: { xs: "none", sm: "flex" }, alignItems: "center" }}>
          <Button
            onClick={handleAuthClick}
            sx={{
              color: "#0a0a0a",
              background: "linear-gradient(135deg, #daa520, #ff8c00)",
              fontWeight: "bold",
              fontSize: { sm: "0.8rem", md: "0.875rem" },
              textTransform: "none",
              borderRadius: "20px",
              px: { sm: 2.5, md: 3 },
              py: 0.7,
              boxShadow: "0 2px 10px rgba(218,165,32,0.3)",
              transition: "all 0.3s ease",
              "&:hover": { transform: "translateY(-1px)", boxShadow: "0 4px 18px rgba(218,165,32,0.5)" },
              "&:focus": { outline: "none" },
            }}
          >
            {isAuthenticated ? "Logout" : "Register"}
          </Button>
        </Box>

        {/* Mobile hamburger */}
        <IconButton
          onClick={() => setDrawerOpen(true)}
          sx={{
            display: { xs: "flex", sm: "none" },
            color: "#daa520",
            bgcolor: "rgba(218,165,32,0.08)",
            border: "1px solid rgba(218,165,32,0.2)",
            borderRadius: "10px",
            p: 0.8,
            "&:hover": { bgcolor: "rgba(218,165,32,0.15)" },
          }}
        >
          <MenuIcon fontSize="small" />
        </IconButton>

        {loginOpen && <UserLogin />}
        <LogoutModal open={logoutModalOpen} onClose={() => setLogoutModalOpen(false)} onLogout={handleLogout} />
      </Box>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}
        PaperProps={{ sx: { background: "linear-gradient(180deg, #0f0f0f, #1a1a1a)", borderLeft: "1px solid rgba(218,165,32,0.2)" } }}
      >
        <Box sx={{ width: 260, height: "100%", display: "flex", flexDirection: "column" }}>
          {/* Drawer header */}
          <Box sx={{
            display: "flex", alignItems: "center", justifyContent: "space-between",
            px: 2.5, py: 2,
            borderBottom: "1px solid rgba(218,165,32,0.15)",
          }}>
            <Typography sx={{
              fontFamily: "Times New Roman, serif", fontWeight: "bold",
              fontSize: "1.1rem",
              background: "linear-gradient(135deg, #daa520, #ff8c00)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            }}>
              🍛 Kitchen Online
            </Typography>
            <IconButton onClick={() => setDrawerOpen(false)} sx={{ color: "rgba(218,165,32,0.7)", p: 0.5 }}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </Box>

          {/* Nav links */}
          <Box sx={{ flex: 1, px: 2, py: 2, display: "flex", flexDirection: "column", gap: 0.5 }}>
            <NavBarButtons mobile onClose={() => setDrawerOpen(false)} />
          </Box>

          <Divider sx={{ borderColor: "rgba(218,165,32,0.1)" }} />

          {/* Auth button */}
          <Box sx={{ p: 2.5 }}>
            <Button
              fullWidth
              onClick={() => { setDrawerOpen(false); handleAuthClick(); }}
              sx={{
                color: "#0a0a0a",
                background: "linear-gradient(135deg, #daa520, #ff8c00)",
                fontWeight: "bold", textTransform: "none",
                borderRadius: "12px", py: 1.2,
                fontSize: "0.9rem",
                boxShadow: "0 2px 10px rgba(218,165,32,0.3)",
                "&:hover": { boxShadow: "0 4px 18px rgba(218,165,32,0.5)" },
              }}
            >
              {isAuthenticated ? "Logout" : "Register"}
            </Button>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}
