import React, { useState, useRef } from 'react';
import {
  Box,
  Chip,
  Badge,
  Popover,
  Paper,
  TextField,
  Typography,
  MenuList,
  MenuItem,
  Checkbox,
  Divider,
  IconButton,
  InputAdornment,
} from '@mui/material';
import {
  InfoOutlined as InfoIcon,
  Close as CloseIcon,
  Clear as ClearIcon,
} from '@mui/icons-material';

const CloseFilled = (props) => <CloseIcon {...props} />;

const FilterChip = ({
  label = 'Filter default',
  badgeCount = 0,
  options = [],
  onSelectionChange,
  onClose
}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [searchValue, setSearchValue] = useState('');
  const [selectedOptions, setSelectedOptions] = useState(
    options.filter(option => option.checked)
  );
  const chipRef = useRef(null);

  const isOpen = Boolean(anchorEl);
  const selectedCount = selectedOptions.length;

  const handleChipClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSearchValue('');
  };

  const handleOptionToggle = (option) => {
    const isSelected = selectedOptions.find(selected => selected.id === option.id);
    let newSelectedOptions;
    
    if (isSelected) {
      newSelectedOptions = selectedOptions.filter(selected => selected.id !== option.id);
    } else {
      newSelectedOptions = [...selectedOptions, option];
    }
    
    setSelectedOptions(newSelectedOptions);
    onSelectionChange?.(newSelectedOptions);
  };

  const handleRemoveSelected = (optionId) => {
    const newSelectedOptions = selectedOptions.filter(selected => selected.id !== optionId);
    setSelectedOptions(newSelectedOptions);
    onSelectionChange?.(newSelectedOptions);
  };

  const handleReset = () => {
    setSelectedOptions([]);
    onSelectionChange?.([]);
  };

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const clearSearch = () => {
    setSearchValue('');
  };

  const filteredOptions = options.filter(option =>
    option.label.toLowerCase().includes(searchValue.toLowerCase())
  );

  const hasNoResults = searchValue && filteredOptions.length === 0;

  return (
    <>
      <Chip
        ref={chipRef}
        label={
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.25, width: '100%', minWidth: 0 }}>
            <Typography
              variant="body2"
              sx={{
                fontSize: '13px',
                fontWeight: 400,
                lineHeight: '18px',
                letterSpacing: 0,
                color: 'text.primary',
                px: 0.5,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                flex: '0 1 auto',
                minWidth: 0,
              }}
            >
              {label}
            </Typography>
            <InfoIcon sx={{ fontSize: 24, color: 'rgb(95,95,95)', ml: '8px' }} />
            <Box sx={{ ml: 'auto', display: 'flex', alignItems: 'center' }}>
              <CloseFilled sx={{ fontSize: 24, color: 'rgb(95,95,95)' }} />
            </Box>
          </Box>
        }
        onClick={handleChipClick}
        onDelete={onClose}
        deleteIcon={
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.25 }}>
            {badgeCount > 0 && (
              <Badge
                badgeContent={badgeCount}
                sx={{
                  '& .MuiBadge-badge': {
                    backgroundColor: 'primary.main',
                    color: 'primary.contrastText',
                    fontSize: '12px',
                    fontWeight: 500,
                    lineHeight: '20px',
                    letterSpacing: '0.14px',
                    minWidth: '20px',
                    height: '20px',
                    borderRadius: '100px',
                    padding: '0 6.5px',
                  },
                }}
              />
            )}
            <CloseIcon sx={{ fontSize: '24px', color: 'rgba(23,26,28,0.26)', ml: 0.5 }} />
          </Box>
        }
        variant="outlined"
        sx={{
          height: '32px',
          borderRadius: '100px',
          border: '1px solid',
          borderColor: 'grey.300',
          backgroundColor: 'grey.100',
          '& .MuiChip-label': {
            padding: '4px 4px',
            gap: '2px',
          },
          '& .MuiChip-deleteIcon': {
            margin: 0,
            padding: '0 4px 0 0',
          },
          '&:hover': {
            backgroundColor: 'grey.100',
          },
        }}
      />

      <Popover
        open={isOpen}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        PaperProps={{ sx: { marginTop: '4px', width: '420px', maxWidth: '90vw' } }}
      >
        <Paper
          elevation={8}
          sx={{
            borderRadius: '8px',
            boxShadow: '0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 2px 4px -1px rgba(0, 0, 0, 0.20)',
          }}
        >
          <Box sx={{ p: 2 }}>
            {/* Search Field */}
            <TextField
              fullWidth
              size="small"
              label="Custom Filter chip for FBO One"
              value={searchValue}
              onChange={handleSearchChange}
              variant="outlined"
              InputProps={{
                endAdornment: searchValue && (
                  <InputAdornment position="end">
                    <IconButton
                      size="small"
                      onClick={clearSearch}
                      edge="end"
                    >
                      <ClearIcon sx={{ fontSize: '24px', opacity: 0.56 }} />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{
                mb: 2,
                '& .MuiOutlinedInput-root': {
                  borderRadius: '4px',
                  '& fieldset': {
                    borderColor: '#DDE7EE',
                  },
                },
                '& .MuiInputLabel-root': {
                  fontSize: '12px',
                  color: 'text.secondary',
                },
                '& .MuiInputBase-input': {
                  fontSize: '16px',
                  lineHeight: '24px',
                  letterSpacing: '0.15px',
                },
              }}
            />

            {/* No Results */}
            {hasNoResults && (
              <Typography
                variant="body2"
                sx={{
                  color: 'text.secondary',
                  fontSize: '13px',
                  lineHeight: '18px',
                  letterSpacing: '0.16px',
                  mb: 1,
                }}
              >
                No item selected
              </Typography>
            )}

            {/* Selected Items Section */}
            {selectedCount > 0 && (
              <>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      fontSize: '13px',
                      lineHeight: '18px',
                      letterSpacing: '0.16px',
                    }}
                  >
                    Selected items
                  </Typography>
                  <Typography
                    variant="body2"
                    onClick={handleReset}
                    sx={{
                      color: 'primary.main',
                      fontSize: '13px',
                      lineHeight: '18px',
                      letterSpacing: '0.16px',
                      cursor: 'pointer',
                      '&:hover': {
                        textDecoration: 'underline',
                      },
                    }}
                  >
                    Reset
                  </Typography>
                </Box>

                {/* Selected Items Chips */}
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', marginBottom: '16px' }}>
                  {selectedOptions.map((option) => (
                    <Chip
                      key={option.id}
                      tabIndex={0}
                      role="button"
                      label={option.label}
                      size="small"
                      onDelete={() => handleRemoveSelected(option.id)}
                      deleteIcon={
                        <CloseIcon sx={{ fontSize: '16px', color: 'rgba(23,26,28,0.26)' }} />
                      }
                      sx={{
                        height: '24px',
                        backgroundColor: 'rgba(235,235,235,1)',
                        padding: '3px 4px',
                        borderRadius: '100px',
                        '& .MuiChip-label': {
                          fontSize: '13px',
                          lineHeight: '18px',
                          letterSpacing: '0.16px',
                          color: 'rgba(0,0,0,0.87)',
                          padding: '0 6px',
                        },
                        '& .MuiChip-deleteIcon': {
                          fontSize: '16px',
                          margin: 0,
                        },
                      }}
                    />
                  ))}
                </Box>
              </>
            )}

            {/* Divider */}
            <Divider sx={{ margin: '16px 0', mb: 1, mt: 1 }} />

            {/* Options List */}
            <MenuList sx={{ py: 0, maxHeight: '300px', overflow: 'auto', marginTop: '16px' }}>
              {filteredOptions.map((option) => {
                const isSelected = selectedOptions.find(selected => selected.id === option.id);
                return (
                  <MenuItem
                    key={option.id}
                    onClick={() => handleOptionToggle(option)}
                    dense
                    sx={{
                      py: 0.5,
                      px: 1,
                      '&:hover': {
                        backgroundColor: 'action.hover',
                      },
                    }}
                  >
                    <Checkbox
                      checked={Boolean(isSelected)}
                      size="small"
                      sx={{
                        p: 1,
                        mr: 1,
                        '& .MuiSvgIcon-root': {
                          fontSize: '20px',
                        },
                      }}
                    />
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: '14px',
                        lineHeight: '24px',
                        letterSpacing: '0.17px',
                        color: 'text.primary',
                      }}
                    >
                      {option.label}
                    </Typography>
                  </MenuItem>
                );
              })}
            </MenuList>
          </Box>
        </Paper>
      </Popover>
    </>
  );
};

export default FilterChip;
