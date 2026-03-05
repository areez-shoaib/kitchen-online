import Buttons from "../Components/Buttons";
import { Box, Typography, Button, Drawer, IconButton } from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
export default function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Box
        sx={{
          height: { xs: "auto", sm: "70px" },
          backgroundColor: "rgb(26 26 26)",
          color: "white",
          display: "flex",
          flexDirection: { xs: "row", sm: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          px: { xs: 2, sm: 6 },
          py: { xs: 1, sm: 0 },
          gap: { xs: 1, sm: 0 },
        }}
      >
        {/* Logo */}
        <Box>
          <Typography
            sx={{
              fontSize: { lg: "26px", xs: "17px" },
              fontFamily: "Times New Roman, serif",
              fontWeight: "bold",
              background:
                "linear-gradient(45deg, rgb(233 154 18), rgb(249 144 6))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textAlign: { xs: "center", sm: "left" },
              ml: { lg: 27 },
            }}
          >
            Kitchen Online
          </Typography>
        </Box>

        {/* Buttons Component */}
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            flexDirection: { xs: "column", sm: "row" }, // mobile me stack
            gap: { xs: 1, sm: 1 },
            width: { xs: "100%", sm: "auto" },
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Buttons />
        </Box>

        <Box sx={{ mt: { xs: 0, sm: 0 } }}>
          {" "}
          {/* mobile me thoda margin top */}
          <Button
            sx={{
              color: "black",
              background:
                "linear-gradient(45deg, rgb(225 160 25),rgb(246 146 8))",
              fontWeight: "bold",
              fontSize: { xs: "12px", sm: "14px" },
              textTransform: "none",
              px: { xs: 2, sm: 3 },
              py: { xs: 0.5, sm: 0.5 },
              mr: { lg: 27 },
            }}
          >
            Register
          </Button>
        </Box>
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
          <Buttons />

          <Button
            sx={{
              color: "black",
              background:
                "linear-gradient(45deg, rgb(225 160 25),rgb(246 146 8))",
              fontWeight: "bold",
              textTransform: "none",
              width: "100%",
              height: "5%",
            }}
          >
            Register
          </Button>
        </Box>
      </Drawer>
    </>
  );
}

////////////
