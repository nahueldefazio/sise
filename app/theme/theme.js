import { createTheme } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    h1: { fontFamily: 'system-ui' },
    h2: { fontFamily: 'system-ui' },
    h3: { fontFamily: 'system-ui' },
    h4: { fontFamily: 'system-ui' },
    h5: { fontFamily: 'system-ui' },
    h6: { fontFamily: 'system-ui' },
    body1: { fontFamily: 'system-ui' },
    body2: { fontFamily: 'system-ui' },
    button: { fontFamily: 'system-ui' },
  },
  palette: {
    primary: {
      main: '#ffff00', // Bright Yellow
      contrastText: '#000000', // Black
    },
    secondary: {
      main: '#ff0000', // Bright Red
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#FFFFFF',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#000000',
      secondary: '#ffff00',
    },
    success: {
      main: '#ffff00',
      contrastText: '#000000',
    },
    error: {
      main: '#ff0000',
      contrastText: '#FFFFFF',
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(0, 0, 0, 0.95)',
          borderBottom: '2px solid #ffff00',
          boxShadow: '0 2px 10px rgba(255, 255, 0, 0.3)',
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textShadow: '1px 1px 2px rgba(0,0,0,0.2)',
          fontWeight: 'bold',
          '&:hover': {
            backgroundColor: '#ff0000',
            color: '#FFFFFF',
            transform: 'translateY(-2px)',
            boxShadow: '0 4px 15px rgba(255, 0, 0, 0.3)',
          },
          transition: 'all 0.3s ease',
        },
        contained: {
          backgroundColor: '#ffff00',
          color: '#000000',
          '&:hover': {
            backgroundColor: '#ff0000',
            color: '#FFFFFF',
          },
        },
        outlined: {
          borderColor: '#ffff00',
          color: '#ffff00',
          borderWidth: 2,
          '&:hover': {
            borderColor: '#ff0000',
            backgroundColor: '#ff0000',
            color: '#FFFFFF',
            borderWidth: 2,
          },
        },
      },
    },
    MuiBox: {
      styleOverrides: {
        root: {
          fontFamily: 'system-ui',
          textShadow: '1px 1px 2px rgba(0,0,0,0.2)',
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          fontFamily: 'system-ui',
          textShadow: '1px 1px 2px rgba(0,0,0,0.2)',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          fontFamily: 'system-ui',
          textShadow: '1px 1px 2px rgba(0,0,0,0.2)',
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          textShadow: '1px 1px 2px rgba(0,0,0,0.2)',
        },
      },
    },
  },
});

export default theme;