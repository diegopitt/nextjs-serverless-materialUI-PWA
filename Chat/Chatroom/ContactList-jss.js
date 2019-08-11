import amber from '@material-ui/core/colors/amber';
import blue from '@material-ui/core/colors/blue';
import purple from '@material-ui/core/colors/deepPurple';
import teal from '@material-ui/core/colors/teal';
import brown from '@material-ui/core/colors/brown';
import red from '@material-ui/core/colors/red';
import { lighten, darken, fade } from '@material-ui/core/styles/colorManipulator';

const drawerWidth = 300;
const drawerHeight = 480;

const styles = theme => ({
  drawerPaper: {
    backgroundColor: '#ffffff',
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
    },
    position: 'relative',
    paddingBottom: 65,
    height: drawerHeight,
    background: '#ffffff',
    border: 'none',
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: `${theme.spacing(2)}px ${theme.spacing(1)}px`,
    position: 'relative',
  },
  clippedRight: {},
  flex: {
    display: 'flex',
    alignItems: 'center'
  },
  searchWrapper: {
    flex: 1,
    position: 'relative',
    borderRadius: '12px',
    display: 'flex',
    background: '#ffffff',
    border: `1px solid ${theme.palette.divider}`,
    marginRight: theme.spacing(0.5),
    height: theme.spacing(5),
  },
  search: {
    width: 'auto',
    height: '100%',
    top: 0,
    left: 20,
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    font: 'inherit',
    padding: `${theme.spacing(0.5)}px ${theme.spacing(2)}px ${theme.spacing(0.5)}px ${theme.spacing(6)}px`,
    border: 0,
    display: 'block',
    verticalAlign: 'middle',
    whiteSpace: 'normal',
    background: 'none',
    margin: 0, // Reset for Safari
    color: 'inherit',
    width: '100%',
    '&:focus': {
      outline: 0,
    },
  },
  total: {
    textAlign: 'center',
    fontSize: 11,
    color: '#825ebb',
    textTransform: 'uppercase'
  },
  bottomFilter: {
    position: 'absolute',
    width: '100%',
    background: 'none',
    border: 'none',
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
    },
    zIndex: 2000,
    bottom: 0,
    left: 0,
  }, 
});

export default styles;
