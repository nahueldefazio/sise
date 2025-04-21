import { createTheme } from '@mui/material';

const theme = createTheme({
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
          '&:hover': {
            backgroundColor: '#CE2802',
            color: '#FFFFFF',
          },
        },
      },
    },
  },
});

export default theme;