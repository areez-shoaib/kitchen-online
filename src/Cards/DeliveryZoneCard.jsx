import React from "react";
import { Box, Grid, Paper, Divider, Typography, Button } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MopedIcon from "@mui/icons-material/Moped";
import TimerIcon from "@mui/icons-material/Timer";
import VerifiedIcon from "@mui/icons-material/Verified";
import MoneyOffIcon from "@mui/icons-material/MoneyOff";
import DirectionsIcon from "@mui/icons-material/Directions";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import { glowEffect } from "../Animations/GLowAnimation";

import LocalShippingIcon from "@mui/icons-material/LocalShipping";

const AnimatedBox = ({ children, ...props }) => (
  <Box sx={{
    display: "flex", flexDirection: "column",
    border: "2px solid rgb(61,51,26)",
    borderRadius: "10px", bgcolor: "rgb(26,26,26)",
    ...glowEffect, ...props.sx,
  }}>
    {children}
  </Box>
);
export default function DeliverZoneCard() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 3,
        }}
      >
        <Box sx={{ px: { xs: 2, sm: 0 }, textAlign: { xs: "center", sm: "left" } }}>
          <Typography sx={{
            color: "rgb(218,165,32)",
            fontSize: { xs: "1.2rem", sm: "1.6rem", md: "2rem", lg: "2.5rem" },
            fontWeight: "bold", fontFamily: "Times New Roman, serif",
          }}>
            Our Delivery Zones in DG Khan
          </Typography>
        </Box>
        <Box sx={{ px: { xs: 2, sm: 0 } }}>
          <Typography sx={{
            color: "rgb(208,208,208)",
            fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem" },
            maxWidth: "700px", textAlign: "center", margin: "0 auto",
          }}>
            We deliver homemade food to all major areas of Dera Ghazi Khan.
            Click on your area to view details and estimated delivery times.
          </Typography>
        </Box>

        {/* ////////////////////////////////boxes */}

        <Box sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          flexWrap: { sm: "wrap", lg: "nowrap" },
          gap: 3,
          width: { xs: "92%", sm: "90%", lg: "auto" },
          justifyContent: "center",
        }}>
          <AnimatedBox>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",

                p: 2,
                gap: 2,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <LocationOnIcon
                  sx={{ color: "rgb(218 165 32)", fontSize: "33px" }}
                />

                <Typography
                  sx={{
                    fontSize: { xs: "0.95rem", sm: "1.1rem", lg: "1.3rem" },
                    fontWeight: "bold",
                    color: "rgb(218 165 32)",
                    fontFamily: "Times New Roman, serif",
                  }}
                >
                  Zone A - Central Area
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontStyle: "italic",
                    color: "rgb(208 208 208)",
                    fontSize: "12px",
                  }}
                >
                  Fastest delivery in central DG Khan
                </Typography>
              </Box>

              <Box>
                <Button
                  startIcon={<TimerIcon sx={{ color: "rgb(255 140 0)" }} />}
                  sx={{
                    bgcolor: "rgb(45 40 26)",
                    color: "white",
                    borderRadius: "10px",
                    width: "100%",
                    fontWeight: "bold",
                    pointerEvents: "none",
                    userSelect: "text",
                  }}
                >
                  ⏱️ 30-45 minutes
                </Button>
              </Box>
              <Box>
                <Box>
                  <Typography
                    sx={{
                      color: "rgb(218 165 32)",
                      fontSize: "13px",
                    }}
                  >
                    AREAS COVERED:
                  </Typography>
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "4px",
                }}
              >
                <Button
                  sx={{
                    border: "1px solid rgb(218 165 32)",
                    color: "rgb(218 165 32)",
                    fontSize: "8px",
                    borderRadius: "20px",
                  }}
                >
                  {" "}
                  Gulberg Colony
                </Button>
                <Button
                  sx={{
                    border: "1px solid rgb(218 165 32)",
                    color: "rgb(218 165 32)",
                    fontSize: "8px",
                    borderRadius: "20px",
                  }}
                >
                  {" "}
                  Gulberg Colony
                </Button>
                <Button
                  sx={{
                    border: "1px solid rgb(218 165 32)",
                    color: "rgb(218 165 32)",
                    fontSize: "8px",
                    borderRadius: "20px",
                  }}
                >
                  {" "}
                  Gulberg Colony
                </Button>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
                }}
              >
                <Button
                  startIcon={<DirectionsIcon />}
                  sx={{
                    border: "1px solid rgb(218 165 32)",
                    color: "rgb(218 165 32)",
                    fontSize: "12px",
                    textTransform: "none",
                    outline: "none",
                    py: 1.3,

                    "&:active": {
                      outline: "none",
                    },
                    "&:focus": {
                      outline: "none",
                    },
                    animation: "glow 2s infinite alternate",

                    "&:hover": {
                      backgroundColor: "rgb(45 40 26)", // blue remove
                      border: "1px solid rgb(255 140 0)",
                      color: "rgb(255 140 0)",
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
                  {" "}
                  Get Directions
                </Button>
                <Button
                  startIcon={<LocationOnIcon />}
                  sx={{
                    color: "black",

                    background:
                      "linear-gradient(45deg,rgb(224 161 27),rgb(245 147 9))",
                    fontSize: "12px",
                    textTransform: "none",
                    fontWeight: 600,
                    outline: "none",
                    py: 1.3,
                    "&:active": {
                      outline: "none",
                    },
                    "&:focus": {
                      outline: "none",
                    },
                    animation: "glow 2s infinite alternate",

                    "&:hover": {
                      backgroundColor: "rgb(45 40 26)", // blue remove
                      border: "1px solid rgb(255 140 0)",
                      color: "black",
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
                  Viwe on Map
                </Button>
              </Box>
            </Box>
          </AnimatedBox>
          <AnimatedBox>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",

                p: 2,
                gap: 2,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <LocationOnIcon
                  sx={{ color: "rgb(255 140 0)", fontSize: "33px" }}
                />

                <Typography
                  sx={{
                    fontSize: { xs: "0.95rem", sm: "1.1rem", lg: "1.3rem" },
                    fontWeight: "bold",
                    color: "rgb(218 165 32)",
                    fontFamily: "Times New Roman, serif",
                  }}
                >
                  Zone B - North Area
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontStyle: "italic",
                    color: "rgb(208 208 208)",
                    fontSize: "14px",
                  }}
                >
                  Quick delivery to northern localities
                </Typography>
              </Box>

              <Box>
                <Button
                  startIcon={<TimerIcon sx={{ color: "rgb(255 140 0)" }} />}
                  sx={{
                    bgcolor: "rgb(45 40 26)",
                    color: "white",
                    borderRadius: "10px",
                    width: "100%",
                    fontWeight: "bold",
                    pointerEvents: "none",
                    userSelect: "text",
                  }}
                >
                  ⏱️ 30-45 minutes
                </Button>
              </Box>
              <Box>
                <Box>
                  <Typography
                    sx={{
                      color: "rgb(218 165 32)",
                      fontSize: "13px",
                    }}
                  >
                    AREAS COVERED:
                  </Typography>
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "4px",
                }}
              >
                <Button
                  sx={{
                    border: "1px solid rgb(255 140 0)",
                    color: "rgb(255 140 0)",
                    fontSize: "8px",
                    borderRadius: "20px",
                  }}
                >
                  {" "}
                  Gulberg Colony
                </Button>
                <Button
                  sx={{
                    border: "1px solid rgb(255 140 0)",
                    color: "rgb(255 140 0)",
                    fontSize: "8px",
                    borderRadius: "20px",
                  }}
                >
                  {" "}
                  Gulberg Colony
                </Button>
                <Button
                  sx={{
                    border: "1px solid rgb(255 140 0)",
                    color: "rgb(255 140 0)",
                    fontSize: "8px",
                    borderRadius: "20px",
                  }}
                >
                  {" "}
                  Gulberg Colony
                </Button>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
                }}
              >
                <Button
                  startIcon={<DirectionsIcon />}
                  sx={{
                    border: "1px solid rgb(218 165 32)",
                    color: "rgb(218 165 32)",
                    fontSize: "12px",
                    textTransform: "none",
                    outline: "none",
                    py: 1.3,

                    "&:active": {
                      outline: "none",
                    },
                    "&:focus": {
                      outline: "none",
                    },
                    animation: "glow 2s infinite alternate",

                    "&:hover": {
                      backgroundColor: "rgb(45 40 26)", // blue remove
                      border: "1px solid rgb(255 140 0)",
                      color: "rgb(255 140 0)",
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
                  {" "}
                  Get Directions
                </Button>
                <Button
                  startIcon={<LocationOnIcon />}
                  sx={{
                    color: "black",

                    background:
                      "linear-gradient(45deg,rgb(224 161 27),rgb(245 147 9))",
                    fontSize: "12px",
                    textTransform: "none",
                    fontWeight: 600,
                    outline: "none",
                    py: 1.3,
                    "&:active": {
                      outline: "none",
                    },
                    "&:focus": {
                      outline: "none",
                    },
                    animation: "glow 2s infinite alternate",

                    "&:hover": {
                      backgroundColor: "rgb(45 40 26)", // blue remove
                      border: "1px solid rgb(255 140 0)",
                      color: "black",
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
                  Viwe on Map
                </Button>
              </Box>
            </Box>
          </AnimatedBox>
          <AnimatedBox>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",

                p: 2,
                gap: 2,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <LocationOnIcon
                  sx={{ color: "rgb(2 136 209)", fontSize: "33px" }}
                />

                <Typography
                  sx={{
                    fontSize: { xs: "0.95rem", sm: "1.1rem", lg: "1.3rem" },
                    fontWeight: "bold",
                    color: "rgb(218 165 32)",
                    fontFamily: "Times New Roman, serif",
                  }}
                >
                  Zone C - South Area
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontStyle: "italic",
                    color: "rgb(208 208 208)",
                    fontSize: "14px",
                  }}
                >
                  Serving southern DG Khan communities
                </Typography>
              </Box>

              <Box>
                <Button
                  startIcon={<TimerIcon sx={{ color: "rgb(255 140 0)" }} />}
                  sx={{
                    bgcolor: "rgb(45 40 26)",
                    color: "white",
                    borderRadius: "10px",
                    width: "100%",
                    fontWeight: "bold",
                    pointerEvents: "none",
                    userSelect: "text",
                  }}
                >
                  ⏱️ 45-60 minutes
                </Button>
              </Box>
              <Box>
                <Box>
                  <Typography
                    sx={{
                      color: "rgb(218 165 32)",
                      fontSize: "13px",
                    }}
                  >
                    AREAS COVERED:
                  </Typography>
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "4px",
                }}
              >
                <Button
                  sx={{
                    border: "1px solid rgb(2 136 209)",
                    color: "rgb(2 136 209)",
                    fontSize: "8px",
                    borderRadius: "20px",
                  }}
                >
                  {" "}
                  University Area
                </Button>
                <Button
                  sx={{
                    border: "1px solid rgb(2 136 209)",
                    color: "rgb(2 136 209)",
                    fontSize: "8px",
                    borderRadius: "20px",
                  }}
                >
                  {" "}
                  Statlite Town
                </Button>
                <Button
                  sx={{
                    border: "1px solid rgb(2 136 209)",
                    color: "rgb(2 136 209)",
                    fontSize: "8px",
                    borderRadius: "20px",
                  }}
                >
                  {" "}
                  Chohti Zahri
                </Button>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
                }}
              >
                <Button
                  startIcon={<DirectionsIcon />}
                  sx={{
                    border: "1px solid rgb(218 165 32)",
                    color: "rgb(218 165 32)",
                    fontSize: "12px",
                    textTransform: "none",
                    outline: "none",
                    py: 1.3,
                    "&:active": {
                      outline: "none",
                    },
                    "&:focus": {
                      outline: "none",
                    },
                    animation: "glow 2s infinite alternate",

                    "&:hover": {
                      backgroundColor: "rgb(45 40 26)", // blue remove
                      border: "1px solid rgb(255 140 0)",
                      color: "rgb(255 140 0)",
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
                  {" "}
                  Get Directions
                </Button>
                <Button
                  startIcon={<LocationOnIcon />}
                  sx={{
                    color: "black",

                    background:
                      "linear-gradient(105deg,rgb(2 136 209),rgb(245 147 9))",
                    fontSize: "12px",
                    textTransform: "none",
                    fontWeight: 600,
                    outline: "none",
                    animation: "glow 2s infinite alternate",
                    py: 1.3,
                    "&:active": {
                      outline: "none",
                    },
                    "&:hover": {
                      background: "rgb(244 148 10)",
                    },
                    "&:focus": {
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
                  Viwe on Map
                </Button>
              </Box>
            </Box>
          </AnimatedBox>
          <AnimatedBox>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",

                p: 2,
                gap: 2,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <LocationOnIcon
                  sx={{ color: "rgb(46 125 50)", fontSize: "33px" }}
                />

                <Typography
                  sx={{
                    fontSize: { xs: "0.95rem", sm: "1.1rem", lg: "1.3rem" },
                    fontWeight: "bold",
                    color: "rgb(218 165 32)",
                    fontFamily: "Times New Roman, serif",
                  }}
                >
                  Zone D - East Area
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontStyle: "italic",
                    color: "rgb(208 208 208)",
                    fontSize: "14px",
                  }}
                >
                  Extended coverage in eastern areas
                </Typography>
              </Box>

              <Box>
                <Button
                  startIcon={<TimerIcon sx={{ color: "rgb(255 140 0)" }} />}
                  sx={{
                    bgcolor: "rgb(45 40 26)",
                    color: "white",
                    borderRadius: "10px",
                    width: "100%",
                    fontWeight: "bold",
                    pointerEvents: "none",
                    userSelect: "text",
                  }}
                >
                  ⏱️ 50-65 minutes
                </Button>
              </Box>
              <Box>
                <Box>
                  <Typography
                    sx={{
                      color: "rgb(218 165 32)",
                      fontSize: "13px",
                    }}
                  >
                    AREAS COVERED:
                  </Typography>
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "4px",
                }}
              >
                <Button
                  sx={{
                    border: "1px solid rgb(46 125 50)",
                    color: "rgb(46 125 50)",
                    fontSize: "8px",
                    borderRadius: "20px",
                  }}
                >
                  {" "}
                  Iqbal park
                </Button>
                <Button
                  sx={{
                    border: "1px solid rgb(46 125 50)",
                    color: "rgb(46 125 50)",
                    fontSize: "9px",
                    borderRadius: "20px",
                  }}
                >
                  {" "}
                  Sadar Bazar
                </Button>
                <Button
                  sx={{
                    border: "1px solid rgb(46 125 50)",
                    color: "rgb(46 125 50)",
                    fontSize: "9px",
                    borderRadius: "20px",
                  }}
                >
                  {" "}
                  Adiala Road
                </Button>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
                }}
              >
                <Button
                  startIcon={<DirectionsIcon />}
                  sx={{
                    border: "1px solid rgb(218 165 32)",
                    color: "rgb(218 165 32)",
                    fontSize: "12px",
                    textTransform: "none",
                    outline: "none",
                    py: 1.3,
                    "&:hover": {
                      backgroundColor: "rgba(7, 5, 0, 0.97)", // blue remove
                      border: "1px solid rgb(244 148 10)",
                    },
                    "&:active": {
                      outline: "none",
                    },
                    "&:focus": {
                      outline: "none",
                    },
                  }}
                >
                  {" "}
                  Get Directions
                </Button>
                <Button
                  startIcon={<LocationOnIcon />}
                  sx={{
                    color: "black",
                    background:
                      "linear-gradient(105deg,rgb(46 125 50),rgb(245 147 9))",
                    fontSize: "12px",
                    textTransform: "none",
                    animation: "glow 2s infinite alternate",
                    fontWeight: 600,
                    py: 1.3,

                    "&:hover": {
                      background: "rgb(244 148 10)",
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
                  View on Map
                </Button>
              </Box>
            </Box>
          </AnimatedBox>
        </Box>
      </Box>
     
    </>
  );
}
