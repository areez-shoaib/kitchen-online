import { Button, Box } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";

export default function NavBarButtons() {
  const { user, isAuthenticated } = useAuth();
  const mainButtons = {
    textTransform: "none",
    fontSize: { xs: "12px", md: "16px" },
    fontWeight: "bold",
    boxShadow: "none",
    borderRadius: 0,
    transition: "all 0.3s ease",
  };

  const location = useLocation();

  const getNavigationItems = () => {
    if (!isAuthenticated) {
      return [
        { to: "/", label: "Home" },
        { to: "/MenuScreen", label: "Menu" },
        { to: "/ContactScreen", label: "Contact" },
        { to: "DeliveryScreen", label: "Delivery Map" },
      ];
    }

    if (user?.role === 'admin') {
      return [
        { to: "/HomeScreen", label: "Home" },
        { to: "/MenuScreen", label: "Menu" },
        { to: "/ContactScreen", label: "Contact" },
        { to: "DeliveryScreen", label: "Delivery Map" },
        { to: "/AdminDashboard", label: "Dashboard" },
      ];
    }

    // Regular customer
    return [
      { to: "/HomeScreen", label: "Home" },
      { to: "/MenuScreen", label: "Menu" },
      { to: "/ContactScreen", label: "Contact" },
      { to: "DeliveryScreen", label: "Delivery Map" },
      { to: "/CustomerDashboard", label: "Dashboard" },
    ];
  };

  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        flexDirection: { lg: "row", xs: "column" },
      }}
    >
      {getNavigationItems().map((btn) => {
        const isActive = location.pathname === btn.to;
        return (
          <Button
            key={btn.to}
            component={Link}
            to={btn.to}
            variant="contained"
            sx={{
              ...mainButtons,
              bgcolor: "rgb(26 26 26)",
              color: isActive ? "rgb(233 154 18)" : "rgb(208 208 208)",
              borderBottom: isActive
                ? "3px solid rgb(233 154 18)"
                : "3px solid transparent",
              "&:hover": {
                color: "rgb(233 154 18)",
                bgcolor: "rgb(26 26 26)",
                borderBottom: "3px solid rgb(233 154 18)",
              },
            }}
          >
            {btn.label}
          </Button>
        );
      })}
    </Box>
  );
}
