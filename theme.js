import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  shape: {
    borderRadius: 0
  },
  palette: {
    primary: {
      main: '#825eeb',
    },
    secondary: {
      main: '#9b7eef',
    },
    grey: {
      main: '#e6ebf1',
    },
    hoverDark: {
      main: '#6440c4',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#FFFFFF',
    },
  },
});

export default theme;