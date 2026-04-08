import React, { useState } from "react";
import { Box, Typography, Divider, TextField, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Chip, IconButton, Select, MenuItem, useMediaQuery, useTheme } from "@mui/material";
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
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import BlockIcon from "@mui/icons-material/Block";
import AddIcon from "@mui/icons-material/Add";
import AddDealModal from "../Modals/AddDealModal";
const AnimatedBox = ({ children, ...props }) => (
  <Box sx={{
    display: "flex",
    border: "1px solid rgb(61, 51, 26)",
    borderRadius: "10px",
    bgcolor: "rgb(15, 15, 15)",
    height: { xs: "70px", sm: "60px" },
    width: { xs: "calc(50% - 8px)", sm: "180px", md: "200px" },
    ...glowEffect,
    ...props.sx,
  }}>
    {children}
  </Box>
);
export default function AdminDashboard() {
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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [users, setUsers] = useState([
    { id: 1, name: "AREEZ KORAI", email: "areezshoaib@gmail.com", role: "Admin", status: "Active", joinDate: "2024-01-15" },
    { id: 2, name: "JOHN DOE", email: "john@example.com", role: "Customer", status: "Active", joinDate: "2024-01-20" },
    { id: 3, name: "JANE SMITH", email: "jane@example.com", role: "Customer", status: "Blocked", joinDate: "2024-02-01" },
    { id: 4, name: "MIKE WILSON", email: "mike@example.com", role: "Customer", status: "Active", joinDate: "2024-02-10" },
  ]);
  
  // Sample deal data
  const [deals, setDeals] = useState([
    { id: 1, title: "Weekend Special", description: "20% off on all biryanis", discountType: "percentage", discountValue: "20", minOrderAmount: "500", maxDiscount: "200", validFrom: "2024-01-15", validTo: "2024-12-31", status: "Active", createdAt: "2024-01-15" },
    { id: 2, title: "Happy Hour Deal", description: "Get free delivery on orders above 1000", discountType: "fixed", discountValue: "50", minOrderAmount: "1000", maxDiscount: "", validFrom: "2024-02-01", validTo: "2024-06-30", status: "Active", createdAt: "2024-02-01" },
    { id: 3, title: "Ramadan Offer", description: "15% discount on family packs", discountType: "percentage", discountValue: "15", minOrderAmount: "800", maxDiscount: "150", validFrom: "2024-03-01", validTo: "2024-04-30", status: "Scheduled", createdAt: "2024-02-15" },
  ]);
  
  const [showAddDealModal, setShowAddDealModal] = useState(false);
  
  const handleAddDeal = (newDeal) => {
    setDeals(prev => [...prev, newDeal]);
  };

  return (
    <Box sx={{
      display: "flex", flexDirection: "column",
      ml: { xs: 0, md: 2, lg: 33 },
      mt: { xs: 2, md: 3, lg: 4 },
      mr: { xs: 1, md: 2, lg: 0 },
      gap: { xs: 2, md: 3, lg: 4 },
      px: { xs: 1, md: 2, lg: 0 },
      boxSizing: "border-box",
    }}>
      <Box>
        <Typography sx={{
            fontSize: { xs: "1.3rem", md: "1.6rem", lg: "1.9rem" },
            fontWeight: "bold", fontFamily: "New Times Roman, serif",
          }}>
          🔐 Admin Dashboard
        </Typography>
        <Typography sx={{ color: "rgb(196, 208, 208)" }}>
          Welcome, AREEZ KORAI
        </Typography>
      </Box>

      <Box sx={{
          border: "1px solid rgb(65, 54, 27)",
          width: { xs: "100%", md: "95%", lg: "95%" },
          borderRadius: "10px",
          bgcolor: "rgb(26, 26, 26)",
          height: "auto",
          display: "flex",
          flexDirection: "column",
          boxSizing: "border-box",
          overflowX: "hidden",
        }}>
        {/* xs: Select dropdown, sm+: tab buttons */}
        {isMobile ? (
          <Box sx={{ px: 2, pt: 2, pb: 1 }}>
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
                height: { xs: "36px", sm: "40px" },
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
                    minHeight: "30px", // Reduces height of items inside menu
                    py: 0.5
                  }}
                >
                  <Box sx={{ color: "#daa520", display: "flex", alignItems: "center", "& svg": { fontSize: "16px" } }}>
                    {tab.icon}
                  </Box>
                  <Typography sx={{ fontSize: "13px", fontFamily: "Times New Roman, serif", color: "#daa520" }}>
                    {tab.name}
                  </Typography>
                </MenuItem>
              ))}
            </Select>
          </Box>
        ) : (
        <Box sx={{
          display: "flex", gap: 0,
          pt: 2,
          width: "100%",
          overflowX: "auto",
          "&::-webkit-scrollbar": { height: "3px" },
          "&::-webkit-scrollbar-thumb": { background: "rgba(218,165,32,0.4)", borderRadius: "3px" },
        }}>
          {tabs.map((tab) => (
            <Typography
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              sx={{
                cursor: "pointer",
                color: activeTab === tab.name ? "#e1a11b" : "rgb(208, 208, 208)",
                borderBottom: activeTab === tab.name ? "3px solid" : "none",
                borderImage: activeTab === tab.name ? "linear-gradient(45deg, #e1a11b, #f89106) 1" : "none",
                pb: 1,
                px: { xs: 0.5, sm: 0.8, lg: 1 },
                minWidth: 0,
                flex: 1,
                textAlign: "center",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: { xs: 0.3, sm: 0.5 },
                fontSize: { xs: "8px", sm: "9px", md: "11px", lg: "12px" },
                fontFamily: "New times roman,serif",
                whiteSpace: "nowrap",
                flexShrink: 1,
                "& svg": { fontSize: { xs: "12px", sm: "14px", md: "16px" } },
              }}
            >
              {tab.icon}
              {tab.name.toUpperCase()}
            </Typography>
          ))}
        </Box>
        )}
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
            <Box sx={{
                display: "flex",
                justifyContent: "center",
                gap: { xs: 2, sm: 3 },
                flexWrap: "wrap",
                height: "auto",
                p: { xs: 2, sm: 3 },
                pb: { xs: 3, sm: 4 },
              }}>
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
                    color: "rgb(208, 208, 196)",
                  }}
                >
                  Total Users
                </Typography>
                <Typography
                  sx={{
                    color: "rgb(218, 165, 32)",
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
                    color: "rgb(208, 208, 196)",
                  }}
                >
                  {" "}
                  Total Orders
                </Typography>
                <Typography
                  sx={{
                    color: "rgb(255, 140, 0)",
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
                    color: "rgb(208, 208, 196)",
                  }}
                >
                  Active Orders
                </Typography>
                <Typography
                  sx={{
                    color: "rgb(76, 175, 80)",
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
                    color: "rgb(208, 208, 196)",
                  }}
                >
                  Total Revenue
                </Typography>
                <Typography
                  sx={{
                    color: "rgb(33, 150, 243)",
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
          {activeTab === "User" && (
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
                  minHeight: "400px",
                  gap: 3,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      color: "rgb(218, 165, 32)",
                      fontSize: "19px",
                      fontWeight: "bold",
                      fontFamily: "New times roman,serif",
                    }}
                  >
                    👥 User Management
                  </Typography>
                  <Box sx={{ display: "flex", gap: { xs: 1, sm: 2 }, alignItems: "center", flexWrap: "wrap" }}>
                    <TextField
                      placeholder="Search users..."
                      variant="outlined"
                      size="small"
                      sx={{
                        width: { xs: "130px", sm: "200px" },
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            borderColor: "rgb(84, 68, 28)",
                          },
                          "&:hover fieldset": {
                            borderColor: "rgb(223, 161, 27)",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "rgb(244, 148, 10)",
                          },
                          "& input": {
                            color: "white",
                          },
                        },
                      }}
                    />
                    <IconButton
                      sx={{
                        color: "rgb(218, 165, 32)",
                        "&:hover": {
                          bgcolor: "rgba(218, 165, 32, 0.1)",
                        },
                      }}
                    >
                      <RefreshIcon />
                    </IconButton>
                  </Box>
                </Box>
                
                <TableContainer component={Paper} sx={{
                    bgcolor: "rgb(26, 26, 26)",
                    border: "1px solid rgb(65, 54, 27)",
                    borderRadius: "10px",
                    maxHeight: 400,
                    overflowX: "auto",
                    "& .MuiTableCell-root": { borderColor: "rgb(65, 54, 27)" },
                  }}>
                  <Table stickyHeader>
                    <TableHead>
                      <TableRow>
                        <TableCell
                          sx={{
                            bgcolor: "rgb(35, 35, 35)",
                            color: "rgb(218, 165, 32)",
                            fontWeight: "bold",
                            fontFamily: "New times roman,serif",
                          }}
                        >
                          ID
                        </TableCell>
                        <TableCell
                          sx={{
                            bgcolor: "rgb(35, 35, 35)",
                            color: "rgb(218, 165, 32)",
                            fontWeight: "bold",
                            fontFamily: "New times roman,serif",
                          }}
                        >
                          Name
                        </TableCell>
                        <TableCell
                          sx={{
                            bgcolor: "rgb(35, 35, 35)",
                            color: "rgb(218, 165, 32)",
                            fontWeight: "bold",
                            fontFamily: "New times roman,serif",
                          }}
                        >
                          Email
                        </TableCell>
                        <TableCell
                          sx={{
                            bgcolor: "rgb(35, 35, 35)",
                            color: "rgb(218, 165, 32)",
                            fontWeight: "bold",
                            fontFamily: "New times roman,serif",
                          }}
                        >
                          Role
                        </TableCell>
                        <TableCell
                          sx={{
                            bgcolor: "rgb(35, 35, 35)",
                            color: "rgb(218, 165, 32)",
                            fontWeight: "bold",
                            fontFamily: "New times roman,serif",
                          }}
                        >
                          Status
                        </TableCell>
                        <TableCell
                          sx={{
                            bgcolor: "rgb(35, 35, 35)",
                            color: "rgb(218, 165, 32)",
                            fontWeight: "bold",
                            fontFamily: "New times roman,serif",
                          }}
                        >
                          Join Date
                        </TableCell>
                        <TableCell
                          sx={{
                            bgcolor: "rgb(35, 35, 35)",
                            color: "rgb(218, 165, 32)",
                            fontWeight: "bold",
                            fontFamily: "New times roman,serif",
                          }}
                        >
                          Actions
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {users.map((user) => (
                        <TableRow
                          key={user.id}
                          sx={{
                            "&:hover": {
                              bgcolor: "rgb(35, 35, 35)",
                            },
                          }}
                        >
                          <TableCell sx={{ color: "rgb(208, 208, 208)" }}>
                            {user.id}
                          </TableCell>
                          <TableCell sx={{ color: "rgb(208, 208, 208)" }}>
                            {user.name}
                          </TableCell>
                          <TableCell sx={{ color: "rgb(208, 208, 208)" }}>
                            {user.email}
                          </TableCell>
                          <TableCell>
                            <Chip
                              label={user.role}
                              size="small"
                              sx={{
                                bgcolor:
                                  user.role === "Admin"
                                    ? "rgba(223, 161, 27, 0.2)"
                                    : "rgba(76, 175, 80, 0.2)",
                                color:
                                  user.role === "Admin"
                                    ? "rgb(223, 161, 27)"
                                    : "rgb(76, 175, 80)",
                                fontWeight: "bold",
                                border: `1px solid ${
                                  user.role === "Admin"
                                    ? "rgb(223, 161, 27)"
                                    : "rgb(76, 175, 80)"
                                }`,
                              }}
                            />
                          </TableCell>
                          <TableCell>
                            <Chip
                              label={user.status}
                              size="small"
                              sx={{
                                bgcolor:
                                  user.status === "Active"
                                    ? "rgba(76, 175, 80, 0.2)"
                                    : "rgba(244, 67, 54, 0.2)",
                                color:
                                  user.status === "Active"
                                    ? "rgb(76, 175, 80)"
                                    : "rgb(244, 67, 54)",
                                fontWeight: "bold",
                                border: `1px solid ${
                                  user.status === "Active"
                                    ? "rgb(76, 175, 80)"
                                    : "rgb(244, 67, 54)"
                                }`,
                              }}
                            />
                          </TableCell>
                          <TableCell sx={{ color: "rgb(208, 208, 208)" }}>
                            {user.joinDate}
                          </TableCell>
                          <TableCell>
                            <Box sx={{ display: "flex", gap: 1 }}>
                              <IconButton
                                size="small"
                                sx={{
                                  color: "rgb(33, 150, 243)",
                                  "&:hover": {
                                    bgcolor: "rgba(33, 150, 243, 0.1)",
                                  },
                                }}
                              >
                                <EditIcon fontSize="small" />
                              </IconButton>
                              <IconButton
                                size="small"
                                sx={{
                                  color:
                                    user.status === "Active"
                                      ? "rgb(244, 67, 54)"
                                      : "rgb(76, 175, 80)",
                                  "&:hover": {
                                    bgcolor:
                                      user.status === "Active"
                                        ? "rgba(244, 67, 54, 0.1)"
                                        : "rgba(76, 175, 80, 0.1)",
                                  },
                                }}
                              >
                                <BlockIcon fontSize="small" />
                              </IconButton>
                              <IconButton
                                size="small"
                                sx={{
                                  color: "rgb(244, 67, 54)",
                                  "&:hover": {
                                    bgcolor: "rgba(244, 67, 54, 0.1)",
                                  },
                                }}
                              >
                                <DeleteIcon fontSize="small" />
                              </IconButton>
                            </Box>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
            </Box>
          )}
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
                      color: "rgb(218, 165, 32)",
                      fontSize: "19px",
                      fontWeight: "bold",
                      fontFamily: "New times roman,serif",
                    }}
                  >
                    📦 Order Management
                  </Typography>
                  <RefreshIcon
                    sx={{
                      color: "rgb(218, 165, 32)",
                    }}
                  />
                </Box>
                <TextField
                  placeholder="Search by customer name or phone..."
                  variant="outlined"
                  fullWidth
                  InputLabelProps={{
                    sx: {
                      color: "rgb(208, 208, 208)",
                      "&.Mui-focused": { color: "rgb(244, 148, 10)" },
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
                        color: "rgb(78, 78, 78)",
                        opacity: 1,
                        fontSize: { xs: "12px", lg: "16px" },
                      },
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "rgb(84, 68, 28)",
                        borderRadius: "8px",
                      },
                      "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "white",
                      },
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "rgb(244, 148, 10)",
                      },
                    },
                  }}
                />
                <Button
                  startIcon={
                    <ErrorOutlineIcon
                      sx={{
                        ml: 2,
                        color: "rgb(10, 119, 177)",
                      }}
                    />
                  }
                  sx={{
                    bgcolor: "rgb(45, 40, 26)",
                    border: "1px solid rgb(97, 78, 28)",
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
          {activeTab === "Rider" && (
            <Box sx={{ p: 3 }}>
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
                <Typography sx={{ color: "rgb(218, 165, 32)", fontSize: "19px", fontWeight: "bold", fontFamily: "New times roman,serif" }}>
                  🏍️ Rider Management
                </Typography>
              <Box sx={{ display: "flex", gap: { xs: 1, sm: 2 }, alignItems: "center", flexWrap: "wrap" }}>
                  <TextField
                    placeholder="Search riders..."
                    variant="outlined"
                    size="small"
                    sx={{
                      width: { xs: "120px", sm: "200px" },
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": { borderColor: "rgb(84, 68, 28)" },
                        "&:hover fieldset": { borderColor: "rgb(223, 161, 27)" },
                        "&.Mui-focused fieldset": { borderColor: "rgb(244, 148, 10)" },
                        "& input": { color: "white" },
                      },
                    }}
                  />
                  <IconButton sx={{ color: "rgb(218, 165, 32)", "&:hover": { bgcolor: "rgba(218, 165, 32, 0.1)" } }}>
                    <RefreshIcon />
                  </IconButton>
                  <Button variant="contained" startIcon={<AddIcon />} sx={{ bgcolor: "rgb(223, 161, 27)", color: "black", fontWeight: "bold", "&:hover": { bgcolor: "rgb(248, 145, 6)" } }}>
                    Add Rider
                  </Button>
                </Box>
              </Box>
              
              <TableContainer component={Paper} sx={{ bgcolor: "rgb(26, 26, 26)", border: "1px solid rgb(65, 54, 27)", borderRadius: "10px", "& .MuiTableCell-root": { borderColor: "rgb(65, 54, 27)" }, overflowX: "auto" }}>
                <Table stickyHeader>
                  <TableHead>
                    <TableRow>
                      <TableCell sx={{ bgcolor: "rgb(35, 35, 35)", color: "rgb(218, 165, 32)", fontWeight: "bold", fontFamily: "New times roman,serif" }}>ID</TableCell>
                      <TableCell sx={{ bgcolor: "rgb(35, 35, 35)", color: "rgb(218, 165, 32)", fontWeight: "bold", fontFamily: "New times roman,serif" }}>Name</TableCell>
                      <TableCell sx={{ bgcolor: "rgb(35, 35, 35)", color: "rgb(218, 165, 32)", fontWeight: "bold", fontFamily: "New times roman,serif" }}>Phone</TableCell>
                      <TableCell sx={{ bgcolor: "rgb(35, 35, 35)", color: "rgb(218, 165, 32)", fontWeight: "bold", fontFamily: "New times roman,serif" }}>Status</TableCell>
                      <TableCell sx={{ bgcolor: "rgb(35, 35, 35)", color: "rgb(218, 165, 32)", fontWeight: "bold", fontFamily: "New times roman,serif" }}>Current Order</TableCell>
                      <TableCell sx={{ bgcolor: "rgb(35, 35, 35)", color: "rgb(218, 165, 32)", fontWeight: "bold", fontFamily: "New times roman,serif" }}>Rating</TableCell>
                      <TableCell sx={{ bgcolor: "rgb(35, 35, 35)", color: "rgb(218, 165, 32)", fontWeight: "bold", fontFamily: "New times roman,serif" }}>Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {[
                      { id: "R001", name: "Ahmed Khan", phone: "0321-1234567", status: "Available", currentOrder: "None", rating: "4.8" },
                      { id: "R002", name: "Sara Ali", phone: "0333-9876543", status: "Delivering", currentOrder: "ORD-005", rating: "4.9" },
                      { id: "R003", name: "Bilal Ahmed", phone: "0345-5555555", status: "Offline", currentOrder: "None", rating: "4.7" },
                    ].map((rider) => (
                      <TableRow key={rider.id} sx={{ "&:hover": { bgcolor: "rgb(35, 35, 35)" } }}>
                        <TableCell sx={{ color: "rgb(208, 208, 208)" }}>{rider.id}</TableCell>
                        <TableCell sx={{ color: "rgb(208, 208, 208)" }}>{rider.name}</TableCell>
                        <TableCell sx={{ color: "rgb(208, 208, 208)" }}>{rider.phone}</TableCell>
                        <TableCell>
                          <Chip
                            label={rider.status}
                            size="small"
                            sx={{
                              bgcolor: rider.status === "Available" ? "rgba(76, 175, 80, 0.2)" : rider.status === "Delivering" ? "rgba(33, 150, 243, 0.2)" : "rgba(244, 67, 54, 0.2)",
                              color: rider.status === "Available" ? "rgb(76, 175, 80)" : rider.status === "Delivering" ? "rgb(33, 150, 243)" : "rgb(244, 67, 54)",
                              fontWeight: "bold",
                            }}
                          />
                        </TableCell>
                        <TableCell sx={{ color: "rgb(208, 208, 208)" }}>{rider.currentOrder}</TableCell>
                        <TableCell sx={{ color: "rgb(208, 208, 208)" }}>⭐ {rider.rating}</TableCell>
                        <TableCell>
                          <Box sx={{ display: "flex", gap: 1 }}>
                            <IconButton size="small" sx={{ color: "rgb(33, 150, 243)", "&:hover": { bgcolor: "rgba(33, 150, 243, 0.1)" } }}>
                              <EditIcon fontSize="small" />
                            </IconButton>
                            <IconButton size="small" sx={{ color: "rgb(244, 67, 54)", "&:hover": { bgcolor: "rgba(244, 67, 54, 0.1)" } }}>
                              <DeleteIcon fontSize="small" />
                            </IconButton>
                          </Box>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          )}
          
          {activeTab === "Payment" && (
            <Box sx={{ p: 3 }}>
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
                <Typography sx={{ color: "rgb(218, 165, 32)", fontSize: "19px", fontWeight: "bold", fontFamily: "New times roman,serif" }}>
                  💳 Payment Notifications
                </Typography>
                <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                  <TextField
                    placeholder="Search payments..."
                    variant="outlined"
                    size="small"
                    sx={{
                      width: "200px",
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": { borderColor: "rgb(84, 68, 28)" },
                        "&:hover fieldset": { borderColor: "rgb(223, 161, 27)" },
                        "&.Mui-focused fieldset": { borderColor: "rgb(244, 148, 10)" },
                        "& input": { color: "white" },
                      },
                    }}
                  />
                  <IconButton sx={{ color: "rgb(218, 165, 32)", "&:hover": { bgcolor: "rgba(218, 165, 32, 0.1)" } }}>
                    <RefreshIcon />
                  </IconButton>
                </Box>
              </Box>

              <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(3, 1fr)" }, gap: 2, mb: 3 }}>
                <AnimatedBox sx={{ flexDirection: "column", gap: 1, p: 3 }}>
                  <Typography sx={{ color: "rgb(208, 208, 196)" }}>Today's Revenue</Typography>
                  <Typography sx={{ color: "rgb(76, 175, 80)", fontWeight: "bold", fontFamily: "New times roman,serif", fontSize: "26px" }}>Rs 15,450</Typography>
                </AnimatedBox>
                <AnimatedBox sx={{ flexDirection: "column", gap: 1, p: 3 }}>
                  <Typography sx={{ color: "rgb(208, 208, 196)" }}>Pending Payments</Typography>
                  <Typography sx={{ color: "rgb(255, 140, 0)", fontWeight: "bold", fontFamily: "New times roman,serif", fontSize: "26px" }}>3</Typography>
                </AnimatedBox>
                <AnimatedBox sx={{ flexDirection: "column", gap: 1, p: 3 }}>
                  <Typography sx={{ color: "rgb(208, 208, 196)" }}>Failed Payments</Typography>
                  <Typography sx={{ color: "rgb(244, 67, 54)", fontWeight: "bold", fontFamily: "New times roman,serif", fontSize: "26px" }}>1</Typography>
                </AnimatedBox>
              </Box>
              
              <TableContainer component={Paper} sx={{ bgcolor: "rgb(26, 26, 26)", border: "1px solid rgb(65, 54, 27)", borderRadius: "10px", "& .MuiTableCell-root": { borderColor: "rgb(65, 54, 27)" }, overflowX: "auto" }}>
                <Table stickyHeader>
                  <TableHead>
                    <TableRow>
                      <TableCell sx={{ bgcolor: "rgb(35, 35, 35)", color: "rgb(218, 165, 32)", fontWeight: "bold", fontFamily: "New times roman,serif" }}>Transaction ID</TableCell>
                      <TableCell sx={{ bgcolor: "rgb(35, 35, 35)", color: "rgb(218, 165, 32)", fontWeight: "bold", fontFamily: "New times roman,serif" }}>Order ID</TableCell>
                      <TableCell sx={{ bgcolor: "rgb(35, 35, 35)", color: "rgb(218, 165, 32)", fontWeight: "bold", fontFamily: "New times roman,serif" }}>Amount</TableCell>
                      <TableCell sx={{ bgcolor: "rgb(35, 35, 35)", color: "rgb(218, 165, 32)", fontWeight: "bold", fontFamily: "New times roman,serif" }}>Method</TableCell>
                      <TableCell sx={{ bgcolor: "rgb(35, 35, 35)", color: "rgb(218, 165, 32)", fontWeight: "bold", fontFamily: "New times roman,serif" }}>Status</TableCell>
                      <TableCell sx={{ bgcolor: "rgb(35, 35, 35)", color: "rgb(218, 165, 32)", fontWeight: "bold", fontFamily: "New times roman,serif" }}>Time</TableCell>
                      <TableCell sx={{ bgcolor: "rgb(35, 35, 35)", color: "rgb(218, 165, 32)", fontWeight: "bold", fontFamily: "New times roman,serif" }}>Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {[
                      { id: "TXN001", orderId: "ORD-001", amount: "Rs 1,250", method: "Credit Card", status: "Completed", time: "10:30 AM" },
                      { id: "TXN002", orderId: "ORD-002", amount: "Rs 850", method: "JazzCash", status: "Pending", time: "11:15 AM" },
                      { id: "TXN003", orderId: "ORD-003", amount: "Rs 2,100", method: "EasyPaisa", status: "Failed", time: "12:45 PM" },
                      { id: "TXN004", orderId: "ORD-004", amount: "Rs 650", method: "Cash on Delivery", status: "Completed", time: "1:20 PM" },
                    ].map((payment) => (
                      <TableRow key={payment.id} sx={{ "&:hover": { bgcolor: "rgb(35, 35, 35)" } }}>
                        <TableCell sx={{ color: "rgb(208, 208, 208)" }}>{payment.id}</TableCell>
                        <TableCell sx={{ color: "rgb(208, 208, 208)" }}>{payment.orderId}</TableCell>
                        <TableCell sx={{ color: "rgb(208, 208, 208)" }}>{payment.amount}</TableCell>
                        <TableCell sx={{ color: "rgb(208, 208, 208)" }}>{payment.method}</TableCell>
                        <TableCell>
                          <Chip
                            label={payment.status}
                            size="small"
                            sx={{
                              bgcolor: payment.status === "Completed" ? "rgba(76, 175, 80, 0.2)" : payment.status === "Pending" ? "rgba(255, 140, 0, 0.2)" : "rgba(244, 67, 54, 0.2)",
                              color: payment.status === "Completed" ? "rgb(76, 175, 80)" : payment.status === "Pending" ? "rgb(255, 140, 0)" : "rgb(244, 67, 54)",
                              fontWeight: "bold",
                            }}
                          />
                        </TableCell>
                        <TableCell sx={{ color: "rgb(208, 208, 208)" }}>{payment.time}</TableCell>
                        <TableCell>
                          <Box sx={{ display: "flex", gap: 1 }}>
                            <IconButton size="small" sx={{ color: "rgb(33, 150, 243)", "&:hover": { bgcolor: "rgba(33, 150, 243, 0.1)" } }}>
                              <EditIcon fontSize="small" />
                            </IconButton>
                            <IconButton size="small" sx={{ color: "rgb(244, 67, 54)", "&:hover": { bgcolor: "rgba(244, 67, 54, 0.1)" } }}>
                              <DeleteIcon fontSize="small" />
                            </IconButton>
                          </Box>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          )}
          
          {activeTab === "Notification" && (
            <Box sx={{ p: 3 }}>
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
                <Typography sx={{ color: "rgb(218, 165, 32)", fontSize: "19px", fontWeight: "bold", fontFamily: "New times roman,serif" }}>
                  🔔 Notification Center
                </Typography>
                <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                  <Button variant="contained" startIcon={<AddIcon />} sx={{ bgcolor: "rgb(223, 161, 27)", color: "black", fontWeight: "bold", "&:hover": { bgcolor: "rgb(248, 145, 6)" } }}>
                    Send Notification
                  </Button>
                  <IconButton sx={{ color: "rgb(218, 165, 32)", "&:hover": { bgcolor: "rgba(218, 165, 32, 0.1)" } }}>
                    <RefreshIcon />
                  </IconButton>
                </Box>
              </Box>

              <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(4, 1fr)" }, gap: 2, mb: 3 }}>
                <AnimatedBox sx={{ flexDirection: "column", gap: 1, p: 3 }}>
                  <Typography sx={{ color: "rgb(208, 208, 196)" }}>Total Sent</Typography>
                  <Typography sx={{ color: "rgb(33, 150, 243)", fontWeight: "bold", fontFamily: "New times roman,serif", fontSize: "26px" }}>245</Typography>
                </AnimatedBox>
                <AnimatedBox sx={{ flexDirection: "column", gap: 1, p: 3 }}>
                  <Typography sx={{ color: "rgb(208, 208, 196)" }}>Delivered</Typography>
                  <Typography sx={{ color: "rgb(76, 175, 80)", fontWeight: "bold", fontFamily: "New times roman,serif", fontSize: "26px" }}>232</Typography>
                </AnimatedBox>
                <AnimatedBox sx={{ flexDirection: "column", gap: 1, p: 3 }}>
                  <Typography sx={{ color: "rgb(208, 208, 196)" }}>Failed</Typography>
                  <Typography sx={{ color: "rgb(244, 67, 54)", fontWeight: "bold", fontFamily: "New times roman,serif", fontSize: "26px" }}>8</Typography>
                </AnimatedBox>
                <AnimatedBox sx={{ flexDirection: "column", gap: 1, p: 3 }}>
                  <Typography sx={{ color: "rgb(208, 208, 196)" }}>Pending</Typography>
                  <Typography sx={{ color: "rgb(255, 140, 0)", fontWeight: "bold", fontFamily: "New times roman,serif", fontSize: "26px" }}>5</Typography>
                </AnimatedBox>
              </Box>
              
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {[
                  { id: 1, type: "Order", title: "New Order Received", message: "Order ORD-006 has been placed", time: "2 mins ago", status: "delivered" },
                  { id: 2, type: "Payment", title: "Payment Successful", message: "Payment of Rs 1,250 received for ORD-004", time: "15 mins ago", status: "delivered" },
                  { id: 3, type: "Rider", title: "Rider Assigned", message: "Ahmed Khan has been assigned to ORD-005", time: "30 mins ago", status: "delivered" },
                  { id: 4, type: "System", title: "Low Stock Alert", message: "Biryani quantity is below threshold", time: "1 hour ago", status: "pending" },
                  { id: 5, type: "Payment", title: "Payment Failed", message: "Payment transaction TXN003 failed", time: "2 hours ago", status: "failed" },
                ].map((notification) => (
                  <Box
                    key={notification.id}
                    sx={{
                      bgcolor: "rgb(35, 35, 35)",
                      border: "1px solid rgb(65, 54, 27)",
                      borderRadius: "12px",
                      p: 3,
                      transition: "all 0.3s ease",
                      "&:hover": { transform: "translateY(-2px)", boxShadow: "0 5px 20px rgba(223, 161, 27, 0.3)" },
                    }}
                  >
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", mb: 2 }}>
                      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                        <Chip
                          label={notification.type}
                          size="small"
                          sx={{
                            bgcolor: notification.type === "Order" ? "rgba(33, 150, 243, 0.2)" : notification.type === "Payment" ? "rgba(76, 175, 80, 0.2)" : notification.type === "Rider" ? "rgba(223, 161, 27, 0.2)" : "rgba(244, 67, 54, 0.2)",
                            color: notification.type === "Order" ? "rgb(33, 150, 243)" : notification.type === "Payment" ? "rgb(76, 175, 80)" : notification.type === "Rider" ? "rgb(223, 161, 27)" : "rgb(244, 67, 54)",
                            fontWeight: "bold",
                          }}
                        />
                        <Typography sx={{ color: "rgb(223, 161, 27)", fontSize: "16px", fontWeight: "bold" }}>
                          {notification.title}
                        </Typography>
                      </Box>
                      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <Chip
                          label={notification.status}
                          size="small"
                          sx={{
                            bgcolor: notification.status === "delivered" ? "rgba(76, 175, 80, 0.2)" : notification.status === "pending" ? "rgba(255, 140, 0, 0.2)" : "rgba(244, 67, 54, 0.2)",
                            color: notification.status === "delivered" ? "rgb(76, 175, 80)" : notification.status === "pending" ? "rgb(255, 140, 0)" : "rgb(244, 67, 54)",
                            fontWeight: "bold",
                          }}
                        />
                        <Typography sx={{ color: "rgb(156, 163, 175)", fontSize: "11px" }}>
                          {notification.time}
                        </Typography>
                      </Box>
                    </Box>
                    <Typography sx={{ color: "rgb(208, 208, 208)", fontSize: "14px", mb: 2 }}>
                      {notification.message}
                    </Typography>
                    <Box sx={{ display: "flex", gap: 1 }}>
                      <Button size="small" sx={{ color: "rgb(33, 150, 243)", "&:hover": { bgcolor: "rgba(33, 150, 243, 0.1)" } }}>
                        View Details
                      </Button>
                      <Button size="small" sx={{ color: "rgb(244, 67, 54)", "&:hover": { bgcolor: "rgba(244, 67, 54, 0.1)" } }}>
                        Delete
                      </Button>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          )}
          {activeTab === "Menu" && (
            <Box sx={{ p: 3 }}>
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
                <Typography sx={{ color: "rgb(218, 165, 32)", fontSize: "19px", fontWeight: "bold", fontFamily: "New times roman,serif" }}>
                  🍽️ Menu Management
                </Typography>
                <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                  <TextField
                    placeholder="Search menu items..."
                    variant="outlined"
                    size="small"
                    sx={{
                      width: "200px",
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": { borderColor: "rgb(84, 68, 28)" },
                        "&:hover fieldset": { borderColor: "rgb(223, 161, 27)" },
                        "&.Mui-focused fieldset": { borderColor: "rgb(244, 148, 10)" },
                        "& input": { color: "white" },
                      },
                    }}
                  />
                  <IconButton sx={{ color: "rgb(218, 165, 32)", "&:hover": { bgcolor: "rgba(218, 165, 32, 0.1)" } }}>
                    <RefreshIcon />
                  </IconButton>
                  <Button variant="contained" startIcon={<AddIcon />} sx={{ bgcolor: "rgb(223, 161, 27)", color: "black", fontWeight: "bold", "&:hover": { bgcolor: "rgb(248, 145, 6)" } }}>
                    Add Item
                  </Button>
                </Box>
              </Box>
              
              <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }, gap: 2, mb: 3 }}>
                <AnimatedBox sx={{ flexDirection: "column", gap: 1, p: 3 }}>
                  <Typography sx={{ color: "rgb(208, 208, 196)" }}>Total Items</Typography>
                  <Typography sx={{ color: "rgb(33, 150, 243)", fontWeight: "bold", fontFamily: "New times roman,serif", fontSize: "26px" }}>24</Typography>
                </AnimatedBox>
                <AnimatedBox sx={{ flexDirection: "column", gap: 1, p: 3 }}>
                  <Typography sx={{ color: "rgb(208, 208, 196)" }}>Available</Typography>
                  <Typography sx={{ color: "rgb(76, 175, 80)", fontWeight: "bold", fontFamily: "New times roman,serif", fontSize: "26px" }}>18</Typography>
                </AnimatedBox>
                <AnimatedBox sx={{ flexDirection: "column", gap: 1, p: 3 }}>
                  <Typography sx={{ color: "rgb(208, 208, 196)" }}>Out of Stock</Typography>
                  <Typography sx={{ color: "rgb(244, 67, 54)", fontWeight: "bold", fontFamily: "New times roman,serif", fontSize: "26px" }}>6</Typography>
                </AnimatedBox>
              </Box>
              
              <TableContainer component={Paper} sx={{ bgcolor: "rgb(26, 26, 26)", border: "1px solid rgb(65, 54, 27)", borderRadius: "10px", "& .MuiTableCell-root": { borderColor: "rgb(65, 54, 27)" }, overflowX: "auto" }}>
                <Table stickyHeader>
                  <TableHead>
                    <TableRow>
                      <TableCell sx={{ bgcolor: "rgb(35, 35, 35)", color: "rgb(218, 165, 32)", fontWeight: "bold", fontFamily: "New times roman,serif" }}>Item Name</TableCell>
                      <TableCell sx={{ bgcolor: "rgb(35, 35, 35)", color: "rgb(218, 165, 32)", fontWeight: "bold", fontFamily: "New times roman,serif" }}>Category</TableCell>
                      <TableCell sx={{ bgcolor: "rgb(35, 35, 35)", color: "rgb(218, 165, 32)", fontWeight: "bold", fontFamily: "New times roman,serif" }}>Price</TableCell>
                      <TableCell sx={{ bgcolor: "rgb(35, 35, 35)", color: "rgb(218, 165, 32)", fontWeight: "bold", fontFamily: "New times roman,serif" }}>Status</TableCell>
                      <TableCell sx={{ bgcolor: "rgb(35, 35, 35)", color: "rgb(218, 165, 32)", fontWeight: "bold", fontFamily: "New times roman,serif" }}>Stock</TableCell>
                      <TableCell sx={{ bgcolor: "rgb(35, 35, 35)", color: "rgb(218, 165, 32)", fontWeight: "bold", fontFamily: "New times roman,serif" }}>Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {[
                      { name: "Chicken Biryani", category: "Rice", price: "Rs 350", status: "Available", stock: "15" },
                      { name: "Beef Biryani", category: "Rice", price: "Rs 450", status: "Available", stock: "8" },
                      { name: "Vegetable Biryani", category: "Rice", price: "Rs 280", status: "Out of Stock", stock: "0" },
                    ].map((item, index) => (
                      <TableRow key={index} sx={{ "&:hover": { bgcolor: "rgb(35, 35, 35)" } }}>
                        <TableCell sx={{ color: "rgb(208, 208, 208)" }}>{item.name}</TableCell>
                        <TableCell sx={{ color: "rgb(208, 208, 208)" }}>{item.category}</TableCell>
                        <TableCell sx={{ color: "rgb(208, 208, 208)" }}>{item.price}</TableCell>
                        <TableCell>
                          <Chip
                            label={item.status}
                            size="small"
                            sx={{
                              bgcolor: item.status === "Available" ? "rgba(76, 175, 80, 0.2)" : "rgba(244, 67, 54, 0.2)",
                              color: item.status === "Available" ? "rgb(76, 175, 80)" : "rgb(244, 67, 54)",
                              fontWeight: "bold",
                            }}
                          />
                        </TableCell>
                        <TableCell sx={{ color: "rgb(208, 208, 208)" }}>{item.stock}</TableCell>
                        <TableCell>
                          <Box sx={{ display: "flex", gap: 1 }}>
                            <IconButton size="small" sx={{ color: "rgb(33, 150, 243)", "&:hover": { bgcolor: "rgba(33, 150, 243, 0.1)" } }}>
                              <EditIcon fontSize="small" />
                            </IconButton>
                            <IconButton size="small" sx={{ color: "rgb(244, 67, 54)", "&:hover": { bgcolor: "rgba(244, 67, 54, 0.1)" } }}>
                              <DeleteIcon fontSize="small" />
                            </IconButton>
                          </Box>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          )}
          {activeTab === "Deal" && (
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
                  minHeight: "400px",
                  gap: 3,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      color: "rgb(218, 165, 32)",
                      fontSize: "19px",
                      fontWeight: "bold",
                      fontFamily: "New times roman,serif",
                    }}
                  >
                    🎉 Deal Management
                  </Typography>
                  <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                    <TextField
                      placeholder="Search deals..."
                      variant="outlined"
                      size="small"
                      sx={{
                        width: "200px",
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            borderColor: "rgb(84, 68, 28)",
                          },
                          "&:hover fieldset": {
                            borderColor: "rgb(223, 161, 27)",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "rgb(244, 148, 10)",
                          },
                          "& input": {
                            color: "white",
                          },
                        },
                      }}
                    />
                    <IconButton
                      sx={{
                        color: "rgb(218, 165, 32)",
                        "&:hover": {
                          bgcolor: "rgba(218, 165, 32, 0.1)",
                        },
                      }}
                    >
                      <RefreshIcon />
                    </IconButton>
                    <Button
                      variant="contained"
                      startIcon={<AddIcon />}
                      onClick={() => setShowAddDealModal(true)}
                      sx={{
                        bgcolor: "rgb(223, 161, 27)",
                        color: "black",
                        fontWeight: "bold",
                        "&:hover": {
                          bgcolor: "rgb(248, 145, 6)",
                        },
                      }}
                    >
                      Add Deal
                    </Button>
                  </Box>
                </Box>
                
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)" },
                    gap: 3,
                  }}
                >
                  {deals.map((deal) => (
                    <Box
                      key={deal.id}
                      sx={{
                        bgcolor: "rgb(35, 35, 35)",
                        border: "1px solid rgb(65, 54, 27)",
                        borderRadius: "12px",
                        p: 3,
                        transition: "all 0.3s ease",
                        "&:hover": {
                          transform: "translateY(-5px)",
                          boxShadow: "0 5px 20px rgba(223, 161, 27, 0.3)",
                          borderColor: "rgb(223, 161, 27)",
                        },
                      }}
                    >
                      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", mb: 2 }}>
                        <Typography
                          sx={{
                            color: "rgb(223, 161, 27)",
                            fontSize: "18px",
                            fontWeight: "bold",
                            fontFamily: "Times New Roman, serif",
                          }}
                        >
                          {deal.title}
                        </Typography>
                        <Chip
                          label={deal.status}
                          size="small"
                          sx={{
                            bgcolor:
                              deal.status === "Active"
                                ? "rgba(76, 175, 80, 0.2)"
                                : deal.status === "Scheduled"
                                ? "rgba(33, 150, 243, 0.2)"
                                : "rgba(244, 67, 54, 0.2)",
                            color:
                              deal.status === "Active"
                                ? "rgb(76, 175, 80)"
                                : deal.status === "Scheduled"
                                ? "rgb(33, 150, 243)"
                                : "rgb(244, 67, 54)",
                            fontWeight: "bold",
                            border: `1px solid ${
                              deal.status === "Active"
                                ? "rgb(76, 175, 80)"
                                : deal.status === "Scheduled"
                                ? "rgb(33, 150, 243)"
                                : "rgb(244, 67, 54)"
                            }`,
                          }}
                        />
                      </Box>
                      
                      <Typography
                        sx={{
                          color: "rgb(208, 208, 208)",
                          fontSize: "14px",
                          mb: 2,
                          lineHeight: 1.4,
                        }}
                      >
                        {deal.description}
                      </Typography>
                      
                      <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
                        <Typography
                          sx={{
                            color: "rgb(223, 161, 27)",
                            fontSize: "20px",
                            fontWeight: "bold",
                          }}
                        >
                          {deal.discountType === "percentage" ? `${deal.discountValue}%` : `Rs ${deal.discountValue}`}
                        </Typography>
                        <Typography
                          sx={{
                            color: "rgb(196, 208, 208)",
                            fontSize: "12px",
                          }}
                        >
                          OFF
                        </Typography>
                      </Box>
                      
                      {deal.minOrderAmount && (
                        <Typography
                          sx={{
                            color: "rgb(196, 208, 208)",
                            fontSize: "12px",
                            mb: 1,
                          }}
                        >
                          Min order: Rs {deal.minOrderAmount}
                        </Typography>
                      )}
                      
                      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mt: 2 }}>
                        <Typography
                          sx={{
                            color: "rgb(156, 163, 175)",
                            fontSize: "11px",
                          }}
                        >
                          {deal.validFrom} to {deal.validTo}
                        </Typography>
                        <Box sx={{ display: "flex", gap: 1 }}>
                          <IconButton
                            size="small"
                            sx={{
                              color: "rgb(33, 150, 243)",
                              "&:hover": {
                                bgcolor: "rgba(33, 150, 243, 0.1)",
                              },
                            }}
                          >
                            <EditIcon fontSize="small" />
                          </IconButton>
                          <IconButton
                            size="small"
                            sx={{
                              color: "rgb(244, 67, 54)",
                              "&:hover": {
                                bgcolor: "rgba(244, 67, 54, 0.1)",
                              },
                            }}
                          >
                            <DeleteIcon fontSize="small" />
                          </IconButton>
                        </Box>
                      </Box>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
          )}
        </Box>
      </Box>
      
      <AddDealModal
        open={showAddDealModal}
        onClose={() => setShowAddDealModal(false)}
        onAddDeal={handleAddDeal}
      />
    </Box>
  );
}
