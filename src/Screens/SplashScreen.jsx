import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import SplashTopBar from "../Components/SplashTopBar";

function SplashScreen() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        width: "100%",
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

      {/* Promo Code Member Section */}
      <Box
        sx={{
          position: "absolute",
          top: { xs: 40, sm: 50, md: 70, lg: 60, xl: 80 },
          left: 0,
          right: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          zIndex: 2,
          opacity: 0,
          animation: "slideDown 1s ease 0.3s forwards",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontFamily: '"Times New Roman", serif',
            fontWeight: "bold",
            fontSize: { xs: "1rem", sm: "1rem", md: "1.8rem" },
            color: "#daa520",
            textAlign: "center",
            textShadow: "0 0 20px rgba(218, 165, 32, 0.8)",
            mb: 1,
          }}
        >
          🎉 WANNA BECOME A PROMOCODE MEMBER!! 🎉
        </Typography>

        <Typography
          variant="h6"
          sx={{
            fontFamily: '"Times New Roman", serif',
            fontWeight: "bold",
            fontSize: { xs: "0.8rem", sm: "1.2rem", md: "1.4rem" },
            color: "#ff8c00",
            textAlign: "center",
            textShadow: "0 0 15px rgba(255, 140, 0, 0.8)",
            mb: { xs: 1, xl: 2 }
          }}
        >
          Get 15% off on whole menu
        </Typography>

        <Button
          onClick={() => navigate("/PromoCodeScreen")}
          sx={{
            px: { lg: 4 },
            py: { xs: 0.5, lg: 1 },
            borderRadius: "25px",
            fontWeight: "bold",
            fontSize: { xs: "0.6rem", sm: "1rem" },
            background: "linear-gradient(45deg, #daa520, #ff8c00)",
            color: "#0f0f0f",
            border: "2px solid #daa520",
            textTransform: "none",
            "&:hover": {
              transform: "scale(1.1)",
              background: "linear-gradient(45deg, #ff8c00, #daa520)",
              boxShadow: "0 0 25px rgba(218, 165, 32, 0.8)",
            },
          }}
        >
          Click Here
        </Button>
      </Box>

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
          fontSize: { xs: "1.5rem", sm: "2rem", md: "3rem" ,xl:"4rem" },
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
          fontSize: { xs: "1rem", sm: "2rem", md: "2rem",xl:"4rem" },
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
          fontSize: { xs: "0.8rem", sm: "1rem", md: "1rem" },
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

      {/* Skip Button */}
      <Button
        onClick={() => navigate("/HomeScreen")} // Navigate to HomeScreen
        sx={{
          mt: 2,
          px: {xs:3,md:4},
          py: {xs:0.5,md:1.5},
          fontSize: { xs: "0.8rem", sm: "0.5rem", md: "0.8rem" },
          borderRadius: "20px",
          fontWeight: 700,
          background: "transparent",
          color: "#f8d12f",
          border: "2px solid #f8d12f",
          opacity: 0,
          animation: "fadeInText 1.5s ease 2s forwards",
          "&:hover": {
            transform: "scale(1.05)",
            background: "#f8d12f",
            color: "#0f0f0f",
          },
        }}
      >
        Skip
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
          @keyframes slideDown {
            from { opacity: 0; transform: translateY(-50px);}
            to { opacity: 1; transform: translateY(0);}
          }
        `}
      </style>
    </Box>
  );
}

export default SplashScreen;
