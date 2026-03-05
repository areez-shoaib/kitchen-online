import { useState, useEffect, useCallback, memo } from "react";
import { Box, IconButton, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";

function FoodCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const navigate = useNavigate();

  // Carousel slides data
  const slides = [
    {
      id: 1,
      title: "Real Food",
      subtitle: "REAL TASTE",
      description: "Authentic homemade meals prepared fresh daily",
    },
    {
      id: 2,
      title: "Fresh & Delicious",
      subtitle: "HOMEMADE QUALITY",
      description: "Premium ingredients, traditional recipes",
    },
    {
      id: 3,
      title: "Order Now",
      subtitle: "FAST DELIVERY",
      description: "Quick delivery across DG Khan",
    },
  ];

  // Auto-play carousel
  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoPlay, slides.length]);

  // Memoize event handlers
  const handlePrevious = useCallback(() => {
    setAutoPlay(false);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  const handleNext = useCallback(() => {
    setAutoPlay(false);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const handleDotClick = useCallback((index) => {
    setAutoPlay(false);
    setCurrentSlide(index);
  }, []);

  const handleMouseEnter = useCallback(() => {
    setAutoPlay(false);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setAutoPlay(true);
  }, []);

  const handleWhatsApp = useCallback(() => {
    window.open("", "_blank", "noopener,noreferrer");
  }, []);

  const handleViewMenu = useCallback(() => {
    navigate("/MenuScreen");
  }, [navigate]);

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        height: { xs: "220px", sm: "320px", md: "480px" },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0f0f0f",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background Image - Blurred */}
      <Box
        component="img"
        src="src/assets/food.avif"
        alt="Food Background"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          filter: "blur(0.1px)",
          zIndex: 0,
        }}
      />

      {/* Dark Overlay - Theme colors */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "linear-gradient(135deg, rgba(0, 0, 0, 0.55) 0%, rgba(0, 0, 0, 0.6) 50%, rgba(0, 0, 0, 0.55) 100%)",
          zIndex: 1,
        }}
      />

      {/* Carousel Container */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 2,
        }}
      >
        {/* Slides */}
        {slides.map((slide, index) => (
          <Box
            key={slide.id}
            sx={{
              position: "absolute",
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              opacity: currentSlide === index ? 1 : 0,
              transition: "opacity 0.8s ease-in-out",
              px: { xs: 2, sm: 3, md: 4 },
              zIndex: 2,
              textAlign: "center",
            }}
          >
            {/* Main Title */}
            <Typography
              sx={{
                color: "#ffffff",
                fontFamily: '"Georgia", serif',
                fontWeight: 700,
                fontSize: { xs: "1.3rem", sm: "2rem", md: "3.2rem" },
                letterSpacing: 1,
                textShadow: "0 3px 10px rgba(0,0,0,0.6)",
                willChange: "opacity, transform",
                animation:
                  currentSlide === index ? "slideInDown 0.8s ease-out" : "none",
                "@keyframes slideInDown": {
                  from: {
                    opacity: 0,
                    transform: "translateY(-30px)",
                  },
                  to: {
                    opacity: 1,
                    transform: "translateY(0)",
                  },
                },
              }}
            >
              {slide.title}
            </Typography>

            {/* Subtitle - Gold gradient */}
            <Typography
              sx={{
                background: "linear-gradient(135deg, #daa520 0%, #ff8c00 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontFamily: '"Georgia", serif',
                fontWeight: 900,
                fontSize: { xs: "1.1rem", sm: "1.8rem", md: "2.8rem" },
                letterSpacing: 2,
                lineHeight: 1.2,
                textShadow: "0 3px 10px rgba(0,0,0,0.6)",
                mt: 0.5,
                willChange: "opacity, transform",
                animation:
                  currentSlide === index
                    ? "slideInDown 0.8s ease-out 0.1s both"
                    : "none",
                "@keyframes slideInDown": {
                  from: {
                    opacity: 0,
                    transform: "translateY(-30px)",
                  },
                  to: {
                    opacity: 1,
                    transform: "translateY(0)",
                  },
                },
              }}
            >
              {slide.subtitle}
            </Typography>

            {/* Description */}
            <Typography
              sx={{
                color: "rgba(255, 255, 255, 0.95)",
                fontWeight: 500,
                fontSize: { xs: "0.8rem", sm: "0.95rem", md: "1.2rem" },
                mt: 1,
                textShadow: "0 2px 8px rgba(0,0,0,0.6)",
                letterSpacing: 0.3,
                maxWidth: "600px",
                animation:
                  currentSlide === index
                    ? "slideInDown 0.8s ease-out 0.2s both"
                    : "none",
                "@keyframes slideInDown": {
                  from: {
                    opacity: 0,
                    transform: "translateY(-30px)",
                  },
                  to: {
                    opacity: 1,
                    transform: "translateY(0)",
                  },
                },
              }}
            >
              {slide.description}
            </Typography>

            {/* Action Buttons */}
            <Box
              sx={{
                display: "flex",
                gap: { xs: 1, sm: 2 },
                mt: { xs: 1.5, sm: 3 },
                flexWrap: "wrap",
                justifyContent: "center",
                animation:
                  currentSlide === index
                    ? "slideInDown 0.8s ease-out 0.3s both"
                    : "none",
                "@keyframes slideInDown": {
                  from: {
                    opacity: 0,
                    transform: "translateY(-30px)",
                  },
                  to: {
                    opacity: 1,
                    transform: "translateY(0)",
                  },
                },
              }}
            >
              {/* Order on WhatsApp Button */}
              <Button
                variant="contained"
                startIcon={<WhatsAppIcon />}
                onClick={handleWhatsApp}
                sx={{
                  background:
                    "linear-gradient(135deg, #daa520 0%, #ff8c00 100%)",
                  color: "#0f0f0f",
                  fontWeight: 700,
                  fontSize: { xs: "0.75rem", sm: "0.9rem" },
                  px: { xs: 1.5, sm: 3 },
                  py: { xs: 0.6, sm: 1 },
                  transition: "all 0.3s ease",
                  boxShadow: "0 4px 12px rgba(218, 165, 32, 0.3)",
                  "&:hover": {
                    background:
                      "linear-gradient(135deg, #ff8c00 0%, #daa520 100%)",
                    transform: "translateY(-2px)",
                    boxShadow: "0 8px 20px rgba(218, 165, 32, 0.4)",
                  },
                }}
              >
                Order on WhatsApp
              </Button>

              {/* View Menu Button */}
              <Button
                variant="outlined"
                startIcon={<RestaurantMenuIcon />}
                onClick={handleViewMenu}
                sx={{
                  borderColor: "#daa520",
                  color: "#daa520",
                  fontWeight: 700,
                  fontSize: { xs: "0.75rem", sm: "0.9rem" },
                  px: { xs: 1.5, sm: 3 },
                  py: { xs: 0.6, sm: 1 },
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "rgba(218, 165, 32, 0.1)",
                    borderColor: "#ff8c00",
                    color: "#ff8c00",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                View Menu
              </Button>
            </Box>
          </Box>
        ))}

        {/* Previous Button */}
        <IconButton
          onClick={handlePrevious}
          sx={{
            position: "absolute",
            left: { xs: 4, sm: 16, md: 24 },
            zIndex: 10,
            background: "linear-gradient(135deg, #daa520 0%, #ff8c00 100%)",
            color: "#0f0f0f",
            fontWeight: 800,
            transition: "all 0.3s ease",
            boxShadow: "0 4px 15px rgba(218, 165, 32, 0.3)",
            "&:hover": {
              background: "linear-gradient(135deg, #ff8c00 0%, #daa520 100%)",
              transform: "scale(1.15)",
              boxShadow: "0 8px 25px rgba(218, 165, 32, 0.5)",
            },
          }}
        >
          <ChevronLeftIcon sx={{ fontSize: { xs: "1.4rem", md: "2.2rem" } }} />
        </IconButton>

        {/* Next Button */}
        <IconButton
          onClick={handleNext}
          sx={{
            position: "absolute",
            right: { xs: 4, sm: 16, md: 24 },
            zIndex: 10,
            background: "linear-gradient(135deg, #daa520 0%, #ff8c00 100%)",
            color: "#0f0f0f",
            fontWeight: 800,
            transition: "all 0.3s ease",
            boxShadow: "0 4px 15px rgba(218, 165, 32, 0.3)",
            "&:hover": {
              background: "linear-gradient(135deg, #ff8c00 0%, #daa520 100%)",
              transform: "scale(1.15)",
              boxShadow: "0 8px 25px rgba(218, 165, 32, 0.5)",
            },
          }}
        >
          <ChevronRightIcon sx={{ fontSize: { xs: "1.4rem", md: "2.2rem" } }} />
        </IconButton>

        {/* Dot Indicators */}
        <Box
          sx={{
            position: "absolute",
            bottom: { xs: 12, sm: 20, md: 24 },
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: { xs: 0.8, sm: 1.2 },
            zIndex: 10,
          }}
        >
          {slides.map((_, index) => (
            <Box
              key={index}
              onClick={() => handleDotClick(index)}
              sx={{
                width:
                  currentSlide === index
                    ? { xs: "20px", sm: "28px" }
                    : { xs: "8px", sm: "12px" },
                height: { xs: "8px", sm: "12px" },
                borderRadius: "6px",
                background:
                  currentSlide === index
                    ? "#daa520"
                    : "rgba(218, 165, 32, 0.4)",
                cursor: "pointer",
                transition: "all 0.4s ease",
                boxShadow:
                  currentSlide === index
                    ? "0 0 12px rgba(218, 165, 32, 0.6)"
                    : "none",
                "&:hover": {
                  background: "#daa520",
                  boxShadow: "0 0 12px rgba(218, 165, 32, 0.6)",
                },
              }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default memo(FoodCarousel);
