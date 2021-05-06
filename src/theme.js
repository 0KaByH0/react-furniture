import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#9c27b0',
      light: '#d05ce3',
      dark: '#6a0080',
    },
    secondary: {
      main: '#fbc02d',
      light: '#fff263',
      dark: '#c49000',
    },
    error: {
      light: '#e57373',
      main: '#f44336',
      dark: '#d32f2f',
    },
    warning: {
      light: '#f57f17',
      main: '#ffb04c',
      dark: '#bc5100',
    },
  },
  typography: {
    htmlFontSize: 16,
    fontFamily: 'Ubuntu, sans-serif',
    fontSize: 14,
    //fontWeightLight: 300,
    //fontWeightRegular: 400,
    //fontWeightMedium: 500,
    //fontWeightBold: 700,
    h1: {
      //fontWeight: 300,
      fontSize: '6rem',
      lineHeight: 1.167,
      letterSpacing: '-0.01562em',
    },
    h2: {
      //fontWeight: 300,
      fontSize: '3.75rem',
      lineHeight: 1.2,
      letterSpacing: '-0.00833em',
    },
    h3: {
      //fontWeight: 400,
      fontSize: '3rem', //3
      lineHeight: 1.167,
      letterSpacing: '0em',
    },
    h4: {
      //fontWeight: 400,
      fontSize: '2.125rem',
      lineHeight: 1.235,
      letterSpacing: '0.00735em',
    },
    h5: {
      //fontWeight: 400,
      fontSize: '1.5rem',
      lineHeight: 1.334,
      letterSpacing: '0em',
    },
    h6: {
      //fontWeight: 500,
      fontSize: '1.25rem',
      lineHeight: 1.6,
      letterSpacing: '0.0075em',
    },
  },
});

export default theme;
