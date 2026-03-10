import { Box, Typography, Button, Modal } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function LogoutModal({ open, onClose }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    onClose();
    navigate("/UserLogin");
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "400px",
          bgcolor: "rgb(34 34 34)",
          border: "1px solid rgb(65 54 27)",
          borderRadius: "20px",
          p: 4,
          boxShadow: "0 0 25px rgb(65 54 27)",
          outline: "none",
        }}
      >
        <Typography
          sx={{
            color: "rgb(218 165 32)",
            fontSize: "24px",
            fontWeight: "bold",
            textAlign: "center",
            mb: 2,
            fontFamily: "times new roman, serif",
          }}
        >
          Are you sure you want to leave?
        </Typography>

        <Typography
          sx={{
            color: "rgb(208 208 208)",
            fontSize: "16px",
            textAlign: "center",
            mb: 4,
          }}
        >
          You will be logged out and redirected to the login page.
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: 2,
            justifyContent: "center",
          }}
        >
          <Button
            onClick={onClose}
            sx={{
              color: "rgb(208 208 208)",
              border: "1px solid rgb(65 54 27)",
              background: "transparent",
              px: 3,
              py: 1,
              fontWeight: "600",
              textTransform: "none",
              "&:hover": {
                bgcolor: "rgb(54 46 27)",
                border: "1px solid rgb(218 165 32)",
              },
            }}
          >
            No
          </Button>

          <Button
            onClick={handleLogout}
            sx={{
              color: "black",
              background: "linear-gradient(45deg,rgb(223 161 27),rgb(250 144 5))",
              px: 3,
              py: 1,
              fontWeight: "600",
              textTransform: "none",
              "&:hover": {
                background: "linear-gradient(45deg,rgb(250 144 5),rgb(223 161 27))",
              },
            }}
          >
            Yes
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
