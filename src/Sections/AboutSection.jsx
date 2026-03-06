import React from "react";

import { Box, Grid, Paper, Divider, Typography, Button } from "@mui/material";

export default function AboutSection() {
  return (
    <>
      <Box
        sx={{
          height: { lg: "300px", xs: "auto" },
          display: "flex",
          flexDirection: "column",

          bgcolor: "rgb(26 26 26)",
          gap: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            p: 3,
            gap: 2,
            ml: { lg: 35, xs: 1 },
          }}
        >
          {" "}
          <Box>
            <Button
              sx={{
                color: "black",
                borderRadius: "20px",
                background:
                  "linear-gradient(45deg, rgb(225 160 25),rgb(246 146 8))",
                fontWeight: "bold",
                fontSize: { xs: "12px", sm: "14px" },
                pointerEvents: "none",
                textTransform: "none",
                px: { xs: 2, sm: 3, lg: 0.8 },
                py: { xs: 0.5, sm: 0.5, lg: 0.5 },
              }}
            >
              About Us
            </Button>
          </Box>
          <Box>
            <Typography
              sx={{
                color: "white",
                fontSize: { lg: "30px", xs: "15px" },
                fontWeight: "bold",
                fontFamily: "Times New Roman, serif",
              }}
            >
              Authentic{" "}
              <Typography
                component={"span"}
                sx={{
                  color: "rgb(218 165 32)",
                  fontSize: { lg: "30px", xs: "15px" },
                  fontWeight: "bold",
                  fontFamily: "Times New Roman, serif",
                  ml: 1,
                }}
              >
                Pakistani Homemade{" "}
                <Typography
                  component={"span"}
                  sx={{
                    color: "white",
                    fontSize: { lg: "30px", xs: "15px" },

                    fontWeight: "bold",
                    fontFamily: "Times New Roman, serif",
                  }}
                >
                  Food
                </Typography>
              </Typography>
            </Typography>
            <Box>
              <Typography>
                ✓ Kitchen Online brings authentic Pakistani homemade cuisine.
              </Typography>
              <Typography>
                ✓ Fresh meals daily using premium ingredients.
              </Typography>
              <Typography>✓ Perfect for students and professionals.</Typography>
              <Typography>✓ Highest hygiene standards.</Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: 2,
            }}
          >
            <Button
              variant="contained"
              sx={{
                bgcolor: "rgb(244 148 10)",
                color: "black",
                fontWeight: "bold",
                borderRadius: "7px",
                py: { lg: 1, xs: 0.3 },

                fontSize: { lg: "15px", xs: "10px" },
                outline: "none",
                "&:focus": {
                  outline: "none",
                },
                "&:active": {
                  outline: "none",
                },
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
              Explore Menu
            </Button>

            <Button
              disableRipple
              disableFocusRipple
              sx={{
                color: "rgb(218 165 32)",
                border: "1px solid rgb(244 148 10)",
                borderRadius: "7px",
                fontSize: { lg: "15px", xs: "10px" },
                px: { lg: 3, xs: 1 },
                outline: "none",
                animation: "glow 2s infinite alternate",
                "&:hover": {
                  backgroundColor: "rgba(7, 5, 0, 0.97)", // blue remove
                  border: "1px solid rgb(244 148 10)",
                },
                "&:focus": {
                  outline: "none",
                },
                "&:active": {
                  outline: "none",
                },

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
              Contact Us
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}
