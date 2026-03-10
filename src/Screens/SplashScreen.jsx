import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import SplashTopBar from "../Components/SplashTopBar";

function SplashScreen() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "#0f0f0f",
        color: "#fff",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <SplashTopBar />

      {/* Background fade animation */}
      <Box
        component="img"
        src="/image/biryani.jpg"
        alt="Splash Background"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: 0.3,
          animation: "fadeInBg 2s ease forwards",
          zIndex: 0,
        }}
      />

      {/* Main Logo / Text */}
      <Typography
        variant="h2"
        sx={{
          fontFamily: '"Georgia", serif',
          fontWeight: 800,
          fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
          letterSpacing: 2,
          textAlign: "center",
          zIndex: 1,
          opacity: 0,
          animation: "fadeInText 1.5s ease 0.5s forwards",
        }}
      >
        🍛 Welcome to Biryani Hub
      </Typography>

      <Typography
        variant="h5"
        sx={{
          fontFamily: '"Georgia", serif',
          fontWeight: 500,
          mt: 2,
          color: "#f8d12f",
          opacity: 0,
          animation: "fadeInText 1.5s ease 1s forwards",
        }}
      >
        Real Taste, Fast Delivery
      </Typography>

      {/* Button to navigate to UserLogin */}
      <Button
        onClick={() => navigate("/UserLogin")} // ✅ Change to UserLogin route
        sx={{
          mt: 4,
          px: 4,
          py: 1.5,
          borderRadius: "20px",
          fontWeight: 700,
          background: "linear-gradient(135deg, #daa520 0%, #ff8c00 100%)",
          color: "#0f0f0f",
          opacity: 0,
          animation: "fadeInText 1.5s ease 1.5s forwards",
          "&:hover": {
            transform: "scale(1.05)",
            background: "linear-gradient(135deg, #ff8c00 0%, #daa520 100%)",
          },
        }}
      >
        Press For Registration
      </Button>

      <style>
        {`
          @keyframes fadeInText {
            from { opacity: 0; transform: translateY(30px);}
            to { opacity: 1; transform: translateY(0);}
          }
          @keyframes fadeInBg {
            from { opacity: 0;}
            to { opacity: 0.3;}
          }
        `}
      </style>
    </Box>
  );
}

export default SplashScreen;
