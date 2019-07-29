//import bgimg from "../graphics/connected_world.svg"

export default theme => ({
  root: {
    width: '350px',
    maxWidth: '100%',
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: theme.palette.background.default,
    // backgroundImage: `url(${bgimg})`,
    backgroundPositionX: 'right',
    backgroundPositionY: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    paddingBottom: '34px',
    paddingLeft: '20px',
    paddingRight: '20px',
    paddingTop: '34px'
  },
  subtitle: {
    color: theme.palette.text.secondary
  },
  content: {},
  listItem: {
    color: theme.palette.text.secondary,
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: theme.palette.background.default
    }
  },
  listItemIcon: {
    backgroundColor: 'rgba(0, 0, 0, 0.03)',
    minWidth: '42px',
    padding: '10px',
    borderRadius: '50%',
    marginRight: theme.spacing(2)
  },
  listItemTextPrimary: {
    fontSize: '14px',
    color: '#000000'
  },
  listItemTextSecondary: {
    marignTop: '4px',
    fontSize: '11px',
    color: theme.palette.text.secondary
  },
  arrowForward: {
    color: theme.palette.text.secondary,
    height: '16px',
    width: '16px'
  },
  footer: {
    paddingBottom: theme.spacing(1),
    display: 'flex',
    justifyContent: 'center'
  },
  empty: {
    textAlign: 'center',
    padding: theme.spacing(3)
  },
  emptyImageWrapper: {
    marginBottom: theme.spacing(3)
  },
  emptyImage: {
    width: '240px',
    maxWidth: '100%',
    height: 'auto'
  }
});
