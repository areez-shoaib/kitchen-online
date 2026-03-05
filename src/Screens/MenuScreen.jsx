import {
  Box,
  Divider,
  Button,
  Typography,
  Drawer,
  TextField,
  IconButton,
} from "@mui/material";
import MiniTopBar from "../Components/MiniTopBar";
import React, { useState } from "react";
import Card1 from "../Cards/Card1";
import MenuIcon from "@mui/icons-material/Menu";
export default function MenuScreen() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",

          gap: 3,
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
              color: "rgb(218 165 32)",
              fontSize: { lg: "30px", xs: "22px" },
              fontWeight: "bold",
              fontFamily: "Times New Roman, serif",
            }}
          >
            Our Menu
          </Typography>
          <Typography
            sx={{
              color: "white",
              fontSize: { lg: "20px", xs: "11px" },
              fontWeight: "500",
              fontFamily: "Times New Roman, serif",
            }}
          >
            Fresh, delicious home-made food delivered to your door
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            margin: "0px auto",
            gap: 2,

            width: { lg: "30%", xs: "96%",md:"30%" }, // field width
          }}
        >
          <TextField
            placeholder="Search for dishes......"
            variant="outlined"
            fullWidth
            InputLabelProps={{
              sx: {
                color: "rgb(208 208 208)", // normal label color
                "&.Mui-focused": {
                  color: "rgb(244 148 10)", // label color on focus
                },
              },
            }}
            InputProps={{
              sx: {
                "& input": {
                  color: "white",
                  fontSize: { xs: "12px" }, // typed text color
                },
                "& input::placeholder": {
                  color: "rgb(78 78 78)",
                  opacity: 1,
                  fontSize: { xs: "12px" },
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
        </Box>
        <Box
          sx={{
            display: {
              lg: "none",
              md: "none",
              xs: "flex",
            },
            justifyContent: "center",
            gap: 2,
            alignItems: "center",
          }}
        >
          <Box>
            <Typography
              sx={{
                fontFamily: "Times New Roman, serif",
                fontWeight: "bold",
                fontSize: "18px",
                borderBottom: "2px solid rgb(218 165 32)", // 👈 line
                display: "inline-block",
                pb: "3px",
              }}
            >
              Please Click on Icon!
            </Typography>
          </Box>
          <Box>
            <IconButton
              sx={{
                display: { xs: "block", sm: "none" },
                color: "rgb(225 160 25)",
              }}
              onClick={() => setOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Box>

        <Box
          sx={{
            display: { lg: "flex", xs: "none" ,md:"flex"},
          }}
        >
          {/* ////////////////top bar */}
          <MiniTopBar />
        </Box>
      </Box>
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            width: 250,
            backgroundColor: "#0f0f0f",
            height: "100%",
            p: 2,
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <MiniTopBar />
        </Box>
      </Drawer>
    </>
  );
}
