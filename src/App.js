import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import FilterChip from './components/FilterChip';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2196F3',
      contrastText: '#FFF',
    },
    text: {
      primary: '#171A1C',
      secondary: '#5F5F5F',
    },
    grey: {
      100: '#F5F5F5',
      300: '#E0E0E0',
    },
    background: {
      paper: '#FFF',
    },
    divider: 'rgba(0, 0, 0, 0.12)',
    action: {
      hover: 'rgba(0, 0, 0, 0.04)',
      selected: 'rgba(0, 0, 0, 0.08)',
    },
  },
  typography: {
    fontFamily: 'Roboto, -apple-system, Roboto, Helvetica, sans-serif',
  },
  components: {
    MuiChip: {
      styleOverrides: {
        root: {
          fontFamily: 'Roboto, -apple-system, Roboto, Helvetica, sans-serif',
        },
      },
    },
  },
});

const mockData = [
  { id: 'unassigned', label: 'Unassigned', checked: false },
  { id: 'terminal-hangar', label: 'Terminal Hangar (All 2 positions)', checked: true },
  { id: 'main-apron', label: 'Main Apron', checked: true },
  { id: 'jet-charter', label: 'Free Parking - Jet Charter', checked: true },
  { id: 'signature', label: 'Free Parking - Signature', checked: true },
  { id: 'bombardier', label: 'Free Parking - Bombardier', checked: true },
  { id: 'gat', label: 'Free Parking - GAT', checked: true },
  { id: 'paint-shop', label: 'Free Parking - Paint Shop', checked: true },
  { id: 'textron', label: 'Free Parking - Textron Aviation', checked: false },
  { id: 'vip-charter', label: 'Free Parking - VIP Charter', checked: true },
];

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Custom filter-chip for FBO One
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
            A responsive filter chip component with dropdown menu, search functionality, and multi-select capabilities.
          </Typography>
        </Box>
        
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
          <FilterChip
            label="Filter default"
            badgeCount={7}
            options={mockData}
            onSelectionChange={(selectedOptions) => {
              console.log('Selected options:', selectedOptions);
            }}
          />
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
