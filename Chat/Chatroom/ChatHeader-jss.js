const styles = theme => ({
  fixHeight: {},
  appBar: {
    boxShadow: 'none',
    height: 'auto',
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    '& $avatar': {
      boxShadow: 'none',
      width: 80,
      height: 80,
      marginRight: 30,
    },
    '& h2': {
      flex: 1,
      color: '#825ebb',
      '& span': {
        color: '#825ebb'
      }
    },
  },
  appBarShift: {
    marginLeft: 0,
    width: '100%',
    // transition: theme.transitions.create(['width', 'margin'], {
    //   easing: theme.transitions.easing.sharp,
    //   duration: theme.transitions.duration.enteringScreen,
    // }),
    [theme.breakpoints.down('md')]: {
      zIndex: 1300
    }
  },
  cover: {
    padding: '20px 8px',
    position: 'relative',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    '& $avatar': {
      boxShadow: 'none',
      width: 50,
      height: 50,
      marginRight: 14,
      marginLeft: 14,
    },
  },
  navIconHide: {
    marginRight: theme.spacing(1),
    paddingTop: 0,
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  },
  avatar: {
    marginRight: '14px'
  },
  online: {
    background: '#CDDC39'
  },
  status: {
    padding: '2px 6px',
    '& span': {
      borderRadius: '50%',
      display: 'inline-block',
      marginRight: 2,
      width: 10,
      height: 10,
      border: `1px solid '#ffffff'`
    }
  },
});

export default styles;
