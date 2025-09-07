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
