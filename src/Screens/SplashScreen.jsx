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
        bgcolor: "#0a0a0a",
        color: "#fff",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <SplashTopBar />

      {/* Background Image */}
      <Box
        component="img"
        src="/image/biryani.jpg"
        alt="Splash Background"
        sx={{
          position: "absolute",
          top: 0, left: 0,
          width: "100%", height: "100%",
          objectFit: "cover",
          opacity: 0,
          animation: "fadeInBg 2.5s ease forwards",
          zIndex: 0,
        }}
      />

      {/* Dark gradient overlay */}
      <Box sx={{
        position: "absolute", top: 0, left: 0, right: 0, bottom: 0,
        background: "linear-gradient(180deg, rgba(0,0,0,0.75) 0%, rgba(10,10,10,0.6) 50%, rgba(0,0,0,0.85) 100%)",
        zIndex: 1,
      }} />

      {/* Animated glow orbs */}
      <Box sx={{
        position: "absolute", top: "15%", left: "10%",
        width: { xs: 120, md: 220 }, height: { xs: 120, md: 220 },
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(218,165,32,0.18) 0%, transparent 70%)",
        animation: "pulse 4s ease-in-out infinite",
        zIndex: 1,
      }} />
      <Box sx={{
        position: "absolute", bottom: "20%", right: "8%",
        width: { xs: 100, md: 180 }, height: { xs: 100, md: 180 },
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(255,140,0,0.15) 0%, transparent 70%)",
        animation: "pulse 5s ease-in-out 1s infinite",
        zIndex: 1,
      }} />

      {/* Promo Code Banner */}
      <Box
        sx={{
          position: "absolute",
          top: { xs: 50, sm: 60, md: 75 },
          left: 0, right: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          zIndex: 3,
          opacity: 0,
          animation: "slideDown 1s ease 0.4s forwards",
        }}
      >
        <Box sx={{
          background: "linear-gradient(135deg, rgba(218,165,32,0.12), rgba(255,140,0,0.08))",
          border: "1px solid rgba(218,165,32,0.4)",
          borderRadius: "50px",
          px: { xs: 2, md: 4 },
          py: { xs: 0.8, md: 1.2 },
          backdropFilter: "blur(10px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 0.5,
          boxShadow: "0 0 30px rgba(218,165,32,0.15)",
        }}>
          <Typography sx={{
            fontFamily: '"Times New Roman", serif',
            fontWeight: "bold",
            fontSize: { xs: "0.85rem", sm: "1rem", md: "1.5rem" },
            color: "#daa520",
            textAlign: "center",
            textShadow: "0 0 20px rgba(218,165,32,0.9)",
            letterSpacing: 1,
          }}>
            🎉 WANNA BECOME A PROMOCODE MEMBER? 🎉
          </Typography>
          <Typography sx={{
            fontFamily: '"Times New Roman", serif',
            fontSize: { xs: "0.7rem", sm: "0.9rem", md: "1.1rem" },
            color: "#ff8c00",
            textAlign: "center",
            textShadow: "0 0 12px rgba(255,140,0,0.7)",
          }}>
            Get 15% off on whole menu
          </Typography>
        </Box>

        <Button
          onClick={() => navigate("/PromoCodeScreen")}
          sx={{
            mt: 1.5,
            px: { xs: 3, md: 5 },
            py: { xs: 0.6, md: 1 },
            borderRadius: "30px",
            fontWeight: "bold",
            fontSize: { xs: "0.65rem", sm: "0.85rem" },
            background: "linear-gradient(45deg, #daa520, #ff8c00)",
            color: "#0a0a0a",
            border: "none",
            textTransform: "none",
            boxShadow: "0 4px 20px rgba(218,165,32,0.5)",
            transition: "all 0.3s ease",
            "&:hover": {
              transform: "scale(1.08)",
              background: "linear-gradient(45deg, #ff8c00, #daa520)",
              boxShadow: "0 6px 30px rgba(218,165,32,0.8)",
            },
          }}
        >
          Click Here
        </Button>
      </Box>

      {/* Main Content */}
      <Box sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        zIndex: 2,
        textAlign: "center",
        px: 2,
      }}>
        {/* Logo glow ring */}
        <Box sx={{
          width: { xs: 80, md: 110 },
          height: { xs: 80, md: 110 },
          borderRadius: "50%",
          background: "linear-gradient(135deg, rgba(218,165,32,0.25), rgba(255,140,0,0.15))",
          border: "2px solid rgba(218,165,32,0.5)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mb: 2,
          opacity: 0,
          animation: "fadeInText 1.2s ease 0.6s forwards",
          boxShadow: "0 0 40px rgba(218,165,32,0.3), inset 0 0 20px rgba(218,165,32,0.1)",
        }}>
          <Typography sx={{ fontSize: { xs: "2.5rem", md: "3.5rem" } }}>🍛</Typography>
        </Box>

        <Typography
          variant="h2"
          sx={{
            fontFamily: '"Georgia", serif',
            fontWeight: 800,
            fontSize: { xs: "1.6rem", sm: "2.2rem", md: "3.2rem", xl: "4rem" },
            letterSpacing: 2,
            textAlign: "center",
            zIndex: 1,
            opacity: 0,
            animation: "fadeInText 1.5s ease 0.8s forwards",
            background: "linear-gradient(135deg, #ffffff 0%, #f8d12f 60%, #daa520 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textShadow: "none",
            filter: "drop-shadow(0 0 20px rgba(218,165,32,0.4))",
          }}
        >
          Welcome to Biryani Hub
        </Typography>

        <Typography
          variant="h5"
          sx={{
            fontFamily: '"Georgia", serif',
            fontWeight: 500,
            mt: 1.5,
            fontSize: { xs: "1rem", sm: "1.4rem", md: "1.8rem", xl: "2.5rem" },
            color: "#f8d12f",
            opacity: 0,
            animation: "fadeInText 1.5s ease 1.1s forwards",
            textShadow: "0 0 20px rgba(248,209,47,0.5)",
            letterSpacing: 1,
          }}
        >
          Real Taste, Fast Delivery
        </Typography>

        {/* Divider line */}
        <Box sx={{
          width: { xs: 80, md: 120 },
          height: 2,
          background: "linear-gradient(90deg, transparent, #daa520, transparent)",
          mt: 2, mb: 2,
          opacity: 0,
          animation: "fadeInText 1.5s ease 1.3s forwards",
        }} />

        {/* Buttons */}
        <Button
          onClick={() => navigate("/UserLogin")}
          sx={{
            mt: 1,
            px: { xs: 4, md: 6 },
            py: { xs: 1, md: 1.5 },
            fontSize: { xs: "0.85rem", sm: "1rem", md: "1rem" },
            borderRadius: "30px",
            fontWeight: 700,
            background: "linear-gradient(135deg, #daa520 0%, #ff8c00 100%)",
            color: "#0a0a0a",
            opacity: 0,
            animation: "fadeInText 1.5s ease 1.5s forwards",
            boxShadow: "0 4px 20px rgba(218,165,32,0.5)",
            textTransform: "none",
            letterSpacing: 0.5,
            transition: "all 0.3s ease",
            "&:hover": {
              transform: "scale(1.06) translateY(-2px)",
              background: "linear-gradient(135deg, #ff8c00 0%, #daa520 100%)",
              boxShadow: "0 8px 30px rgba(218,165,32,0.7)",
            },
          }}
        >
          Press For Registration
        </Button>

        <Button
          onClick={() => navigate("/HomeScreen")}
          sx={{
            mt: 1.5,
            px: { xs: 3, md: 4 },
            py: { xs: 0.6, md: 1 },
            fontSize: { xs: "0.8rem", sm: "0.85rem", md: "0.9rem" },
            borderRadius: "30px",
            fontWeight: 600,
            background: "transparent",
            color: "#f8d12f",
            border: "1.5px solid rgba(248,209,47,0.6)",
            opacity: 0,
            animation: "fadeInText 1.5s ease 1.8s forwards",
            textTransform: "none",
            backdropFilter: "blur(5px)",
            transition: "all 0.3s ease",
            "&:hover": {
              transform: "scale(1.05)",
              background: "rgba(248,209,47,0.12)",
              borderColor: "#f8d12f",
              boxShadow: "0 0 20px rgba(248,209,47,0.3)",
            },
          }}
        >
          Skip →
        </Button>
      </Box>

      <style>
        {`
          @keyframes fadeInText {
            from { opacity: 0; transform: translateY(25px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes fadeInBg {
            from { opacity: 0; }
            to { opacity: 0.35; }
          }
          @keyframes slideDown {
            from { opacity: 0; transform: translateY(-40px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes pulse {
            0%, 100% { transform: scale(1); opacity: 0.7; }
            50% { transform: scale(1.15); opacity: 1; }
          }
        `}
      </style>
    </Box>
  );
}

export default SplashScreen;
