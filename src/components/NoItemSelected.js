import React from 'react';
import { Box, Typography } from '@mui/material';

const NoItemSelected = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        padding: '8px 16px',
        alignItems: 'flex-start',
        alignContent: 'flex-start',
        gap: '8px',
        alignSelf: 'stretch',
        flexWrap: 'wrap',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          width: '319px',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '8px',
          position: 'relative',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            position: 'relative',
          }}
        >
          <Typography
            sx={{
              color: '#5F5F5F',
              fontFamily: 'Roboto, -apple-system, Roboto, Helvetica, sans-serif',
              fontSize: '13px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: '18px',
              letterSpacing: '0.16px',
              position: 'relative',
            }}
          >
            No item selected
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default NoItemSelected;
