import React from "react";
import { Box, Typography, IconButton, Button, Chip } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import AddIcon from "@mui/icons-material/Add";
import { AnimatedBox } from "../../Animations/GLowAnimation";

const NotificationCenter = () => {
  const notifications = [
    { id: 1, type: "Order", title: "New Order Received", message: "Order ORD-006 has been placed", time: "2 mins ago", status: "delivered" },
    { id: 2, type: "Payment", title: "Payment Successful", message: "Payment of Rs 1,250 received for ORD-004", time: "15 mins ago", status: "delivered" },
    { id: 3, type: "Rider", title: "Rider Assigned", message: "Ahmed Khan has been assigned to ORD-005", time: "30 mins ago", status: "delivered" },
    { id: 4, type: "System", title: "Low Stock Alert", message: "Biryani quantity is below threshold", time: "1 hour ago", status: "pending" },
    { id: 5, type: "Payment", title: "Payment Failed", message: "Payment transaction TXN003 failed", time: "2 hours ago", status: "failed" },
  ];

  return (
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
        {notifications.map((notification) => (
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
  );
};

export default NotificationCenter;
