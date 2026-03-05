import React from "react";
import { Box, Grid, Paper, Divider, Typography, Button } from "@mui/material";
import NavBar from "../Components/NavBar";
import TopBar from "../Components/TopBar";
import MopedIcon from "@mui/icons-material/Moped";
import { Avatar } from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import MoneyOffIcon from "@mui/icons-material/MoneyOff";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import { glowEffect } from "../Animations/GLowAnimation";
import Groups2Icon from "@mui/icons-material/Groups2";
import StarIcon from "@mui/icons-material/Star";
import SecurityIcon from "@mui/icons-material/Security";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import TapasIcon from "@mui/icons-material/Tapas";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import HeroSection from "../Components/HeroSection";
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
export default function HomeScreen() {
  const locations = [
    "Gulberg Colony",
    "Model Town",
    "Johar Town",
    "DHA Society",
    "Banks",
    "Faisal Town",
    "Timber Market",
    "Satellite Town",
    "New Town",
    "University Area",
    "Police Colony",
    "All Offices",
  ];
  const chunkSize = 4;
  const lines = [];

  for (let i = 0; i < locations.length; i += chunkSize) {
    lines.push(locations.slice(i, i + chunkSize));
  }
  return (
    <>
      <Box
        sx={{
          display: "flex",

          flexDirection: "column",
        }}
      >
        {/* ////////////////////////////////////////////image */}
        <Box
          sx={{
            height: { lg: "480px", xs: "100%" },
            width: "100%",
            position: "relative", // 👈 important for absolute overlay
            bgcolor: "pink",
          }}
        >
          {/* Background Image */}

          {/* Overlay Hero Section */}

          <HeroSection />
        </Box>
        {/* ///////////////////////////black section */}
        <Box
          sx={{
            height: "100px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            bgcolor: "rgb(0 0 0)",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", gap: { lg: 29, xs: 4 } }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Typography
                sx={{
                  fontSize: { lg: "30px", xs: "18px" },
                  color: "rgb(224 161 26)",
                  fontWeight: "bold",
                  fontFamily: "Times New Roman, serif",
                }}
              >
                500+
              </Typography>
              <Typography
                sx={{
                  color: "rgb(208 208 208)",
                  fontSize: { lg: "14px", xs: "11px" },
                }}
              >
                Happy Customers
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Typography
                sx={{
                  fontSize: { lg: "30px", xs: "18px" },
                  color: "rgb(224 161 26)",
                  fontWeight: "bold",
                  fontFamily: "Times New Roman, serif",
                }}
              >
                5000+
              </Typography>
              <Typography
                sx={{
                  color: "rgb(208 208 208)",
                  fontSize: { lg: "14px", xs: "11px" },
                }}
              >
                Orders
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Typography
                sx={{
                  fontSize: { lg: "30px", xs: "18px" },
                  color: "rgb(224 161 26)",
                  fontWeight: "bold",
                  fontFamily: "Times New Roman, serif",
                }}
              >
                4.8★
              </Typography>
              <Typography
                sx={{
                  color: "rgb(208 208 208)",
                  fontSize: { lg: "14px", xs: "11px" },
                }}
              >
                Rating
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{
                  fontSize: { lg: "30px", xs: "18px" },
                  color: "rgb(224 161 26)",
                  fontWeight: "bold",
                  fontFamily: "Times New Roman, serif",
                }}
              >
                15+
              </Typography>
              <Typography
                sx={{
                  color: "rgb(208 208 208)",
                  fontSize: { lg: "14px", xs: "11px" },
                }}
              >
                Areas
              </Typography>
            </Box>
          </Box>
        </Box>
        {/* ///////////////////////////////divider */}
        <Divider
          sx={{ borderColor: "rgb(225 160 25)", borderBottomWidth: "2px" }}
        />
        {/* ///////////////////////////LIMITED OFFERS */}

        <Box
          sx={{
            height: { lg: "350px", xs: "auto" },

            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            bgcolor: "rgb(26 26 26)",
            alignItems: "center",
            gap: 3,
          }}
        >
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
              }}
            >
              <TrendingUpIcon sx={{ color: "grey" }} />
              LIMITED OFFERS
            </Button>
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
              sx={{
                width: { lg: "550px", xs: "95%" },
                height: { lg: "190px", xs: "100%" },
                border: "2px solid rgb(225 160 25)",
                position: "relative",
                bgcolor: "rgb(35 32 26)",
              }}
            >
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
                    fontSize: { lg: "27px", xs: "20px" },
                    fontWeight: "bold",
                    color: "rgb(225 160 25)",
                    fontFamily: "Times New Roman, serif",
                  }}
                >
                  Weekly Combo
                </Typography>
                <Typography
                  sx={{
                    fontSize: { lg: "27px", xs: "20px" },
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
                  }}
                >
                  Get Deal
                </Button>
              </Box>
            </AnimatedBox>
            <AnimatedBox
              sx={{
                width: { lg: "550px", xs: "95%" },
                height: { lg: "190px", xs: "100%" },
                border: "2px solid rgb(255 140 0)",
                position: "relative",
                borderRadius: "15px",
                bgcolor: "rgb(38 32 25)",
              }}
            >
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
                    fontSize: { lg: "27px", xs: "20px" },
                    fontWeight: "bold",
                    color: "rgb(255 140 0)",
                    fontFamily: "Times New Roman, serif",
                  }}
                >
                  Monthly Deal
                </Typography>

                <Typography
                  sx={{
                    fontSize: { lg: "27px", xs: "20px" },
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
                  }}
                >
                  Get Deal
                </Button>
              </Box>
            </AnimatedBox>
          </Box>
        </Box>

        {/* ///////////////////////////why we choose */}
        <Box
          sx={{
            height: { lg: "400px", xs: "auto" },
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

          <Box
            sx={{
              display: "flex",
              flexDirection: { lg: "row", xs: "column" },
              gap: 2,
            }}
          >
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
                <Typography
                  sx={{ color: "rgb(208 208 208)", fontSize: "13px" }}
                >
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
                <Typography
                  sx={{ color: "rgb(208 208 208)", fontSize: "13px" }}
                >
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
                <Typography
                  sx={{ color: "rgb(208 208 208)", fontSize: "13px" }}
                >
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
                <Typography
                  sx={{ color: "rgb(208 208 208)", fontSize: "13px" }}
                >
                  Affordable quality meals
                </Typography>
              </Box>
            </AnimatedBox>
          </Box>
        </Box>
        {/* /////////////////////////////Authentic Pakistani Homemade Food */}
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
              <Typography
                sx={{
                  fontSize: { lg: "16px", xs: "12px" },
                  lineHeight: 1.6,
                  color: "rgb(208 208 208)",
                }}
              >
                ✓ Kitchen Online brings authentic Pakistani homemade cuisine to
                your doorstep.
                <Typography
                  sx={{
                    fontSize: { lg: "16px", xs: "12px" },

                    color: "rgb(208 208 208)",
                  }}
                >
                  ✓ We prepare fresh meals daily using premium ingredients and
                  traditional recipes.{"\n"}
                </Typography>
                ✓ Perfect for students and professionals away from home.{"\n"}
                <Typography
                  sx={{
                    fontSize: { lg: "16px", xs: "12px" },

                    color: "rgb(208 208 208)",
                  }}
                >
                  ✓ Every dish maintains the highest hygiene standards.
                </Typography>
              </Typography>
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
                }}
              >
                Contact Us
              </Button>
            </Box>
          </Box>
        </Box>
        {/* /////////////////////////////////////Meeals */}
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
                    }}
                  >
                    <AccessTimeIcon
                      sx={{ color: "rgb(97 97 97)", fontSize: "18px" }}
                    />
                    12:00PM - 2:00AM
                  </Button>
                </Box>
                <Typography
                  sx={{ color: "rgb(208 208 208)", fontSize: "15px" }}
                >
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
                <TapasIcon
                  sx={{ fontSize: "48px", color: "rgb(224 161 26) " }}
                />

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
                    }}
                  >
                    <AccessTimeIcon
                      sx={{ color: "rgb(97 97 97)", fontSize: "18px" }}
                    />
                    12:00PM - 2:00AM
                  </Button>
                </Box>
                <Typography
                  sx={{ color: "rgb(208 208 208)", fontSize: "15px" }}
                >
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
                  }}
                >
                  View Menu
                </Button>
              </Box>
            </AnimatedBox>
          </Box>
        </Box>
        {/* ////////////////////////////////////////What Our Customers Say */}
        <Box
          sx={{
            height: { lg: "300px", xs: "auto" },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            bgcolor: "rgb(26 26 26)",
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
              What Our
              <Typography
                component={"span"}
                sx={{
                  color: "rgb(218 165 32)",
                  fontSize: { lg: "30px", xs: "20px" },
                  fontWeight: "bold",
                  fontFamily: "Times New Roman, serif",
                  ml: 1,
                }}
              >
                Customers Say
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
              Real reviews from real people
            </Typography>
          </Box>
          {/* ////////////////////////////////boxes */}

          <Box
            sx={{
              display: "flex",
              flexDirection: { lg: "row", xs: "column" },
              gap: 2,
              ml: { xs: 2, lg: 0 },
              mr: { xs: 2, lg: 0 },
            }}
          >
            <AnimatedBox
              sx={{
                bgcolor: "rgb(15 15 15)",
                border: "2px solid rgb(61 51 26)",
                width: { lg: "370px", xs: "auto" },
                height: "110px",
                p: 2,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",

                  justifyContent: "flex-start",

                  gap: 1,
                }}
              >
                <Box
                  sx={{
                    display: "flex",

                    gap: 1,
                  }}
                >
                  <Box>
                    <Avatar
                      sx={{
                        bgcolor: "rgb(229 158 23)",
                        width: 50,
                        height: 50,
                        fontWeight: 600,
                        color: "black",
                        cursor: "pointer",
                      }}
                    >
                      AR
                    </Avatar>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 0.5,
                    }}
                  >
                    <Typography
                      sx={{
                        color: "white",
                        fontSize: "15px",
                        fontWeight: "bold",
                      }}
                    >
                      Ahmad khan
                    </Typography>
                    <Typography
                      sx={{ color: "rgb(208 208 208)", fontSize: "12px" }}
                    >
                      Engineer
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    color: "rgb(229 158 23)",
                  }}
                >
                  {[...Array(5)].map((_, index) => (
                    <StarIcon
                      key={index}
                      sx={{
                        fontSize: "20px",
                      }}
                    />
                  ))}
                </Box>
                <Typography
                  sx={{
                    color: "rgb(208 208 208)",
                    fontSize: "13px",
                    fontStyle: "italic",
                  }}
                >
                  "Best homemade food! Tastes like mom's cooking."
                </Typography>
              </Box>
            </AnimatedBox>
            <AnimatedBox
              sx={{
                bgcolor: "rgb(15 15 15)",
                border: "2px solid rgb(61 51 26)",
                width: { lg: "370px", xs: "auto" },
                height: "110px",
                p: 2,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",

                  justifyContent: "flex-start",

                  gap: 1,
                }}
              >
                <Box
                  sx={{
                    display: "flex",

                    gap: 1,
                  }}
                >
                  <Box>
                    <Avatar
                      sx={{
                        bgcolor: "rgb(229 158 23)",
                        width: 50,
                        height: 50,
                        fontWeight: 600,
                        color: "black",
                        cursor: "pointer",
                      }}
                    >
                      AR
                    </Avatar>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 0.5,
                    }}
                  >
                    <Typography
                      sx={{
                        color: "white",
                        fontSize: "15px",
                        fontWeight: "bold",
                      }}
                    >
                      Mobazir Shoaib
                    </Typography>
                    <Typography
                      sx={{ color: "rgb(208 208 208)", fontSize: "12px" }}
                    >
                      Account Officer
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    color: "rgb(229 158 23)",
                  }}
                >
                  {[...Array(5)].map((_, index) => (
                    <StarIcon
                      key={index}
                      sx={{
                        fontSize: "20px",
                      }}
                    />
                  ))}
                </Box>
                <Typography
                  sx={{
                    color: "rgb(208 208 208)",
                    fontSize: "13px",
                    fontStyle: "italic",
                  }}
                >
                  "Affordable & fresh. Lunch special saves my day!"
                </Typography>
              </Box>
            </AnimatedBox>
            <AnimatedBox
              sx={{
                bgcolor: "rgb(15 15 15)",
                border: "2px solid rgb(61 51 26)",
                width: { lg: "370px", xs: "auto" },
                height: "110px",
                p: 2,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",

                  justifyContent: "flex-start",

                  gap: 1,
                }}
              >
                <Box
                  sx={{
                    display: "flex",

                    gap: 1,
                  }}
                >
                  <Box>
                    <Avatar
                      sx={{
                        bgcolor: "rgb(229 158 23)",
                        width: 50,
                        height: 50,
                        fontWeight: 600,
                        color: "black",
                        cursor: "pointer",
                      }}
                    >
                      AK
                    </Avatar>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 0.5,
                    }}
                  >
                    <Typography
                      sx={{
                        color: "white",
                        fontSize: "15px",
                        fontWeight: "bold",
                      }}
                    >
                      Areez Korai
                    </Typography>
                    <Typography
                      sx={{ color: "rgb(208 208 208)", fontSize: "12px" }}
                    >
                      Software Engineer
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    color: "rgb(229 158 23)",
                  }}
                >
                  {[...Array(5)].map((_, index) => (
                    <StarIcon
                      key={index}
                      sx={{
                        fontSize: "20px",
                      }}
                    />
                  ))}
                </Box>
                <Typography
                  sx={{
                    color: "rgb(208 208 208)",
                    fontSize: "13px",
                    fontStyle: "italic",
                  }}
                >
                  "Order daily for staff. Everyone loves it!"
                </Typography>
              </Box>
            </AnimatedBox>
          </Box>
        </Box>
        {/* //////////////////////////////////////////////// why choos us */}
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
                <StarIcon
                  sx={{ fontSize: "50px", color: "rgb(224 161 26) " }}
                />

                <Typography
                  sx={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    fontFamily: "Times New Roman, serif",
                  }}
                >
                  Premium Quality
                </Typography>
                <Typography
                  sx={{ color: "rgb(208 208 208)", fontSize: "13px" }}
                >
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
                <Typography
                  sx={{ color: "rgb(208 208 208)", fontSize: "13px" }}
                >
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
                <Typography
                  sx={{ color: "rgb(208 208 208)", fontSize: "13px" }}
                >
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
                <Typography
                  sx={{ color: "rgb(208 208 208)", fontSize: "13px" }}
                >
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
                <Typography
                  sx={{ color: "rgb(208 208 208)", fontSize: "13px" }}
                >
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
                <Typography
                  sx={{ color: "rgb(208 208 208)", fontSize: "13px" }}
                >
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
        {/* /////////////////////////////////////////////////////We Deliver Across DG Khan */}
        <Box
          sx={{
            height: "400px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            bgcolor: "rgb(26 26 26)",
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
                fontSize: { lg: "34px", xs: "20px" },
                fontWeight: "bold",
                fontFamily: "Times New Roman, serif",
              }}
            >
              We Deliver{" "}
              <Typography
                component={"span"}
                sx={{
                  color: "rgb(255 140 0)",
                  fontSize: { lg: "34px", xs: "20px" },
                  fontWeight: "bold",
                  fontFamily: "Times New Roman, serif",
                }}
              >
                Across DG Khan
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
              Fast delivery to your area
            </Typography>
          </Box>
          {/* ////////////////////////////////boxes */}

          {lines.map((line, lineIndex) => (
            <Box key={lineIndex} sx={{ display: "flex", gap: 1, mb: 1 }}>
              {line.map((location, index) => (
                <AnimatedBox
                  key={index}
                  sx={{
                    width: "150px",
                    height: "40px",
                    bgcolor: "rgb(15 15 15)",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "14px",
                      color: "rgb(162 162 162)",
                    }}
                  >
                    ✓ {location}
                  </Typography>
                </AnimatedBox>
              ))}
            </Box>
          ))}
          <Button
            disableRipple
            disableFocusRipple
            sx={{
              color: "rgb(218 165 32)",
              border: "1px solid rgb(244 148 10)",
              borderRadius: "7px",
              px: 2,
              fontSize: { lg: "15px", xs: "11px" },
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
            CHECK YOUR AREA
          </Button>
        </Box>
        {/* //////////////////////////////////////Hungry? Order Now! */}
        <Box
          sx={{
            height: "280px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            background:
              "radial-gradient(circle, rgba(81, 61, 11, 0.49) 0%,  #1a1a1a 60%)",
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
                fontSize: { lg: "34px", xs: "20px" },
                fontWeight: "bold",
                fontFamily: "Times New Roman, serif",
              }}
            >
              Hungry? Order{" "}
              <Typography
                component={"span"}
                sx={{
                  color: "rgb(255 140 0)",
                  fontSize: { lg: "34px", xs: "20px" },
                  fontWeight: "bold",
                  fontFamily: "Times New Roman, serif",
                }}
              >
                Now!
              </Typography>
            </Typography>
            <Typography
              sx={{
                color: "white",
                fontSize: { lg: "20px", xs: "12px" },
                fontWeight: "500",
                fontFamily: "Times New Roman, serif",
              }}
            >
              Fresh homemade food delivered hot in 30-45 minutes
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: 1 }}>
            <Button
              variant="contained"
              startIcon={<WhatsAppIcon />}
              sx={{
                bgcolor: "rgb(37 211 102)",
                color: "white",
                fontWeight: "bold",
                fontSize: { lg: "14px", xs: "10px" },
                borderRadius: "7px",
                py: { lg: 1.3, xs: 1 },
                px: { lg: 4, xs: 1 },
                transition: "all 0.3s ease",
                animation: "pulseGlow 2s infinite alternate",
                "@keyframes pulseGlow": {
                  "0%": { boxShadow: "0 0 5px rgba(37, 211, 102, 0.3)" },
                  "50%": { boxShadow: "0 0 15px rgba(37, 211, 102, 0.5)" },
                  "100%": { boxShadow: "0 0 20px rgba(37, 211, 102, 0.7)" },
                },
                "&:hover": {
                  transform: "translateY(-2px)", // extra lift on hover
                  boxShadow: "0 0 25px rgba(37, 211, 102, 0.8)", // stronger glow
                },
              }}
            >
              WhatsApp
            </Button>
            <Button
              variant="contained"
              sx={{
                bgcolor: "rgb(244 148 10)",
                color: "black",
                fontWeight: "bold",
                borderRadius: "7px",
                fontSize: { lg: "14px", xs: "10px" },
                py: { lg: 1.3, xs: 0.1 },
                px: { lg: 4, xs: 0.9 },
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
              View Menu
            </Button>
          </Box>

          <Box sx={{ display: "flex", gap: 2 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Typography sx={{ color: "rgb(208 208 208)", fontSize: "12px" }}>
                Delivery
              </Typography>
              <Typography
                sx={{
                  fontSize: { lg: "13px", xs: "11px" },
                  color: "rgb(224 161 26)",
                  fontWeight: "bold",
                }}
              >
                30-45 Min
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Typography sx={{ color: "rgb(208 208 208)", fontSize: "12px" }}>
                Rating
              </Typography>
              <Typography
                sx={{
                  fontSize: { lg: "13px", xs: "11px" },
                  color: "rgb(224 161 26)",
                  fontWeight: "bold",
                }}
              >
                4.8 ★
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Typography sx={{ color: "rgb(208 208 208)", fontSize: "12px" }}>
                Orders
              </Typography>
              <Typography
                sx={{
                  fontSize: { lg: "13px", xs: "11px" },
                  color: "rgb(224 161 26)",
                  fontWeight: "bold",
                }}
              >
                5000+
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
