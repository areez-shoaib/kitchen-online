import React from "react";
import { Box, Typography, TextField, Button, Modal, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import SaveIcon from "@mui/icons-material/Save";

export default function TopBarEditModal({ open, onClose, topBarData, setTopBarData, onSave }) {
  const handleSave = () => {
    onSave();
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "500px",
          maxHeight: "80vh",
          overflow: "auto",
          bgcolor: "rgb(34, 34, 34)",
          border: "1px solid rgb(65, 54, 27)",
          borderRadius: "20px",
          p: 4,
          boxShadow: "0 0 25px rgb(65, 54, 27)",
          outline: "none",
        }}
      >
        {/* Header */}
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
          <Typography
            sx={{
              color: "rgb(218, 165, 32)",
              fontSize: "24px",
              fontWeight: "bold",
              fontFamily: "Times New Roman, serif",
            }}
          >
            Edit TopBar Content
          </Typography>
          <IconButton
            onClick={onClose}
            sx={{
              color: "rgb(208, 208, 208)",
              "&:hover": { bgcolor: "rgba(244, 67, 54, 0.1)" },
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>

        {/* Form Fields */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          {/* Title */}
          <Box>
            <Typography sx={{ color: "rgb(208, 208, 208)", mb: 1, fontSize: "14px" }}>
              Product Title
            </Typography>
            <TextField
              fullWidth
              value={topBarData.title}
              onChange={(e) => setTopBarData({ ...topBarData, title: e.target.value })}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "rgb(65, 54, 27)" },
                  "&:hover fieldset": { borderColor: "rgb(218, 165, 32)" },
                  "&.Mui-focused fieldset": { borderColor: "rgb(244, 148, 10)" },
                },
                "& input": { color: "white" },
              }}
              size="small"
            />
          </Box>

          {/* Prices */}
          <Box sx={{ display: "flex", gap: 2 }}>
            <Box sx={{ flex: 1 }}>
              <Typography sx={{ color: "rgb(208, 208, 208)", mb: 1, fontSize: "14px" }}>
                Original Price
              </Typography>
              <TextField
                fullWidth
                value={topBarData.originalPrice}
                onChange={(e) => setTopBarData({ ...topBarData, originalPrice: e.target.value })}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "rgb(65, 54, 27)" },
                    "&:hover fieldset": { borderColor: "rgb(218, 165, 32)" },
                    "&.Mui-focused fieldset": { borderColor: "rgb(244, 148, 10)" },
                  },
                  "& input": { color: "rgb(30, 115, 7)" },
                }}
                size="small"
              />
            </Box>
            <Box sx={{ flex: 1 }}>
              <Typography sx={{ color: "rgb(208, 208, 208)", mb: 1, fontSize: "14px" }}>
                Discounted Price
              </Typography>
              <TextField
                fullWidth
                value={topBarData.discountedPrice}
                onChange={(e) => setTopBarData({ ...topBarData, discountedPrice: e.target.value })}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "rgb(65, 54, 27)" },
                    "&:hover fieldset": { borderColor: "rgb(218, 165, 32)" },
                    "&.Mui-focused fieldset": { borderColor: "rgb(244, 148, 10)" },
                  },
                  "& input": { color: "rgb(218, 165, 32)" },
                }}
                size="small"
              />
            </Box>
          </Box>

          {/* Discount Text */}
          <Box>
            <Typography sx={{ color: "rgb(208, 208, 208)", mb: 1, fontSize: "14px" }}>
              Discount Text
            </Typography>
            <TextField
              fullWidth
              value={topBarData.discountText}
              onChange={(e) => setTopBarData({ ...topBarData, discountText: e.target.value })}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "rgb(65, 54, 27)" },
                  "&:hover fieldset": { borderColor: "rgb(218, 165, 32)" },
                  "&.Mui-focused fieldset": { borderColor: "rgb(244, 148, 10)" },
                },
                "& input": { color: "black" },
              }}
              size="small"
            />
          </Box>

          {/* Order Button Text */}
          <Box>
            <Typography sx={{ color: "rgb(208, 208, 208)", mb: 1, fontSize: "14px" }}>
              Order Button Text
            </Typography>
            <TextField
              fullWidth
              value={topBarData.orderButtonText}
              onChange={(e) => setTopBarData({ ...topBarData, orderButtonText: e.target.value })}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "rgb(65, 54, 27)" },
                  "&:hover fieldset": { borderColor: "rgb(218, 165, 32)" },
                  "&.Mui-focused fieldset": { borderColor: "rgb(244, 148, 10)" },
                },
                "& input": { color: "black" },
              }}
              size="small"
            />
          </Box>

          {/* WhatsApp Settings */}
          <Box>
            <Typography sx={{ color: "rgb(218, 165, 32)", fontSize: "16px", fontWeight: "bold", mb: 2 }}>
              WhatsApp Settings
            </Typography>
            
            <Box sx={{ mb: 2 }}>
              <Typography sx={{ color: "rgb(208, 208, 208)", mb: 1, fontSize: "14px" }}>
                WhatsApp Number
              </Typography>
              <TextField
                fullWidth
                value={topBarData.whatsappNumber}
                onChange={(e) => setTopBarData({ ...topBarData, whatsappNumber: e.target.value })}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "rgb(65, 54, 27)" },
                    "&:hover fieldset": { borderColor: "rgb(218, 165, 32)" },
                    "&.Mui-focused fieldset": { borderColor: "rgb(244, 148, 10)" },
                  },
                  "& input": { color: "white" },
                }}
                size="small"
                placeholder="+923310451716"
              />
            </Box>

            <Box>
              <Typography sx={{ color: "rgb(208, 208, 208)", mb: 1, fontSize: "14px" }}>
                WhatsApp Message
              </Typography>
              <TextField
                fullWidth
                multiline
                rows={3}
                value={topBarData.whatsappMessage}
                onChange={(e) => setTopBarData({ ...topBarData, whatsappMessage: e.target.value })}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "rgb(65, 54, 27)" },
                    "&:hover fieldset": { borderColor: "rgb(218, 165, 32)" },
                    "&.Mui-focused fieldset": { borderColor: "rgb(244, 148, 10)" },
                  },
                  "& textarea": { color: "white" },
                }}
                placeholder="Enter your default WhatsApp message..."
              />
            </Box>
          </Box>
        </Box>

        {/* Action Buttons */}
        <Box sx={{ display: "flex", gap: 2, justifyContent: "flex-end", mt: 4 }}>
          <Button
            onClick={onClose}
            sx={{
              color: "rgb(208, 208, 208)",
              border: "1px solid rgb(65, 54, 27)",
              background: "transparent",
              px: 3,
              py: 1,
              fontWeight: "600",
              textTransform: "none",
              "&:hover": {
                bgcolor: "rgb(54, 46, 27)",
                border: "1px solid rgb(218, 165, 32)",
              },
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleSave}
            startIcon={<SaveIcon />}
            sx={{
              color: "black",
              background: "linear-gradient(45deg, rgb(223, 161, 27), rgb(250, 144, 5))",
              px: 3,
              py: 1,
              fontWeight: "600",
              textTransform: "none",
              "&:hover": {
                background: "linear-gradient(45deg, rgb(250, 144, 5), rgb(223, 161, 27))",
              },
            }}
          >
            Save Changes
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
