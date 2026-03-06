import React from "react";

import { Box, Grid, Paper, Divider, Typography, Button } from "@mui/material";

import { glowEffect } from "../Animations/GLowAnimation";
import Dividers from "../Components/Dividers";
const AnimatedBox = ({ children, ...props }) => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      border: "2px solid rgb(61 51 26)",
      borderRadius: "12px",
      bgcolor: "rgb(25 22 16)",

      ...glowEffect,
      ...props.sx,
    }}
  >
    {children}
  </Box>
);
export default function InsuranceCard() {
  return (
    <>
      <AnimatedBox
        sx={{
          width: "70%",
          p: 4,
          height: "auto",
          gap: 4,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography
            sx={{
              color: "rgb(218 165 32)",
              fontSize: "26px",
              fontFamily: "Times New Roman, serif",
              fontWeight: "bold",
            }}
          >
            Why Choose Kitchen Online for Food Delivery in DG Khan?
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: 15,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Typography
              sx={{
                fontSize: "22px",
              }}
            >
              🏠
            </Typography>
            <Typography
              sx={{
                color: "rgb(208 208 208)",
                fontWeight: "bold",
                fontSize: "14px",
              }}
            >
              100% Homemade Food
            </Typography>
            <Typography
              sx={{
                color: "rgb(176 176 176)",

                fontSize: "12px",
              }}
            >
              Fresh, hygienic meals prepared with love
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Typography
              sx={{
                fontSize: "22px",
              }}
            >
              ⚡
            </Typography>
            <Typography
              sx={{
                color: "rgb(208 208 208)",
                fontWeight: "bold",
                fontSize: "14px",
              }}
            >
              Fast Delivery
            </Typography>
            <Typography
              sx={{
                color: "rgb(176 176 176)",

                fontSize: "12px",
              }}
            >
              30-65 minutes across all DG Khan zones
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Typography
              sx={{
                fontSize: "22px",
              }}
            >
              💰
            </Typography>
            <Typography
              sx={{
                color: "rgb(208 208 208)",
                fontWeight: "bold",
                fontSize: "14px",
              }}
            >
              Affordable Prices
            </Typography>
            <Typography
              sx={{
                color: "rgb(176 176 176)",

                fontSize: "12px",
              }}
            >
              Starting from Rs. 50 delivery fee
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Typography
              sx={{
                fontSize: "22px",
              }}
            >
              📍
            </Typography>
            <Typography
              sx={{
                color: "rgb(208 208 208)",
                fontWeight: "bold",
                fontSize: "14px",
              }}
            >
              Wide Coverage
            </Typography>
            <Typography
              sx={{
                color: "rgb(176 176 176)",

                fontSize: "12px",
              }}
            >
              All major areas of Dera Ghazi Khan
            </Typography>
          </Box>
        </Box>
        <Divider
          sx={{
            width: "100%",
            borderColor: "rgb(83 65 21)",
            borderBottomWidth: "1px",
            my: 0,
          }}
        />
        <Typography
          sx={{
            textAlign: "center",
            margin: "0 auto",
            maxWidth: "1170px",
            fontSize: "15px",
            color: "rgb(176 176 176)",
          }}
        >
          <Typography
            component={"span"}
            sx={{
              textAlign: "center",
              margin: "0 auto",
              maxWidth: "1170px",
              fontWeight: "bold",
              fontSize: "15px",
              color: "rgb(176 176 176)",
            }}
          >
            Service Areas:
          </Typography>{" "}
          Gulberg Colony | Model Town | Cantt Area | Civil Lines | Railway Road
          | Ashraf Colony | University Area | Satellite Town | Choti Zarai |
          Iqbal Park | Sadar Bazaar | Adiala Road | DG Cantonment | Katchery
          Road | College Road | Hospital Road | DC Office | Commissioner Office
          | Dera Din Panah | Fateh Pur | Qaisrani | Sangarh | Taunsa Sharif |
          Koh Sulaiman
        </Typography>
        <Typography
          sx={{
            fontSize: "12px",
            color: "rgb(136 136 136)",
          }}
        >
          © 2024 Kitchen Online - Best Home-Made Food Delivery Service in Dera
          Ghazi Khan, Punjab, Pakistan. All rights reserved. Order online and
          enjoy fresh, hygienic meals at your doorstep.
        </Typography>
      </AnimatedBox>
    </>
  );
}
