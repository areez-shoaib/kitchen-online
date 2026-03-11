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
  Checkbox,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import ErrorIcon from "@mui/icons-material/Error";
import WarningIcon from "@mui/icons-material/Warning";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Modal } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import WelcomeModal from "../Modals/WelcomeModal";

export default function SignUpSection({ setActiveTab }) {
  const navigate = useNavigate();
  const { signup } = useAuth();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: ""
  });
  const [emailError, setEmailError] = useState(false);
  const [strength, setStrength] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [showWelcomeModal, setShowWelcomeModal] = useState(false);
  const [userName, setUserName] = useState('');
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [confirmStrength, setConfirmStrength] = useState(0);
  const [isPromoMember, setIsPromoMember] = useState('');
  const [showPromoModal, setShowPromoModal] = useState(false);
  const [showDiscountModal, setShowDiscountModal] = useState(false);
  const [promoCode, setPromoCode] = useState('');
  
  const handleInputChange = (field) => (e) => {
    setFormData(prev => ({
      ...prev,
      [field]: e.target.value
    }));
    
    if (field === 'confirmPassword') {
      const match = e.target.value === formData.password;
      setPasswordMatch(match);
      if (match && e.target.value.length > 0) {
        checkConfirmPasswordStrength(e.target.value);
      }
    }
  };
  const checkPasswordStrength = (value) => {
    setFormData(prev => ({ ...prev, password: value }));

    let score = 0;

    if (value.length >= 8) score++;
    if (/[A-Z]/.test(value)) score++;
    if (/[!@#$%^&*(),.?":{}|<>]/.test(value)) score++;

    setStrength(score);
  };
  
  const checkConfirmPasswordStrength = (value) => {
    let score = 0;

    if (value.length >= 8) score++;
    if (/[A-Z]/.test(value)) score++;
    if (/[!@#$%^&*(),.?":{}|<>]/.test(value)) score++;

    setConfirmStrength(score);
  };
  
  const handleEmailChange = (e) => {
    const value = e.target.value;
    setFormData(prev => ({ ...prev, email: value }));

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(value)) {
      setEmailError(false);
    } else {
      setEmailError(true);
    }
  };

  const handlePromoMemberChange = (event) => {
    const value = event.target.value;
    setIsPromoMember(value);
    if (value === 'yes') {
      setShowPromoModal(true);
    }
  };

  const handlePromoCodeSubmit = () => {
    if (promoCode.trim()) {
      setShowPromoModal(false);
      setShowDiscountModal(true);
      
      // Auto-redirect after 3 seconds
      setTimeout(() => {
        setShowDiscountModal(false);
        
        // Complete signup and navigate
        const result = signup(formData, true, promoCode);
        if (result.success) {
          setUserName(formData.fullName || formData.email.split('@')[0].toUpperCase());
          setShowWelcomeModal(true);
          
          setTimeout(() => {
            navigate('/PromocodeCustomer');
          }, 3000);
        }
      }, 3000);
    }
  };

  const handleSignUp = () => {
    // If user selected promo member but hasn't entered code, show promo modal
    if (isPromoMember === 'yes' && !promoCode) {
      setShowPromoModal(true);
      return;
    }
    
    // If user selected promo member and has code, or selected no, proceed with signup
    if ((isPromoMember === 'yes' && promoCode) || isPromoMember === 'no' || isPromoMember === '') {
      // Validate all fields
      if (!formData.fullName || !formData.email || !formData.password || !formData.confirmPassword) {
        alert('Please fill in all required fields');
        return;
      }
      
      if (emailError) {
        alert('Please enter a valid email address');
        return;
      }
      
      if (!passwordMatch) {
        alert('Passwords do not match');
        return;
      }
      
      if (strength < 2) {
        alert('Password is too weak. Please use a stronger password.');
        return;
      }
      
      // All validations passed - signup and navigate
      const result = signup(formData, isPromoMember === 'yes' && promoCode, promoCode || '');
      if (result.success) {
        // Set welcome modal data
        setUserName(formData.fullName || formData.email.split('@')[0].toUpperCase());
        setShowWelcomeModal(true);
        
        // Navigate after delay - check if user is promo member
        setTimeout(() => {
          if (isPromoMember === 'yes' && promoCode) {
            navigate('/PromocodeCustomer');
          } else {
            navigate('/CustomerDashboard');
          }
        }, 3000);
      } else {
        alert('Signup failed. Please try again.');
      }
    }
  };
  return (
    <>
      <WelcomeModal 
        open={showWelcomeModal}
        onClose={() => setShowWelcomeModal(false)}
        userType="customer"
        userName={userName}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          p: 3,
          justifyContent: "center",
          alignItems: "center",
          gap: 3,
          mt: 2,
        }}
      >
        <TextField
          label="Full Name"
          variant="outlined"
          fullWidth
          value={formData.fullName}
          onChange={handleInputChange('fullName')}
          InputLabelProps={{
            shrink: true,
            sx: {
              color: "rgb(208 208 208)",
              fontSize: { lg: "16px", xs: "15px" },
              "&.Mui-focused": {
                color: "rgb(244 148 10)",
              },
            },
          }}
          InputProps={{
            startAdornment: (
              <PersonIcon sx={{ color: "rgb(204 155 32)", mr: 1 }} />
            ),
            sx: {
              "& input": {
                color: "white",
                fontSize: { lg: "16px", xs: "12px" },
              },

              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "rgb(72 61 34)",
                borderWidth: "0.1px",
                borderRadius: "8px",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "rgb(204 155 32)",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "rgb(244 148 10)",
              },
            },
          }}
        />
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          value={formData.email}
          onChange={handleEmailChange}
          error={emailError}
          helperText={
            emailError ? "Please enter a valid email (example@gmail.com)" : ""
          }
          InputLabelProps={{
            shrink: true,
            sx: {
              color: "rgb(208 208 208)",
              fontSize: { lg: "16px", xs: "15px" },
              "&.Mui-focused": {
                color: "rgb(244 148 10)",
              },
            },
          }}
          InputProps={{
            startAdornment: (
              <EmailIcon sx={{ color: "rgb(204 155 32)", mr: 1 }} />
            ),
            sx: {
              "& input": {
                color: "white",
                fontSize: { lg: "16px", xs: "12px" },
              },
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "rgb(72 61 34)",
                borderWidth: "0.1px",
                borderRadius: "8px",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "rgb(204 155 32)",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "rgb(244 148 10)",
              },
            },
          }}
        />
        <TextField
          placeholder="Phone (optional)"
          variant="outlined"
          fullWidth
          value={formData.phone}
          onChange={handleInputChange('phone')}
          InputLabelProps={{
            shrink: true,
            sx: {
              color: "rgb(208 208 208)",
              fontSize: { lg: "16px", xs: "15px" },
              "&.Mui-focused": {
                color: "rgb(244 148 10)",
              },
            },
          }}
          InputProps={{
            sx: {
              "& input": {
                color: "white",
                fontSize: { lg: "16px", xs: "12px" },
              },

              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "rgb(72 61 34)",
                borderWidth: "0.1px",
                borderRadius: "8px",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "rgb(204 155 32)",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "rgb(244 148 10)",
              },
            },
          }}
        />
        <TextField
          label="Password"
          variant="outlined"
          type={showPassword ? "text" : "password"}
          fullWidth
          value={formData.password}
          onChange={(e) => checkPasswordStrength(e.target.value)}
          InputLabelProps={{
            shrink: true,
            sx: {
              color: "rgb(208 208 208)",
              fontSize: { lg: "16px", xs: "15px" },
              "&.Mui-focused": { color: "rgb(244 148 10)" },
            },
          }}
          InputProps={{
            startAdornment: (
              <LockIcon sx={{ color: "rgb(204 155 32)", mr: 1 }} />
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end"
                  sx={{ color: "rgb(204 155 32)" }}
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
            sx: {
              "& input": {
                color: "white",
                fontSize: { lg: "16px", xs: "12px" },
              },
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "rgb(72 61 34)",
                borderWidth: "0.1px",
                borderRadius: "8px",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "rgb(204 155 32)",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "rgb(244 148 10)",
              },
            },
          }}
        />
        {formData.password.length > 0 && (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              mt: 1,
            }}
          >
            {/* Strength Bar */}
            <Box
              sx={{
                width: "430px",
                height: "8px",
                backgroundColor: "#333",
                borderRadius: "10px",
                overflow: "hidden",
                display: "flex",
              }}
            >
              <Box
                sx={{
                  height: "100%",
                  width:
                    strength === 1
                      ? "33%"
                      : strength === 2
                        ? "66%"
                        : strength === 3
                          ? "100%"
                          : "10%",
                  backgroundColor:
                    strength === 1
                      ? "red"
                      : strength === 2
                        ? "dodgerblue"
                        : strength === 3
                          ? "limegreen"
                          : "gray",
                  transition: "all 0.4s ease",
                }}
              />
            </Box>

            {/* Strength Text */}
            <Typography
              sx={{
                fontSize: "13px",
                display: "flex",
                alignItems: "center",
                gap: 1,
                color:
                  strength === 1
                    ? "red"
                    : strength === 2
                      ? "dodgerblue"
                      : strength === 3
                        ? "limegreen"
                        : "gray",
              }}
            >
              {strength === 1 && (
                <>
                  <ErrorIcon fontSize="small" />
                  Weak
                </>
              )}

              {strength === 2 && (
                <>
                  <WarningIcon fontSize="small" />
                  Medium
                </>
              )}

              {strength === 3 && (
                <>
                  <CheckCircleIcon fontSize="small" />
                  Strong
                </>
              )}
            </Typography>
          </Box>
        )}
        <TextField
          label="Confirm Password"
          type={showPassword ? "text" : "password"}
          variant="outlined"
          fullWidth
          value={formData.confirmPassword}
          onChange={handleInputChange('confirmPassword')}
          error={!passwordMatch && formData.confirmPassword.length > 0}
          helperText={!passwordMatch && formData.confirmPassword.length > 0 ? "Passwords do not match" : ""}
          InputLabelProps={{
            shrink: true,
            sx: {
              color: "rgb(208 208 208)",
              fontSize: { lg: "16px", xs: "15px" },
              "&.Mui-focused": {
                color: "rgb(244 148 10)",
              },
            },
          }}
          InputProps={{
            startAdornment: (
              <LockIcon sx={{ color: "rgb(204 155 32)", mr: 1 }} />
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  edge="end"
                  onClick={() => setShowPassword(!showPassword)}
                  sx={{ color: "rgb(204 155 32)" }}
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
            sx: {
              "& input": {
                color: "white",
                fontSize: { lg: "16px", xs: "12px" },
              },

              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: !passwordMatch && formData.confirmPassword.length > 0 ? "red" : "rgb(72 61 34)",
                borderWidth: "0.1px",
                borderRadius: "8px",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "rgb(204 155 32)",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: !passwordMatch && formData.confirmPassword.length > 0 ? "red" : "rgb(244 148 10)",
              },
            },
          }}
        />
        {formData.confirmPassword.length > 0 && passwordMatch && (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              mt: 1,
            }}
          >
            {/* Confirm Password Strength Bar */}
            <Box
              sx={{
                width: "420px",
                height: "8px",
                backgroundColor: "#333",
                borderRadius: "10px",
                overflow: "hidden",
                display: "flex",
              }}
            >
              <Box
                sx={{
                  height: "100%",
                  width:
                    confirmStrength === 1
                      ? "33%"
                      : confirmStrength === 2
                        ? "66%"
                        : confirmStrength === 3
                          ? "100%"
                          : "10%",
                  backgroundColor:
                    confirmStrength === 1
                      ? "red"
                      : confirmStrength === 2
                        ? "dodgerblue"
                        : confirmStrength === 3
                          ? "limegreen"
                          : "gray",
                  transition: "all 0.4s ease",
                }}
              />
            </Box>

            {/* Confirm Password Strength Text */}
            <Typography
              sx={{
                fontSize: "13px",
                display: "flex",
                alignItems: "center",
                gap: 1,
                color:
                  confirmStrength === 1
                    ? "red"
                    : confirmStrength === 2
                      ? "dodgerblue"
                      : confirmStrength === 3
                        ? "limegreen"
                        : "gray",
              }}
            >
              {confirmStrength === 1 && (
                <>
                  <ErrorIcon fontSize="small" />
                  Match 
                </>
              )}

              {confirmStrength === 2 && (
                <>
                  <WarningIcon fontSize="small" />
                  Match 
                </>
              )}

              {confirmStrength === 3 && (
                <>
                  <CheckCircleIcon fontSize="small" />
                  Match 
                </>
              )}
            </Typography>
          </Box>
        )}
        
        {/* Promo Code Member Checkbox */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Checkbox
            checked={isPromoMember !== ''}
            onChange={(e) => {
              if (e.target.checked) {
                setIsPromoMember('no');
              } else {
                setIsPromoMember('');
              }
            }}
            sx={{
              color: 'rgb(218 165 32)',
              '&.Mui-checked': {
                color: 'rgb(218 165 32)',
              },
            }}
          />
          <Typography sx={{ color: 'rgb(208 208 208)', fontSize: '14px' }}>
            Please tick the check if you are promo code member
          </Typography>
        </Box>
        
        {/* Yes/No Radio Buttons */}
        {isPromoMember !== '' && (
          <FormControl component="fieldset">
            <RadioGroup
              row
              value={isPromoMember}
              onChange={handlePromoMemberChange}
              sx={{ display: 'flex', gap: 3 }}
            >
              <FormControlLabel
                value="yes"
                control={<Radio sx={{ color: 'rgb(218 165 32)' }} />}
                label={<Typography sx={{ color: 'rgb(208 208 208)', fontSize: '14px' }}>Yes</Typography>}
              />
              <FormControlLabel
                value="no"
                control={<Radio sx={{ color: 'rgb(218 165 32)' }} />}
                label={<Typography sx={{ color: 'rgb(208 208 208)', fontSize: '14px' }}>No</Typography>}
              />
            </RadioGroup>
          </FormControl>
        )}
        
        <Button
          onClick={handleSignUp}
          variant="contained"
          sx={{
            width: "100%",
            background: "linear-gradient(45deg,rgb(223 161 27),rgb(248 145 6))",
            py: 1.5,
            color: "black",
            fontWeight: 600,
            textTransform: "none",
            fontSize: "16px",
            outline: "none",
            "&:focus": {
              outline: "none",
            },
          }}
        >
          Sign Up
        </Button>
        <Typography
          sx={{
            color: "rgb(218 165 32)",
            fontWeight: "bold",
            cursor: "pointer",
          }}
          onClick={() => setActiveTab && setActiveTab("login")}
        >
          Already have an account? Login
        </Typography>
      </Box>
      
      {/* Promo Code Modal */}
      <Modal
        open={showPromoModal}
        onClose={() => setShowPromoModal(false)}
        aria-labelledby="promo-code-modal"
        aria-describedby="promo-code-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'rgb(26 26 26)',
            border: '2px solid rgb(218 165 32)',
            borderRadius: '16px',
            boxShadow: 24,
            p: 4,
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
          }}
        >
          <Typography
            id="promo-code-modal"
            variant="h6"
            component="h2"
            sx={{
              color: 'rgb(218 165 32)',
              textAlign: 'center',
              fontWeight: 'bold',
              fontFamily: 'Times New Roman, serif',
            }}
          >
            Please enter promo code number
          </Typography>
          
          <TextField
            id="promo-code-description"
            placeholder="Enter promo code"
            variant="outlined"
            fullWidth
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
            InputProps={{
              sx: {
                '& input': {
                  color: 'white',
                  fontSize: '16px',
                },
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'rgb(218 165 32)',
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'rgb(244 148 10)',
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'rgb(244 148 10)',
                },
              },
            }}
          />
          
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
            <Button
              onClick={handlePromoCodeSubmit}
              variant="contained"
              sx={{
                background: 'linear-gradient(45deg, rgb(223 161 27), rgb(248 145 6))',
                color: 'black',
                fontWeight: 'bold',
                px: 4,
                '&:hover': {
                  background: 'linear-gradient(45deg, rgb(248 145 6), rgb(223 161 27))',
                },
              }}
            >
              Submit
            </Button>
            <Button
              onClick={() => setShowPromoModal(false)}
              variant="outlined"
              sx={{
                borderColor: 'rgb(218 165 32)',
                color: 'rgb(218 165 32)',
                fontWeight: 'bold',
                px: 4,
                '&:hover': {
                  borderColor: 'rgb(244 148 10)',
                  color: 'rgb(244 148 10)',
                },
              }}
            >
              Cancel
            </Button>
          </Box>
        </Box>
      </Modal>
      
      {/* Discount Modal */}
      <Modal
        open={showDiscountModal}
        onClose={() => setShowDiscountModal(false)}
        aria-labelledby="discount-modal"
        aria-describedby="discount-description"
        BackdropProps={{
          style: { backgroundColor: 'rgba(0, 0, 0, 0.9)' }
        }}
        sx={{
          zIndex: 9999,
        }}
      >
        <Box
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            bgcolor: 'rgba(0, 0, 0, 0.95)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            zIndex: 9999,
            animation: 'fadeIn 0.5s ease-in',
            '@keyframes fadeIn': {
              '0%': { opacity: 0 },
              '100%': { opacity: 1 },
            },
          }}
        >
          <Typography
            variant="h1"
            sx={{
              color: 'rgb(218 165 32)',
              fontWeight: 'bold',
              fontFamily: 'Times New Roman, serif',
              fontSize: { xs: '36px', md: '48px' },
              textShadow: '0 0 30px rgba(218, 165, 32, 0.8)',
              animation: 'textGlow 1.5s ease-in-out infinite alternate',
              '@keyframes textGlow': {
                '0%': { textShadow: '0 0 30px rgba(218, 165, 32, 0.8)' },
                '100%': { textShadow: '0 0 50px rgba(218, 165, 32, 1), 0 0 60px rgba(244, 148, 10, 0.8)' },
              },
            }}
          >
            🎉 HURRY! 🎉
          </Typography>
          
          <Typography
            variant="h2"
            sx={{
              color: 'white',
              fontWeight: 'bold',
              fontFamily: 'Times New Roman, serif',
              fontSize: { xs: '24px', md: '32px' },
              lineHeight: 1.3,
              mt: 3,
              animation: 'textSlideIn 1s ease-out 0.5s both',
              '@keyframes textSlideIn': {
                '0%': { opacity: 0, transform: 'translateY(50px)' },
                '100%': { opacity: 1, transform: 'translateY(0)' },
              },
            }}
          >
            You won <span style={{ color: 'rgb(76 175 80)', fontSize: '1.3em' }}>15% DISCOUNT</span> on whole menu!
          </Typography>
          
          <Typography
            sx={{
              color: 'rgb(208 208 208)',
              fontSize: { xs: '18px', md: '22px' },
              mt: 3,
              animation: 'textSlideIn 1s ease-out 1s both',
            }}
          >
            Use promo code: <strong style={{ color: 'rgb(218 165 32)', fontSize: '1.2em' }}>{promoCode}</strong>
          </Typography>
          
          <Typography
            sx={{
              color: 'rgb(156 163 175)',
              fontSize: { xs: '16px', md: '18px' },
              mt: 2,
              animation: 'textSlideIn 1s ease-out 1.5s both',
              opacity: 0.8,
            }}
          >
            Redirecting to home page...
          </Typography>
        </Box>
      </Modal>
    </>
  );
}
