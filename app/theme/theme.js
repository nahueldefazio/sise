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
      main: '#FDEC06', // Yellow
      contrastText: '#0D0000', // Black
    },
    secondary: {
      main: '#CE2802', // Red
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#FFFFFF',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#0D0000',
      secondary: '#CE2802',
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#0D0000',
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textShadow: '1px 1px 2px rgba(0,0,0,0.2)',
          '&:hover': {
            backgroundColor: '#CE2802',
            color: '#FFFFFF',
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