import { useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import HomeScreen from "../src/Screens/HomeScreen";
import MenuScreen from "../src/Screens/MenuScreen";
import ContactScreen from "../src/Screens/ContactScreen";
import DeliveryScreen from "./Screens/DeliveryScreen";
import UserLogin from "../src/Modals/UserLogin";
import SplashScreen from "./Screens/SplashScreen";
import PromoCodeScreen from "./Screens/PromoCodeScreen";
import CustomerDashboard from "./CustomerPanel/CustomerDashboard";
import AdminDashboard from "./Adminpanel/AdminDashboard";
import PromocodeCustomer from "./PromocodeCustomer/PromocodeCustomer";
import NavBar from "./Components/NavBar";
import TopBar from "./Components/TopBar";
import Footer from "../src/Components/Footer";
import { Box, Divider } from "@mui/material";
import { AuthProvider } from "./Context/AuthContext";

function Layout({ children }) {
  const location = useLocation();

  const fullscreenRoutes = ["/", "/SplashScreen", "/UserLogin", "/PromoCodeScreen"];

  if (fullscreenRoutes.includes(location.pathname)) {
    return <>{children}</>;
  }

  return (
    <Box
      sx={{
        backgroundColor: "rgb(15 15 15)",
        color: "white",
        width: "100vw",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <TopBar />
      <Divider
        sx={{ borderColor: "rgb(75 60 20)", borderBottomWidth: "2px" }}
      />
      <NavBar />
      <Divider
        sx={{ borderColor: "rgb(75 60 20)", borderBottomWidth: "1px" }}
      />
      <Box sx={{ flexGrow: 1 }}>{children}</Box>
      <Divider
        sx={{ borderColor: "rgb(76 60 20)", borderBottomWidth: "2px", mt: 3 }}
      />
      <Footer />
    </Box>
  );
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<SplashScreen />} />
            <Route path="/SplashScreen" element={<SplashScreen />} />
            <Route path="/HomeScreen" element={<HomeScreen />} />
            <Route path="/MenuScreen" element={<MenuScreen />} />
            <Route path="/ContactScreen" element={<ContactScreen />} />
            <Route path="/DeliveryScreen" element={<DeliveryScreen />} />
            <Route path="/UserLogin" element={<UserLogin />} />
            <Route path="/PromoCodeScreen" element={<PromoCodeScreen />} />
            <Route path="/CustomerDashboard" element={<CustomerDashboard />} />
            <Route path="/PromocodeCustomer" element={<PromocodeCustomer />} />
            <Route path="/AdminDashboard" element={<AdminDashboard />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
