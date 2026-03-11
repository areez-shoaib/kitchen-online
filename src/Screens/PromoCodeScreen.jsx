import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Modal, Paper, Grid, IconButton, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { ArrowBack, CheckCircle, CreditCard, Wallet } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

export default function PromoCodeScreen() {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    fatherName: '',
    email: '',
    phone: '',
    city: '',
    postalCode: '',
    paymentMethod: '',
    cardNumber: '',
    cardExpiry: '',
    cardCvv: '',
    cardHolderName: '',
    paypalEmail: '',
    bankAccountNumber: '',
    bankRoutingNumber: '',
    amount: ''
  });
  
  const [showPromoModal, setShowPromoModal] = useState(false);
  const [generatedPromoCode, setGeneratedPromoCode] = useState('');
  const [errors, setErrors] = useState({});
  const [showContactModal, setShowContactModal] = useState(false);
  const [showCodeModal, setShowCodeModal] = useState(false);
  const [showThankYouModal, setShowThankYouModal] = useState(false);
  const [contactPreference, setContactPreference] = useState('');
  const [enteredCode, setEnteredCode] = useState('');

  const handleInputChange = (field) => (e) => {
    setFormData(prev => ({
      ...prev,
      [field]: e.target.value
    }));
    
    // Clear error for this field when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    
    if (!formData.fatherName.trim()) {
      newErrors.fatherName = 'Father name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10,11}$/.test(formData.phone.replace(/[^0-9]/g, ''))) {
      newErrors.phone = 'Phone number must be 10-11 digits';
    }
    
    if (!formData.city.trim()) {
      newErrors.city = 'City is required';
    }
    
    if (!formData.paymentMethod.trim()) {
      newErrors.paymentMethod = 'Payment method is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const generatePromoCode = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let promoCode = 'PROMO-';
    for (let i = 0; i < 8; i++) {
      promoCode += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return promoCode;
  };

  const handleSubmit = () => {
    if (!validateForm()) {
      return;
    }
    
    // Show contact preference modal
    setShowContactModal(true);
  };

  const handleSavePromoCode = () => {
    // Save promo code to localStorage or send to backend
    localStorage.setItem('userPromoCode', generatedPromoCode);
    localStorage.setItem('promoUserDetails', JSON.stringify(formData));
    
    setShowPromoModal(false);
    navigate('/HomeScreen'); // Navigate to home after saving
  };

  const handleContactPreference = (preference) => {
    setContactPreference(preference);
    setShowContactModal(false);
    
    // Generate promo code
    const promoCode = generatePromoCode();
    setGeneratedPromoCode(promoCode);
    setShowCodeModal(true);
  };

  const handleCodeSubmit = () => {
    if (enteredCode === generatedPromoCode) {
      setShowCodeModal(false);
      setShowThankYouModal(true);
    } else {
      alert('Invalid code. Please try again.');
    }
  };

  const handleThankYouOk = () => {
    setShowThankYouModal(false);
    setShowPromoModal(true);
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
          background:
                    "linear-gradient(45deg, rgb(15, 15, 15), rgb(15, 15, 15))",
        display: 'flex',
        flexDirection: 'column',
        p: { xs: 2, sm: 4 }
      }}
    >
      {/* Header */}
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
        <IconButton
          onClick={() => navigate(-1)}
          sx={{
            color: '#daa520',
            mr: 2,
            '&:hover': { bgcolor: 'rgba(218, 165, 32, 0.1)' }
          }}
        >
          <ArrowBack />
        </IconButton>
    
      </Box>

      {/* Form */}
      <Paper
        sx={{
          p: 4,
          bgcolor: 'rgba(26, 26, 26, 0.95)',
          border: '2px solid #daa520',
          borderRadius: '20px',
          boxShadow: '0 0 40px rgba(218, 165, 32, 0.4)',
          maxWidth: 500,
          maxHeight: '90vh',
          overflowY: 'hidden',
          mx: 'auto'
        }}
      >
        <Typography
          variant="h5"
          sx={{
            color: '#ff8c00',
            textAlign: 'center',
            mb: 4,
            fontWeight: 'bold',
            fontFamily: 'Times New Roman, serif',
            fontSize: { xs: '1.2rem', md: '1.5rem' }
          }}
        >
          🎉 Fill in your details to get your exclusive promo code in only RS.500! 🎉
        </Typography>

        <Grid container spacing={4}>
          {/* First Name */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              placeholder="First Name *"
              value={formData.firstName}
              onChange={handleInputChange('firstName')}
              error={!!errors.firstName}
              helperText={errors.firstName}
              FormHelperTextProps={{
                sx: { color: errors.firstName ? '#ff5252' : '#daa520' }
              }}
              InputProps={{
                sx: {
                  color: 'white',
                  backgroundColor: 'rgba(26, 26, 26, 0.8)',
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#daa520',
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#ff8c00',
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#daa520',
                  },
                  '& .MuiInputBase-input': {
                    color: 'white',
                  },
                }
              }}
            />
          </Grid>

          {/* Last Name */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              placeholder="Last Name *"
              value={formData.lastName}
              onChange={handleInputChange('lastName')}
              error={!!errors.lastName}
              helperText={errors.lastName}
              FormHelperTextProps={{
                sx: { color: errors.lastName ? '#ff5252' : '#daa520' }
              }}
              InputProps={{
                sx: {
                  color: 'white',
                  backgroundColor: 'rgba(26, 26, 26, 0.8)',
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#daa520',
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#ff8c00',
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#daa520',
                  },
                  '& .MuiInputBase-input': {
                    color: 'white',
                  },
                }
              }}
            />
          </Grid>

          {/* Father Name */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              placeholder="Father Name *"
              value={formData.fatherName}
              onChange={handleInputChange('fatherName')}
              error={!!errors.fatherName}
              helperText={errors.fatherName}
              FormHelperTextProps={{
                sx: { color: errors.fatherName ? '#ff5252' : '#daa520' }
              }}
              InputProps={{
                sx: {
                  color: 'white',
                  backgroundColor: 'rgba(26, 26, 26, 0.8)',
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#daa520',
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#ff8c00',
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#daa520',
                  },
                  '& .MuiInputBase-input': {
                    color: 'white',
                  },
                }
              }}
            />
          </Grid>

          {/* Email */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              placeholder="Email Address *"
              type="email"
              value={formData.email}
              onChange={handleInputChange('email')}
              error={!!errors.email}
              helperText={errors.email}
              FormHelperTextProps={{
                sx: { color: errors.email ? '#ff5252' : '#daa520' }
              }}
              InputProps={{
                sx: {
                  color: 'white',
                  backgroundColor: 'rgba(26, 26, 26, 0.8)',
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#daa520',
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#ff8c00',
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#daa520',
                  },
                  '& .MuiInputBase-input': {
                    color: 'white',
                  },
                }
              }}
            />
          </Grid>

          {/* Phone */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              placeholder="Phone Number *"
              value={formData.phone}
              onChange={handleInputChange('phone')}
              error={!!errors.phone}
              helperText={errors.phone}
              FormHelperTextProps={{
                sx: { color: errors.phone ? '#ff5252' : '#daa520' }
              }}
              InputProps={{
                sx: {
                  color: 'white',
                  backgroundColor: 'rgba(26, 26, 26, 0.8)',
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#daa520',
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#ff8c00',
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#daa520',
                  },
                  '& .MuiInputBase-input': {
                    color: 'white',
                  },
                }
              }}
            />
          </Grid>

          {/* City */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              placeholder="City *"
              value={formData.city}
              onChange={handleInputChange('city')}
              error={!!errors.city}
              helperText={errors.city}
              FormHelperTextProps={{
                sx: { color: errors.city ? '#ff5252' : '#daa520' }
              }}
              InputProps={{
                sx: {
                  color: 'white',
                  backgroundColor: 'rgba(26, 26, 26, 0.8)',
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#daa520',
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#ff8c00',
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#daa520',
                  },
                  '& .MuiInputBase-input': {
                    color: 'white',
                  },
                }
              }}
            />
          </Grid>

          {/* Postal Code */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              placeholder="Postal Code"
              value={formData.postalCode}
              onChange={handleInputChange('postalCode')}
              InputProps={{
                sx: {
                  color: 'white',
                  backgroundColor: 'rgba(26, 26, 26, 0.8)',
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#daa520',
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#ff8c00',
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#daa520',
                  },
                  '& .MuiInputBase-input': {
                    color: 'white',
                  },
                }
              }}
            />
          </Grid>

          {/* Payment Method */}
          <Grid item xs={12}>
            <FormControl fullWidth>
              <Select
                displayEmpty
                value={formData.paymentMethod}
                onChange={handleInputChange('paymentMethod')}
                error={!!errors.paymentMethod}
                sx={{
                  color: 'white',
                  backgroundColor: 'rgba(26, 26, 26, 0.8)',
                  width: '125%', // Make it 10% wider than other fields
                  maxWidth: 'none', // Remove max width constraint
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: errors.paymentMethod ? '#ff5252' : '#daa520',
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#ff8c00',
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#daa520',
                  },
                  '& .MuiSelect-select': {
                    color: 'white',
                  },
                  '& .MuiSvgIcon-root': {
                    color: '#daa520',
                  },
                  '& .MuiInputBase-input': {
                    color: 'white',
                  },
                }}
              >
                <MenuItem value="" disabled>
                  <em>Payment Method *</em>
                </MenuItem>
                <MenuItem value="credit-card">
                  <Box sx={{ display: 'flex', alignItems: 'center',  gap: 1 }}>
                    <CreditCard sx={{ fontSize: 20, color: '#daa520' }} />
                    Credit Card
                  </Box>
                </MenuItem>
                <MenuItem value="debit-card">
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <CreditCard sx={{ fontSize: 20, color: '#ff8c00' }} />
                    Debit Card
                  </Box>
                </MenuItem>
                <MenuItem value="paypal">
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Wallet sx={{ fontSize: 20, color: '#0070ba' }} />
                    PayPal
                  </Box>
                </MenuItem>
                <MenuItem value="bank-transfer">
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Wallet sx={{ fontSize: 20, color: '#4caf50' }} />
                    Bank Transfer
                  </Box>
                </MenuItem>
           
              </Select>
              {errors.paymentMethod && (
                <Typography sx={{ color: '#ff5252', fontSize: '12px', mt: 0.5 }}>
                  {errors.paymentMethod}
                </Typography>
              )}
            </FormControl>
          </Grid>

          {/* Conditional Payment Fields */}
          {formData.paymentMethod === 'credit-card' && (
            <>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  placeholder="Card Holder Name *"
                  value={formData.cardHolderName}
                  onChange={handleInputChange('cardHolderName')}
                  error={!!errors.cardHolderName}
                  helperText={errors.cardHolderName}
                  FormHelperTextProps={{
                    sx: { color: errors.cardHolderName ? '#ff5252' : '#daa520' }
                  }}
                  InputProps={{
                    sx: {
                      color: 'white',
                      backgroundColor: 'rgba(26, 26, 26, 0.8)',
                      '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#daa520',
                      },
                      '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#ff8c00',
                      },
                      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#daa520',
                      },
                      '& .MuiInputBase-input': {
                        color: 'white',
                      },
                    }
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  placeholder="Card Number *"
                  value={formData.cardNumber}
                  onChange={handleInputChange('cardNumber')}
                  error={!!errors.cardNumber}
                  helperText={errors.cardNumber}
                  FormHelperTextProps={{
                    sx: { color: errors.cardNumber ? '#ff5252' : '#daa520' }
                  }}
                  InputProps={{
                    sx: {
                      color: 'white',
                      backgroundColor: 'rgba(26, 26, 26, 0.8)',
                      '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#daa520',
                      },
                      '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#ff8c00',
                      },
                      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#daa520',
                      },
                      '& .MuiInputBase-input': {
                        color: 'white',
                      },
                    }
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <Box sx={{ display: 'flex', gap: 4}}>
                  <TextField
                    fullWidth
                    placeholder="Expiry (MM/YY) *"
                    value={formData.cardExpiry}
                    onChange={handleInputChange('cardExpiry')}
                    error={!!errors.cardExpiry}
                    helperText={errors.cardExpiry}
                    FormHelperTextProps={{
                      sx: { color: errors.cardExpiry ? '#ff5252' : '#daa520' }
                    }}
                    InputProps={{
                      sx: {
                        color: 'white',
                        backgroundColor: 'rgba(26, 26, 26, 0.8)',
                        '& .MuiOutlinedInput-notchedOutline': {
                          borderColor: '#daa520',
                        },
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                          borderColor: '#ff8c00',
                        },
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                          borderColor: '#daa520',
                        },
                        '& .MuiInputBase-input': {
                          color: 'white',
                        },
                      }
                    }}
                  />
                  
                  <TextField
                    fullWidth
                    placeholder="CVV *"
                    value={formData.cardCvv}
                    onChange={handleInputChange('cardCvv')}
                    error={!!errors.cardCvv}
                    helperText={errors.cardCvv}
                    FormHelperTextProps={{
                      sx: { color: errors.cardCvv ? '#ff5252' : '#daa520' }
                    }}
                    InputProps={{
                      sx: {
                        color: 'white',
                        backgroundColor: 'rgba(26, 26, 26, 0.8)',
                        '& .MuiOutlinedInput-notchedOutline': {
                          borderColor: '#daa520',
                        },
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                          borderColor: '#ff8c00',
                        },
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                          borderColor: '#daa520',
                        },
                        '& .MuiInputBase-input': {
                          color: 'white',
                        },
                      }
                    }}
                  />
                </Box>
              </Grid>
            </>
          )}

          {formData.paymentMethod === 'debit-card' && (
            <>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  placeholder="Card Holder Name *"
                  value={formData.cardHolderName}
                  onChange={handleInputChange('cardHolderName')}
                  error={!!errors.cardHolderName}
                  helperText={errors.cardHolderName}
                  FormHelperTextProps={{
                    sx: { color: errors.cardHolderName ? '#ff5252' : '#daa520' }
                  }}
                  InputProps={{
                    sx: {
                      color: 'white',
                      backgroundColor: 'rgba(26, 26, 26, 0.8)',
                      '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#daa520',
                      },
                      '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#ff8c00',
                      },
                      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#daa520',
                      },
                      '& .MuiInputBase-input': {
                        color: 'white',
                      },
                    }
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  placeholder="Debit Card Number *"
                  value={formData.cardNumber}
                  onChange={handleInputChange('cardNumber')}
                  error={!!errors.cardNumber}
                  helperText={errors.cardNumber}
                  FormHelperTextProps={{
                    sx: { color: errors.cardNumber ? '#ff5252' : '#daa520' }
                  }}
                  InputProps={{
                    sx: {
                      color: 'white',
                      backgroundColor: 'rgba(26, 26, 26, 0.8)',
                      '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#daa520',
                      },
                      '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#ff8c00',
                      },
                      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#daa520',
                      },
                      '& .MuiInputBase-input': {
                        color: 'white',
                      },
                    }
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <TextField
                    fullWidth
                    placeholder="Expiry (MM/YY) *"
                    value={formData.cardExpiry}
                    onChange={handleInputChange('cardExpiry')}
                    error={!!errors.cardExpiry}
                    helperText={errors.cardExpiry}
                    FormHelperTextProps={{
                      sx: { color: errors.cardExpiry ? '#ff5252' : '#daa520' }
                    }}
                    InputProps={{
                      sx: {
                        color: 'white',
                        backgroundColor: 'rgba(26, 26, 26, 0.8)',
                        '& .MuiOutlinedInput-notchedOutline': {
                          borderColor: '#daa520',
                        },
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                          borderColor: '#ff8c00',
                        },
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                          borderColor: '#daa520',
                        },
                        '& .MuiInputBase-input': {
                          color: 'white',
                        },
                      }
                    }}
                  />
                  
                  <TextField
                    fullWidth
                    placeholder="CVV *"
                    value={formData.cardCvv}
                    onChange={handleInputChange('cardCvv')}
                    error={!!errors.cardCvv}
                    helperText={errors.cardCvv}
                    FormHelperTextProps={{
                      sx: { color: errors.cardCvv ? '#ff5252' : '#daa520' }
                    }}
                    InputProps={{
                      sx: {
                        color: 'white',
                        backgroundColor: 'rgba(26, 26, 26, 0.8)',
                        '& .MuiOutlinedInput-notchedOutline': {
                          borderColor: '#daa520',
                        },
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                          borderColor: '#ff8c00',
                        },
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                          borderColor: '#daa520',
                        },
                        '& .MuiInputBase-input': {
                          color: 'white',
                        },
                      }
                    }}
                  />
                </Box>
              </Grid>
            </>
          )}

          {formData.paymentMethod === 'paypal' && (
            <>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  placeholder="PayPal Email *"
                  value={formData.paypalEmail}
                  onChange={handleInputChange('paypalEmail')}
                  error={!!errors.paypalEmail}
                  helperText={errors.paypalEmail}
                  FormHelperTextProps={{
                    sx: { color: errors.paypalEmail ? '#ff5252' : '#daa520' }
                  }}
                  InputProps={{
                    sx: {
                      color: 'white',
                      backgroundColor: 'rgba(26, 26, 26, 0.8)',
                      '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#daa520',
                      },
                      '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#ff8c00',
                      },
                      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#daa520',
                      },
                      '& .MuiInputBase-input': {
                        color: 'white',
                      },
                    }
                  }}
                />
              </Grid>
            </>
          )}

          {formData.paymentMethod === 'bank-transfer' && (
            <>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  placeholder="Bank Account Number *"
                  value={formData.bankAccountNumber}
                  onChange={handleInputChange('bankAccountNumber')}
                  error={!!errors.bankAccountNumber}
                  helperText={errors.bankAccountNumber}
                  FormHelperTextProps={{
                    sx: { color: errors.bankAccountNumber ? '#ff5252' : '#daa520' }
                  }}
                  InputProps={{
                    sx: {
                      color: 'white',
                      backgroundColor: 'rgba(26, 26, 26, 0.8)',
                      '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#daa520',
                      },
                      '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#ff8c00',
                      },
                      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#daa520',
                      },
                      '& .MuiInputBase-input': {
                        color: 'white',
                      },
                    }
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  placeholder="Routing Number *"
                  value={formData.bankRoutingNumber}
                  onChange={handleInputChange('bankRoutingNumber')}
                  error={!!errors.bankRoutingNumber}
                  helperText={errors.bankRoutingNumber}
                  FormHelperTextProps={{
                    sx: { color: errors.bankRoutingNumber ? '#ff5252' : '#daa520' }
                  }}
                  InputProps={{
                    sx: {
                      color: 'white',
                      backgroundColor: 'rgba(26, 26, 26, 0.8)',
                      '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#daa520',
                      },
                      '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#ff8c00',
                      },
                      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#daa520',
                      },
                      '& .MuiInputBase-input': {
                        color: 'white',
                      },
                    }
                  }}
                />
              </Grid>
            </>
          )}

          {/* Amount Field - Common for all payment methods */}
          {(formData.paymentMethod === 'credit-card' || formData.paymentMethod === 'debit-card' || formData.paymentMethod === 'paypal' || formData.paymentMethod === 'bank-transfer') && (
            <Grid item xs={12}>
              <TextField
                fullWidth
                placeholder="Amount *"
                value={formData.amount}
                onChange={handleInputChange('amount')}
                error={!!errors.amount}
                helperText={errors.amount}
                FormHelperTextProps={{
                  sx: { color: errors.amount ? '#ff5252' : '#daa520' }
                }}
                InputProps={{
                  sx: {
                    color: 'white',
                    backgroundColor: 'rgba(26, 26, 26, 0.8)',
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#daa520',
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#ff8c00',
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#daa520',
                    },
                    '& .MuiInputBase-input': {
                      color: 'white',
                    },
                  }
                }}
              />
            </Grid>
          )}
        </Grid>

        {/* Submit Button */}
        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Button
            variant="contained"
            onClick={handleSubmit}
            sx={{
              background: 'linear-gradient(45deg, #daa520, #ff8c00)',
              color: '#0f0f0f',
              fontWeight: 'bold',
              fontSize: '16px',
              px: 6,
              py: 2,
              borderRadius: '25px',
              textTransform: 'none',
              '&:hover': {
                background: 'linear-gradient(45deg, #ff8c00, #daa520)',
                transform: 'scale(1.05)',
                boxShadow: '0 0 25px rgba(218, 165, 32, 0.8)',
              },
            }}
          >
            Go to Promo 🎁
          </Button>
        </Box>
      </Paper>

      {/* Promo Code Modal */}
      <Modal
        open={showPromoModal}
        onClose={() => setShowPromoModal(false)}
        aria-labelledby="promo-code-modal"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 500,
            bgcolor: 'linear-gradient(135deg, rgb(15, 15, 15), rgb(26, 26, 26))',
            border: '3px solid #daa520',
            borderRadius: '24px',
            boxShadow: '0 0 60px rgba(218, 165, 32, 0.6)',
            p: 5,
            textAlign: 'center',
            animation: 'modalSlideIn 0.5s ease-out',
          }}
        >
          <CheckCircle
            sx={{
              fontSize: 80,
              color: '#4caf50',
              mb: 3,
              animation: 'pulse 1.5s infinite'
            }}
          />
          
          <Typography
            variant="h4"
            sx={{
              color: '#daa520',
              fontWeight: 'bold',
              mb: 2,
              fontFamily: 'Times New Roman, serif',
              fontSize: '1.8rem',
              textShadow: '0 0 20px rgba(218, 165, 32, 0.8)'
            }}
          >
            🎉 Congratulations! 🎉
          </Typography>
          
          <Typography
            sx={{
              color: 'white',
              mb: 3,
              fontSize: '1.1rem',
              lineHeight: 1.4
            }}
          >
            Your exclusive promo code is ready!
          </Typography>
          
          <Box
            sx={{
              bgcolor: 'linear-gradient(135deg, rgba(218, 165, 32, 0.3), rgba(255, 140, 0, 0.2))',
              border: '2px solid #daa520',
              borderRadius: '16px',
              p: 3,
              mb: 3,
              position: 'relative',
              overflow: 'hidden',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '2px',
                background: 'linear-gradient(90deg, #daa520, #ff8c00, #daa520)',
                animation: 'shimmer 2s infinite',
              },
              '@keyframes shimmer': {
                '0%': { transform: 'translateX(-100%)' },
                '100%': { transform: 'translateX(100%)' },
              },
            }}
          >
            <Typography
              variant="h5"
              sx={{
                color: '#daa520',
                fontWeight: 'bold',
                fontFamily: 'monospace',
                fontSize: '1.4rem',
                letterSpacing: 3,
                textTransform: 'uppercase',
                position: 'relative',
                zIndex: 1
              }}
            >
              {generatedPromoCode}
            </Typography>
          </Box>
          
          <Typography
            sx={{
              color: '#ff8c00',
              fontSize: '0.9rem',
              mb: 4,
              opacity: 0.9
            }}
          >
            📧 This code has been sent to your email:<br/>
            <strong style={{ color: 'white' }}>{formData.email}</strong>
          </Typography>
          
          <Button
            variant="contained"
            onClick={handleSavePromoCode}
            sx={{
              background: 'linear-gradient(45deg, #daa520, #ff8c00)',
              color: '#0f0f0f',
              fontWeight: 'bold',
              fontSize: '1rem',
              px: 6,
              py: 2,
              borderRadius: '30px',
              textTransform: 'none',
              '&:hover': {
                background: 'linear-gradient(45deg, #ff8c00, #daa520)',
                transform: 'scale(1.05)',
                boxShadow: '0 0 30px rgba(218, 165, 32, 0.8)',
              },
            }}
          >
            💾 Save & Continue
          </Button>
        </Box>
      </Modal>

      {/* Contact Preference Modal */}
      <Modal
        open={showContactModal}
        onClose={() => setShowContactModal(false)}
        aria-labelledby="contact-preference-modal"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: "rgb(15, 15, 15)",
            border: '3px solid #daa520',
            borderRadius: '24px',
            boxShadow: '0 0 60px rgba(218, 165, 32, 0.6)',
            p: 5,
            textAlign: 'center',
            animation: 'modalSlideIn 0.5s ease-out',
          }}
        >
          <Typography
            variant="h5"
            sx={{
              color: '#daa520',
              fontWeight: 'bold',
              mb: 3,
              fontFamily: 'Times New Roman, serif',
              fontSize: '1.5rem'
            }}
          >
            📬 Where should we send your promo code?
          </Typography>
          
          <Typography
            sx={{
              color: 'white',
              mb: 4,
              fontSize: '1rem'
            }}
          >
            Choose how you'd like to receive your promo code:
          </Typography>
          
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Button
              variant="outlined"
              onClick={() => handleContactPreference('email')}
              sx={{
                borderColor: '#daa520',
                color: '#daa520',
                '&:hover': {
                  borderColor: '#ff8c00',
                  color: '#ff8c00',
                  backgroundColor: 'rgba(255, 140, 0, 0.1)'
                }
              }}
            >
              📧 Send to Email: {formData.email.slice(0, 3)}****@{formData.email.split('@')[1]}
            </Button>
            
            <Button
              variant="outlined"
              onClick={() => handleContactPreference('phone')}
              sx={{
                borderColor: '#daa520',
                color: '#daa520',
                '&:hover': {
                  borderColor: '#ff8c00',
                  color: '#ff8c00',
                  backgroundColor: 'rgba(255, 140, 0, 0.1)'
                }
              }}
            >
              📱 Send to Phone: *********{formData.phone.slice(-2)}
            </Button>
          </Box>
        </Box>
      </Modal>

      {/* Code Verification Modal */}
      <Modal
        open={showCodeModal}
        onClose={() => setShowCodeModal(false)}
        aria-labelledby="code-verification-modal"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 450,
         bgcolor:"rgb(15, 15, 15)",
            border: '3px solid #daa520',
            borderRadius: '24px',
            boxShadow: '0 0 60px rgba(218, 165, 32, 0.6)',
            p: 5,
            textAlign: 'center',
            animation: 'modalSlideIn 0.5s ease-out',
          }}
        >
          <Typography
            variant="h5"
            sx={{
              color: '#daa520',
              fontWeight: 'bold',
              mb: 3,
              fontFamily: 'Times New Roman, serif',
              fontSize: '1.5rem'
            }}
          >
            🔐 Enter Code 
          </Typography>
          
          <Typography
            sx={{
              color: 'white',
              mb: 4,
              fontSize: '1rem'
            }}
          >
            We've sent a code to your {contactPreference === 'email' ? 'email' : 'phone'}
          </Typography>
          
          <TextField
            fullWidth
            placeholder="Enter promo code"
            value={enteredCode}
            onChange={(e) => setEnteredCode(e.target.value)}
            sx={{
              mb: 4,
              '& .MuiOutlinedInput-root': {
                color: 'white',
                backgroundColor: 'rgba(26, 26, 26, 0.8)',
                '& fieldset': {
                  borderColor: '#daa520',
                },
                '&:hover fieldset': {
                  borderColor: '#ff8c00',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#daa520',
                },
              },
              '& .MuiInputBase-input': {
                color: 'white',
              },
            }}
          />
          
          <Button
            variant="contained"
            onClick={handleCodeSubmit}
            sx={{
              background: 'linear-gradient(45deg, #daa520, #ff8c00)',
              color: '#0f0f0f',
              fontWeight: 'bold',
              px: 6,
              py: 2,
              borderRadius: '30px',
              textTransform: 'none',
              '&:hover': {
                background: 'linear-gradient(45deg, #ff8c00, #daa520)',
                transform: 'scale(1.05)',
                boxShadow: '0 0 30px rgba(218, 165, 32, 0.8)',
              },
            }}
          >
            ✅ Verify Code
          </Button>
        </Box>
      </Modal>

      {/* Thank You Modal */}
      <Modal
        open={showThankYouModal}
        onClose={() => setShowThankYouModal(false)}
        aria-labelledby="thank-you-modal"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'linear-gradient(135deg, rgb(15, 15, 15), rgb(26, 26, 26))',
            border: '3px solid #daa520',
            borderRadius: '24px',
            boxShadow: '0 0 60px rgba(218, 165, 32, 0.6)',
            p: 5,
            textAlign: 'center',
            animation: 'modalSlideIn 0.5s ease-out',
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: '#4caf50',
              fontWeight: 'bold',
              mb: 3,
              fontFamily: 'Times New Roman, serif',
              fontSize: '2rem'
            }}
          >
            🎉 Thank You!
          </Typography>
          
          <Typography
            sx={{
              color: 'white',
              mb: 4,
              fontSize: '1.1rem'
            }}
          >
            Your promo code has been verified successfully!
          </Typography>
          
          <Button
            variant="contained"
            onClick={handleThankYouOk}
            sx={{
              background: 'linear-gradient(45deg, #4caf50, #45a049)',
              color: 'white',
              fontWeight: 'bold',
              px: 6,
              py: 2,
              borderRadius: '30px',
              textTransform: 'none',
              '&:hover': {
                background: 'linear-gradient(45deg, #45a049, #4caf50)',
                transform: 'scale(1.05)',
                boxShadow: '0 0 30px rgba(76, 175, 80, 0.8)',
              },
            }}
          >
            👍 OK
          </Button>
        </Box>
      </Modal>

      <style>
        {`
          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.1); }
            100% { transform: scale(1); }
          }
          @keyframes modalSlideIn {
            from { 
              opacity: 0; 
              transform: translate(-50%, -50%) scale(0.8);
            }
            to { 
              opacity: 1; 
              transform: translate(-50%, -50%) scale(1);
            }
          }
        `}
      </style>
    </Box>
  );
}
