import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Modal,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextareaAutosize,
  IconButton,
  Chip,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

const AddDealModal = ({ open, onClose, onAddDeal }) => {
  const [dealData, setDealData] = useState({
    title: '',
    description: '',
    discountType: 'percentage',
    discountValue: '',
    minOrderAmount: '',
    maxDiscount: '',
    validFrom: '',
    validTo: '',
    status: 'Active',
  });

  const handleChange = (field) => (e) => {
    setDealData(prev => ({
      ...prev,
      [field]: e.target.value
    }));
  };

  const handleSubmit = () => {
    // Basic validation
    if (!dealData.title || !dealData.discountValue) {
      alert('Please fill in all required fields');
      return;
    }

    // Add the deal
    onAddDeal({
      ...dealData,
      id: Date.now(),
      createdAt: new Date().toISOString().split('T')[0],
    });

    // Reset form
    setDealData({
      title: '',
      description: '',
      discountType: 'percentage',
      discountValue: '',
      minOrderAmount: '',
      maxDiscount: '',
      validFrom: '',
      validTo: '',
      status: 'Active',
    });

    onClose();
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          width: { xs: '90%', sm: '600px' },
          maxHeight: '90vh',
          overflowY: 'auto',
          bgcolor: 'rgb(26 26 26)',
          border: '2px solid rgb(223 161 27)',
          borderRadius: '15px',
          p: 4,
          position: 'relative',
        }}
      >
        {/* Header */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 3,
            pb: 2,
            borderBottom: '1px solid rgb(65 54 27)',
          }}
        >
          <Typography
            sx={{
              color: 'rgb(223 161 27)',
              fontSize: '24px',
              fontWeight: 'bold',
              fontFamily: 'Times New Roman, serif',
              display: 'flex',
              alignItems: 'center',
              gap: 2,
            }}
          >
            <LocalOfferIcon />
            Add New Deal
          </Typography>
          <IconButton
            onClick={onClose}
            sx={{
              color: 'rgb(208 208 208)',
              '&:hover': {
                color: 'rgb(223 161 27)',
                bgcolor: 'rgba(223, 161, 27, 0.1)',
              },
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>

        {/* Form Fields */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          {/* Deal Title */}
          <TextField
            label="Deal Title *"
            variant="outlined"
            fullWidth
            value={dealData.title}
            onChange={handleChange('title')}
            InputLabelProps={{
              sx: {
                color: 'rgb(208 208 208)',
                '&.Mui-focused': { color: 'rgb(223 161 27)' },
              },
            }}
            InputProps={{
              sx: {
                color: 'white',
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'rgb(84 68 28)',
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'rgb(223 161 27)',
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'rgb(223 161 27)',
                },
              },
            }}
          />

          {/* Description */}
          <TextField
            label="Description"
            variant="outlined"
            fullWidth
            multiline
            rows={3}
            value={dealData.description}
            onChange={handleChange('description')}
            placeholder="Describe your deal..."
            InputLabelProps={{
              sx: {
                color: 'rgb(208 208 208)',
                '&.Mui-focused': { color: 'rgb(223 161 27)' },
              },
            }}
            InputProps={{
              sx: {
                color: 'white',
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'rgb(84 68 28)',
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'rgb(223 161 27)',
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'rgb(223 161 27)',
                },
              },
            }}
          />

          {/* Discount Type and Value */}
          <Box sx={{ display: 'flex', gap: 2 }}>
            <FormControl
              sx={{
                flex: 1,
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'rgb(84 68 28)',
                  },
                  '&:hover fieldset': {
                    borderColor: 'rgb(223 161 27)',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'rgb(223 161 27)',
                  },
                },
              }}
            >
              <InputLabel
                sx={{
                  color: 'rgb(208 208 208)',
                  '&.Mui-focused': { color: 'rgb(223 161 27)' },
                }}
              >
                Discount Type
              </InputLabel>
              <Select
                value={dealData.discountType}
                onChange={handleChange('discountType')}
                label="Discount Type"
                sx={{
                  color: 'white',
                  '& .MuiSvgIcon-root': {
                    color: 'rgb(223 161 27)',
                  },
                }}
              >
                <MenuItem value="percentage">Percentage (%)</MenuItem>
                <MenuItem value="fixed">Fixed Amount (Rs)</MenuItem>
              </Select>
            </FormControl>

            <TextField
              label="Discount Value *"
              variant="outlined"
              fullWidth
              value={dealData.discountValue}
              onChange={handleChange('discountValue')}
              placeholder={dealData.discountType === 'percentage' ? 'e.g., 10' : 'e.g., 100'}
              InputLabelProps={{
                sx: {
                  color: 'rgb(208 208 208)',
                  '&.Mui-focused': { color: 'rgb(223 161 27)' },
                },
              }}
              InputProps={{
                sx: {
                  color: 'white',
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'rgb(84 68 28)',
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'rgb(223 161 27)',
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'rgb(223 161 27)',
                  },
                },
              }}
            />
          </Box>

          {/* Min Order and Max Discount */}
          <Box sx={{ display: 'flex', gap: 2 }}>
            <TextField
              label="Min Order Amount (Rs)"
              variant="outlined"
              fullWidth
              value={dealData.minOrderAmount}
              onChange={handleChange('minOrderAmount')}
              placeholder="e.g., 500"
              InputLabelProps={{
                sx: {
                  color: 'rgb(208 208 208)',
                  '&.Mui-focused': { color: 'rgb(223 161 27)' },
                },
              }}
              InputProps={{
                sx: {
                  color: 'white',
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'rgb(84 68 28)',
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'rgb(223 161 27)',
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'rgb(223 161 27)',
                  },
                },
              }}
            />

            <TextField
              label="Max Discount (Rs)"
              variant="outlined"
              fullWidth
              value={dealData.maxDiscount}
              onChange={handleChange('maxDiscount')}
              placeholder="e.g., 200"
              InputLabelProps={{
                sx: {
                  color: 'rgb(208 208 208)',
                  '&.Mui-focused': { color: 'rgb(223 161 27)' },
                },
              }}
              InputProps={{
                sx: {
                  color: 'white',
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'rgb(84 68 28)',
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'rgb(223 161 27)',
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'rgb(223 161 27)',
                  },
                },
              }}
            />
          </Box>

          {/* Valid From and To */}
          <Box sx={{ display: 'flex', gap: 2 }}>
            <TextField
              label="Valid From"
              variant="outlined"
              fullWidth
              type="date"
              value={dealData.validFrom}
              onChange={handleChange('validFrom')}
              InputLabelProps={{
                sx: {
                  color: 'rgb(208 208 208)',
                  '&.Mui-focused': { color: 'rgb(223 161 27)' },
                },
              }}
              InputProps={{
                sx: {
                  color: 'white',
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'rgb(84 68 28)',
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'rgb(223 161 27)',
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'rgb(223 161 27)',
                  },
                  '& input': {
                    color: 'white',
                  },
                },
              }}
            />

            <TextField
              label="Valid To"
              variant="outlined"
              fullWidth
              type="date"
              value={dealData.validTo}
              onChange={handleChange('validTo')}
              InputLabelProps={{
                sx: {
                  color: 'rgb(208 208 208)',
                  '&.Mui-focused': { color: 'rgb(223 161 27)' },
                },
              }}
              InputProps={{
                sx: {
                  color: 'white',
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'rgb(84 68 28)',
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'rgb(223 161 27)',
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'rgb(223 161 27)',
                  },
                  '& input': {
                    color: 'white',
                  },
                },
              }}
            />
          </Box>

          {/* Status */}
          <FormControl
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'rgb(84 68 28)',
                },
                '&:hover fieldset': {
                  borderColor: 'rgb(223 161 27)',
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'rgb(223 161 27)',
                },
              },
            }}
          >
            <InputLabel
              sx={{
                color: 'rgb(208 208 208)',
                '&.Mui-focused': { color: 'rgb(223 161 27)' },
              }}
            >
              Status
            </InputLabel>
            <Select
              value={dealData.status}
              onChange={handleChange('status')}
              label="Status"
              sx={{
                color: 'white',
                '& .MuiSvgIcon-root': {
                  color: 'rgb(223 161 27)',
                },
              }}
            >
              <MenuItem value="Active">Active</MenuItem>
              <MenuItem value="Inactive">Inactive</MenuItem>
              <MenuItem value="Scheduled">Scheduled</MenuItem>
            </Select>
          </FormControl>

          {/* Action Buttons */}
          <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
            <Button
              variant="outlined"
              onClick={onClose}
              fullWidth
              sx={{
                borderColor: 'rgb(223 161 27)',
                color: 'rgb(223 161 27)',
                '&:hover': {
                  borderColor: 'rgb(223 161 27)',
                  bgcolor: 'rgba(223, 161 27, 0.1)',
                },
              }}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              onClick={handleSubmit}
              fullWidth
              sx={{
                bgcolor: 'rgb(223 161 27)',
                color: 'black',
                fontWeight: 'bold',
                '&:hover': {
                  bgcolor: 'rgb(248 145 6)',
                },
              }}
            >
              Add Deal
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default AddDealModal;
