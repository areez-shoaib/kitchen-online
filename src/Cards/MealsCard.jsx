import React from "react";
import { Box, Grid, Paper, Divider, Typography, Button } from "@mui/material";

import FastfoodIcon from "@mui/icons-material/Fastfood";
import TapasIcon from "@mui/icons-material/Tapas";
import { glowEffect } from "../Animations/GLowAnimation";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
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

export default function MealsCard() {
  return (
    <>
      <Box
        sx={{
          height: { lg: "450px", xs: "auto" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
          px: { xs: 3, sm: 4, lg: 0 },
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
            Our{" "}
            <Typography
              component={"span"}
              sx={{
                color: "rgb(218 165 32)",
                fontSize: { lg: "30px", xs: "20px" },
                fontWeight: "bold",
                fontFamily: "Times New Roman, serif",
              }}
            >
              Meal Services
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
            Choose the perfect meal time for you
          </Typography>
        </Box>
        {/* ////////////////////////////////boxes */}

        <Box
          sx={{
            display: "flex",
            flexDirection: { lg: "row", xs: "column" },
            gap: 2,
            ml: { xs: 9, lg: 0 },
          }}
        >
          <AnimatedBox
            sx={{
              width: { lg: "550px", xs: "80%" },
              height: { lg: "290px", xs: "auto" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",

                p: 3,
                gap: 1,
              }}
            >
              <FastfoodIcon
                sx={{ fontSize: "48px", color: "rgb(224 161 26) " }}
              />

              <Typography
                sx={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  fontFamily: "Times New Roman, serif",
                }}
              >
                Lunch Specials
              </Typography>

              <Box>
                <Button
                  variant="contained"
                  sx={{
                    color: "black",
                    background:
                      "linear-gradient(45deg, rgb(225 160 25), rgb(246 146 8))",
                    fontWeight: 600,
                    fontSize: "14px",
                    borderRadius: "20px",
                    px: 0.3,
                    py: 0.1,
                    gap: 0.5,
                    textTransform: "none",
                    pointerEvents: "none",
                    userSelect: "text",
                  }}
                >
                  <AccessTimeIcon
                    sx={{ color: "rgb(97 97 97)", fontSize: "18px" }}
                  />
                  12:00PM - 2:00AM
                </Button>
              </Box>
              <Typography sx={{ color: "rgb(208 208 208)", fontSize: "15px" }}>
                Hot meals for office & students
              </Typography>
              <Typography
                sx={{
                  fontSize: "11px",
                  color: "rgb(224 161 26) ",
                  fontWeight: "bold",
                }}
              >
                Popular :
              </Typography>
              <Box sx={{ display: "flex", gap: 1 }}>
                <Button
                  variant="contained"
                  sx={{
                    color: "white",
                    bgcolor: "rgb(45 40 26)",
                    border: "1px solid rgb(80 65 27)",
                    borderRadius: "20px",
                    width: "120px",
                    fontSize: "8px",
                  }}
                >
                  Chicken Karahi
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    color: "white",
                    bgcolor: "rgb(45 40 26)",
                    border: "1px solid rgb(80 65 27)",
                    borderRadius: "20px",
                    width: "70px",
                    fontSize: "8px",
                  }}
                >
                  Biryani
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    color: "white",
                    bgcolor: "rgb(45 40 26)",
                    border: "1px solid rgb(80 65 27)",
                    borderRadius: "20px",
                    width: "110px",
                    fontSize: "8px",
                  }}
                >
                  Daal Chawal
                </Button>
              </Box>
              <Button
                variant="contained"
                sx={{
                  width: "100%",
                  height: "35px",
                  background:
                    "linear-gradient(45deg, rgb(225 160 25), rgb(246 146 8))",
                  color: "black",
                  fontWeight: "bold",
                  textTransform: "none",
                  fontSize: "16px",
                  outline: "none",
                  "&:active": {
                    outline: "none",
                  },
                  "&:focus": {
                    outline: "none",
                  },
                }}
              >
                View Menu
              </Button>
            </Box>
          </AnimatedBox>
          <AnimatedBox
            sx={{
              width: { lg: "550px", xs: "80%" },
              height: { lg: "290px", xs: "100%" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",

                p: 3,
                gap: 1,
              }}
            >
              <TapasIcon sx={{ fontSize: "48px", color: "rgb(224 161 26) " }} />

              <Typography
                sx={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  fontFamily: "Times New Roman, serif",
                }}
              >
                Dinner Menu
              </Typography>

              <Box>
                <Button
                  variant="contained"
                  sx={{
                    color: "black",
                    background:
                      "linear-gradient(45deg, rgb(225 160 25), rgb(246 146 8))",
                    fontWeight: 600,
                    fontSize: "14px",
                    borderRadius: "20px",
                    px: 0.3,
                    py: 0.1,
                    gap: 0.5,
                    textTransform: "none",
                    pointerEvents: "none",
                    userSelect: "text",
                  }}
                >
                  <AccessTimeIcon
                    sx={{ color: "rgb(97 97 97)", fontSize: "18px" }}
                  />
                  12:00PM - 2:00AM
                </Button>
              </Box>
              <Typography sx={{ color: "rgb(208 208 208)", fontSize: "15px" }}>
                Family & individual dinner options
              </Typography>
              <Typography
                sx={{
                  fontSize: "11px",
                  color: "rgb(224 161 26) ",
                  fontWeight: "bold",
                }}
              >
                Popular :
              </Typography>
              <Box sx={{ display: "flex", gap: 1 }}>
                <Button
                  variant="contained"
                  sx={{
                    color: "white",
                    bgcolor: "rgb(45 40 26)",
                    border: "1px solid rgb(80 65 27)",
                    borderRadius: "20px",
                    width: "120px",
                    fontSize: "8px",
                  }}
                >
                  Mutton Karahi
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    color: "white",
                    bgcolor: "rgb(45 40 26)",
                    border: "1px solid rgb(80 65 27)",
                    borderRadius: "20px",
                    width: "70px",
                    fontSize: "8px",
                  }}
                >
                  Nehari
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    color: "white",
                    bgcolor: "rgb(45 40 26)",
                    border: "1px solid rgb(80 65 27)",
                    borderRadius: "20px",
                    width: "110px",
                    fontSize: "8px",
                  }}
                >
                  Daal Chawal
                </Button>
              </Box>
              <Button
                variant="contained"
                sx={{
                  width: "100%",
                  height: "35px",
                  background:
                    "linear-gradient(45deg, rgb(225 160 25), rgb(246 146 8))",
                  color: "black",
                  fontWeight: "bold",
                  textTransform: "none",
                  fontSize: "16px",
                  outline: "none",
                  "&:active": {
                    outline: "none",
                  },
                  "&:focus": {
                    outline: "none",
                  },
                }}
              >
                View Menu
              </Button>
            </Box>
          </AnimatedBox>
        </Box>
      </Box>
    </>
  );
}
