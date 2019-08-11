import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Fab from '@material-ui/core/Fab';
import Badge from '@material-ui/core/Badge';
import IosNotificationsOutline from 'react-ionicons/lib/IosNotificationsOutline';
import IosMenuOutline from 'react-ionicons/lib/IosMenuOutline';
import Popover from '@material-ui/core/Popover';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import { getNotifications } from './Notifications/data.js';
import Notifications from './Notifications';
import styles from '../static/css/headerStyles';
import { sendBirdWrapper } from "../sendbird/sendBirdWrapper";


class Header extends Component {
  state = {
    open: false,
    turnDarker: false,
    notificationsPopUp: null,
    notifications: [],
    notificationsCount: 0
  };
  flagDarker = false;

  componentDidMount = async () => {
    window.addEventListener('scroll', this.handleScroll);
    const notificationsLimit = 4;
    const { notifications, notificationsCount } = await getNotifications(notificationsLimit);
    this.setState({ notifications: notifications });
    this.setState({ notificationsCount: notificationsCount });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  componentWillMount() {
  
  }
  handleScroll = () => {
    const doc = document.documentElement;
    const scroll = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    const newFlagDarker = (scroll > 30);
    if (this.flagDarker !== newFlagDarker) {
      this.setState({ turnDarker: newFlagDarker });
      this.flagDarker = newFlagDarker;
    }
  }
  render() {
    const { classes, toggleDrawerOpen, margin, position, user, sendbirdUser } = this.props;
    const { open, turnDarker, notifications } = this.state;
    const setMargin = (sidebarPosition) => {
      if (sidebarPosition === 'right-sidebar') {
        return classes.right;
      }
      return classes.left;
    };
    const handleShowNotifications = event => {
      this.setState({ notificationsPopUp: event.currentTarget });
    };

    const handleCloseNotifications = () => {
      this.setState({ notificationsPopUp: null });
    };
    const showNotifications = Boolean(this.state.notificationsPopUp);

    return (
      <AppBar className={classNames(classes.appBar, classes.floatingBar, margin && classes.appBarShift, setMargin(position), turnDarker && classes.darker)}>
        <Toolbar disableGutters={!open}>
          <Fab size="small" className={classes.menuButton} aria-label="Menu" onClick={toggleDrawerOpen}>
            <IosMenuOutline />
          </Fab>
          <div className={classes.headerProperties}>
            <Typography component="h2" className={classNames(classes.headerTitle)}>Market</Typography>
          </div>
          <IconButton aria-haspopup="true" color="inherit" className={classNames(classes.notifIcon, classes.light)} onClick={handleShowNotifications}>
            <Badge className={classes.badge} badgeContent={4} color="secondary">
              <IosNotificationsOutline color="#ffffff" />
            </Badge>
          </IconButton>
          <Button className={classes.avatarBtn} onClick={() => this.props.signout()}>
            <Avatar alt='' src={sendbirdUser ? sendbirdUser.profileUrl : user.profile_url} />
          </Button>
        </Toolbar>
        <Popover animated="false" style={{ borderRadius: 0 }} className={classes.pover} anchorEl={this.state.notificationsPopUp} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} onClose={handleCloseNotifications} open={showNotifications} transformOrigin={{ vertical: 'top', horizontal: 'center' }}>
          <Notifications notifications={notifications} onSelect={handleCloseNotifications} />
        </Popover>
      </AppBar>
    );
  }
}
export default withStyles(styles)(sendBirdWrapper(Header));
