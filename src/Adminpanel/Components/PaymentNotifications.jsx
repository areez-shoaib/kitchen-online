import React from "react";
import { Box, Typography, TextField, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Chip, Button } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { AnimatedBox } from "../../Animations/GLowAnimation";

const PaymentNotifications = () => {
  const payments = [
    { id: "TXN001", orderId: "ORD-001", amount: "Rs 1,250", method: "Credit Card", status: "Completed", time: "10:30 AM" },
    { id: "TXN002", orderId: "ORD-002", amount: "Rs 850", method: "JazzCash", status: "Pending", time: "11:15 AM" },
    { id: "TXN003", orderId: "ORD-003", amount: "Rs 2,100", method: "EasyPaisa", status: "Failed", time: "12:45 PM" },
    { id: "TXN004", orderId: "ORD-004", amount: "Rs 650", method: "Cash on Delivery", status: "Completed", time: "1:20 PM" },
  ];

  return (
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
      
      <TableContainer component={Paper} sx={{ bgcolor: "rgb(26, 26, 26)", border: "1px solid rgb(65, 54, 27)", borderRadius: "10px", "& .MuiTableCell-root": { borderColor: "rgb(65, 54, 27)" } }}>
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
            {payments.map((payment) => (
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
  );
};

export default PaymentNotifications;
