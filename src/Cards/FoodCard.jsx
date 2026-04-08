import React, { useState } from "react";
import { Card, CardContent, Typography, Box, Button, CardMedia, Modal, IconButton, TextField, Snackbar, Alert } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CloseIcon from "@mui/icons-material/Close";
import { useCart } from "../Context/CartContext";

const modalStyle = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '92%',
  maxWidth: '420px',
  boxSizing: 'border-box',
  bgcolor: 'rgb(26,26,26)',
  border: '1px solid rgba(218,165,32,0.8)',
  borderRadius: '16px',
  boxShadow: '0 8px 32px rgba(218,165,32,0.2)',
  p: { xs: 2, sm: 3.5 },
  outline: 'none',
  maxHeight: '88vh',
  overflowY: 'auto',
  display: 'flex',
  flexDirection: 'column',
};

export default function FoodCard({ name, price, description, emoji, category, image }) {
  const { addToCart } = useCart();
  const [openModal, setOpenModal] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [address, setAddress] = useState("");
  const [mobile, setMobile] = useState("");
  const [toastOpen, setToastOpen] = useState(false);

  const priceAmount = parseInt(price.toString().replace(/[^0-9]/g, ''), 10);

  const handleOrderNow = () => {
    const message = `Hello! I would like to order ${name} from Biryani Hub.`;
    window.open(`https://wa.me/923310451716?text=${encodeURIComponent(message)}`, "_blank");
  };

  const handleAddToCart = () => {
    addToCart({ name, price, description, emoji, category, image, address, mobile }, quantity);
    setOpenModal(false);
    setQuantity(1); // reset after adding
    setAddress(""); // reset after adding
    setMobile(""); // reset after adding
    setToastOpen(true); // show success message
  };

  const handleCloseToast = (event, reason) => {
    if (reason === 'clickaway') return;
    setToastOpen(false);
  };

  return (
    <>
      <Card sx={{
        width: "100%",
        bgcolor: "rgb(22,22,22)",
        border: "1px solid rgba(218,165,32,0.25)",
        borderRadius: "14px",
        overflow: "hidden",
        transition: "all 0.3s ease",
        display: "flex",
        flexDirection: "column",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 8px 25px rgba(218,165,32,0.3)",
          borderColor: "rgba(218,165,32,0.7)",
        },
      }}>
        {/* Image */}
        <Box sx={{ position: "relative", height: { xs: 130, sm: 160, md: 180 }, flexShrink: 0 }}>
          <CardMedia
            component="img"
            image={image}
            alt={name}
            sx={{ height: "100%", width: "100%", objectFit: "cover" }}
          />
          {/* Gradient overlay */}
          <Box sx={{
            position: "absolute", bottom: 0, left: 0, right: 0, height: "50%",
            background: "linear-gradient(transparent, rgba(22,22,22,0.8))",
          }} />
          {/* Category badge */}
          <Box sx={{
            position: "absolute", top: 8, right: 8,
            bgcolor: "rgba(218,165,32,0.92)", color: "#0a0a0a",
            px: 1, py: 0.3, borderRadius: "12px",
            fontSize: { xs: "0.55rem", sm: "0.65rem" },
            fontWeight: "bold", textTransform: "uppercase", letterSpacing: 0.5,
          }}>
            {category}
          </Box>
        </Box>

        {/* Content */}
        <CardContent sx={{
          p: { xs: 1.5, sm: 2 },
          display: "flex", flexDirection: "column", gap: { xs: 0.8, sm: 1 },
          flexGrow: 1,
          "&:last-child": { pb: { xs: 1.5, sm: 2 } },
        }}>
          {/* Name */}
          <Typography sx={{
            color: "white", fontWeight: "bold",
            fontFamily: "Times New Roman, serif",
            fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
            lineHeight: 1.2,
          }}>
            {name}
          </Typography>

          {/* Description */}
          <Typography sx={{
            color: "rgba(208,208,208,0.75)",
            fontSize: { xs: "0.7rem", sm: "0.78rem" },
            lineHeight: 1.4,
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}>
            {description}
          </Typography>

          {/* Price + Stars */}
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mt: 0.5 }}>
            <Typography sx={{
              color: "#daa520", fontWeight: "bold",
              fontSize: { xs: "1rem", sm: "1.15rem" },
            }}>
              {price}
            </Typography>
            <Box sx={{ display: "flex", gap: 0.2 }}>
              {[1,2,3,4,5].map(s => (
                <Typography key={s} sx={{ fontSize: { xs: "0.6rem", sm: "0.7rem" }, color: s <= 4 ? "#daa520" : "rgba(65,54,27,0.6)" }}>★</Typography>
              ))}
            </Box>
          </Box>

          {/* Buttons */}
          <Box sx={{ display: "flex", gap: 1, mt: "auto" }}>
            <Button
              onClick={() => setOpenModal(true)}
              size="small"
              sx={{
                flex: 1, color: "#daa520",
                border: "1px solid rgba(218,165,32,0.5)",
                borderRadius: "8px", textTransform: "none",
                fontSize: { xs: "0.65rem", sm: "0.75rem" },
                py: { xs: 0.6, sm: 0.8 }, minWidth: 0,
                "&:hover": { bgcolor: "rgba(218,165,32,0.08)", borderColor: "#daa520" },
              }}
            >
              + Cart
            </Button>
            <Button
              onClick={handleOrderNow}
              size="small"
              sx={{
                flex: 1,
                background: "linear-gradient(135deg, #daa520, #ff8c00)",
                color: "#0a0a0a", fontWeight: "bold",
                borderRadius: "8px", textTransform: "none",
                fontSize: { xs: "0.65rem", sm: "0.75rem" },
                py: { xs: 0.6, sm: 0.8 }, minWidth: 0,
                "&:hover": { background: "linear-gradient(135deg, #ff8c00, #daa520)" },
              }}
            >
              Order
            </Button>
          </Box>
        </CardContent>
      </Card>

      {/* Add To Cart Modal */}
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <Box sx={modalStyle}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography variant="h6" sx={{ color: '#daa520', fontWeight: 'bold', fontFamily: 'Times New Roman, serif' }}>
              Add to Cart
            </Typography>
            <IconButton onClick={() => setOpenModal(false)} sx={{ color: 'rgba(255,255,255,0.7)' }}>
              <CloseIcon />
            </IconButton>
          </Box>

          <Box sx={{ display: 'flex', gap: { xs: 1.5, sm: 2 }, mb: { xs: 2.5, sm: 3 } }}>
            <CardMedia
              component="img"
              image={image}
              alt={name}
              sx={{ width: { xs: 60, sm: 80 }, height: { xs: 60, sm: 80 }, borderRadius: '8px', objectFit: 'cover' }}
            />
            <Box>
              <Typography sx={{ color: 'white', fontWeight: 'bold', fontSize: { xs: '1rem', sm: '1.1rem' } }}>{name}</Typography>
              <Typography sx={{ color: 'rgba(208,208,208,0.8)', fontSize: { xs: '0.75rem', sm: '0.85rem' }, mb: 1 }}>{category}</Typography>
              <Typography sx={{ color: '#daa520', fontWeight: 'bold', fontSize: { xs: '0.9rem', sm: '1rem' } }}>{price}</Typography>
            </Box>
          </Box>

          <TextField
            fullWidth
            placeholder="Enter your delivery address..."
            variant="outlined"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            sx={{
              mb: { xs: 1.5, sm: 3 },
              bgcolor: "rgba(255,255,255,0.05)",
              borderRadius: "8px",
              "& .MuiOutlinedInput-root": {
                color: "white",
                fontSize: { xs: '0.75rem', sm: '1rem' },
                py: { xs: 0, sm: 'unset' },
                "& fieldset": { borderColor: "rgba(218,165,32,0.3)" },
                "&:hover fieldset": { borderColor: "rgba(218,165,32,0.6)" },
                "&.Mui-focused fieldset": { borderColor: "#daa520" },
              },
              "& .MuiOutlinedInput-input": {
                py: { xs: '8px', sm: '14px' },
              },
            }}
          />

          <TextField
            fullWidth
            placeholder="Enter your mobile number..."
            variant="outlined"
            type="tel"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            sx={{
              mb: { xs: 1.5, sm: 3 },
              bgcolor: "rgba(255,255,255,0.05)",
              borderRadius: "8px",
              "& .MuiOutlinedInput-root": {
                color: "white",
                fontSize: { xs: '0.75rem', sm: '1rem' },
                "& fieldset": { borderColor: "rgba(218,165,32,0.3)" },
                "&:hover fieldset": { borderColor: "rgba(218,165,32,0.6)" },
                "&.Mui-focused fieldset": { borderColor: "#daa520" },
              },
              "& .MuiOutlinedInput-input": {
                py: { xs: '8px', sm: '14px' },
              },
            }}
          />

          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: { xs: 3, sm: 4 }, bgcolor: 'rgba(218,165,32,0.1)', p: { xs: 1.5, sm: 2 }, borderRadius: '12px' }}>
            <Typography sx={{ color: 'white', fontWeight: 'bold', fontSize: { xs: '0.9rem', sm: '1rem' } }}>Quantity</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <IconButton 
                onClick={() => setQuantity(q => Math.max(1, q - 1))}
                sx={{ bgcolor: 'rgba(255,255,255,0.1)', color: 'white', '&:hover': { bgcolor: 'rgba(255,255,255,0.2)' } }}
                size="small"
              >
                <RemoveIcon fontSize="small" />
              </IconButton>
              <Typography sx={{ color: 'white', fontWeight: 'bold', fontSize: '1.2rem', minWidth: '30px', textAlign: 'center' }}>
                {quantity}
              </Typography>
              <IconButton 
                onClick={() => setQuantity(q => q + 1)}
                sx={{ bgcolor: '#daa520', color: 'black', '&:hover': { bgcolor: '#b8860b' } }}
                size="small"
              >
                <AddIcon fontSize="small" />
              </IconButton>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: { xs: 2.5, sm: 3 } }}>
            <Typography sx={{ color: 'white', fontSize: { xs: '1rem', sm: '1.1rem' } }}>Total Bill:</Typography>
            <Typography sx={{ color: '#daa520', fontSize: { xs: '1.2rem', sm: '1.3rem' }, fontWeight: 'bold' }}>
              RS. {priceAmount * quantity}
            </Typography>
          </Box>

          <Button
            onClick={handleAddToCart}
            fullWidth
            variant="contained"
            sx={{
              bgcolor: '#daa520', color: 'black', fontWeight: 'bold',
              py: { xs: 0.8, sm: 1.5 },
              borderRadius: '12px',
              fontSize: { xs: '0.8rem', sm: '1.1rem' },
              textTransform: 'none',
              '&:hover': { bgcolor: '#b8860b' }
            }}
          >
            Confirm Add to Cart  🛒
          </Button>
        </Box>
      </Modal>

      {/* Success Toast */}
      <Snackbar
        open={toastOpen}
        autoHideDuration={3000}
        onClose={handleCloseToast}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      >
        <Alert
          onClose={handleCloseToast}
          severity="success"
          sx={{
            width: '100%',
            bgcolor: 'rgb(76, 175, 80)', // Green color
            color: 'white',
            fontWeight: 'bold',
            '& .MuiAlert-icon': { color: 'white' }
          }}
        >
          Added to cart successfully!
        </Alert>
      </Snackbar>
    </>
  );
}
