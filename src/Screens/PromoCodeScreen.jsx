import React, { useState } from 'react';
import {
  Box, Typography, TextField, Button, Modal, Grid,
  IconButton, FormControl, Select, MenuItem
} from '@mui/material';
import { ArrowBack, CheckCircle, CreditCard, Wallet, LocalOffer } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

// Reusable styled input props
const inputSx = {
  color: 'white',
  backgroundColor: 'rgba(20, 20, 20, 0.9)',
  borderRadius: '10px',
  '& .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(218,165,32,0.5)' },
  '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: '#ff8c00' },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#daa520', borderWidth: 2 },
  '& .MuiInputBase-input': { color: 'white' },
  '& .MuiInputBase-input::placeholder': { color: 'rgba(255,255,255,0.4)' },
};

const StyledField = ({ placeholder, value, onChange, error, helperText, type = 'text' }) => (
  <TextField
    fullWidth
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    error={!!error}
    helperText={helperText}
    type={type}
    FormHelperTextProps={{ sx: { color: error ? '#ff5252' : 'rgba(218,165,32,0.7)', ml: 0.5 } }}
    InputProps={{ sx: inputSx }}
  />
);

const modalWrapSx = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100vw',
  height: '100vh',
  px: 2,
  boxSizing: 'border-box',
  outline: 'none',
};

const modalBoxSx = {
  width: '100%',
  maxWidth: 420,
  background: 'linear-gradient(145deg, #0f0f0f, #1a1a1a)',
  border: '2px solid rgba(218,165,32,0.7)',
  borderRadius: '24px',
  boxShadow: '0 0 60px rgba(218,165,32,0.3), 0 20px 60px rgba(0,0,0,0.8)',
  p: { xs: 3, sm: 5 },
  textAlign: 'center',
  animation: 'modalIn 0.4s cubic-bezier(0.34,1.56,0.64,1) forwards',
  outline: 'none',
};

export default function PromoCodeScreen() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '', lastName: '', fatherName: '',
    email: '', phone: '', city: '', postalCode: '',
    paymentMethod: '', cardNumber: '', cardExpiry: '',
    cardCvv: '', cardHolderName: '', paypalEmail: '',
    bankAccountNumber: '', bankRoutingNumber: '', amount: ''
  });

  const [showPromoModal, setShowPromoModal] = useState(false);
  const [generatedPromoCode, setGeneratedPromoCode] = useState('');
  const [errors, setErrors] = useState({});
  const [showContactModal, setShowContactModal] = useState(false);
  const [showCodeModal, setShowCodeModal] = useState(false);
  const [showThankYouModal, setShowThankYouModal] = useState(false);
  const [enteredCode, setEnteredCode] = useState('');

  const handleInputChange = (field) => (e) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: '' }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.fatherName.trim()) newErrors.fatherName = 'Father name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    else if (!/^\d{10,11}$/.test(formData.phone.replace(/[^0-9]/g, ''))) newErrors.phone = 'Phone must be 10-11 digits';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.paymentMethod.trim()) newErrors.paymentMethod = 'Payment method is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const generatePromoCode = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let code = 'PROMO-';
    for (let i = 0; i < 8; i++) code += chars.charAt(Math.floor(Math.random() * chars.length));
    return code;
  };

  const handleSubmit = () => { if (validateForm()) setShowContactModal(true); };

  const handleSavePromoCode = () => {
    localStorage.setItem('userPromoCode', generatedPromoCode);
    localStorage.setItem('promoUserDetails', JSON.stringify(formData));
    setShowPromoModal(false);
    navigate('/HomeScreen');
  };

  const handleContactPreference = () => {
    setShowContactModal(false);
    const code = generatePromoCode();
    setGeneratedPromoCode(code);
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

  const hasPayment = ['credit-card', 'debit-card', 'paypal', 'bank-transfer'].includes(formData.paymentMethod);

  return (
    <Box sx={{
      minHeight: '100vh',
      background: 'linear-gradient(160deg, #080808 0%, #111111 50%, #0a0a0a 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      p: { xs: 2, sm: 3, md: 4 },
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background glow orbs */}
      <Box sx={{
        position: 'fixed', top: '10%', left: '5%',
        width: 300, height: 300, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(218,165,32,0.06) 0%, transparent 70%)',
        pointerEvents: 'none', zIndex: 0,
      }} />
      <Box sx={{
        position: 'fixed', bottom: '15%', right: '5%',
        width: 250, height: 250, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,140,0,0.05) 0%, transparent 70%)',
        pointerEvents: 'none', zIndex: 0,
      }} />

      {/* Header */}
      <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', maxWidth: 560, mb: 3, zIndex: 1 }}>
        <IconButton
          onClick={() => navigate(-1)}
          sx={{
            color: '#daa520', mr: 2,
            background: 'rgba(218,165,32,0.08)',
            border: '1px solid rgba(218,165,32,0.2)',
            '&:hover': { background: 'rgba(218,165,32,0.15)', transform: 'scale(1.1)' },
            transition: 'all 0.2s ease',
          }}
        >
          <ArrowBack />
        </IconButton>
        <Box>
          <Typography sx={{
            fontFamily: 'Times New Roman, serif',
            fontSize: { xs: '1.1rem', md: '1.4rem' },
            background: 'linear-gradient(135deg, #daa520, #ff8c00)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            fontWeight: 'bold',
          }}>
            🎟️ Promo Membership
          </Typography>
          <Typography sx={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem' }}>
            Fill details to unlock 15% off
          </Typography>
        </Box>
      </Box>

      {/* Form Card */}
      <Box sx={{
        width: '100%', maxWidth: 560, zIndex: 1,
        background: 'linear-gradient(145deg, rgba(22,22,22,0.98), rgba(18,18,18,0.95))',
        border: '1px solid rgba(218,165,32,0.3)',
        borderRadius: '24px',
        boxShadow: '0 0 50px rgba(218,165,32,0.12), 0 20px 60px rgba(0,0,0,0.6)',
        overflow: 'hidden',
        position: 'relative',
      }}>
        {/* Top shimmer bar */}
        <Box sx={{
          height: 3,
          background: 'linear-gradient(90deg, transparent, #daa520, #ff8c00, #daa520, transparent)',
          animation: 'shimmer 3s linear infinite',
        }} />

        <Box sx={{ p: { xs: 3, sm: 4 } }}>
          {/* Title */}
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Box sx={{
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              width: 64, height: 64, borderRadius: '50%',
              background: 'linear-gradient(135deg, rgba(218,165,32,0.2), rgba(255,140,0,0.1))',
              border: '2px solid rgba(218,165,32,0.4)',
              mb: 2,
            }}>
              <LocalOffer sx={{ color: '#daa520', fontSize: 30 }} />
            </Box>
            <Typography sx={{
              fontFamily: 'Times New Roman, serif',
              fontSize: { xs: '1.1rem', md: '1.35rem' },
              color: '#ff8c00',
              fontWeight: 'bold',
              lineHeight: 1.4,
            }}>
              🎉 Get your exclusive promo code for only RS.500!
            </Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem', mt: 0.5 }}>
              Fill in all required fields marked with *
            </Typography>
          </Box>

          <Grid container spacing={2.5}>
            <Grid item xs={12} sm={6}>
              <StyledField placeholder="First Name *" value={formData.firstName}
                onChange={handleInputChange('firstName')} error={errors.firstName} helperText={errors.firstName} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <StyledField placeholder="Last Name *" value={formData.lastName}
                onChange={handleInputChange('lastName')} error={errors.lastName} helperText={errors.lastName} />
            </Grid>
            <Grid item xs={12}>
              <StyledField placeholder="Father Name *" value={formData.fatherName}
                onChange={handleInputChange('fatherName')} error={errors.fatherName} helperText={errors.fatherName} />
            </Grid>
            <Grid item xs={12}>
              <StyledField placeholder="Email Address *" type="email" value={formData.email}
                onChange={handleInputChange('email')} error={errors.email} helperText={errors.email} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <StyledField placeholder="Phone Number *" value={formData.phone}
                onChange={handleInputChange('phone')} error={errors.phone} helperText={errors.phone} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <StyledField placeholder="City *" value={formData.city}
                onChange={handleInputChange('city')} error={errors.city} helperText={errors.city} />
            </Grid>
            <Grid item xs={12}>
              <StyledField placeholder="Postal Code" value={formData.postalCode}
                onChange={handleInputChange('postalCode')} />
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
                    ...inputSx,
                    '& .MuiSelect-select': { color: formData.paymentMethod ? 'white' : 'rgba(255,255,255,0.4)' },
                    '& .MuiSvgIcon-root': { color: '#daa520' },
                  }}
                >
                  <MenuItem value="" disabled><em style={{ color: 'rgba(255,255,255,0.4)' }}>Payment Method *</em></MenuItem>
                  <MenuItem value="credit-card"><Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><CreditCard sx={{ color: '#daa520', fontSize: 18 }} />Credit Card</Box></MenuItem>
                  <MenuItem value="debit-card"><Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><CreditCard sx={{ color: '#ff8c00', fontSize: 18 }} />Debit Card</Box></MenuItem>
                  <MenuItem value="paypal"><Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><Wallet sx={{ color: '#0070ba', fontSize: 18 }} />PayPal</Box></MenuItem>
                  <MenuItem value="bank-transfer"><Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><Wallet sx={{ color: '#4caf50', fontSize: 18 }} />Bank Transfer</Box></MenuItem>
                </Select>
                {errors.paymentMethod && <Typography sx={{ color: '#ff5252', fontSize: '12px', mt: 0.5, ml: 0.5 }}>{errors.paymentMethod}</Typography>}
              </FormControl>
            </Grid>

            {/* Card fields */}
            {(formData.paymentMethod === 'credit-card' || formData.paymentMethod === 'debit-card') && (<>
              <Grid item xs={12}>
                <StyledField placeholder="Card Holder Name *" value={formData.cardHolderName}
                  onChange={handleInputChange('cardHolderName')} error={errors.cardHolderName} helperText={errors.cardHolderName} />
              </Grid>
              <Grid item xs={12}>
                <StyledField placeholder="Card Number *" value={formData.cardNumber}
                  onChange={handleInputChange('cardNumber')} error={errors.cardNumber} helperText={errors.cardNumber} />
              </Grid>
              <Grid item xs={7}>
                <StyledField placeholder="Expiry (MM/YY) *" value={formData.cardExpiry}
                  onChange={handleInputChange('cardExpiry')} error={errors.cardExpiry} helperText={errors.cardExpiry} />
              </Grid>
              <Grid item xs={5}>
                <StyledField placeholder="CVV *" value={formData.cardCvv}
                  onChange={handleInputChange('cardCvv')} error={errors.cardCvv} helperText={errors.cardCvv} />
              </Grid>
            </>)}

            {formData.paymentMethod === 'paypal' && (
              <Grid item xs={12}>
                <StyledField placeholder="PayPal Email *" type="email" value={formData.paypalEmail}
                  onChange={handleInputChange('paypalEmail')} error={errors.paypalEmail} helperText={errors.paypalEmail} />
              </Grid>
            )}

            {formData.paymentMethod === 'bank-transfer' && (<>
              <Grid item xs={12}>
                <StyledField placeholder="Bank Account Number *" value={formData.bankAccountNumber}
                  onChange={handleInputChange('bankAccountNumber')} error={errors.bankAccountNumber} helperText={errors.bankAccountNumber} />
              </Grid>
              <Grid item xs={12}>
                <StyledField placeholder="Routing Number *" value={formData.bankRoutingNumber}
                  onChange={handleInputChange('bankRoutingNumber')} error={errors.bankRoutingNumber} helperText={errors.bankRoutingNumber} />
              </Grid>
            </>)}

            {hasPayment && (
              <Grid item xs={12}>
                <StyledField placeholder="Amount (RS.500) *" value={formData.amount}
                  onChange={handleInputChange('amount')} error={errors.amount} helperText={errors.amount} />
              </Grid>
            )}
          </Grid>

          {/* Submit */}
          <Box sx={{ mt: 4, textAlign: 'center' }}>
            <Button
              variant="contained"
              onClick={handleSubmit}
              sx={{
                background: 'linear-gradient(135deg, #daa520 0%, #ff8c00 100%)',
                color: '#0a0a0a', fontWeight: 'bold', fontSize: '1rem',
                px: 6, py: 1.5, borderRadius: '30px', textTransform: 'none',
                boxShadow: '0 4px 20px rgba(218,165,32,0.4)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  background: 'linear-gradient(135deg, #ff8c00 0%, #daa520 100%)',
                  transform: 'translateY(-2px) scale(1.03)',
                  boxShadow: '0 8px 30px rgba(218,165,32,0.6)',
                },
              }}
            >
              🎁 Get My Promo Code
            </Button>
          </Box>
        </Box>
      </Box>

      {/* ── PROMO CODE MODAL ── */}
      <Modal open={showPromoModal} onClose={() => setShowPromoModal(false)}>
        <Box sx={modalWrapSx}>
          <Box sx={modalBoxSx}>
          <CheckCircle sx={{ fontSize: 70, color: '#4caf50', mb: 2, filter: 'drop-shadow(0 0 15px rgba(76,175,80,0.6))' }} />
          <Typography sx={{
            fontFamily: 'Times New Roman, serif', fontSize: '1.6rem',
            background: 'linear-gradient(135deg, #daa520, #ff8c00)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            fontWeight: 'bold', mb: 1,
          }}>🎉 Congratulations!</Typography>
          <Typography sx={{ color: 'rgba(255,255,255,0.7)', mb: 3, fontSize: '0.95rem' }}>
            Your exclusive promo code is ready!
          </Typography>
          <Box sx={{
            background: 'linear-gradient(135deg, rgba(218,165,32,0.15), rgba(255,140,0,0.08))',
            border: '2px solid rgba(218,165,32,0.6)',
            borderRadius: '16px', p: 3, mb: 3,
            boxShadow: '0 0 30px rgba(218,165,32,0.2)',
          }}>
            <Typography sx={{
              color: '#daa520', fontFamily: 'monospace', fontSize: '1.5rem',
              fontWeight: 'bold', letterSpacing: 4,
            }}>{generatedPromoCode}</Typography>
          </Box>
          <Typography sx={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', mb: 3 }}>
            📧 Sent to: <span style={{ color: '#ff8c00' }}>{formData.email}</span>
          </Typography>
          <Button onClick={handleSavePromoCode} sx={{
            background: 'linear-gradient(135deg, #daa520, #ff8c00)',
            color: '#0a0a0a', fontWeight: 'bold', px: 5, py: 1.5,
            borderRadius: '30px', textTransform: 'none', fontSize: '0.95rem',
            '&:hover': { background: 'linear-gradient(135deg, #ff8c00, #daa520)', transform: 'scale(1.05)' },
          }}>💾 Save & Continue</Button>
        </Box>
        </Box>
      </Modal>

      {/* ── CONTACT PREFERENCE MODAL ── */}
      <Modal open={showContactModal} onClose={() => setShowContactModal(false)}>
        <Box sx={modalWrapSx}>
          <Box sx={modalBoxSx}>
          <Typography sx={{
            fontFamily: 'Times New Roman, serif', fontSize: '1.4rem',
            color: '#daa520', fontWeight: 'bold', mb: 1,
          }}>📬 Send Your Code</Typography>
          <Typography sx={{ color: 'rgba(255,255,255,0.6)', mb: 3, fontSize: '0.9rem' }}>
            Choose how you'd like to receive your promo code:
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {[
              { label: `📧 Email: ${formData.email?.slice(0, 3)}****@${formData.email?.split('@')[1] || ''}`, val: 'email' },
              { label: `📱 Phone: *******${formData.phone?.slice(-2)}`, val: 'phone' },
            ].map(opt => (
              <Button key={opt.val} onClick={() => handleContactPreference(opt.val)} sx={{
                border: '1.5px solid rgba(218,165,32,0.4)', color: 'rgba(255,255,255,0.8)',
                borderRadius: '12px', py: 1.5, textTransform: 'none', fontSize: '0.9rem',
                background: 'rgba(218,165,32,0.05)',
                '&:hover': {
                  border: '1.5px solid #daa520', color: '#daa520',
                  background: 'rgba(218,165,32,0.12)', transform: 'translateY(-1px)',
                },
                transition: 'all 0.2s ease',
              }}>{opt.label}</Button>
            ))}
          </Box>
          </Box>
        </Box>
      </Modal>

      {/* ── CODE VERIFICATION MODAL ── */}
      <Modal open={showCodeModal} onClose={() => setShowCodeModal(false)}>
        <Box sx={modalWrapSx}>
          <Box sx={modalBoxSx}>
          <Typography sx={{
            fontFamily: 'Times New Roman, serif', fontSize: '1.4rem',
            color: '#daa520', fontWeight: 'bold', mb: 1,
          }}>🔐 Verify Your Code</Typography>
          <Typography sx={{ color: 'rgba(255,255,255,0.6)', mb: 1, fontSize: '0.9rem' }}>
            We sent a verification code. Enter it below:
          </Typography>
          <Box sx={{
            background: 'rgba(218,165,32,0.08)', border: '1px solid rgba(218,165,32,0.3)',
            borderRadius: '12px', p: 2, mb: 3,
          }}>
            <Typography sx={{ color: '#daa520', fontFamily: 'monospace', fontSize: '1.1rem', letterSpacing: 3 }}>
              {generatedPromoCode}
            </Typography>
          </Box>
          <TextField
            fullWidth
            placeholder="Enter verification code"
            value={enteredCode}
            onChange={(e) => setEnteredCode(e.target.value)}
            sx={{ mb: 3 }}
            InputProps={{ sx: inputSx }}
          />
          <Button onClick={handleCodeSubmit} sx={{
            background: 'linear-gradient(135deg, #daa520, #ff8c00)',
            color: '#0a0a0a', fontWeight: 'bold', px: 5, py: 1.5,
            borderRadius: '30px', textTransform: 'none',
            '&:hover': { background: 'linear-gradient(135deg, #ff8c00, #daa520)', transform: 'scale(1.05)' },
          }}>✅ Verify</Button>
          </Box>
        </Box>
      </Modal>

      {/* ── THANK YOU MODAL ── */}
      <Modal open={showThankYouModal} onClose={() => setShowThankYouModal(false)}>
        <Box sx={modalWrapSx}>
          <Box sx={modalBoxSx}>
          <Typography sx={{ fontSize: '3rem', mb: 2 }}>🎊</Typography>
          <Typography sx={{
            fontFamily: 'Times New Roman, serif', fontSize: '1.6rem',
            background: 'linear-gradient(135deg, #daa520, #ff8c00)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            fontWeight: 'bold', mb: 1,
          }}>Thank You!</Typography>
          <Typography sx={{ color: 'rgba(255,255,255,0.6)', mb: 3, fontSize: '0.95rem' }}>
            You're now a VIP Promo Member. Enjoy 15% off on every order!
          </Typography>
          <Button onClick={handleThankYouOk} sx={{
            background: 'linear-gradient(135deg, #daa520, #ff8c00)',
            color: '#0a0a0a', fontWeight: 'bold', px: 5, py: 1.5,
            borderRadius: '30px', textTransform: 'none',
            '&:hover': { background: 'linear-gradient(135deg, #ff8c00, #daa520)', transform: 'scale(1.05)' },
          }}>🎁 View My Code</Button>
          </Box>
        </Box>
      </Modal>

      <style>{`
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes modalIn {
          from { opacity: 0; transform: scale(0.85); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </Box>
  );
}
