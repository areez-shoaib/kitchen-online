import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Divider, TextField, Button, Avatar, Chip, Card, CardContent, IconButton, Select, MenuItem, useMediaQuery, useTheme } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import MopedIcon from "@mui/icons-material/Moped";
import PaymentIcon from "@mui/icons-material/Payment";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useCart } from "../Context/CartContext";
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
  const { cart, cartTotal, cartCount, updateQuantity, removeFromCart } = useCart();
  const navigate = useNavigate();
  
  const tabs = [
    { name: "Cart", icon: <ShoppingCartIcon />, badge: cartCount > 0 ? cartCount : null },
    { name: "Orders", icon: <LocalShippingIcon />, badge: null },
    { name: "Tracking", icon: <MopedIcon />, badge: "2" },
    { name: "Payment", icon: <CreditCardIcon />, badge: null },
    { name: "Deals", icon: <LocalOfferIcon />, badge: "5" },
  ];
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [activeTab, setActiveTab] = useState("Cart");

  return (
    <Box sx={{ display: "flex", flexDirection: "column",  mt: 4, gap: 4,justifyContent:"center" ,alignItems:"center"}}>
      <Box sx={{ display: "flex", flexDirection: "column",  mt: 4, width:"90%", gap: 4 }}>

      
      {/* VIP Header */}
      <Box sx={{ display: "flex", alignItems: "center", gap: { xs: 1.5, sm: 2 }, mb: 2 }}>
        <Avatar
          sx={{
            width: { xs: 45, sm: 60 },
            height: { xs: 45, sm: 60 },
            background: "linear-gradient(135deg, #e1a11b, #f89106)",
            border: { xs: "2px solid rgb(218 165 32)", sm: "3px solid rgb(218 165 32)" },
            boxShadow: "0 4px 20px rgba(218, 165, 32, 0.4)",
          }}
        >
          <PersonIcon sx={{ fontSize: { xs: 22, sm: 30 }, color: "black" }} />
        </Avatar>
        <Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 0.5 }}>
            <Typography
              sx={{
                fontSize: { xs: "18px", sm: "24px" },
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
            <DiamondIcon sx={{ color: "rgb(218 165 32)", fontSize: { xs: "16px", sm: "20px" } }} />
          </Box>
          <Typography sx={{ color: "rgb(196 208 208)", fontSize: { xs: "12px", sm: "14px" } }}>
            Welcome back, <span style={{ color: "rgb(218 165 32)", fontWeight: "bold" }}>AREEZ KORAI</span> 👑
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 0.5 }}>
            <StarIcon sx={{ color: "rgb(218 165 32)", fontSize: { xs: "12px", sm: "14px" } }} />
            <Typography sx={{ color: "rgb(218 165 32)", fontSize: { xs: "10px", sm: "12px" }, fontWeight: "bold" }}>
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
        {isMobile ? (
          <Box sx={{ px: 2, pt: 2, pb: 2 }}>
            <Select
              value={activeTab}
              onChange={(e) => setActiveTab(e.target.value)}
              fullWidth
              size="small"
              renderValue={(value) => {
                const selectedTab = tabs.find(t => t.name === value);
                return (
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Box sx={{ display: "flex", alignItems: "center", "& svg": { fontSize: "16px" } }}>
                      {selectedTab?.icon}
                    </Box>
                    <Typography sx={{ fontSize: "13px", fontFamily: "Times New Roman, serif" }}>
                      {value}
                    </Typography>
                  </Box>
                );
              }}
              MenuProps={{
                PaperProps: {
                  sx: {
                    bgcolor: "rgb(20,20,20)",
                    border: "1px solid rgba(218,165,32,0.4)",
                    "& .MuiMenuItem-root:hover": {
                      bgcolor: "rgba(218,165,32,0.1)",
                    },
                    "& .Mui-selected": {
                      bgcolor: "rgba(218,165,32,0.2) !important",
                    }
                  }
                }
              }}
              sx={{
                height: { xs: "36px" },
                color: "#daa520",
                bgcolor: "rgb(20,20,20)",
                borderRadius: "10px",
                "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(218,165,32,0.4)" },
                "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "#daa520" },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: "#daa520" },
                "& .MuiSvgIcon-root": { color: "#daa520" },
                "& .MuiSelect-select": {
                  display: "flex",
                  alignItems: "center",
                }
              }}
            >
              {tabs.map((tab) => (
                <MenuItem 
                  key={tab.name} 
                  value={tab.name} 
                  sx={{ 
                    display: "flex", 
                    flexDirection: "row", 
                    gap: 1, 
                    alignItems: "center", 
                    color: "#daa520",
                    minHeight: "34px",
                    py: 0.5
                  }}
                >
                  <Box sx={{ color: "#daa520", display: "flex", alignItems: "center", "& svg": { fontSize: "16px" } }}>
                    {tab.icon}
                  </Box>
                  <Typography sx={{ fontSize: "13px", fontFamily: "Times New Roman, serif", color: "#daa520" }}>
                     {tab.name} {tab.badge ? `(${tab.badge})` : ""}
                  </Typography>
                </MenuItem>
              ))}
            </Select>
          </Box>
        ) : (
        <Box sx={{ display: "flex", p: 2, gap: 1.5, flexWrap: "wrap", justifyContent: "center" }}>
          {tabs.map((tab) => (
            <Box
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 1.5,
                px: { sm: 2, md: 3 },
                py: 1.2,
                borderRadius: "30px",
                cursor: "pointer",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                background: activeTab === tab.name 
                  ? "linear-gradient(135deg, rgba(218, 165, 32, 0.15), rgba(248, 145, 6, 0.05))"
                  : "transparent",
                border: activeTab === tab.name 
                  ? "1px solid rgba(218, 165, 32, 0.5)"
                  : "1px solid transparent",
                boxShadow: activeTab === tab.name 
                  ? "0 4px 20px rgba(218, 165, 32, 0.15), inset 0 0 10px rgba(218, 165, 32, 0.05)"
                  : "none",
                "&:hover": {
                  background: activeTab === tab.name 
                    ? "linear-gradient(135deg, rgba(218, 165, 32, 0.2), rgba(248, 145, 6, 0.1))"
                    : "rgba(255, 255, 255, 0.03)",
                  transform: "translateY(-3px)",
                  boxShadow: "0 6px 20px rgba(218, 165, 32, 0.1)",
                  border: activeTab !== tab.name ? "1px solid rgba(218, 165, 32, 0.2)" : "1px solid rgba(218, 165, 32, 0.5)",
                },
              }}
            >
              <Box sx={{ position: "relative", display: "flex", alignItems: "center" }}>
                <Box
                  sx={{
                    color: activeTab === tab.name ? "rgb(218 165 32)" : "rgb(180 180 180)",
                    display: "flex",
                    alignItems: "center",
                    transform: activeTab === tab.name ? "scale(1.1)" : "scale(1)",
                    transition: "all 0.3s ease",
                    "& svg": { fontSize: "22px" }
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
                      top: -10,
                      right: -12,
                      background: "linear-gradient(45deg, #e1a11b, #f89106)",
                      color: "black",
                      fontWeight: "bold",
                      fontSize: "10px",
                      height: "16px",
                      minWidth: "16px",
                      "& .MuiChip-label": { px: 0.5 }
                    }}
                  />
                )}
              </Box>
              <Typography
                sx={{
                  color: activeTab === tab.name ? "rgb(218 165 32)" : "rgb(208 208 208)",
                  fontSize: "15px",
                  fontWeight: activeTab === tab.name ? "bold" : "medium",
                  fontFamily: "Times New Roman, serif",
                  letterSpacing: "0.5px",
                  transition: "color 0.3s ease",
                }}
              >
                {tab.name}
              </Typography>
            </Box>
          ))}
        </Box>
        )}
      </Box>

      {/* Content Area */}
      <Box sx={{ mt: 0 }}>

        {activeTab === "Cart" && (
          <Box sx={{ p: { xs: 1, sm: 3 } }}>
            <Typography
              sx={{
                color: "rgb(218 165 32)",
                fontSize: { xs: "20px", sm: "24px" },
                fontWeight: "bold",
                mb: 3,
                fontFamily: "Times New Roman, serif",
              }}
            >
              🛒 My Cart
            </Typography>
            
            {cart.length === 0 ? (
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2, alignItems: "center", py: 8 }}>
                <ShoppingCartIcon sx={{ fontSize: 64, color: "rgb(208 208 208)" }} />
                <Typography sx={{ color: "rgb(208 208 208)", fontSize: "18px" }}>Your cart is empty</Typography>
                <Button
                  variant="contained"
                  onClick={() => navigate("/MenuScreen")}
                  sx={{
                    background: "linear-gradient(45deg, #e1a11b, #f89106)",
                    color: "black", fontWeight: "bold", px: 4, py: 1.5, borderRadius: "12px", textTransform: "none",
                    "&:hover": { background: "linear-gradient(45deg, #f89106, #e1a11b)" },
                  }}
                >
                  Browse Menu
                </Button>
              </Box>
            ) : (
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {cart.map((item) => (
                  <Box key={item.id} sx={{
                    display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: 'center', gap: 2, p: 2,
                    bgcolor: 'rgba(255,255,255,0.02)', border: '1px solid rgba(218,165,32,0.3)', borderRadius: '12px'
                  }}>
                    <img src={item.image} alt={item.name} style={{ width: 80, height: 80, borderRadius: 8, objectFit: 'cover' }} />
                    <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 0.5, alignItems: { xs: 'center', sm: 'flex-start' } }}>
                      <Typography sx={{ color: 'white', fontWeight: 'bold' }}>{item.name}</Typography>
                      <Typography sx={{ color: '#daa520', fontWeight: 'bold' }}>{item.price}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <IconButton onClick={() => updateQuantity(item.id, item.quantity - 1)} sx={{ color: 'white', bgcolor: 'rgba(255,255,255,0.1)' }} size="small">
                        <RemoveIcon fontSize="small" />
                      </IconButton>
                      <Typography sx={{ color: 'white', fontWeight: 'bold', width: '20px', textAlign: 'center' }}>{item.quantity}</Typography>
                      <IconButton onClick={() => updateQuantity(item.id, item.quantity + 1)} sx={{ color: 'black', bgcolor: '#daa520' }} size="small">
                        <AddIcon fontSize="small" />
                      </IconButton>
                      <IconButton onClick={() => removeFromCart(item.id)} sx={{ color: '#ff4d4d', ml: 1 }}>
                        <DeleteIcon />
                      </IconButton>
                    </Box>
                  </Box>
                ))}
                
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: { xs: 2, sm: 4 }, p: { xs: 1.5, sm: 3 }, bgcolor: 'rgba(218,165,32,0.1)', borderRadius: '12px' }}>
                  <Typography sx={{ color: 'white', fontSize: { xs: '13px', sm: '20px' }, fontWeight: 'bold' }}>Total Bill:</Typography>
                  <Typography sx={{ color: '#daa520', fontSize: { xs: '15px', sm: '28px' }, fontWeight: 'bold' }}>RS. {cartTotal}</Typography>
                </Box>
                <Button fullWidth variant="contained" sx={{ mt: { xs: 1, sm: 2 }, py: { xs: 1, sm: 2 }, bgcolor: '#daa520', color: 'black', fontWeight: 'bold', fontSize: { xs: '13px', sm: '18px' }, '&:hover': { bgcolor: '#b8860b' } }}>
                  Checkout Now
                </Button>
              </Box>
            )}
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

        {/* Profile Tab Removed Successfully */}
      </Box>
    </Box>
    </Box>
  );
}
