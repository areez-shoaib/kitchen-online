// utils/animations.js
export const glowEffect = {
  transition: "all 0.3s ease",
  boxShadow: "0 2px 5px rgba(0,0,0,0.3)",

  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: "0 8px 20px rgba(244, 148, 10, 0.6)",
    borderColor: "rgb(244 148 10)",
  },

  "&:active": {
    transform: "translateY(-2px)",
    boxShadow: "0 6px 15px rgba(244, 148, 10, 0.8)",
    bgcolor: "rgb(36 36 36)",
  },
};

