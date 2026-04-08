import React from "react";
import { Box, Typography, Button, Divider } from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import FlatwareIcon from "@mui/icons-material/Flatware";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CallIcon from "@mui/icons-material/Call";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
export default function Footer() {
  const features = ["Home", "Menu", "Contact", "Track Order"];
  return (
    <>
      {" "}
      <Box
        sx={{
          minHeight: { xs: "auto", sm: "70px", lg: "400px" },
          backgroundColor: "rgb(15 15 15)",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            mr: 0,
            ml: 0,
            gap: {lg:3,xs:0},
          }}
        >
          {/* /////////////////////////main */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { lg: "row", xs: "column" },
              p: { xs: 2, lg: 0 },
              gap: { lg: 10, xs: 2 },
            }}
          >
            {/* /////////////////////1 */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              <FlatwareIcon sx={{ fontSize: { lg: "33px", xs: "23px" } }} />
              <Typography
                sx={{
                  color: "rgb(224 161 26)",
                  fontWeight: "bold",
                  fontSize: { lg: "20px", xs: "14px" },
                  fontFamily: "Times New Roman, serif",
                }}
              >
                {" "}
                Kitchen Online
              </Typography>
              <Typography
                sx={{
                  lineHeight: 1.6, // spacing between lines
                  maxWidth: "350px", // wrap after certain width
                  color: "rgb(176 176 176)",
                  fontSize: { lg: "14px", xs: "11px" },
                }}
              >
                Premium food delivery with authentic recipes and fresh
                ingredients. Savor every moment with our carefully curated menu.
              </Typography>
            </Box>
            {/* ///////////////////////2 */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Typography
                sx={{
                  color: "rgb(224 161 26)",
                  fontWeight: "bold",
                  fontSize: { lg: "20px", xs: "14px" },
                  fontFamily: "Times New Roman, serif",
                }}
              >
                {" "}
                Quick Links
              </Typography>
              {features.map((item, idx) => (
                <Typography
                  key={idx}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    color: "rgb(176 176 176)",
                    fontSize: { lg: "16px", xs: "13px" },
                  }}
                >
                  <ArrowRightIcon sx={{ mr: 1, color: "rgb(244 148 10)" }} />
                  {item}
                </Typography>
              ))}
            </Box>
            {/* ///////////////////////////////3 */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              <Typography
                sx={{
                  color: "rgb(224 161 26)",
                  fontWeight: "bold",
                  fontSize: { lg: "20px", xs: "14px" },
                  fontFamily: "Times New Roman, serif",
                }}
              >
                {" "}
                Contact Us
              </Typography>
              {/* //////////////////////call */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <CallIcon
                  sx={{
                    color: "rgb(224 161 26)",

                    fontSize: { lg: "26px", xs: "19px" },
                  }}
                />
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      color: "rgb(176 176 176)",
                      fontSize: "12px",
                    }}
                  >
                    phone
                  </Typography>
                  <Typography
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      color: "white",
                      fontSize: { lg: "13px", xs: "10px" },
                      fontWeight: "bold",
                    }}
                  >
                    03310451716
                  </Typography>
                </Box>
              </Box>
              {/* ////////////////////////mail */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <EmailIcon
                  sx={{
                    color: "rgb(224 161 26)",

                    fontSize: { lg: "26px", xs: "19px" },
                  }}
                />
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      color: "rgb(176 176 176)",
                      fontSize: "12px",
                    }}
                  >
                    Email
                  </Typography>
                  <Typography
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      color: "white",
                      fontSize: { lg: "13px", xs: "10px" },
                      fontWeight: "bold",
                    }}
                  >
                    areezshoaib@gmail.com
                  </Typography>
                </Box>
              </Box>
              {/* /////////////////////loaction */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <LocationOnIcon
                  sx={{
                    color: "rgb(224 161 26)",

                    fontSize: { lg: "26px", xs: "19px" },
                  }}
                />
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      color: "rgb(176 176 176)",
                      fontSize: "12px",
                    }}
                  >
                    Location
                  </Typography>
                  <Typography
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      color: "white",
                      fontSize: { lg: "13px", xs: "10px" },
                      fontWeight: "bold",
                    }}
                  >
                    Deffence Colony Multan road Dera ghaze khan
                  </Typography>
                </Box>
              </Box>
            </Box>
            {/* /////////////////////////////4 */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              <Typography
                sx={{
                  color: "rgb(224 161 26)",
                  fontWeight: "bold",
                  fontSize: { lg: "20px", xs: "14px" },
                  fontFamily: "Times New Roman, serif",
                }}
              >
                {" "}
                Connect
              </Typography>
              <WhatsAppIcon
                sx={{ color: "green", fontSize: { lg: "30px", xs: "20px" } }}
              />
              <Typography sx={{ color: "rgb(176 176 176)", fontSize: "13px" }}>
                Hours
              </Typography>
              <Typography sx={{ fontSize: { lg: "15px", xs: "12px" } }}>
                Mon - Sun: 11 AM - 11 PM
              </Typography>
            </Box>
          </Box>
          <Divider sx={{ borderColor: "rgba(239, 153, 14, 0.16)" }} />
          {/* /////////////////////////text */}
          <Box sx={{
              display: "flex",
              justifyContent: { xs: "center", lg: "space-between" },
              alignItems: "center",
              flexDirection: { lg: "row", xs: "column" },
              textAlign: "center",
              gap: { xs: 0.5, lg: 0 },
              p: { xs: 2 },
            }}>
            <Typography
              sx={{
                color: "rgb(176 176 176)",
                fontSize: { lg: "14px", xs: "10px" },
              }}
            >
              © 2026 Kitchen Online. All rights reserved.
            </Typography>
            <Typography
              component={"span"}
              sx={{
                color: "rgb(176 176 176)",
                fontSize: { lg: "14px", xs: "10px" },
              }}
            >
              Privacy Policy Terms of Service
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}
