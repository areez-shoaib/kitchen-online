import React from "react";
import { Box, Typography, TextField, IconButton, Button } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { AnimatedBox } from "../../Animations/GLowAnimation";

const DealManagement = ({ deals, showAddDealModal, setShowAddDealModal, handleAddDeal }) => {
  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
        <Typography sx={{ color: "rgb(218, 165, 32)", fontSize: "19px", fontWeight: "bold", fontFamily: "New times roman,serif" }}>
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
              <Box
                component="span"
                sx={{
                  px: 2,
                  py: 1,
                  borderRadius: "20px",
                  fontSize: "12px",
                  fontWeight: "bold",
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
                  border: `1px solid ${
                    deal.status === "Active"
                      ? "rgb(76, 175, 80)"
                      : deal.status === "Scheduled"
                      ? "rgb(33, 150, 243)"
                      : "rgb(244, 67, 54)"
                  }`,
                }}
              >
                {deal.status}
              </Box>
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
  );
};

export default DealManagement;
