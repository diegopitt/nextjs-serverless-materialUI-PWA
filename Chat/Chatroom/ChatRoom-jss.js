const styles = theme => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    color: '#825ebb',
    backgroundColor:'#ffffff'
  },
  avatar: {},
  from: {
    '& time': {
      left: 60,
    },
    '& $avatar': {
      marginRight: 20
    },
    '& $talk': {
      '& > p': {
        '& span': {
          backgroundColor: '#825ebb',
          color: '#ffffff',
          boxShadow: theme.shadows[1]
        },
        '&:first-child': {
          '& span': {
            borderTopLeftRadius: 0,
          },
          '&:after': {
            content: '""',
            borderRight: '10px solid #825ebb',
            borderBottom: '15px solid transparent',
            position: 'absolute',
            left: -9,
            top: 0
          },
        }
      }
    }
  },
  to: {
    flexDirection: 'row-reverse',
    '& time': {
      right: 60,
    },
    '& $avatar': {
      marginLeft: 20
    },
    '& $talk': {
      textAlign: 'right',
      '& > p': {
        '& span': {
          textAlign: 'left',
          backgroundColor: '#efefef',
          boxShadow: 'none'
        },
        '&:first-child': {
          '& span': {
            borderTopRightRadius: 0,
          },
          '&:after': {
            content: '""',
            borderLeft: '10px solid #efefef',
            borderBottom: '15px solid transparent',
            position: 'absolute',
            right: -9,
            top: 0
          },
        }
      }
    }
  },
  talk: {
    flex: 1,
    '& p': {
      marginBottom: 10,
      position: 'relative',
      '& span': {
        padding: 10,
        borderRadius: 10,
        display: 'inline-block'
      }
    }
  },
  content: {
    flexGrow: 1,
    transition: 'left 0.4s ease-out, opacity 0.4s ease-out',
    [theme.breakpoints.down('xs')]: {
      left: '100%',
      top: 0,
      opacity: 0,
      position: 'absolute',
      zIndex: 10000,
      width: '100%',
      height: '100%',
    }
  },
  detailPopup: {
    [theme.breakpoints.down('xs')]: {
      left: 0,
      opacity: 1,
    }
  },
  chatList: {
    padding: `${theme.spacing(6)}px ${theme.spacing(3)}px`,
    overflow: 'auto',
    minHeight: 'calc(100% - 100px)',
    marginTop: 95,
    [theme.breakpoints.up('md')]: {
      marginTop: 120,
    },
    '& li': {
      marginBottom: theme.spacing(6),
      display: 'flex',
      position: 'relative',
      '& time': {
        position: 'absolute',
        top: -20,
        //background: fade('#825ebb', 0.75),
        color: '#825ebb',
        fontSize: 11
      }
    },
  },
  writeMessage: {
    bottom: 90,
    display: 'flex',
    backgroundColor: '#ffffff',
    minHeight: 55,
    margin: '0 16px',
    alignItems: 'center',
    padding: '0 10px',
    borderRadius: 50,
    boxShadow: 'none',
    border: `1px solid #e6ebf1`,
    position: 'relative',
    '& > div:first-child': {
      height: '100%',
      flex: 1,
    },
    '& input': {
      color: '#825ebb',
      background: 'transparent',
      width: '100%',
      height: '100%',
      margin: 0,
      padding: '2px 20px 2px 2px',
      boxSizing: 'border-box',
      border: 'none',
      boxShadow: 'none',
      outline: 'none'
    }
  }
});

export default styles;
