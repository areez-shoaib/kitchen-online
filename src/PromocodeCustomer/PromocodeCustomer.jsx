import React, { useState } from "react";
import { Box, Typography, Divider, TextField, Button, Avatar, Chip, Card, CardContent, IconButton } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import MopedIcon from "@mui/icons-material/Moped";
import PaymentIcon from "@mui/icons-material/Payment";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import { glowEffect } from "../Animations/GLowAnimation";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import RefreshIcon from "@mui/icons-material/Refresh";
import StarIcon from "@mui/icons-material/Star";
import DiamondIcon from "@mui/icons-material/Diamond";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpIcon from "@mui/icons-material/Help";

const AnimatedBox = ({ children, ...props }) => (
  <Box
    sx={{
      display: "flex",
      border: "2px solid rgb(61 51 26)",
      borderRadius: "16px",
      bgcolor: "linear-gradient(135deg, rgb(15 15 15), rgb(25 25 25))",
      height: "120px",
      width: "240px",
      position: "relative",
      overflow: "hidden",
      "&::before": {
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: "3px",
        background: "linear-gradient(90deg, #e1a11b, #f89106, #e1a11b)",
        animation: "shimmer 2s infinite",
      },
      "@keyframes shimmer": {
        "0%": { transform: "translateX(-100%)" },
        "100%": { transform: "translateX(100%)" },
      },
      ...glowEffect,
      ...props.sx,
    }}
  >
    {children}
  </Box>
);

const VIPCard = ({ children, icon, title, value, color, trend }) => (
  <Card
    sx={{
      background: "linear-gradient(135deg, rgb(26 26 26), rgb(35 35 35))",
      border: "1px solid rgb(218 165 32)",
      borderRadius: "16px",
      overflow: "hidden",
      position: "relative",
      "&::before": {
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: "2px",
        background: "linear-gradient(90deg, transparent, rgb(218 165 32), transparent)",
        animation: "shimmer 3s infinite",
      },
      transition: "all 0.3s ease",
      "&:hover": {
        transform: "translateY(-4px)",
        boxShadow: "0 8px 25px rgba(218, 165, 32, 0.3)",
      },
    }}
  >
    <CardContent sx={{ p: 3 }}>
      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
        <Box
          sx={{
            width: 48,
            height: 48,
            borderRadius: "12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: `linear-gradient(135deg, ${color}22, ${color}44)`,
            color: color,
            mr: 2,
          }}
        >
          {icon}
        </Box>
        <Box sx={{ flex: 1 }}>
          <Typography variant="body2" sx={{ color: "rgb(208 208 208)", fontSize: "12px" }}>
            {title}
          </Typography>
          <Typography variant="h6" sx={{ color: "white", fontWeight: "bold", fontSize: "20px" }}>
            {value}
          </Typography>
        </Box>
        {trend && (
          <Box sx={{ display: "flex", alignItems: "center", color: trend > 0 ? "rgb(76 175 80)" : "rgb(244 67 54)" }}>
            <TrendingUpIcon sx={{ fontSize: "16px", mr: 0.5 }} />
            <Typography sx={{ fontSize: "12px", fontWeight: "bold" }}>
              {Math.abs(trend)}%
            </Typography>
          </Box>
        )}
      </Box>
    </CardContent>
  </Card>
);

export default function PromocodeCustomer() {
  const tabs = [
    { name: "Dashboard", icon: <DashboardIcon />, badge: null },
    { name: "Cart", icon: <ShoppingCartIcon />, badge: "3" },
    { name: "Orders", icon: <LocalShippingIcon />, badge: null },
    { name: "Tracking", icon: <MopedIcon />, badge: "2" },
    { name: "Payment", icon: <CreditCardIcon />, badge: null },
    { name: "Deals", icon: <LocalOfferIcon />, badge: "5" },
    { name: "Profile", icon: <PersonIcon />, badge: null },
  ];
  
  const [activeTab, setActiveTab] = useState("Dashboard");

  return (
    <Box sx={{ display: "flex", flexDirection: "column",  mt: 4, gap: 4,justifyContent:"center" ,alignItems:"center"}}>
      <Box sx={{ display: "flex", flexDirection: "column",  mt: 4, width:"90%", gap: 4 }}>

      
      {/* VIP Header */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
        <Avatar
          sx={{
            width: 60,
            height: 60,
            background: "linear-gradient(135deg, #e1a11b, #f89106)",
            border: "3px solid rgb(218 165 32)",
            boxShadow: "0 4px 20px rgba(218, 165, 32, 0.4)",
          }}
        >
          <PersonIcon sx={{ fontSize: 30, color: "black" }} />
        </Avatar>
        <Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 0.5 }}>
            <Typography
              sx={{
                fontSize: "24px",
                fontWeight: "normal",
                fontFamily: "Times New Roman, serif",
                background: "linear-gradient(45deg, #e1a11b, #f89106)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              VIP Dashboard
            </Typography>
            <DiamondIcon sx={{ color: "rgb(218 165 32)", fontSize: "20px" }} />
          </Box>
          <Typography sx={{ color: "rgb(196 208 208)", fontSize: "14px" }}>
            Welcome back, <span style={{ color: "rgb(218 165 32)", fontWeight: "bold" }}>AREEZ KORAI</span> 👑
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 0.5 }}>
            <StarIcon sx={{ color: "rgb(218 165 32)", fontSize: "14px" }} />
            <Typography sx={{ color: "rgb(218 165 32)", fontSize: "12px", fontWeight: "bold" }}>
              VIP Member Since 2024
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Premium Navigation */}
      <Box
        sx={{
          background: "linear-gradient(135deg, rgb(26 26 26), rgb(35 35 35))",
          border: "1px solid rgb(65 54 27)",
      borderRadius: "12px",
          overflow: "hidden",
          position: "relative",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "0px",
            background: "linear-gradient(90deg, #e1a11b, #f89106, #e1a11b)",
          },
        }}
      >
        <Box sx={{ display: "flex", p: 0 }}>
          {tabs.map((tab) => (
            <Box
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              sx={{
                flex: 1,
                display: "flex",
                gap: 2,
                alignItems: "center",
                p: 1,
                cursor: "pointer",
                transition: "all 0.3s ease",
                position: "relative",
                background: activeTab === tab.name 
                  ? "linear-gradient(135deg, rgba(225, 161, 27, 0.2), rgba(248, 145, 6, 0.1))"
                  : "transparent",
             
                borderBottom: activeTab === tab.name 
                  ? "3px solid rgb(218 165 32)"
                  : "3px solid transparent",
                "&:hover": {
             
                  borderBottom: "3px solid rgb(218 165 32)",
                },
              }}
            >
              <Box sx={{ position: "relative" }}>
                <Box
                  sx={{
                    color: activeTab === tab.name ? "rgb(218 165 32)" : "rgb(208 208 208)",
                    fontSize: "24px",
                    transition: "all 0.3s ease",
                  }}
                >
                  {tab.icon}
                </Box>
                {tab.badge && (
                  <Chip
                    label={tab.badge}
                    size="small"
                    sx={{
                      position: "absolute",
                      top: -8,
                      right: -8,
                      background: "linear-gradient(45deg, #e1a11b, #f89106)",
                      color: "black",
                      fontWeight: "bold",
                      fontSize: "10px",
                      height: "18px",
                      minWidth: "18px",
                    }}
                  />
                )}
              </Box>
              <Typography
                sx={{
                  color: activeTab === tab.name ? "rgb(218 165 32)" : "rgb(208 208 208)",
                  fontSize: "18px",
                  fontWeight: "bold",
                  mt: 1,
                  textAlign: "center",
                  fontFamily: "Times New Roman, serif",
                }}
              >
                {tab.name}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Content Area */}
      <Box sx={{ mt: 0 }}>
        {activeTab === "Dashboard" && (
          <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            {/* VIP Stats Cards */}
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(4, 1fr)" },
                gap: 3,
              }}
            >
              <VIPCard
                icon={<ShoppingCartIcon />}
                title="Total Orders"
                value="24"
                color="rgb(33 150 243)"
                trend={12}
              />
              <VIPCard
                icon={<LocalShippingIcon />}
                title="Active Orders"
                value="3"
                color="rgb(76 175 80)"
                trend={8}
              />
              <VIPCard
                icon={<FavoriteIcon />}
                title="Favorite Items"
                value="12"
                color="rgb(244 67 54)"
                trend={-3}
              />
              <VIPCard
                icon={<DiamondIcon />}
                title="VIP Points"
                value="1,250"
                color="rgb(218 165 32)"
                trend={25}
              />
            </Box>

            {/* Recent Activity */}
            <Box
              sx={{
                background: "linear-gradient(135deg, rgb(26 26 26), rgb(35 35 35))",
                border: "1px solid rgb(65 54 27)",
                borderRadius: "16px",
                p: 3,
              }}
            >
              <Typography
                sx={{
                  color: "rgb(218 165 32)",
                  fontSize: "18px",
                  fontWeight: "bold",
                  mb: 2,
                  fontFamily: "Times New Roman, serif",
                }}
              >
                🎉 Recent Activity
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {[
                  { icon: <ShoppingCartIcon />, text: "Order #1234 - Chicken Biryani", time: "2 hours ago", color: "rgb(33 150 243)" },
                  { icon: <LocalOfferIcon />, text: "Used VIP discount - 20% OFF", time: "5 hours ago", color: "rgb(218 165 32)" },
                  { icon: <StarIcon />, text: "Rated Mutton Karahi 5 stars", time: "1 day ago", color: "rgb(76 175 80)" },
                ].map((activity, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      p: 2,
                      borderRadius: "12px",
                      background: "rgba(255, 255, 255, 0.02)",
                      border: "1px solid rgba(255, 255, 255, 0.05)",
                    }}
                  >
                    <Box sx={{ color: activity.color }}>{activity.icon}</Box>
                    <Box sx={{ flex: 1 }}>
                      <Typography sx={{ color: "white", fontSize: "14px" }}>
                        {activity.text}
                      </Typography>
                      <Typography sx={{ color: "rgb(208 208 208)", fontSize: "12px" }}>
                        {activity.time}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        )}

        {activeTab === "Cart" && (
          <Box sx={{ p: 3 }}>
            <Typography
              sx={{
                color: "rgb(218 165 32)",
                fontSize: "24px",
                fontWeight: "bold",
                mb: 3,
                fontFamily: "Times New Roman, serif",
              }}
            >
              🛒 My Cart
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                alignItems: "center",
                py: 8,
              }}
            >
              <ShoppingCartIcon sx={{ fontSize: 64, color: "rgb(208 208 208)" }} />
              <Typography sx={{ color: "rgb(208 208 208)", fontSize: "18px" }}>
                Your cart is empty
              </Typography>
              <Button
                variant="contained"
                sx={{
                  background: "linear-gradient(45deg, #e1a11b, #f89106)",
                  color: "black",
                  fontWeight: "bold",
                  px: 4,
                  py: 1.5,
                  borderRadius: "12px",
                  textTransform: "none",
                  "&:hover": {
                    background: "linear-gradient(45deg, #f89106, #e1a11b)",
                  },
                }}
              >
                Browse Menu
              </Button>
            </Box>
          </Box>
        )}

        {activeTab === "Orders" && (
          <Box sx={{ p: 3 }}>
            <Typography
              sx={{
                color: "rgb(218 165 32)",
                fontSize: "24px",
                fontWeight: "bold",
                mb: 3,
                fontFamily: "Times New Roman, serif",
              }}
            >
              📦 Order History
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                alignItems: "center",
                py: 8,
              }}
            >
              <LocalShippingIcon sx={{ fontSize: 64, color: "rgb(208 208 208)" }} />
              <Typography sx={{ color: "rgb(208 208 208)", fontSize: "18px" }}>
                No orders yet
              </Typography>
              <Typography sx={{ color: "rgb(208 208 208)", fontSize: "14px" }}>
                Place your first order to see it here
              </Typography>
            </Box>
          </Box>
        )}

        {activeTab === "Tracking" && (
          <Box sx={{ p: 3 }}>
            <Typography
              sx={{
                color: "rgb(218 165 32)",
                fontSize: "24px",
                fontWeight: "bold",
                mb: 3,
                fontFamily: "Times New Roman, serif",
              }}
            >
              🚚 Order Tracking
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                alignItems: "center",
                py: 8,
              }}
            >
              <MopedIcon sx={{ fontSize: 64, color: "rgb(208 208 208)" }} />
              <Typography sx={{ color: "rgb(208 208 208)", fontSize: "18px" }}>
                No active deliveries
              </Typography>
            </Box>
          </Box>
        )}

        {activeTab === "Payment" && (
          <Box sx={{ p: 3 }}>
            <Typography
              sx={{
                color: "rgb(218 165 32)",
                fontSize: "24px",
                fontWeight: "bold",
                mb: 3,
                fontFamily: "Times New Roman, serif",
              }}
            >
              💳 Payment Methods
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                alignItems: "center",
                py: 8,
              }}
            >
              <CreditCardIcon sx={{ fontSize: 64, color: "rgb(208 208 208)" }} />
              <Typography sx={{ color: "rgb(208 208 208)", fontSize: "18px" }}>
                No payment methods added
              </Typography>
            </Box>
          </Box>
        )}

        {activeTab === "Deals" && (
          <Box sx={{ p: 3 }}>
            <Typography
              sx={{
                color: "rgb(218 165 32)",
                fontSize: "24px",
                fontWeight: "bold",
                mb: 3,
                fontFamily: "Times New Roman, serif",
              }}
            >
              🎁 VIP Deals
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                alignItems: "center",
                py: 8,
              }}
            >
              <LocalOfferIcon sx={{ fontSize: 64, color: "rgb(218 165 32)" }} />
              <Typography sx={{ color: "rgb(218 165 32)", fontSize: "18px", fontWeight: "bold" }}>
                Exclusive VIP Deals Available!
              </Typography>
              <Typography sx={{ color: "rgb(208 208 208)", fontSize: "14px" }}>
                Special discounts just for you
              </Typography>
            </Box>
          </Box>
        )}

        {activeTab === "Profile" && (
          <Box sx={{ p: 3 }}>
            <Typography
              sx={{
                color: "rgb(218 165 32)",
                fontSize: "24px",
                fontWeight: "bold",
                mb: 3,
                fontFamily: "Times New Roman, serif",
                textAlign: "center",
              }}
            >
                👤 Profile Settings
            </Typography>
            
            {/* VIP Profile Card */}
            <Box
              sx={{
                background: "linear-gradient(135deg, rgb(26 26 26), rgb(35 35 35))",
                border: "2px solid rgb(218 165 32)",
                borderRadius: "20px",
                p: 3,
                maxWidth: "400px",
                mx: "auto",
                position: "relative",
                overflow: "hidden",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "3px",
                  background: "linear-gradient(90deg, #e1a11b, #f89106, #e1a11b)",
                  animation: "shimmer 3s infinite",
                },
              }}
            >
              {/* Profile Header */}
              <Box sx={{ display: "flex", alignItems: "center", gap: 3, mb: 4, justifyContent: "center" }}>
                <Avatar
                  sx={{
                    width: 60,
                    height: 60,
                    background: "linear-gradient(135deg, #e1a11b, #f89106)",
                    border: "3px solid rgb(218 165 32)",
                    boxShadow: "0 6px 20px rgba(218, 165, 32, 0.4)",
                  }}
                >
                  <PersonIcon sx={{ fontSize: 30, color: "black" }} />
                </Avatar>
                <Box>
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: "normal",
                      fontFamily: "Times New Roman, serif",
                      background: "linear-gradient(45deg, #e1a11b, #f89106)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    AREEZ KORAI
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 1 }}>
                    <DiamondIcon sx={{ color: "rgb(218 165 32)", fontSize: "18px" }} />
                    <Typography sx={{ color: "rgb(218 165 32)", fontSize: "14px", fontWeight: "bold" }}>
                      VIP Member
                    </Typography>
                  </Box>
                </Box>
              </Box>

              {/* Profile Information */}
              <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                {/* Customer ID */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    p: 3,
                    borderRadius: "12px",
                    background: "linear-gradient(135deg, rgba(225, 161, 27, 0.1), rgba(248, 145, 6, 0.05))",
                    border: "1px solid rgba(218, 165, 32, 0.3)",
                  }}
                >
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "linear-gradient(135deg, rgb(33 150 243)22, rgb(33 150 243)44)",
                      color: "rgb(33 150 243)",
                    }}
                  >
                    <Typography sx={{ fontSize: "12px", fontWeight: "bold" }}>ID</Typography>
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography sx={{ color: "rgb(208 208 208)", fontSize: "12px", mb: 0.5 }}>
                      Customer ID
                    </Typography>
                    <Typography sx={{ color: "white", fontSize: "14px", fontWeight: "normal" }}>
                      VIP-2024-001
                    </Typography>
                  </Box>
                </Box>

                {/* Email */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    p: 3,
                    borderRadius: "12px",
                    background: "linear-gradient(135deg, rgba(225, 161, 27, 0.1), rgba(248, 145, 6, 0.05))",
                    border: "1px solid rgba(218, 165, 32, 0.3)",
                  }}
                >
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "linear-gradient(135deg, rgb(76 175 80)22, rgb(76 175 80)44)",
                      color: "rgb(76 175 80)",
                    }}
                  >
                    <Typography sx={{ fontSize: "12px", fontWeight: "bold" }}>📧</Typography>
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography sx={{ color: "rgb(208 208 208)", fontSize: "12px", mb: 0.5 }}>
                      Email Address
                    </Typography>
                    <Typography sx={{ color: "white", fontSize: "14px", fontWeight: "normal" }}>
                      areezshoaib@gmail.com
                    </Typography>
                  </Box>
                </Box>

                {/* Phone Number */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    p: 3,
                    borderRadius: "12px",
                    background: "linear-gradient(135deg, rgba(225, 161, 27, 0.1), rgba(248, 145, 6, 0.05))",
                    border: "1px solid rgba(218, 165, 32, 0.3)",
                  }}
                >
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "linear-gradient(135deg, rgb(244 67 54)22, rgb(244 67 54)44)",
                      color: "rgb(244 67 54)",
                    }}
                  >
                    <Typography sx={{ fontSize: "12px", fontWeight: "bold" }}>📱</Typography>
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography sx={{ color: "rgb(208 208 208)", fontSize: "12px", mb: 0.5 }}>
                      Phone Number
                    </Typography>
                    <Typography sx={{ color: "white", fontSize: "14px", fontWeight: "normal" }}>
                      +92 331 045 1716
                    </Typography>
                  </Box>
                </Box>

                {/* Full Name */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    p: 3,
                    borderRadius: "12px",
                    background: "linear-gradient(135deg, rgba(225, 161, 27, 0.1), rgba(248, 145, 6, 0.05))",
                    border: "1px solid rgba(218, 165, 32, 0.3)",
                  }}
                >
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "linear-gradient(135deg, rgb(156 39 176)22, rgb(156 39 176)44)",
                      color: "rgb(156 39 176)",
                    }}
                  >
                    <Typography sx={{ fontSize: "12px", fontWeight: "bold" }}>👤</Typography>
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography sx={{ color: "rgb(208 208 208)", fontSize: "12px", mb: 0.5 }}>
                      Full Name
                    </Typography>
                    <Typography sx={{ color: "white", fontSize: "14px", fontWeight: "normal" }}>
                      AREEZ KORAI
                    </Typography>
                  </Box>
                </Box>

                {/* VIP Status */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    p: 3,
                    borderRadius: "12px",
                    background: "linear-gradient(135deg, rgba(218, 165, 32, 0.2), rgba(248, 145, 6, 0.1))",
                    border: "2px solid rgb(218 165 32)",
                  }}
                >
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "linear-gradient(135deg, rgb(218 165 32)22, rgb(218 165 32)44)",
                      color: "rgb(218 165 32)",
                    }}
                  >
                    <DiamondIcon sx={{ fontSize: "20px" }} />
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography sx={{ color: "rgb(208 208 208)", fontSize: "12px", mb: 0.5 }}>
                      VIP Status
                    </Typography>
                    <Typography sx={{ color: "rgb(218 165 32)", fontSize: "16px", fontWeight: "bold" }}>
                      🌟 GOLD MEMBER 🌟
                    </Typography>
                  </Box>
                </Box>
              </Box>

              {/* Action Buttons */}
              <Box sx={{ display: "flex", gap: 2, mt: 3, justifyContent: "center" }}>
                <Button
                  variant="contained"
                  sx={{
                    background: "linear-gradient(45deg, #e1a11b, #f89106)",
                    color: "black",
                    fontWeight: "bold",
                    px: 3,
                    py: 1.5,
                    borderRadius: "12px",
                    textTransform: "none",
                    "&:hover": {
                      background: "linear-gradient(45deg, #f89106, #e1a11b)",
                    },
                  }}
                >
                  Edit Profile
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    borderColor: "rgb(218 165 32)",
                    color: "rgb(218 165 32)",
                    fontWeight: "bold",
                    px: 3,
                    py: 1.5,
                    borderRadius: "12px",
                    textTransform: "none",
                    "&:hover": {
                      background: "rgba(218, 165, 32, 0.1)",
                      borderColor: "rgb(244 148 10)",
                    },
                  }}
                >
                  Settings
                </Button>
              </Box>
            </Box>
          </Box>
        )}
      </Box>
      </Box>
    </Box>
  );
}
