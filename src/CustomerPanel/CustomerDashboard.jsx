import React, { useState } from "react";
import { Box, Typography, Divider, TextField, Button } from "@mui/material";
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
const AnimatedBox = ({ children, ...props }) => (
  <Box
    sx={{
      display: "flex",

      border: "1px solid rgb(61 51 26)",
      borderRadius: "10px",
      bgcolor: "rgb(15 15 15)",
      height: "60px",
      width: "200px",

      ...glowEffect,
      ...props.sx,
    }}
  >
    {children}
  </Box>
);
export default function CustomerDashboard() {
  const tabs = [
    { name: "Dashboard", icon: <DashboardIcon /> },
    { name: "User", icon: <PersonIcon /> },
    { name: "Order", icon: <ShoppingCartIcon /> },
    { name: "Menu", icon: <RestaurantMenuIcon /> },
    { name: "Rider", icon: <MopedIcon /> },
    { name: "Payment", icon: <PaymentIcon /> },
    { name: "Notification", icon: <NotificationsIcon /> },
    { name: "Deal", icon: <LocalOfferIcon /> },
  ];
  const [activeTab, setActiveTab] = useState("Dashboard");

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", ml: 33, mt: 4, gap: 4 }}
    >
      <Box>
        <Typography
          sx={{
            fontSize: "30px",
            fontWeight: "bold",
            fontFamily: "New Times Roman, serif",
          }}
        >
          My Dashboard
        </Typography>
        <Typography sx={{ color: "rgb(196 208 208)" }}>
          Welcome, AREEZ KORAI
        </Typography>
      </Box>

      <Box
        sx={{
          border: "1px solid rgb(65 54 27)",
          width: "80%",
          borderRadius: "10px",
          bgcolor: "rgb(26 26 26)",
          height: "auto",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box sx={{ display: "flex", gap: 3, pt: 2, ml: 2 }}>
          {tabs.map((tab) => (
            <Typography
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              sx={{
                cursor: "pointer",
                color: activeTab === tab.name ? "#e1a11b" : "rgb(208 208 208)",
                borderBottom: activeTab === tab.name ? "3px solid" : "none",
                borderImage:
                  activeTab === tab.name
                    ? "linear-gradient(45deg, #e1a11b, #f89106) 1"
                    : "none",
                pb: 1,
                width: `${100 / tabs.length}%`,
                textAlign: "center",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 1,
                fontSize: "13px",
                fontFamily: "New times roman,serif",
              }}
            >
              {tab.icon}
              {tab.name.toUpperCase()}
            </Typography>
          ))}
        </Box>
        <Divider
          sx={{
            borderColor: "#463b20",
            borderBottomWidth: "1px",
          }}
        />
        <Box sx={{ mt: 4 }}>
          <Typography
            sx={{ fontSize: "20px", fontWeight: "bold" }}
          ></Typography>
          {/* Yahan aap har tab ke content ko conditionally render kar sakte hain */}
          {activeTab === "Dashboard" && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center", // horizontal center
                // vertical center
                gap: 3,
                flexWrap: "wrap",
                height: "120px", // thodi zyada height
              }}
            >
              <AnimatedBox
                sx={{
                  display: "flex",
                  flexDirection: "column",

                  p: 3,
                  gap: 1,
                }}
              >
                <Typography
                  sx={{
                    color: "rgb(208 208 196)",
                  }}
                >
                  Total Users
                </Typography>
                <Typography
                  sx={{
                    color: "rgb(218 165 32)",
                    fontWeight: "bold",
                    fontFamily: "New times roman,serif",
                    fontSize: "26px",
                  }}
                >
                  2
                </Typography>
              </AnimatedBox>
              <AnimatedBox
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
                  p: 3,
                }}
              >
                <Typography
                  sx={{
                    color: "rgb(208 208 196)",
                  }}
                >
                  {" "}
                  Total Orders
                </Typography>
                <Typography
                  sx={{
                    color: "rgb(255 140 0)",
                    fontWeight: "bold",
                    fontFamily: "New times roman,serif",
                    fontSize: "26px",
                  }}
                >
                  0
                </Typography>
              </AnimatedBox>
              <AnimatedBox
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
                  p: 3,
                }}
              >
                <Typography
                  sx={{
                    color: "rgb(208 208 196)",
                  }}
                >
                  Active Orders
                </Typography>
                <Typography
                  sx={{
                    color: "rgb(76 175 80)",
                    fontWeight: "bold",
                    fontFamily: "New times roman,serif",
                    fontSize: "26px",
                  }}
                >
                  0
                </Typography>
              </AnimatedBox>
              <AnimatedBox
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
                  p: 3,
                }}
              >
                <Typography
                  sx={{
                    color: "rgb(208 208 196)",
                  }}
                >
                  Total Revenue
                </Typography>
                <Typography
                  sx={{
                    color: "rgb(33 150 243)",
                    fontWeight: "bold",
                    fontFamily: "New times roman,serif",
                    fontSize: "26px",
                  }}
                >
                  RS .0
                </Typography>
              </AnimatedBox>
            </Box>
          )}
          {activeTab === "User" && <></>}
          {activeTab === "Order" && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                height: "auto",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "95%",
                  minHeight: " 200px",

                  gap: 3,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    sx={{
                      color: "rgb(218 165 32)",
                      fontSize: "19px",
                      fontWeight: "bold",
                      fontFamily: "New times roman,serif",
                    }}
                  >
                    📦 Order Management
                  </Typography>
                  <RefreshIcon
                    sx={{
                      color: "rgb(218 165 32)",
                    }}
                  />
                </Box>
                <TextField
                  placeholder="Search by customer name or phone..."
                  variant="outlined"
                  fullWidth
                  InputLabelProps={{
                    sx: {
                      color: "rgb(208 208 208)",
                      "&.Mui-focused": { color: "rgb(244 148 10)" },
                    },
                  }}
                  InputProps={{
                    sx: {
                      height: "40px", // ✅ total TextField height
                      "& input": {
                        padding: "6px 8px", // input ke andar padding adjust karein
                        color: "white",
                        fontSize: { xs: "12px" },
                      },
                      "& input::placeholder": {
                        color: "rgb(78 78 78)",
                        opacity: 1,
                        fontSize: { xs: "12px", lg: "16px" },
                      },
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "rgb(84 68 28)",
                        borderRadius: "8px",
                      },
                      "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "white",
                      },
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "rgb(244 148 10)",
                      },
                    },
                  }}
                />
                <Button
                  startIcon={
                    <ErrorOutlineIcon
                      sx={{
                        ml: 2,
                        color: "rgb(10 119 177)",
                      }}
                    />
                  }
                  sx={{
                    bgcolor: "rgb(45 40 26)",
                    border: "1px solid rgb(97 78 28)",
                    display: "flex",
                    justifyContent: "flex-start",
                    py: 1.5,
                    color: "white",
                    fontSize: "14px",
                    textTransform: "none",
                    borderRadius: "12px",
                    pointerEvents: "none",
                    userSelect: "text",
                  }}
                >
                  No orders found
                </Button>
              </Box>
            </Box>
          )}
          {activeTab === "Menu" && <div>Menu Content</div>}
          {activeTab === "Rider" && <div>Rider Content</div>}
          {activeTab === "Payment" && <div>Payment Content</div>}
          {activeTab === "Notification" && <div>Notification Content</div>}
          {activeTab === "Deal" && <div>Deal Content</div>}
        </Box>
      </Box>
    </Box>
  );
}
