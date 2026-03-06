import React from "react";
import { Box, Grid, Paper, Divider, Typography, Button } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import DeliveryButtons from "../Components/Buttons/DeliveryButtons";
import { glowEffect } from "../Animations/GLowAnimation";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import OutSideLocationCard from "./OutSideLocationCard";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
const AnimatedBox = ({ children, ...props }) => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      border: "3px solid rgb(218 165 32)",
      borderRadius: "9px",
      bgcolor: "rgb(26 26 26)",

      ...glowEffect,
      ...props.sx,
    }}
  >
    {children}
  </Box>
);
export default function InformationCard() {
  return (
    <>
      <AnimatedBox
        sx={{ width: "70%", height: "auto", p: 3, display: "flex", gap: 3 }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <Typography
            sx={{
              fontSize: { lg: "35px", xs: "20px" },
              fontWeight: "bold",
              color: "rgb(218 165 32)",
              fontFamily: "Times New Roman, serif",
            }}
          >
            📋 Complete Delivery Information Guide
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            gap: 3,
          }}
        >
          <AnimatedBox
            sx={{
              width: "50%",
              border: "2px solid rgb(91 73 28)",
              bgcolor: "rgb(36 33 27)",
              p: 3,
              gap: 2,

              boxSizing: "border-box",
              height: "285px",
            }}
          >
            <Typography
              sx={{
                color: "rgb(218 165 32)",
                fontSize: "24px",
                fontFamily: "Times New Roman, serif",
                fontWeight: "bold",
              }}
            >
              ⏰ Delivery Hours & Schedule
            </Typography>
            <Typography
              sx={{
                color: "rgb(208 208 208)",
                fontSize: "19px",
                fontFamily: "Times New Roman, serif",
                display: "flex",
                gap: 1,
                alignItems: "center",
              }}
            >
              🍽️ {"     "}
              <Typography
                component={"span"}
                sx={{
                  color: "rgb(208 208 208)",
                  fontWeight: "bold",
                  display: "flex",

                  alignItems: "center",
                }}
              >
                Lunch Service:
              </Typography>{" "}
              12:00 PM - 2:00 PM
            </Typography>
            <Typography
              sx={{
                color: "rgb(208 208 208)",
                fontSize: "19px",
                fontFamily: "Times New Roman, serif",
                display: "flex",
                gap: 1,
                alignItems: "center",
              }}
            >
              🍲{"     "}
              <Typography
                component={"span"}
                sx={{
                  color: "rgb(208 208 208)",
                  fontWeight: "bold",
                  display: "flex",

                  alignItems: "center",
                }}
              >
                Dinner Service:{" "}
              </Typography>{" "}
              6:00 PM - 8:00 PM
            </Typography>

            <Button
              startIcon={<TaskAltIcon sx={{ color: "rgb(33 140 224)" }} />}
              sx={{
                border: "1px solid rgb(35 76 107)",
             
                outline: "none",
                pointerEvents: "none",
                bgcolor: "rgb(35 45 49)",
                display: "flex",
                justifyContent: "center",
                fontSize: "12px",
                borderRadius: "9px",
                height: "50px",
                color: "rgb(197 208 198)",
                userSelect: "text",
              }}
            >
              {" "}
              Orders are accepted during lunch and dinner hours only
            </Button>
          </AnimatedBox>
          <AnimatedBox
            sx={{
              width: "50%",
              border: "2px solid rgb(91 73 28)",
              bgcolor: "rgb(36 33 27)",
              p: 3,
              gap: 2,
              height: "100%",
              boxSizing: "border-box",
            }}
          >
            <Typography
              sx={{
                color: "rgb(218 165 32)",
                fontSize: "24px",
                fontFamily: "Times New Roman, serif",
                fontWeight: "bold",
              }}
            >
              💰 Affordable Delivery Fees
            </Typography>
            <Button
              sx={{
                border: "1px solid rgb(52 87 47)",
                color: "white",
                outline: "none",
                pointerEvents: "none",
                bgcolor: "rgb(40 48 32)",
                display: "flex",
                justifyContent: "flex-start",
                fontWeight: "bold",
                borderRadius: "9px",
                height: "50px",
                userSelect: "text",
              }}
            >
              {" "}
              ✓ Zone C & D (South & East): Rs. 75
            </Button>
            <Button
              sx={{
                border: "1px solid rgb(118 73 17)",
                color: "white",
                outline: "none",
                pointerEvents: "none",
                bgcolor: "rgb(58 44 24)",
                display: "flex",
                justifyContent: "flex-start",
                fontWeight: "bold",
                borderRadius: "9px",
                height: "50px",
                userSelect: "text",
              }}
            >
              {" "}
              ✓ Zone A & B (Central & North): Rs. 50
            </Button>
            <Button
              startIcon={
                <TaskAltIcon sx={{ color: "rgb(72 161 75)", ml: 1 }} />
              }
              sx={{
                border: "1px solid rgb(52 87 47)",
                color: "rgb(208 208 208)",
                outline: "none",
                pointerEvents: "none",
                bgcolor: "rgb(40 48 32)",
                display: "flex",
                justifyContent: "flex-start",
                userSelect: "text",

                fontSize: "12px",
                borderRadius: "9px",
                height: "50px",
              }}
            >
              {"   "}
              Best delivery rates in DG Khan - Fresh food at your doorstep!
            </Button>
          </AnimatedBox>
        </Box>

        <AnimatedBox
          sx={{
            width: "100%",
            border: "2px solid rgb(91 73 28)",
            bgcolor: "rgb(36 33 27)",
            p: 3,
            gap: 2,
            height: "100%",
            boxSizing: "border-box",
          }}
        >
          <Typography
            sx={{
              fontSize: { lg: "23px", xs: "20px" },
              fontWeight: "bold",
              color: "rgb(218 165 32)",
              fontFamily: "Times New Roman, serif",
            }}
          >
            📝 How to Order - Simple 4-Step Process
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: { lg: "row", xs: "column" },
              gap: 2,
            }}
          >
            <AnimatedBox
              sx={{
                border: "1px solid rgb(91 73 28)",
                bgcolor: "rgb(36 33 27)",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  p: 3,
                  gap: 1,
                  height: "auto",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "40px",
                  }}
                >
                  🍽️
                </Typography>

                <Button
                  variant="contained"
                  sx={{
                    color: "black",
                    background:
                      "linear-gradient(45deg, rgb(225 160 25),rgb(246 146 8))",

                    fontSize: "12px",
                    fontWeight: 600,
                    textTransform: "none",
                    borderRadius: "13px",
                    pointerEvents: "none",
                    px: 0.6,
                    py: 0.5,
                  }}
                >
                  Step 1
                </Button>

                <Typography
                  sx={{
                    color: "rgb(208 208 208)",
                    fontSize: "15px",
                    textAlign: "center",
                  }}
                >
                  Browse our menu and select your favorite homemade dishes
                </Typography>
              </Box>
            </AnimatedBox>
            <AnimatedBox
              sx={{
                border: "1px solid rgb(91 73 28)",
                bgcolor: "rgb(36 33 27)",
              }}
            >
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
                <Typography
                  sx={{
                    fontSize: "40px",
                  }}
                >
                  📱
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    color: "black",
                    background:
                      "linear-gradient(45deg, rgb(225 160 25),rgb(246 146 8))",

                    fontSize: "12px",
                    textTransform: "none",
                    borderRadius: "13px",
                    pointerEvents: "none",
                    fontWeight: 600,
                    px: 0.6,
                    py: 0.5,
                  }}
                >
                  Step 2
                </Button>

                <Typography
                  sx={{
                    color: "rgb(208 208 208)",
                    fontSize: "15px",
                    textAlign: "center",
                  }}
                >
                  Contact us via WhatsApp or phone with your order and delivery
                  address
                </Typography>
              </Box>
            </AnimatedBox>
            <AnimatedBox
              sx={{
                border: "1px solid rgb(91 73 28)",
                bgcolor: "rgb(36 33 27)",
              }}
            >
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
                <Typography
                  sx={{
                    fontSize: "40px",
                  }}
                >
                  ✅
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    color: "black",
                    background:
                      "linear-gradient(45deg, rgb(225 160 25),rgb(246 146 8))",

                    fontSize: "12px",
                    textTransform: "none",
                    pointerEvents: "none",
                    borderRadius: "13px",
                    fontWeight: 600,
                    px: 0.6,
                    py: 0.5,
                  }}
                >
                  Step 3
                </Button>

                <Typography
                  sx={{
                    color: "rgb(208 208 208)",
                    fontSize: "15px",
                    textAlign: "center",
                  }}
                >
                  Confirm your delivery zone, time slot, and payment method
                </Typography>
              </Box>
            </AnimatedBox>
            <AnimatedBox
              sx={{
                border: "1px solid rgb(91 73 28)",
                bgcolor: "rgb(36 33 27)",
              }}
            >
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
                <Typography
                  sx={{
                    fontSize: "40px",
                  }}
                >
                  🚚
                </Typography>

                <Button
                  variant="contained"
                  sx={{
                    color: "black",
                    background:
                      "linear-gradient(45deg, rgb(225 160 25),rgb(246 146 8))",

                    fontSize: "12px",
                    textTransform: "none",
                    borderRadius: "13px",
                    fontWeight: 600,
                    pointerEvents: "none",
                    px: 0.6,
                    py: 0.5,
                  }}
                >
                  Step 4
                </Button>

                <Typography
                  sx={{
                    color: "rgb(208 208 208)",
                    fontSize: "15px",
                    textAlign: "center",
                  }}
                >
                  Receive your fresh, hot meal at your doorstep
                </Typography>
              </Box>
            </AnimatedBox>
          </Box>
        </AnimatedBox>
        <OutSideLocationCard />
      </AnimatedBox>
    </>
  );
}
