import React from "react";
import { Box, Typography, TextField, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Chip, IconButton } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const RiderManagement = () => {
  const riders = [
    { id: "R001", name: "Ahmed Khan", phone: "0321-1234567", status: "Available", currentOrder: "None", rating: "4.8" },
    { id: "R002", name: "Sara Ali", phone: "0333-9876543", status: "Delivering", currentOrder: "ORD-005", rating: "4.9" },
    { id: "R003", name: "Bilal Ahmed", phone: "0345-5555555", status: "Offline", currentOrder: "None", rating: "4.7" },
  ];

  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
        <Typography sx={{ color: "rgb(218, 165, 32)", fontSize: "19px", fontWeight: "bold", fontFamily: "New times roman,serif" }}>
          🏍️ Rider Management
        </Typography>
        <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
          <TextField
            placeholder="Search riders..."
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
            Add Rider
          </Button>
        </Box>
      </Box>
      
      <TableContainer component={Paper} sx={{ bgcolor: "rgb(26, 26, 26)", border: "1px solid rgb(65, 54, 27)", borderRadius: "10px", "& .MuiTableCell-root": { borderColor: "rgb(65, 54, 27)" } }}>
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
            {riders.map((rider) => (
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
  );
};

export default RiderManagement;
