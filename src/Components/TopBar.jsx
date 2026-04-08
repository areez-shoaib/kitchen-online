import React, { useState } from "react";
import { Box, Typography, Button, IconButton } from "@mui/material";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import EditIcon from "@mui/icons-material/Edit";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useAuth } from "../Context/AuthContext";
import { useLocation } from "react-router-dom";
import TopBarEditModal from "../Modals/TopBarEditModal";

export default function TopBar() {
  const { user, isAuthenticated } = useAuth();
  const location = useLocation();
  const isAdmin = isAuthenticated && user?.role === "admin" && location.pathname === "/AdminDashboard";

  const [editModalOpen, setEditModalOpen] = useState(false);
  const [topBarData, setTopBarData] = useState({
    title: "Biryani Special",
    originalPrice: "RS. 500",
    discountedPrice: "RS. 300",
    discountText: "30% off",
    orderButtonText: "Order Now",
    whatsappNumber: "+923310451716",
    whatsappMessage: "Hello! I would like to place an order from Biryani Hub.",
  });

  const handleOrderNowClick = () => {
    const url = `https://wa.me/${topBarData.whatsappNumber.replace("+", "")}?text=${encodeURIComponent(topBarData.whatsappMessage)}`;
    window.open(url, "_blank");
  };

  return (
    <>
      <Box sx={{
        background: "linear-gradient(90deg, #0f0f0f 0%, rgb(60,42,8) 40%, rgb(60,42,8) 60%, #0f0f0f 100%)",
        borderBottom: "1px solid rgba(218,165,32,0.2)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        py: { xs: 1, sm: 0 },
        minHeight: { xs: "auto", sm: "52px" },
        position: "relative",
        overflow: "hidden",
      }}>
        {/* shimmer line */}
        <Box sx={{
          position: "absolute", bottom: 0, left: 0, right: 0, height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(218,165,32,0.5), transparent)",
        }} />

        <Box sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: { xs: 1, sm: 2 },
          px: { xs: 1, sm: 3 },
          py: { xs: 0.8, sm: 0 },
          width: "100%",
          maxWidth: 900,
        }}>
          {/* Title + prices */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, flexWrap: "wrap", justifyContent: "center" }}>
            <Typography sx={{
              fontWeight: "bold",
              fontSize: { xs: "0.9rem", sm: "1rem", md: "1.15rem" },
              fontFamily: "Times New Roman, serif",
              color: "white",
              letterSpacing: 0.5,
            }}>
              {topBarData.title}
            </Typography>
            <Typography component="span" sx={{
              textDecoration: "line-through",
              color: "rgba(76,175,80,0.9)",
              fontSize: { xs: "0.7rem", sm: "0.75rem" },
              fontWeight: 700,
            }}>
              {topBarData.originalPrice}
            </Typography>
            <Typography component="span" sx={{
              color: "#daa520",
              fontSize: { xs: "0.75rem", sm: "0.8rem" },
              fontWeight: 800,
            }}>
              {topBarData.discountedPrice}
            </Typography>
          </Box>

          {/* Discount badge */}
          <Button sx={{
            color: "#0a0a0a",
            background: "linear-gradient(135deg, #daa520, #ff8c00)",
            fontWeight: 800,
            fontSize: { xs: "0.65rem", sm: "0.7rem" },
            borderRadius: "20px",
            px: { xs: 1.5, sm: 2 },
            py: 0.4,
            minWidth: "auto",
            pointerEvents: "none",
            textTransform: "none",
            boxShadow: "0 2px 10px rgba(218,165,32,0.4)",
            animation: "topbarGlow 2s infinite alternate",
            "@keyframes topbarGlow": {
              "0%": { boxShadow: "0 0 5px rgba(218,165,32,0.3)" },
              "100%": { boxShadow: "0 0 18px rgba(218,165,32,0.8)" },
            },
          }}>
            <LocalOfferIcon sx={{ fontSize: "0.75rem", mr: 0.5 }} />
            {topBarData.discountText}
          </Button>

          {/* Order Now */}
          <Button
            onClick={handleOrderNowClick}
            startIcon={<WhatsAppIcon sx={{ fontSize: "0.9rem !important" }} />}
            sx={{
              color: "#0a0a0a",
              background: "linear-gradient(135deg, #daa520, #ff8c00)",
              fontWeight: 700,
              fontSize: { xs: "0.7rem", sm: "0.8rem" },
              textTransform: "none",
              borderRadius: "20px",
              px: { xs: 2, sm: 2.5 },
              py: { xs: 0.5, sm: 0.6 },
              boxShadow: "0 2px 10px rgba(218,165,32,0.3)",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "translateY(-1px)",
                boxShadow: "0 4px 18px rgba(218,165,32,0.6)",
              },
              "&:focus": { outline: "none" },
            }}
          >
            {topBarData.orderButtonText}
          </Button>
        </Box>

        {isAdmin && (
          <IconButton onClick={() => setEditModalOpen(true)} sx={{
            position: "absolute", top: 6, right: 10,
            color: "rgba(218,165,32,0.8)",
            bgcolor: "rgba(218,165,32,0.08)",
            "&:hover": { bgcolor: "rgba(218,165,32,0.18)" },
          }}>
            <EditIcon fontSize="small" />
          </IconButton>
        )}
      </Box>

      <TopBarEditModal
        open={editModalOpen}
        onClose={() => setEditModalOpen(false)}
        topBarData={topBarData}
        setTopBarData={setTopBarData}
        onSave={() => {}}
      />
    </>
  );
}
