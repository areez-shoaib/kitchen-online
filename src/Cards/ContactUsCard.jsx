import React from "react";
import { Box, Button, Typography, TextField } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CallIcon from "@mui/icons-material/Call";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import { glowEffect } from "../Animations/GLowAnimation";
import ContactUsButtons from "../Components/Buttons/ContactUsButtons";
const AnimatedBox = ({ children, ...props }) => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      border: "1px solid rgb(45 40 26)",
      borderRadius: "12px",
      bgcolor: "rgb(26 26 26)",
      height: "20%",
      ...glowEffect,
      ...props.sx,
    }}
  >
    {children}
  </Box>
);
export default function ContactUsCard() {
  return (
    <>
      <Box
        sx={{
          display: "flex",

          justifyContent: "center",
          flexDirection: "column",

          alignItems: "center",
          gap: 0,
        }}
      >
        {/* /////////////////////////////////boxes */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { lg: "row", xs: "column" },
            width: "90%",
            maxWidth: "1100px",
            p: 1,
            gap: 3,
            mx: "auto",
          }}
        >
          {/* /////////////////////1 */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 3,
              width: { lg: "33%", xs: "100%" },
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
                <CallIcon
                  sx={{
                    fontSize: { lg: "40px", xs: "30px" },
                    color: "rgb(224 161 26) ",
                  }}
                />
                <Typography
                  sx={{
                    fontSize: { lg: "20px", xs: "16px" },
                    fontWeight: "bold",
                    fontFamily: "Times New Roman, serif",
                  }}
                >
                  Phone
                </Typography>
                <Typography
                  sx={{
                    color: "rgb(208 208 208)",
                    fontSize: { lg: "16px", xs: "12px" },
                  }}
                >
                  +92-3310451716
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
                <WhatsAppIcon
                  sx={{
                    fontSize: { lg: "40px", xs: "30px" },
                    color: "green",
                  }}
                />
                <Typography
                  sx={{
                    fontSize: { lg: "20px", xs: "16px" },
                    fontWeight: "bold",
                    fontFamily: "Times New Roman, serif",
                  }}
                >
                  Whatspp No.
                </Typography>
                <Typography
                  sx={{
                    color: "rgb(208 208 208)",
                    fontSize: { lg: "16px", xs: "12px" },
                  }}
                >
                  +92-3310451716
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
                <EmailIcon
                  sx={{
                    fontSize: { lg: "40px", xs: "30px" },
                    color: "rgb(224 161 26)",
                  }}
                />
                <Typography
                  sx={{
                    fontSize: { lg: "20px", xs: "16px" },
                    fontWeight: "bold",
                    fontFamily: "Times New Roman, serif",
                  }}
                >
                  Email
                </Typography>
                <Typography
                  sx={{
                    color: "rgb(208 208 208)",
                    fontSize: { lg: "16px", xs: "12px" },
                  }}
                >
                  AreezShoaib@gmail.com
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
                <LocationOnIcon
                  sx={{
                    fontSize: { lg: "40px", xs: "30px" },
                    color: "rgb(211 47 47)",
                  }}
                />
                <Typography
                  sx={{
                    fontSize: { lg: "20px", xs: "16px" },
                    fontWeight: "bold",
                    fontFamily: "Times New Roman, serif",
                  }}
                >
                  Location
                </Typography>
                <Typography
                  sx={{
                    color: "rgb(208 208 208)",
                    fontSize: { lg: "16px", xs: "12px" },
                  }}
                >
                  Deffence Colony Multan Road DGK
                </Typography>
              </Box>
            </AnimatedBox>
          </Box>
          {/* ////////////////2 */}

          <AnimatedBox sx={{ flexGrow: 1, height: "70%", p: 3, gap: 3 }}>
            <Box>
              <Typography
                sx={{
                  fontSize: { lg: "20px", xs: "18px" },
                  fontWeight: "bold",
                  fontFamily: "Times New Roman, serif",
                }}
              >
                Send us a Message
              </Typography>
              <Typography
                sx={{
                  color: "rgb(208 208 208)",
                  fontSize: { lg: "14px", xs: "12px" },
                }}
              >
                {" "}
                Fill out the form below and we'll get back to you as soon as
                possible
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                margin: "0px auto",
                gap: 2,
                width: "100%", // field width
              }}
            >
              <TextField
                label="First Name *" // 👈 ye label click karne par upar chala jayega
                placeholder="Your Full Name"
                // 👈 standard MUI border style
                variant="outlined"
                fullWidth
                InputLabelProps={{
                  sx: {
                    color: "rgb(208 208 208)",
                    fontSize: { lg: "16px", xs: "15px" }, // normal label color
                    "&.Mui-focused": {
                      color: "rgb(244 148 10)", // label color on focus
                    },
                  },
                }}
                InputProps={{
                  sx: {
                    "& input": {
                      color: "white",
                      fontSize: { lg: "16px", xs: "12px" }, // typed text color
                    },
                    "& input::placeholder": {
                      color: "rgb(78 78 78)",
                      opacity: 1,
                      fontSize: { lg: "16px", xs: "13px" },
                    },
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "black", // default border
                      borderWidth: "0.1px", // border thickness
                      borderRadius: "8px", // border radius
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "white", // hover border
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "rgb(244 148 10)", // focus border matches label color
                    },
                  },
                }}
              />

              <TextField
                label="Phone Number *"
                placeholder="03310451716"
                variant="outlined"
                fullWidth
                InputLabelProps={{
                  sx: {
                    color: "rgb(208 208 208)",
                    fontSize: { lg: "16px", xs: "15px" }, // normal label color
                    "&.Mui-focused": {
                      color: "rgb(244 148 10)", // label color on focus
                    },
                  },
                }}
                InputProps={{
                  sx: {
                    "& input": {
                      color: "white",
                      fontSize: { lg: "16px", xs: "12px" }, // typed text color
                    },
                    "& input::placeholder": {
                      color: "rgb(78 78 78)",
                      opacity: 1,
                      fontSize: { lg: "16px", xs: "13px" },
                    },
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "black", // default border
                      borderWidth: "0.4px", // border thickness
                      borderRadius: "8px", // border radius
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "white", // hover border
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "rgb(244 148 10)", // focus border matches label color
                    },
                  },
                }}
              />
            </Box>
            {/* //////////////////2ndrow */}
            <Box
              sx={{
                display: "flex",
                margin: "0px auto",
                gap: 2,
                width: "100%", // field width
              }}
            >
              <TextField
                label="Email (optional)"
                placeholder="abc@gmail.com"
                variant="outlined"
                fullWidth
                InputLabelProps={{
                  sx: {
                    color: "rgb(208 208 208)",
                    fontSize: { lg: "16px", xs: "16px" }, // normal label color
                    "&.Mui-focused": {
                      color: "rgb(244 148 10)", // label color on focus
                    },
                  },
                }}
                InputProps={{
                  sx: {
                    "& input": {
                      color: "white",
                      fontSize: { lg: "16px", xs: "12px" }, // typed text color
                    },
                    "& input::placeholder": {
                      color: "rgb(78 78 78)",
                      opacity: 1,
                      fontSize: { lg: "16px", xs: "13px" },
                    },
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "black", // default border
                      borderWidth: "0.4px", // border thickness
                      borderRadius: "8px", // border radius
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "white", // hover border
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "rgb(244 148 10)", // focus border matches label color
                    },
                  },
                }}
              />
            </Box>
            {/* /////////////////3rd */}
            <Box
              sx={{
                display: "flex",
                margin: "0px auto",
                gap: 2,
                width: "100%",
              }}
            >
              <TextField
                label="Delivery Address*"
                placeholder="Enter your complete address"
                variant="outlined"
                fullWidth
                InputLabelProps={{
                  sx: {
                    color: "rgb(208 208 208)",
                    fontSize: { lg: "16px", xs: "16px" }, // normal label color
                    "&.Mui-focused": {
                      color: "rgb(244 148 10)", // label color on focus
                    },
                  },
                }}
                InputProps={{
                  sx: {
                    "& input": {
                      color: "white", // typed text color
                      height: "60px", // typed text area height
                      padding: "12px",
                      fontSize: { lg: "16px", xs: "12px" }, // internal padding
                    },
                    "& input::placeholder": {
                      color: "rgb(78 78 78)",
                      opacity: 1,
                      fontSize: { lg: "16px", xs: "13px" },
                    },
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "black", // default border
                      borderWidth: "0.4px", // border thickness
                      borderRadius: "8px", // border radius
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "white", // hover border
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "rgb(244 148 10)", // focus border matches label color
                    },
                  },
                }}
              />
            </Box>
            {/* /////////////////////////4 */}
            <Box
              sx={{
                display: "flex",
                margin: "0px auto",
                gap: 2,

                width: "100%", // field width
              }}
            >
              <TextField
                label="Special Instruction & Questions"
                placeholder="Let's tell about your preferences, dietary restrictions, or any question"
                variant="outlined"
                fullWidth
                InputLabelProps={{
                  sx: {
                    color: "rgb(208 208 208)",
                    fontSize: { lg: "16px", xs: "16px" }, // normal label color
                    "&.Mui-focused": {
                      color: "rgb(244 148 10)", // label color on focus
                    },
                  },
                }}
                InputProps={{
                  sx: {
                    "& input": {
                      color: "white", // typed text color
                      height: { lg: "100px", xs: "70px" }, // typed text area height
                      padding: "12px", // internal padding
                      fontSize: { lg: "16px", xs: "12px" },
                    },
                    "& input::placeholder": {
                      color: "rgb(78 78 78)",
                      opacity: 1,
                      fontSize: { lg: "16px", xs: "9px" },
                    },
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "black", // default border
                      borderWidth: "1px", // border thickness
                      borderRadius: "8px", // border radius
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "white", // hover border
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "rgb(244 148 10)", // focus border matches label color
                    },
                  },
                }}
              />
            </Box>

            <Box>
              <Button
                variant="contained"
                sx={{
                  width: "100%",
                  height: { lg: "45px", xs: "35px" },
                  background:
                    "linear-gradient(45deg, rgb(225 160 25), rgb(246 146 8))",
                  color: "black",
                  fontWeight: "bold",
                  textTransform: "none",
                  fontSize: { lg: "16px", xs: "12px" },
                }}
              >
                Send Message
              </Button>
            </Box>
          </AnimatedBox>
        </Box>
        {/* //////////////// */}
        <ContactUsButtons />
      </Box>
    </>
  );
}
