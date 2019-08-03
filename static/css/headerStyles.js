import { fade, darken } from '@material-ui/core/styles/colorManipulator';
const drawerWidth = 240;

const styles = theme => ({
  appBar: {
    boxShadow: 'none',
    background: theme.palette.primary.main,
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin', 'background'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    '& $menuButton': {
      color: theme.palette.primary.main,
      backgroundColor: 'transparent',
      boxShadow: 'none',
      zIndex: 10,
    },
    '&$left': {
      '& $menuButton': {
        marginLeft: 13,
      },
      '& $headerTitle': {
        left: theme.spacing(2),
      }
    },
    '&$right': {
      '& $menuButton': {
        marginRight: 13,
      },
      '& $headerTitle': {
        right: theme.spacing(2),
      },
      '& > div': {
        flexDirection: 'row-reverse'
      },
    },
  },
  pover: {
    borderRadius: 0,
  },
  floatingBar: {
    position: 'fixed'
  },
  left: {},
  badge: {},
  right: {},
  appBarShift: {
    transition: theme.transitions.create(['width', 'margin', 'background'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    '&$left': {
      '& $menuButton': {
        [theme.breakpoints.up('lg')]: {
          marginLeft: -20
        }
      },
      [theme.breakpoints.up('lg')]: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
      },
    },
    '&$right': {
      '& $menuButton': {
        [theme.breakpoints.up('lg')]: {
          marginRight: -20
        }
      },
      [theme.breakpoints.up('lg')]: {
        marginRight: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
      },
    },
    '& $menuButton': {
      backgroundColor: theme.palette.type === 'dark' ? theme.palette.primary.main : theme.palette.primary.light,
      boxShadow: 'none',
    },
    '& $headerAction': {
      marginLeft: theme.spacing(1)
    },
    '&$darker': {
      '& $menuButton': {
        color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.main,
      }
    }
  },
  darker: {
    backgroundAttachment: 'fixed',
    boxShadow: theme.shadows[3],
    '& $menuButton': {
      color: theme.palette.common.white
    }
  },
  menuButton: {},
  separatorV: {
    borderLeft: `1px solid ${theme.palette.grey[300]}`,
    height: 20,
    margin: '0 10px',
    opacity: 0.4
  },
  notifIcon: {
    '& svg': {
      width: 28,
      height: 28,
    },
  },
  rightIcon: {
    marginLeft: theme.spacing(0.5),
    opacity: 0.3
  },
  title: {
    textTransform: 'uppercase',
    marginTop: theme.spacing(3),
    display: 'block',
    color: theme.palette.secondary.main,
    lineHeight: '28px',
    fontSize: 10,
    fontWeight: 'bold',
    background: theme.palette.background.paper,
    borderRadius: '12px'
  },
  active: {},
  button: {},
  headerProperties: {
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    zIndex: 1
  },
  fadeOut: {},
  invert: {},
  headerAction: {
    margin: `0 ${theme.spacing(3)}px`,
    transition: 'opacity 0.5s ease',
    '& $button': {
      margin: `0 ${theme.spacing(1)}px / 2`,
      '& svg': {
        fill: fade(theme.palette.common.white, 0.87),
        width: 28,
        height: 28
      }
    },
    '&$fadeOut': {
      opacity: 0,
    },
    '&$invert': {
      '& $button': {
        '& svg': {
          fill: fade(theme.palette.text.primary, 0.5),
        }
      }
    }
  },
  show: {},
  avatarBtn: {
    padding: '6px 24px',
    marginLeft: '4px',
    marginRight: '8px'
  },
  headerTitle: {
    transition: 'all 0.3s ease',
    fontSize: theme.spacing(3),
    position: 'absolute',
    textTransform: 'capitalize',
    fontWeight: 700,
    top: 60,
    color: theme.palette.common.white,
    opacity: 0,
    '&$show': {
      top: theme.spacing(1),
      opacity: 0.87
    }
  },
});

export default styles;
