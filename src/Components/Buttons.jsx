import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function Buttons() {
  const mainButtons = {
    textTransform: "none",
    fontSize: { xs: "12px", md: "16px" },
    fontWeight: "bold",
    boxShadow: "none",
  };

  return (
    <>
      <Button
        component={Link}
        to="/"
        variant="contained"
        sx={{
          ...mainButtons,
          bgcolor: "rgb(26 26 26)",
          color: "rgb(208 208 208)",
        }}
      >
        Home
      </Button>

      <Button
        component={Link}
        to="/MenuScreen"
        variant="contained"
        sx={{
          ...mainButtons,
          bgcolor: "rgb(26 26 26)",
          color: "rgb(208 208 208)",
        }}
      >
        Menu
      </Button>

      <Button
        component={Link}
        to="/ContactScreen"
        variant="contained"
        sx={{
          ...mainButtons,
          bgcolor: "rgb(26 26 26)",
          color: "rgb(208 208 208)",
        }}
      >
        Contact
      </Button>
    </>
  );
}
