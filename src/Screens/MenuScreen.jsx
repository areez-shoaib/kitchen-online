import {
  Box,
  Divider,
  Button,
  Typography,
  Drawer,
  TextField,
  IconButton,
  Grid,
} from "@mui/material";
import MiniTopBar from "../Components/MiniTopBar";
import React, { useState } from "react";
import Card1 from "../Cards/Card1";
import MenuIcon from "@mui/icons-material/Menu";
import FoodCard from "../Cards/FoodCard";
export default function MenuScreen() {
  const [open, setOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);

  // Menu data for each category
  const menuData = {
    "ALL": [
      { name: "Chicken Biryani", price: "RS. 350", description: "Aromatic basmati rice with tender chicken pieces", emoji: "🍛", category: "Rice", image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=320&h=180&fit=crop" },
      { name: "Mutton Karahi", price: "RS. 550", description: "Spicy mutton curry cooked in traditional karahi", emoji: "🍲", category: "Curry", image: "https://images.unsplash.com/photo-1586190848861-9984d6e084e8?w=320&h=180&fit=crop" },
      { name: "Chicken Tikka", price: "RS. 420", description: "Grilled chicken marinated in special spices", emoji: "🍗", category: "BBQ", image: "https://images.unsplash.com/photo-1562967914-6bc9480c56ce?w=320&h=180&fit=crop" },
      { name: "Daal Chawal", price: "RS. 280", description: "Classic lentil curry with steamed rice", emoji: "🍚", category: "Rice", image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=320&h=180&fit=crop" },
      { name: "Nehari", price: "RS. 480", description: "Slow-cooked beef shanks in rich gravy", emoji: "🥘", category: "Curry", image: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e0?w=320&h=180&fit=crop" },
      { name: "Seekh Kabab", price: "RS. 380", description: "Minced meat skewers grilled to perfection", emoji: "🍢", category: "BBQ", image: "https://images.unsplash.com/photo-1563612110079-7bd9b8205473?w=320&h=180&fit=crop" },
      { name: "Halwa Puri", price: "RS. 180", description: "Sweet semolina halwa with fluffy puris", emoji: "🍯", category: "Traditional", image: "https://images.unsplash.com/photo-1586985284586-b5e224758c0e?w=320&h=180&fit=crop" },
      { name: "Anday Paratha", price: "RS. 150", description: "Egg with layered flatbread", emoji: "🥚", category: "Traditional", image: "https://images.unsplash.com/photo-1588193426650-904fada4e543?w=320&h=180&fit=crop" },
      { name: "Nihari", price: "RS. 320", description: "Slow-cooked beef breakfast curry", emoji: "🍲", category: "Traditional", image: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e0?w=320&h=180&fit=crop" },
      { name: "Chai Paratha", price: "RS. 120", description: "Pakistani tea with buttered paratha", emoji: "☕", category: "Traditional", image: "https://images.unsplash.com/photo-15946318931cbad8f7be0a807f440c4f5?w=320&h=180&fit=crop" },
      { name: "Beef Pulao", price: "RS. 380", description: "Fragrant rice with tender beef pieces", emoji: "🍚", category: "Rice", image: "https://images.unsplash.com/photo-1505253716362-1ea2d790dcdd?w=320&h=180&fit=crop" },
      { name: "Chicken Karahi", price: "RS. 450", description: "Spicy chicken curry in karahi", emoji: "🍲", category: "Curry", image: "https://images.unsplash.com/photo-1605000797494-071fa5a5b5b6?w=320&h=180&fit=crop" },
      { name: "Daal Makhani", price: "RS. 280", description: "Creamy black lentils with butter", emoji: "🥘", category: "Curry", image: "https://images.unsplash.com/photo-1611018313986-4cb9c7e8fcf0?w=320&h=180&fit=crop" },
      { name: "Samosa", price: "RS. 80", description: "Crispy pastry with spiced filling", emoji: "🥟", category: "Fried", image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=320&h=180&fit=crop" },
      { name: "Pakora", price: "RS. 100", description: "Deep-fried fritters with chutney", emoji: "🧆", category: "Fried", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=320&h=180&fit=crop" },
      { name: "Roll Paratha", price: "RS. 150", description: "Wrapped paratha with filling", emoji: "🌯", category: "Wrapped", image: "https://images.unsplash.com/photo-1568901342478-3e35385c893d?w=320&h=180&fit=crop" },
      { name: "Chaat", price: "RS. 120", description: "Spicy street food mix", emoji: "🥗", category: "Street", image: "https://images.unsplash.com/photo-1601050690597-df0960635ae3?w=320&h=180&fit=crop" },
      { name: "Gulab Jamun", price: "RS. 60", description: "Sweet milk dumplings in syrup", emoji: "🍩", category: "Sweet", image: "https://images.unsplash.com/photo-1589238341170-b5a1fe7ed574?w=320&h=180&fit=crop" },
      { name: "Kheer", price: "RS. 80", description: "Rice pudding with nuts and cardamom", emoji: "🍮", category: "Sweet", image: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e0?w=320&h=180&fit=crop" },
      { name: "Jalebi", price: "RS. 70", description: "Crispy sweet spirals", emoji: "🍪", category: "Sweet", image: "https://images.unsplash.com/photo-1613478777478-34f71d444d26?w=320&h=180&fit=crop" },
      { name: "Kulfi", price: "RS. 90", description: "Traditional Pakistani ice cream", emoji: "🍦", category: "Frozen", image: "https://images.unsplash.com/photo-1498557850523-fd3d118b962e?w=320&h=180&fit=crop" },
      { name: "Lassi", price: "RS. 80", description: "Traditional yogurt drink", emoji: "🥛", category: "Dairy", image: "https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?w=320&h=180&fit=crop" },
      { name: "Rooh Afza", price: "RS. 100", description: "Rose syrup drink with milk", emoji: "🌹", category: "Syrup", image: "https://images.unsplash.com/photo-1544787217-7f47ccb76574?w=320&h=180&fit=crop" },
      { name: "Lemonade", price: "RS. 70", description: "Fresh lemon drink", emoji: "🍋", category: "Fresh", image: "https://images.unsplash.com/photo-1593341646782-e0b495cff86d?w=320&h=180&fit=crop" },
      { name: "Sugarcane Juice", price: "RS. 60", description: "Fresh sugarcane extract", emoji: "🎋", category: "Fresh", image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=320&h=180&fit=crop" },
    ],
    "Breakfast": [
      { name: "Halwa Puri", price: "RS. 180", description: "Sweet semolina halwa with fluffy puris", emoji: "🍯", category: "Traditional", image: "https://images.unsplash.com/photo-1586985284586-b5e224758c0e?w=320&h=180&fit=crop" },
      { name: "Anday Paratha", price: "RS. 150", description: "Egg with layered flatbread", emoji: "🥚", category: "Traditional", image: "https://images.unsplash.com/photo-1588193426650-904fada4e543?w=320&h=180&fit=crop" },
      { name: "Nihari", price: "RS. 320", description: "Slow-cooked beef breakfast curry", emoji: "🍲", category: "Traditional", image: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e0?w=320&h=180&fit=crop" },
      { name: "Chai Paratha", price: "RS. 120", description: "Pakistani tea with buttered paratha", emoji: "☕", category: "Traditional", image: "https://images.unsplash.com/photo-15946318931cbad8f7be0a807f440c4f5?w=320&h=180&fit=crop" },
    ],
    "Lunch": [
      { name: "Chicken Biryani", price: "RS. 350", description: "Aromatic basmati rice with tender chicken pieces", emoji: "🍛", category: "Rice", image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=320&h=180&fit=crop" },
      { name: "Beef Pulao", price: "RS. 380", description: "Fragrant rice with tender beef pieces", emoji: "🍚", category: "Rice", image: "https://images.unsplash.com/photo-1505253716362-1ea2d790dcdd?w=320&h=180&fit=crop" },
      { name: "Chicken Karahi", price: "RS. 450", description: "Spicy chicken curry in karahi", emoji: "🍲", category: "Curry", image: "https://images.unsplash.com/photo-1605000797494-071fa5a5b5b6?w=320&h=180&fit=crop" },
      { name: "Daal Makhani", price: "RS. 280", description: "Creamy black lentils with butter", emoji: "🥘", category: "Curry", image: "https://images.unsplash.com/photo-1611018313986-4cb9c7e8fcf0?w=320&h=180&fit=crop" },
    ],
    "Dinner": [
      { name: "Mutton Karahi", price: "RS. 550", description: "Spicy mutton curry cooked in traditional karahi", emoji: "🍲", category: "Curry", image: "https://images.unsplash.com/photo-1586190848861-9984d6e084e8?w=320&h=180&fit=crop" },
      { name: "Chicken Tikka", price: "RS. 420", description: "Grilled chicken marinated in special spices", emoji: "🍗", category: "BBQ", image: "https://images.unsplash.com/photo-1562967914-6bc9480c56ce?w=320&h=180&fit=crop" },
      { name: "Seekh Kabab", price: "RS. 380", description: "Minced meat skewers grilled to perfection", emoji: "🍢", category: "BBQ", image: "https://images.unsplash.com/photo-1563612110079-7bd9b8205473?w=320&h=180&fit=crop" },
      { name: "Nehari", price: "RS. 480", description: "Slow-cooked beef shanks in rich gravy", emoji: "🥘", category: "Curry", image: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e0?w=320&h=180&fit=crop" },
    ],
    "Snack": [
      { name: "Samosa", price: "RS. 80", description: "Crispy pastry with spiced filling", emoji: "🥟", category: "Fried", image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=320&h=180&fit=crop" },
      { name: "Pakora", price: "RS. 100", description: "Deep-fried fritters with chutney", emoji: "🧆", category: "Fried", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=320&h=180&fit=crop" },
      { name: "Roll Paratha", price: "RS. 150", description: "Wrapped paratha with filling", emoji: "🌯", category: "Wrapped", image: "https://images.unsplash.com/photo-1568901342478-3e35385c893d?w=320&h=180&fit=crop" },
      { name: "Chaat", price: "RS. 120", description: "Spicy street food mix", emoji: "🥗", category: "Street", image: "https://images.unsplash.com/photo-1601050690597-df0960635ae3?w=320&h=180&fit=crop" },
    ],
    "Desserts": [
      { name: "Gulab Jamun", price: "RS. 60", description: "Sweet milk dumplings in syrup", emoji: "🍩", category: "Sweet", image: "https://images.unsplash.com/photo-1589238341170-b5a1fe7ed574?w=320&h=180&fit=crop" },
      { name: "Kheer", price: "RS. 80", description: "Rice pudding with nuts and cardamom", emoji: "🍮", category: "Sweet", image: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e0?w=320&h=180&fit=crop" },
      { name: "Jalebi", price: "RS. 70", description: "Crispy sweet spirals", emoji: "🍪", category: "Sweet", image: "https://images.unsplash.com/photo-1613478777478-34f71d444d26?w=320&h=180&fit=crop" },
      { name: "Kulfi", price: "RS. 90", description: "Traditional Pakistani ice cream", emoji: "🍦", category: "Frozen", image: "https://images.unsplash.com/photo-1498557850523-fd3d118b962e?w=320&h=180&fit=crop" },
    ],
    "Bevengers": [
      { name: "Lassi", price: "RS. 80", description: "Traditional yogurt drink", emoji: "🥛", category: "Dairy", image: "https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?w=320&h=180&fit=crop" },
      { name: "Rooh Afza", price: "RS. 100", description: "Rose syrup drink with milk", emoji: "🌹", category: "Syrup", image: "https://images.unsplash.com/photo-1544787217-7f47ccb76574?w=320&h=180&fit=crop" },
      { name: "Lemonade", price: "RS. 70", description: "Fresh lemon drink", emoji: "🍋", category: "Fresh", image: "https://images.unsplash.com/photo-1593341646782-e0b495cff86d?w=320&h=180&fit=crop" },
      { name: "Sugarcane Juice", price: "RS. 60", description: "Fresh sugarcane extract", emoji: "🎋", category: "Fresh", image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=320&h=180&fit=crop" },
    ],
  };

  const categories = Object.keys(menuData);
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
          <MiniTopBar activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
        </Box>

        {/* Food Cards Section */}
        <Box sx={{ width: "100%", maxWidth: "1200px", px: { xs: 2, sm: 3, md: 4 } }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mb: 4,
            }}
          >
            <Typography
              sx={{
                color: "rgb(218, 165, 32)",
                fontSize: { xs: "24px", md: "28px" },
                fontWeight: "bold",
                fontFamily: "Times New Roman, serif",
                textAlign: "center",
              }}
            >
              {categories[activeCategory]} Items
            </Typography>
          </Box>

          <Grid
            container
            spacing={3}
            justifyContent="center"
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "repeat(auto-fit, minmax(320px, 1fr))",
                sm: "repeat(auto-fit, minmax(320px, 1fr))",
                md: "repeat(auto-fit, minmax(320px, 1fr))",
                lg: "repeat(auto-fit, minmax(320px, 1fr))",
              },
              gap: 3,
              px: { xs: 2, sm: 3, md: 4 },
            }}
          >
            {menuData[categories[activeCategory]].map((item, index) => (
              <Grid item key={index}>
                <FoodCard
                  name={item.name}
                  price={item.price}
                  description={item.description}
                  emoji={item.emoji}
                  category={item.category}
                  image={item.image}
                />
              </Grid>
            ))}
          </Grid>
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
          <MiniTopBar activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
        </Box>
      </Drawer>
    </>
  );
}
