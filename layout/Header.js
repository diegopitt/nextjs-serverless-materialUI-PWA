import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Fab from '@material-ui/core/Fab';
import LogoNodejs from 'react-ionicons/lib/LogoNodejs';
import Badge from '@material-ui/core/Badge';
import IosNotificationsOutline from 'react-ionicons/lib/IosNotificationsOutline';
import IosMenuOutline from 'react-ionicons/lib/IosMenuOutline';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import styles from '../static/css/headerStyles';

class Header extends Component {
  state = {
    open: false,
    turnDarker: false,
  };
  flagDarker = false;
  flagTitle = false;

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const doc = document.documentElement;
    const scroll = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    const newFlagDarker = (scroll > 30);
    const newFlagTitle = (scroll > 40);
    if (this.flagDarker !== newFlagDarker) {
      this.setState({ turnDarker: newFlagDarker });
      console.log(newFlagDarker)
      this.flagDarker = newFlagDarker;
    }
  }
  render() {
    const { classes, toggleDrawerOpen, margin, position } = this.props;
    const { open, turnDarker } = this.state;

    const setMargin = (sidebarPosition) => {
      if (sidebarPosition === 'right-sidebar') {
        return classes.right;
      }
      return classes.left;
    };

    return (
      <AppBar className={classNames(classes.appBar, classes.floatingBar, margin && classes.appBarShift, setMargin(position), turnDarker && classes.darker)}>
        <Toolbar disableGutters={!open}>
          <Fab size="small" className={classes.menuButton} aria-label="Menu" onClick={toggleDrawerOpen}>
            <IosMenuOutline />
          </Fab>
          <div className={classes.headerProperties}>
            <Typography component="h2" className={classNames(classes.headerTitle)}>
              Market
            </Typography>
          </div>
          <IconButton aria-haspopup="true" color="inherit" className={classNames(classes.notifIcon, classes.light)}>
            <Badge className={classes.badge} badgeContent={4} color="secondary">
              <IosNotificationsOutline />
            </Badge>
          </IconButton>
          <Button>
            <Avatar alt="" src="" />
          </Button>
        </Toolbar>
      </AppBar>
    );
  }
}
export default withStyles(styles)(Header);