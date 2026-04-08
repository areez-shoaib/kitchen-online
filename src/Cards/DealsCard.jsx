import React from "react";
import { Box, Grid, Paper, Divider, Typography, Button } from "@mui/material";

import { glowEffect } from "../Animations/GLowAnimation";

import TrendingUpIcon from "@mui/icons-material/TrendingUp";
const AnimatedBox = ({ children, ...props }) => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      border: "2px solid rgb(61 51 26)",
      borderRadius: "12px",
      bgcolor: "rgb(26 26 26)",
      height: "200px",
      width: "300px",
      ...glowEffect,
      ...props.sx,
    }}
  >
    {children}
  </Box>
);
export default function DealsCard() {
  return (
    <>
      <Box sx={{
          height: { lg: "350px", xs: "auto" },
          display: "flex", flexDirection: "column",
          justifyContent: "center", bgcolor: "rgb(26 26 26)",
          alignItems: "center", gap: 3,
          pb: { xs: 4, lg: 0 },
          px: { xs: 0, lg: 4 },
        }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            mt: { lg: 3, xs: 1 },
          }}
        >
          <Button
            variant="contained"
            sx={{
              color: "black",
              background:
                "linear-gradient(45deg, rgb(225 160 25), rgb(246 146 8))",
              fontWeight: 700,
              fontSize: { lg: "14px", xs: "10px" },
              borderRadius: "20px",
              px: 1,
              py: 0.5,
              gap: 1,
              textTransform: "none",
              pointerEvents: "none",
              outline: "none",
              "&:focus": {
                outline: "none",
              },
              "&:active": {
                outline: "none",
              },
            }}
          >
            <TrendingUpIcon sx={{ color: "grey" }} />
            LIMITED OFFERS
          </Button>
        </Box>
        {/* ////////////////////////////////boxes */}

        <Box sx={{
            display: "flex",
            flexDirection: { lg: "row", xs: "column" },
            justifyContent: "center",
            alignItems: "center",
            gap: 2,
            px: { xs: 3, sm: 4, lg: 4 },
            width: "100%",
            maxWidth: "100%",
            boxSizing: "border-box",
          }}>
          <AnimatedBox sx={{
              width: { lg: "550px", xs: "100%" },
              height: { lg: "190px", xs: "100%" },
              border: "2px solid rgb(225 160 25)",
              position: "relative",
              bgcolor: "rgb(35 32 26)",
              mt: { xs: 2, lg: 0 },
            }}>
            <Button
              variant="contained"
              sx={{
                position: "absolute",
                top: "-15px",
                right: "20px",
                background:
                  "linear-gradient(45deg, rgb(225 160 25), rgb(246 146 8))",
                color: "black",
                fontSize: "12px",
                fontWeight: "bold",
                textTransform: "none",
                borderRadius: "20px",
                pointerEvents: "none",
                px: 2,
                py: 0.2,
              }}
            >
              Save 20%
            </Button>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",

                borderRadius: "15px",
                p: 2,
                gap: 0.5,
              }}
            >
              <Typography
                sx={{
                  fontSize: { lg: "27px", xs: "1rem" },
                  fontWeight: "bold",
                  color: "rgb(225 160 25)",
                  fontFamily: "Times New Roman, serif",
                }}
              >
                Weekly Combo
              </Typography>
              <Typography
                sx={{
                  fontSize: { lg: "27px", xs: "1rem" },
                  fontWeight: "bold",
                  fontFamily: "Times New Roman, serif",
                }}
              >
                RS : 3,500
              </Typography>

              <Typography
                sx={{
                  color: "rgb(208 208 208)",
                  fontSize: { lg: "15px", xs: "12px" },
                }}
              >
                7 Days Package
              </Typography>

              <Button
                variant="contained"
                sx={{
                  width: "100%",
                  height: { lg: "35px", xs: "25px" },
                  background:
                    "linear-gradient(45deg, rgb(225 160 25), rgb(246 146 8))",
                  color: "black",
                  fontWeight: "bold",
                  textTransform: "none",
                  fontSize: { lg: "16px", xs: "12px" },
                  outline: "none",
                  "&:focus": {
                    outline: "none",
                  },
                  "&:active": {
                    outline: "none",
                  },
                }}
              >
                Get Deal
              </Button>
            </Box>
          </AnimatedBox>
          <AnimatedBox sx={{
              width: { lg: "550px", xs: "100%" },
              height: { lg: "190px", xs: "100%" },
              border: "2px solid rgb(255 140 0)",
              position: "relative",
              borderRadius: "15px",
              bgcolor: "rgb(38 32 25)",
              mt: { xs: 2, lg: 0 },
            }}>
            <Button
              variant="contained"
              sx={{
                position: "absolute",
                top: "-15px",
                right: "20px",
                background:
                  "linear-gradient(45deg, rgb(255 140 0), rgb(246 146 8))",
                color: "black",
                fontSize: "12px",
                fontWeight: "bold",
                textTransform: "none",
                pointerEvents: "none",
                borderRadius: "20px",
                px: 2,
                py: 0.2,
              }}
            >
              Save 30%
            </Button>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                p: 2,
                gap: 0.5,
              }}
            >
              <Typography
                sx={{
                  fontSize: { lg: "27px", xs: "1rem" },
                  fontWeight: "bold",
                  color: "rgb(255 140 0)",
                  fontFamily: "Times New Roman, serif",
                }}
              >
                Monthly Deal
              </Typography>

              <Typography
                sx={{
                  fontSize: { lg: "27px", xs: "1rem" },
                  fontWeight: "bold",
                  fontFamily: "Times New Roman, serif",
                }}
              >
                RS : 12,000
              </Typography>

              <Typography
                sx={{
                  color: "rgb(208 208 208)",
                  fontSize: { lg: "15px", xs: "12px" },
                }}
              >
                30 Days Package
              </Typography>

              <Button
                variant="contained"
                sx={{
                  width: "100%",
                  height: { lg: "35px", xs: "25px" },
                  background:
                    "linear-gradient(45deg,rgb(255 140 0), rgb(246 146 8))",
                  color: "black",
                  fontWeight: "bold",
                  textTransform: "none",
                  fontSize: { lg: "16px", xs: "12px" },
                  outline: "none",
                  "&:focus": {
                    outline: "none",
                  },
                  "&:active": {
                    outline: "none",
                  },
                }}
              >
                Get Deal
              </Button>
            </Box>
          </AnimatedBox>
        </Box>
      </Box>
    </>
  );
}
