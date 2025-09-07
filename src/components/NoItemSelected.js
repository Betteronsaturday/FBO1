import React from 'react';
import { Box, Typography } from '@mui/material';

const NoItemSelected = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignContent: 'flex-start',
        alignItems: 'flex-start',
        alignSelf: 'stretch',
        flexWrap: 'wrap',
        fontWeight: '400',
        gap: '8px',
        position: 'relative',
        marginBottom: '8px',
        padding: '8px 16px',
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
              color: 'rgba(158,158,158,1)',
              fontSize: '13px',
              fontWeight: 400,
              letterSpacing: '0.16px',
              lineHeight: '18px',
              position: 'relative',
              textDecoration: 'rgb(95, 95, 95)',
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
