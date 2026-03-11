import React, { useState } from "react";
import { Box, Grid, Paper, Divider, Typography, Button, IconButton } from "@mui/material";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import EditIcon from "@mui/icons-material/Edit";
import { useAuth } from "../Context/AuthContext";
import { useLocation } from "react-router-dom";
import TopBarEditModal from "../Modals/TopBarEditModal";

export default function TopBar() {
  const { user, isAuthenticated } = useAuth();
  const location = useLocation();
  const isAdmin = isAuthenticated && user?.role === 'admin' && location.pathname === '/AdminDashboard';
  
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [topBarData, setTopBarData] = useState({
    title: "Biryani Special",
    originalPrice: "RS. 500",
    discountedPrice: "RS. 300",
    discountText: "30% off",
    orderButtonText: "Order Now",
    whatsappNumber: "+923310451716",
    whatsappMessage: "Hello! I would like to place an order from Biryani Hub."
  });

  const handleSave = () => {
    // Here you can save the data to backend or localStorage
    console.log("TopBar data saved:", topBarData);
  };

  const handleOrderNowClick = () => {
    const whatsappUrl = `https://wa.me/${topBarData.whatsappNumber.replace('+', '')}?text=${encodeURIComponent(topBarData.whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };
  return (
    <>
      <Box
        sx={{
          height: { xs: "auto", md: "auto", lg: "60px" },
          backgroundColor: "rgb(26 26 26)",
          color: "white",
          flexDirection: { xs: "row", md: "column", lg: "row" },
          background: "radial-gradient(circle, rgb(81 61 11) 20%,  #1a1a1a 40%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: { lg: 3, xs: 2, md: 0 },
          position: "relative",
        }}
      >
      <Box
        sx={{
          display: "flex",
          gap: { lg: 3, xs: 0, md: 0 },
          flexDirection: { xs: "column", md: "column", lg: "row" },
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "16px", md: "20px", lg: "24px" },
              fontFamily: "Times New Roman, serif",
              display: "flex",
              gap: 1,
              alignItems: "center",
            }}
          >
            {topBarData.title}
            <Typography
              component={"span"}
              sx={{
                textDecoration: "line-through",
                color: "rgb(30 115 7)",
                fontSize: { xs: "10px", md: "12px", lg: "13px" },
                fontWeight: "900",
              }}
            >
              {topBarData.originalPrice}
            </Typography>
            <Typography
              component={"span"}
              sx={{
                fontWeight: 1000,
                fontSize: { xs: "10px", md: "12px", lg: "13px" },
                color: "rgb(218 165  32)",
              }}
            >
              {topBarData.discountedPrice}
            </Typography>
          </Typography>
        </Box>
        <Box>
          <Button
            variant="contained"
            sx={{
              color: "black",
              background:
                "linear-gradient(45deg, rgb(225 160 25), rgb(246 146 8))",
              fontWeight: 900,
              fontSize: { xs: "10px", md: "12px", lg: "14px" },
              borderRadius: "20px",
              px: 1,
              py: 0.5,
              gap: 1,
              pointerEvents: isAdmin ? "auto" : "none",

              animation: "glow 2s infinite alternate",
              textTransform: "none",
              "@keyframes glow": {
                "0%": {
                  boxShadow: "0 0 5px rgba(255, 193, 7, 0.3)",
                },
                "50%": {
                  transform: "translateY(-4px)",
                  boxShadow: "0 10px 20px rgba(0,0,0,0.3)",
                },
                "100%": {
                  boxShadow: "0 0 20px rgba(255, 193, 7, 0.8)",
                },
              },
            }}
          >
            <LocalOfferIcon sx={{ color: "rgb(97 97 97)", fontSize: "14px" }} />
            {topBarData.discountText}
          </Button>
        </Box>
        <Box sx={{}}>
          <Button
            variant="contained"
            onClick={handleOrderNowClick}
            sx={{
              color: "black",
              outline: "none", // focus outline remove
          
              background:
                "linear-gradient(45deg, rgb(225 160 25),rgb(246 146 8))",
              fontWeight: 900,
              fontSize: "14px",
              textTransform: "none",
              borderRadius: { lg: "13px", xs: "2px" },
              px: { lg: 3, xs: 0.2 },
              py: { xs: 0.1, lg: 0.8 },
              "&:focus": {
                outline: "none",
         
              },
              "&:active": {
                outline: "none",
        
              },
            }}
          >
            {topBarData.orderButtonText}
          </Button>
        </Box>
        
        {/* Admin Edit Button */}
        {isAdmin && (
          <Box sx={{ position: "absolute", top: 10, right: 10 }}>
            <IconButton
              onClick={() => setEditModalOpen(true)}
              sx={{
                color: "rgba(255, 193, 7, 0.8)",
                bgcolor: "rgba(218, 165  32, 0.1)",
                "&:hover": {
                  bgcolor: "rgba(218, 165  32, 0.2)",
                },
              }}
            >
              <EditIcon />
            </IconButton>
          </Box>
        )}
      </Box>

      {/* Edit Modal */}
      <TopBarEditModal
        open={editModalOpen}
        onClose={() => setEditModalOpen(false)}
        topBarData={topBarData}
        setTopBarData={setTopBarData}
        onSave={handleSave}
      />
      </Box>
    </>
  );
}
