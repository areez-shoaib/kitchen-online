import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CallIcon from "@mui/icons-material/Call";
import { Box, Button, Typography } from "@mui/material";
export default function ContactUsButtons() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column", //  pehle column
          alignItems: "center",
          gap: 2,
        }}
      >
        <Typography
          sx={{
            color: "white",
            fontSize: { lg: "20px", xs: "15px" },
            fontWeight: "800",
            fontFamily: "Times New Roman, serif",
          }}
        >
          Prefer Direct Contact?
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: 2,
          }}
        >
          <Button
            variant="contained"
            startIcon={<WhatsAppIcon />}
            sx={{
              bgcolor: "rgb(244 148 10)",
              color: "black",
              fontWeight: "bold",
              borderRadius: "7px",
              fontSize: { xs: "10px", lg: "15px" },
              py: { lg: 1.5, xs: 0 },
              animation: "glow 2s infinite alternate",
              "@keyframes glow": {
                "0%": {
                  boxShadow: "0 0 5px rgba(255, 193, 7, 0.3)",
                },
                "50%": {
                  transform: "translateY(0px)",
                  boxShadow: "0 10px 20px rgba(0,0,0,0.3)",
                },
                "100%": {
                  boxShadow: "0 0 20px rgba(255, 193, 7, 0.8)",
                },
              },
            }}
          >
            Whatsapp Us
          </Button>

          <Button
            disableRipple
            disableFocusRipple
            startIcon={<CallIcon />}
            sx={{
              color: "rgb(218 165 32)",
              border: "1px solid rgb(244 148 10)",
              borderRadius: "7px",
              px: { lg: 2, xs: 0.7 },
              fontSize: { xs: "10px", lg: "15px" },
              animation: "glow 2s infinite alternate",
              WebkitTapHighlightColor: "transparent",

              "@keyframes glow": {
                "0%": {
                  boxShadow: "0 0 5px rgba(255, 193, 7, 0.3)",
                },
                "50%": {
                  transform: "translateY(0px)",
                  boxShadow: "0 10px 20px rgba(0,0,0,0.3)",
                },
                "100%": {
                  boxShadow: "0 0 20px rgba(255, 193, 7, 0.8)",
                },
              },
            }}
          >
            Call Us
          </Button>
        </Box>
      </Box>
    </>
  );
}
