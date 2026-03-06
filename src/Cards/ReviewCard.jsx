import React from "react";
import { Box, Grid, Paper, Divider, Typography, Button } from "@mui/material";

import { glowEffect } from "../Animations/GLowAnimation";

import Groups2Icon from "@mui/icons-material/Groups2";
import StarIcon from "@mui/icons-material/Star";
import SecurityIcon from "@mui/icons-material/Security";

import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
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
export default function ReviewCard() {
  return (
    <>
      <Box
        sx={{
          height: { lg: "500px", xs: "auto" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
        }}
      >
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
            Why{" "}
            <Typography
              component={"span"}
              sx={{
                color: "rgb(218 165 32)",
                fontSize: { lg: "30px", xs: "20px" },
                fontWeight: "bold",
                fontFamily: "Times New Roman, serif",
              }}
            >
              Choose{" "}
            </Typography>
            <Typography
              component={"span"}
              sx={{
                color: "white",
                fontSize: { lg: "30px", xs: "20px" },
                fontWeight: "bold",
                fontFamily: "Times New Roman, serif",
              }}
            >
              Us?
            </Typography>
          </Typography>

          <Typography
            sx={{
              color: "white",
              fontSize: { lg: "20px", xs: "15px" },
              fontWeight: "500",
              fontFamily: "Times New Roman, serif",
            }}
          >
            Best homemade food delivery in DG Khan
          </Typography>
        </Box>
        {/* ////////////////////////////////boxes */}

        <Box
          sx={{
            display: "flex",
            flexDirection: { lg: "row", xs: "column" },
            gap: 2,
          }}
        >
          <AnimatedBox
            sx={{ width: { lg: "390px", xs: "100%" }, height: "160px" }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                p: 2,
                gap: 1,
              }}
            >
              <StarIcon sx={{ fontSize: "50px", color: "rgb(224 161 26) " }} />

              <Typography
                sx={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  fontFamily: "Times New Roman, serif",
                }}
              >
                Premium Quality
              </Typography>
              <Typography sx={{ color: "rgb(208 208 208)", fontSize: "13px" }}>
                <Button
                  variant="contained"
                  sx={{
                    color: "black",
                    background:
                      "linear-gradient(45deg, rgb(225 160 25),rgb(246 146 8))",

                    fontSize: "11px",
                    textTransform: "none",
                    borderRadius: "13px",
                    px: 1,
                    py: 0,
                  }}
                >
                  4.8/5 Rating
                </Button>
                Hand-picked ingredients
              </Typography>
            </Box>
          </AnimatedBox>
          <AnimatedBox
            sx={{ width: { lg: "390px", xs: "100%" }, height: "160px" }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                p: 2,
                gap: 1,
              }}
            >
              <Groups2Icon
                sx={{ fontSize: "50px", color: "rgb(224 161 26) " }}
              />

              <Typography
                sx={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  fontFamily: "Times New Roman, serif",
                }}
              >
                Trusted by 500+
              </Typography>
              <Typography sx={{ color: "rgb(208 208 208)", fontSize: "13px" }}>
                <Button
                  variant="contained"
                  sx={{
                    color: "black",
                    background:
                      "linear-gradient(45deg, rgb(225 160 25),rgb(246 146 8))",

                    fontSize: "11px",
                    textTransform: "none",
                    borderRadius: "13px",
                    px: 1,
                    py: 0,
                  }}
                >
                  500+ Orders
                </Button>
                Happy customers
              </Typography>
            </Box>
          </AnimatedBox>
          <AnimatedBox
            sx={{ width: { lg: "390px", xs: "100%" }, height: "160px" }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                p: 2,
                gap: 1,
              }}
            >
              <SecurityIcon
                sx={{ fontSize: "50px", color: "rgb(224 161 26) " }}
              />

              <Typography
                sx={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  fontFamily: "Times New Roman, serif",
                }}
              >
                Safe & Hygienic
              </Typography>
              <Typography sx={{ color: "rgb(208 208 208)", fontSize: "13px" }}>
                <Button
                  variant="contained"
                  sx={{
                    color: "black",
                    background:
                      "linear-gradient(45deg, rgb(225 160 25),rgb(246 146 8))",

                    fontSize: "11px",
                    textTransform: "none",
                    borderRadius: "13px",
                    px: 1,
                    py: 0,
                  }}
                >
                  100% Safe
                </Button>
                Sealed packaging
              </Typography>
            </Box>
          </AnimatedBox>
        </Box>
        {/* ////////////////////boxes2 */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { lg: "row", xs: "column" },
            gap: 2,
          }}
        >
          <AnimatedBox
            sx={{ width: { lg: "390px", xs: "100%" }, height: "160px" }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                p: 2,
                gap: 1,
              }}
            >
              <AccessTimeIcon
                sx={{ fontSize: "50px", color: "rgb(224 161 26) " }}
              />

              <Typography
                sx={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  fontFamily: "Times New Roman, serif",
                }}
              >
                Always On Time
              </Typography>
              <Typography sx={{ color: "rgb(208 208 208)", fontSize: "13px" }}>
                <Button
                  variant="contained"
                  sx={{
                    color: "black",
                    background:
                      "linear-gradient(45deg, rgb(225 160 25),rgb(246 146 8))",

                    fontSize: "11px",
                    textTransform: "none",
                    borderRadius: "13px",
                    px: 1,
                    py: 0,
                  }}
                >
                  95% Punctual
                </Button>
                Guaranteed delivery
              </Typography>
            </Box>
          </AnimatedBox>
          <AnimatedBox
            sx={{ width: { lg: "390px", xs: "100%" }, height: "160px" }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                p: 2,
                gap: 1,
              }}
            >
              <ThumbUpIcon
                sx={{ fontSize: "50px", color: "rgb(224 161 26) " }}
              />

              <Typography
                sx={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  fontFamily: "Times New Roman, serif",
                }}
              >
                Easy Ordering
              </Typography>
              <Typography sx={{ color: "rgb(208 208 208)", fontSize: "13px" }}>
                <Button
                  variant="contained"
                  sx={{
                    color: "black",
                    background:
                      "linear-gradient(45deg, rgb(225 160 25),rgb(246 146 8))",

                    fontSize: "11px",
                    textTransform: "none",
                    borderRadius: "13px",
                    px: 1,
                    py: 0,
                  }}
                >
                  Simple
                </Button>
                WhatsApp ordering
              </Typography>
            </Box>
          </AnimatedBox>
          <AnimatedBox
            sx={{ width: { lg: "390px", xs: "100%" }, height: "160px" }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                p: 2,
                gap: 1,
              }}
            >
              <LocalOfferIcon
                sx={{ fontSize: "50px", color: "rgb(224 161 26) " }}
              />

              <Typography
                sx={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  fontFamily: "Times New Roman, serif",
                }}
              >
                Special Deals
              </Typography>
              <Typography sx={{ color: "rgb(208 208 208)", fontSize: "13px" }}>
                <Button
                  variant="contained"
                  sx={{
                    color: "black",
                    background:
                      "linear-gradient(45deg, rgb(225 160 25),rgb(246 146 8))",

                    fontSize: "11px",
                    textTransform: "none",
                    borderRadius: "13px",
                    px: 1,
                    py: 0,
                  }}
                >
                  Save More
                </Button>
                Weekly offers
              </Typography>
            </Box>
          </AnimatedBox>
        </Box>
      </Box>
    </>
  );
}
