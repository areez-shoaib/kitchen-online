import React from "react";

import { Box, Grid, Paper, Divider, Typography, Button } from "@mui/material";

import { Avatar } from "@mui/material";

import { glowEffect } from "../Animations/GLowAnimation";

import StarIcon from "@mui/icons-material/Star";

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
export default function CustomerCard() {
  return (
    <>
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
    </>
  );
}
