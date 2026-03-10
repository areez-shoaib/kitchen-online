import React, { useState } from "react";
import {
  Box,
  Grid,
  Paper,
  Divider,
  Typography,
  Button,
  TextField,
  InputAdornment,
  IconButton,
} from "@mui/material";

import { Modal } from "@mui/material";

import ForgotPassword from "./ForgotPassword";
import LoginSection from "../Sections/LoginSection";
import SignUpSection from "../Sections/SignUpSection";
export default function UserLogin() {
  const [activeTab, setActiveTab] = useState("login");
  const [openForgotModal, SetopenForgotModal] = useState(false);

  return (
    <>
      <Modal open={openForgotModal}>
        <ForgotPassword />
      </Modal>
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          background: "linear-gradient(45deg,rgb(18 18 18),rgb(25 25 25))",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: 4,
          zIndex: "1000",
        }}
      >
        <Box
          sx={{
            width: { lg: "33%", xs: "auto" },

            height: activeTab === "login" ? "530px" : "720px",
            overflow: "hidden",
            bgcolor: "rgb(34 34 34)",
            borderRadius: "20px",
            border: "1px solid rgb(223 161 27)",

            transition: "all 0.3s ease",
            boxShadow: "0 0 10px rgba(223, 161, 27, 0.16)", // default
            "&:hover": {
              boxShadow: "0 0 25px rgba(223, 161, 27, 0.7)", // hover par strong glow
            },
          }}
        >
          <Box
            sx={{
              height: activeTab === "login" ? "20%" : "15%",

              background:
                "linear-gradient(45deg,rgb(223 161 27),rgb(248 145 6))",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                color: "black",
                fontFamily: "Times New Roman, serif",
                fontSize: "22px",
                fontWeight: "bold",
              }}
            >
              Kitchen Online
            </Typography>
            <Typography
              sx={{
                color: "rgb(59 43 16)",
                fontSize: "14px",
              }}
            >
              Authentic homemade meals delivered fresh
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                pt: 2,
                gap: 2,
              }}
            >
              <Typography
                onClick={() => setActiveTab("login")}
                sx={{
                  cursor: "pointer",
                  fontWeight: "bold",
                  color: activeTab === "login" ? "#e1a11b" : "rgb(208 208 208)",
                  borderBottom: activeTab === "login" ? "3px solid" : "none",
                  borderImage:
                    activeTab === "login"
                      ? "linear-gradient(45deg, #e1a11b, #f89106) 1"
                      : "none",
                  pb: 1,
                  width: "23%",
                  textAlign: "center",
                }}
              >
                USER LOGIN
              </Typography>

              <Typography
                onClick={() => setActiveTab("signup")}
                sx={{
                  cursor: "pointer",
                  fontWeight: "bold",
                  color:
                    activeTab === "signup" ? "#e1a11b" : "rgb(208 208 208)",
                  borderBottom: activeTab === "signup" ? "3px solid" : "none",
                  borderImage:
                    activeTab === "signup"
                      ? "linear-gradient(45deg, #e1a11b, #f89106) 1"
                      : "none",
                  pb: 1,
                  width: "18%",
                  textAlign: "center",
                }}
              >
                SIGN UP
              </Typography>
            </Box>
            <Divider
              sx={{
                borderColor: "#463b20",
                borderBottomWidth: "1px",
              }}
            />

            {activeTab === "login" && <LoginSection />}

            {activeTab === "signup" && <SignUpSection />}
          </Box>
        </Box>
        <Typography
          sx={{
            color: "rgb(208 208 208)",
            fontSize: { lg: "14px", xs: "11px" },
            textAlign: { xs: "center" },
          }}
        >
          By signing up, you agree to our Terms of Service and Privacy Policy
        </Typography>
      </Box>
    </>
  );
}
