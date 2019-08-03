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
    hoverDark: {
      main: '#6440c4',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#F2F2F2',
    },
  },
});

export default theme;