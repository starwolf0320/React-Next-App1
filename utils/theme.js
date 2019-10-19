import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#607d8b',
    },
    secondary: {
      main: '#5c6bc0',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#e8eaf6',
    },
  },
});

export default theme;
