import React from 'react';
import { Box, Typography, Modal, Fade } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

const WelcomeModal = ({ open, onClose, userType, userName }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      closeAfterTransition
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'rgba(0, 0, 0, 0.95)', // Dark overlay to hide background
        backdropFilter: 'blur(8px)', // Blur background
      }}
    >
      <Fade in={open} timeout={800}>
        <Box
          sx={{
            position: 'relative',
            width: { xs: '95%', sm: '600px', md: '700px' },
            maxWidth: '800px',
            bgcolor: 'rgb(26 26 26)',
            border: '3px solid rgb(223 161 27)',
            borderRadius: '25px',
            boxShadow: '0 0 50px rgba(223, 161, 27, 0.8)',
            p: 6,
            textAlign: 'center',
            animation: 'slideIn 0.8s ease-out',
            '@keyframes slideIn': {
              from: {
                opacity: 0,
                transform: 'translateY(-80px) scale(0.7)',
              },
              to: {
                opacity: 1,
                transform: 'translateY(0) scale(1)',
              },
            },
          }}
        >
          {/* Success Icon with Animation */}
          <Box
            sx={{
              mb: 4,
              animation: 'bounce 1s ease-in-out infinite',
              '@keyframes bounce': {
                '0%, 100%': { transform: 'translateY(0)' },
                '50%': { transform: 'translateY(-15px)' },
              },
            }}
          >
            {userType === 'admin' ? (
              <AdminPanelSettingsIcon
                sx={{
                  fontSize: '120px',
                  color: 'rgb(223 161 27)',
                  filter: 'drop-shadow(0 0 20px rgba(223, 161, 27, 0.8))',
                }}
              />
            ) : (
              <CheckCircleIcon
                sx={{
                  fontSize: '120px',
                  color: 'rgb(76 175 80)',
                  filter: 'drop-shadow(0 0 20px rgba(76, 175, 80, 0.8))',
                }}
              />
            )}
          </Box>

          {/* Welcome Message */}
          <Typography
            variant="h3"
            sx={{
              fontFamily: 'Times New Roman, serif',
              fontWeight: 'bold',
              mb: 3,
              background: userType === 'admin' 
                ? 'linear-gradient(45deg, rgb(223 161 27), rgb(248 145 6))'
                : 'linear-gradient(45deg, rgb(76 175 80), rgb(129 199 132))',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              textShadow: '0 3px 6px rgba(0,0,0,0.4)',
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
            }}
          >
            {userType === 'admin' ? 'Welcome to Admin Dashboard!' : 'Thanks for Registration!'}
          </Typography>

          {/* User Name */}
          <Typography
            sx={{
              fontSize: '24px',
              color: 'rgb(208 208 208)',
              mb: 4,
              fontFamily: 'Times New Roman, serif',
            }}
          >
            Welcome, <span style={{ color: 'rgb(223 161 27)', fontWeight: 'bold' }}>{userName}</span>
          </Typography>

          {/* Success Message */}
          <Typography
            sx={{
              fontSize: '18px',
              color: 'rgb(196 208 208)',
              mb: 4,
              lineHeight: 1.8,
            }}
          >
            {userType === 'admin' 
              ? 'You now have full access to admin controls and dashboard features.'
              : 'Your account has been created successfully. Start exploring our delicious menu!'
            }
          </Typography>

          {/* Decorative Elements */}
          <Box
            sx={{
              position: 'absolute',
              top: -10,
              left: -10,
              width: '30px',
              height: '30px',
              background: 'linear-gradient(45deg, rgb(223 161 27), rgb(248 145 6))',
              borderRadius: '50%',
              opacity: 0.8,
              animation: 'pulse 2s ease-in-out infinite',
              '@keyframes pulse': {
                '0%, 100%': { transform: 'scale(1)', opacity: 0.8 },
                '50%': { transform: 'scale(1.2)', opacity: 0.4 },
              },
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              top: -10,
              right: -10,
              width: '30px',
              height: '30px',
              background: 'linear-gradient(45deg, rgb(223 161 27), rgb(248 145 6))',
              borderRadius: '50%',
              opacity: 0.8,
              animation: 'pulse 2s ease-in-out infinite 0.5s',
              '@keyframes pulse': {
                '0%, 100%': { transform: 'scale(1)', opacity: 0.8 },
                '50%': { transform: 'scale(1.2)', opacity: 0.4 },
              },
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              bottom: -10,
              left: '50%',
              transform: 'translateX(-50%)',
              width: '60px',
              height: '4px',
              background: 'linear-gradient(90deg, transparent, rgb(223 161 27), transparent)',
              borderRadius: '2px',
              animation: 'shimmer 2s ease-in-out infinite',
              '@keyframes shimmer': {
                '0%, 100%': { opacity: 0.3, transform: 'translateX(-50%) scaleX(0.5)' },
                '50%': { opacity: 1, transform: 'translateX(-50%) scaleX(1)' },
              },
            }}
          />
        </Box>
      </Fade>
    </Modal>
  );
};

export default WelcomeModal;
