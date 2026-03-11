import React from "react";
import { Box, Typography, TextField, IconButton, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Chip } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { AnimatedBox } from "../../Animations/GLowAnimation";

const MenuManagement = () => {
  const menuItems = [
    { name: "Chicken Biryani", category: "Rice", price: "Rs 350", status: "Available", stock: "15" },
    { name: "Beef Biryani", category: "Rice", price: "Rs 450", status: "Available", stock: "8" },
    { name: "Vegetable Biryani", category: "Rice", price: "Rs 280", status: "Out of Stock", stock: "0" },
  ];

  return (
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
      
      <TableContainer component={Paper} sx={{ bgcolor: "rgb(26, 26, 26)", border: "1px solid rgb(65, 54, 27)", borderRadius: "10px", "& .MuiTableCell-root": { borderColor: "rgb(65, 54, 27)" } }}>
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
            {menuItems.map((item, index) => (
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
  );
};

export default MenuManagement;
