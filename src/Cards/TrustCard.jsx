import React from "react";
import { Box, Grid, Paper, Divider, Typography, Button } from "@mui/material";

import MopedIcon from "@mui/icons-material/Moped";

import VerifiedIcon from "@mui/icons-material/Verified";
import MoneyOffIcon from "@mui/icons-material/MoneyOff";

import RestaurantIcon from "@mui/icons-material/Restaurant";
import { glowEffect } from "../Animations/GLowAnimation";

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
export default function TrustCard() {
  return (
    <>
      <Box sx={{
          height: { lg: "400px", xs: "auto" },
          display: "flex", flexDirection: "column",
          justifyContent: "center", alignItems: "center",
          gap: 2, pb: { xs: 4, lg: 0 },
        }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            mt: 3,
          }}
        >
          <Typography
            sx={{
              color: "white",
              fontSize: { lg: "30px", xs: "20px" },
              fontWeight: "bold",
              fontFamily: "Times New Roman, serif",
            }}
          >
            Why Choose{" "}
            <Typography
              component={"span"}
              sx={{
                color: "rgb(218 165 32)",
                fontSize: { lg: "30px", xs: "20px" },
                fontWeight: "bold",
                fontFamily: "Times New Roman, serif",
              }}
            >
              Kitchen Online
            </Typography>
          </Typography>
          <Typography
            sx={{
              color: "white",
              fontSize: { lg: "20px", xs: "14px" },
              fontWeight: "500",
              fontFamily: "Times New Roman, serif",
            }}
          >
            Most trusted homemade food delivery in DG Khan
          </Typography>
        </Box>
        {/* ////////////////////////////////boxes */}

        <Box sx={{
            display: "flex", flexDirection: { lg: "row", xs: "column" },
            alignItems: "center", gap: 2,
            px: { xs: 2, lg: 0 }, width: { xs: "100%", lg: "auto" },
          }}>
          <AnimatedBox>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                p: 3,
                gap: 1,
              }}
            >
              <RestaurantIcon
                sx={{ fontSize: "40px", color: "rgb(224 161 26) " }}
              />

              <Button
                variant="contained"
                sx={{
                  color: "black",
                  background:
                    "linear-gradient(45deg, rgb(225 160 25),rgb(246 146 8))",

                  fontSize: "11px",
                  textTransform: "none",
                  borderRadius: "13px",
                  pointerEvents: "none",
                  px: 1,
                  py: 0,
                }}
              >
                100% Fresh
              </Button>

              <Typography
                sx={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  fontFamily: "Times New Roman, serif",
                }}
              >
                Fresh Daily
              </Typography>
              <Typography sx={{ color: "rgb(208 208 208)", fontSize: "13px" }}>
                Authentic recipes prepared fresh
              </Typography>
            </Box>
          </AnimatedBox>
          <AnimatedBox>
            {" "}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                p: 3,
                gap: 1,
              }}
            >
              <MopedIcon sx={{ fontSize: "40px", color: "green" }} />
              <Button
                variant="contained"
                sx={{
                  color: "black",
                  background:
                    "linear-gradient(45deg, rgb(225 160 25),rgb(246 146 8))",

                  fontSize: "11px",
                  textTransform: "none",
                  borderRadius: "13px",
                  pointerEvents: "none",
                  px: 1,
                  py: 0,
                }}
              >
                30-45 min
              </Button>
              <Typography
                sx={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  fontFamily: "Times New Roman, serif",
                }}
              >
                Fast Delivery
              </Typography>
              <Typography sx={{ color: "rgb(208 208 208)", fontSize: "13px" }}>
                Delivered in 30-45 minutes
              </Typography>
            </Box>
          </AnimatedBox>
          <AnimatedBox>
            {" "}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                p: 3,
                gap: 1,
              }}
            >
              <VerifiedIcon
                sx={{ fontSize: "40px", color: "rgb(224 161 26)" }}
              />
              <Button
                variant="contained"
                sx={{
                  color: "black",
                  background:
                    "linear-gradient(45deg, rgb(225 160 25),rgb(246 146 8))",

                  fontSize: "11px",
                  textTransform: "none",
                  pointerEvents: "none",
                  borderRadius: "13px",
                  px: 1,
                  py: 0,
                }}
              >
                ISO Certified
              </Button>
              <Typography
                sx={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  fontFamily: "Times New Roman, serif",
                }}
              >
                Certified Safe
              </Typography>
              <Typography sx={{ color: "rgb(208 208 208)", fontSize: "13px" }}>
                Hygienic & certified kitchen
              </Typography>
            </Box>
          </AnimatedBox>
          <AnimatedBox>
            {" "}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                p: 3,
                gap: 1,
              }}
            >
              <MoneyOffIcon
                sx={{ fontSize: "40px", color: "rgb(211 47 47)" }}
              />
              <Button
                variant="contained"
                sx={{
                  color: "black",
                  background:
                    "linear-gradient(45deg, rgb(225 160 25),rgb(246 146 8))",

                  fontSize: "11px",
                  textTransform: "none",
                  borderRadius: "13px",
                  pointerEvents: "none",
                  px: 1,
                  py: 0,
                }}
              >
                Budget Friendly
              </Button>
              <Typography
                sx={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  fontFamily: "Times New Roman, serif",
                }}
              >
                Best Prices
              </Typography>
              <Typography sx={{ color: "rgb(208 208 208)", fontSize: "13px" }}>
                Affordable quality meals
              </Typography>
            </Box>
          </AnimatedBox>
        </Box>
      </Box>
    </>
  );
}
