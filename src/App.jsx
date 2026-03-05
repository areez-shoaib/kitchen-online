// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import HomeScreen from "../src/Screens/HomeScreen";
// import MenuScreen from "../src/Screens/MenuScreen";
// import ContactScreen from "../src/Screens/ContactScreen";
// import { Box, Divider } from "@mui/material";
// import NavBar from "./Components/NavBar";
// import TopBar from "./Components/TopBar";
// import Footer from "../src/Components/Footer";

// function App() {
//   return (
//     <BrowserRouter>
//       <Box
//         sx={{
//           height: "100vh",
//           width: "100vw",
//           display: "flex",
//           flexDirection: "column",
//           overflowY: "auto",
//         }}
//       >
//         {/* TopBar */}
//         <TopBar />
//         <Divider sx={{ borderColor: "rgb(239 151 14)" }} />

//         <NavBar />
//         <Divider sx={{ borderColor: "rgb(239 151 14)" }} />

//         {/* 🔥 Scrollable Content Area */}
//         <Box
//           sx={{
//             flexGrow: 1,

//             p: 2,
//             backgroundColor: "rgb(15 15 15)",
//           }}
//         >
//           <Routes>
//             <Route path="/" element={<HomeScreen />} />
//             <Route path="/MenuScreen" element={<MenuScreen />} />
//             <Route path="/ContactScreen" element={<ContactScreen />} />
//           </Routes>
//         </Box>

//         <Divider
//           sx={{ borderColor: "rgb(76 60 20)", borderBottomWidth: "2px" }}
//         />

//         {/* Footer */}
//         <Footer />
//       </Box>
//     </BrowserRouter>
//   );
// }

// export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "../src/Screens/HomeScreen";
import MenuScreen from "../src/Screens/MenuScreen";
import ContactScreen from "../src/Screens/ContactScreen";
import { Box, Divider } from "@mui/material";
import NavBar from "./Components/NavBar";
import TopBar from "./Components/TopBar";
import Footer from "../src/Components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Box
        sx={{
          backgroundColor: "rgb(15 15 15)",
          color: "white",
          width: "100vw",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          overflowX: "hidden",
        }}
      >
        {/* Header + NavBar */}
        <TopBar />

        <Divider
          sx={{ borderColor: "rgb(75 60 20)", borderBottomWidth: "2px" }}
        />

        <NavBar />

        <Divider
          sx={{ borderColor: "rgb(75 60 20)", borderBottomWidth: "1px" }}
        />

        {/* Main Content */}
        <Box sx={{}}>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/MenuScreen" element={<MenuScreen />} />
            <Route path="/ContactScreen" element={<ContactScreen />} />
          </Routes>
        </Box>

        <Divider
          sx={{
            borderColor: "rgb(76 60 20)",
            borderBottomWidth: "2px",
            mt: 3,
          }}
        />

        {/* Footer */}
        <Footer />
      </Box>
    </BrowserRouter>
  );
}

export default App;
