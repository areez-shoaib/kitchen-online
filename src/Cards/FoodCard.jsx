import React from "react";
import { Card, CardContent, Typography, Box, Button, CardMedia } from "@mui/material";

export default function FoodCard({ name, price, description, emoji, category, image }) {
  const handleOrderNow = () => {
    const phoneNumber = "+923310451716";
    const message = `Hello! I would like to order ${name} from Biryani Hub.`;
    const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleAddToCart = () => {
    // Add to cart functionality
    console.log(`Added ${name} to cart`);
  };

  return (
    <Card
      sx={{
        width: "320px",
        height: "420px",
        bgcolor: "rgb(26, 26, 26)",
        border: "1px solid rgb(65, 54, 27)",
        borderRadius: "16px",
        overflow: "hidden",
        transition: "all 0.3s ease",
        cursor: "pointer",
        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: "0 12px 30px rgba(218, 165, 32, 0.4)",
          borderColor: "rgb(218, 165, 32)",
        },
      }}
    >
      {/* Food Image Section */}
      <Box sx={{ position: "relative", height: "180px" }}>
        <CardMedia
          component="img"
          image={image || `https://picsum.photos/seed/${name}/320/180.jpg`}
          alt={name}
          sx={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
          }}
        />
        
        {/* Category Badge */}
        <Box
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            bgcolor: "rgba(218, 165, 32, 0.9)",
            color: "black",
            px: 2,
            py: 0.5,
            borderRadius: "20px",
            fontSize: "10px",
            fontWeight: "bold",
            textTransform: "uppercase",
          }}
        >
          {category}
        </Box>
      </Box>

      {/* Card Content */}
      <CardContent sx={{ p: 3, flexGrow: 1, display: "flex", flexDirection: "column" }}>
        <Typography
          sx={{
            color: "white",
            fontSize: "20px",
            fontWeight: "bold",
            fontFamily: "Times New Roman, serif",
            mb: 1,
            lineHeight: 1.2,
          }}
        >
          {name}
        </Typography>
        
        <Typography
          sx={{
            color: "rgb(208, 208, 208)",
            fontSize: "14px",
            mb: 2,
            lineHeight: 1.4,
            flexGrow: 1,
          }}
        >
          {description}
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
          <Typography
            sx={{
              color: "rgb(218, 165, 32)",
              fontSize: "24px",
              fontWeight: "bold",
            }}
          >
            {price}
          </Typography>
          
          <Box
            sx={{
              display: "flex",
              gap: 0.5,
            }}
          >
            {[1, 2, 3, 4, 5].map((star) => (
              <Typography
                key={star}
                sx={{
                  fontSize: "14px",
                  color: star <= 4 ? "rgb(218, 165, 32)" : "rgb(65, 54, 27)",
                }}
              >
                ⭐
              </Typography>
            ))}
          </Box>
        </Box>

        {/* Buttons */}
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            variant="contained"
            onClick={handleAddToCart}
            sx={{
              flex: 1,
              background: "transparent",
              color: "rgb(218, 165, 32)",
              border: "2px solid rgb(218, 165, 32)",
              fontWeight: "bold",
              textTransform: "none",
              borderRadius: "10px",
              py: 1.2,
              fontSize: "14px",
              "&:hover": {
                background: "rgba(218, 165, 32, 0.1)",
                borderColor: "rgb(244, 148, 10)",
                color: "rgb(244, 148, 10)",
              },
            }}
          >
            Add to Cart
          </Button>
          
          <Button
            variant="contained"
            onClick={handleOrderNow}
            sx={{
              flex: 1,
              background: "linear-gradient(45deg, rgb(225, 160, 25), rgb(246, 146, 8))",
              color: "black",
              fontWeight: "bold",
              textTransform: "none",
              borderRadius: "10px",
              py: 1.2,
              fontSize: "14px",
              "&:hover": {
                background: "linear-gradient(45deg, rgb(246, 146, 8), rgb(225, 160, 25))",
                transform: "scale(1.02)",
              },
            }}
          >
            Order Now
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
