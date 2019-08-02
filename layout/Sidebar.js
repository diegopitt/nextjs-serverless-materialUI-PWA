import React, { Fragment, Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import styles from '../static/css/sidebarStyle';
import SidebarContent from './SidebarContent';

class Sidebar extends Component {
  state = {
    status: 'Online',
    anchorEl: null
  };

  handleOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleChangeStatus = status => {
    this.setState({ status });
    this.handleClose();
  }

  render() {
    const { classes, open, toggleDrawerOpen, leftSidebar, dataMenu, avatarUrl } = this.props;
    const { status, anchorEl } = this.state;
    return (
      <Fragment>
        <Hidden lgUp>
          <SwipeableDrawer onClose={toggleDrawerOpen} onOpen={toggleDrawerOpen} open={!open} anchor={leftSidebar ? 'left' : 'right'}>
            <div className={classes.swipeDrawerPaper}>
              <SidebarContent avatarUrl={avatarUrl} drawerPaper leftSidebar={leftSidebar} toggleDrawerOpen={toggleDrawerOpen} dataMenu={dataMenu} status={status} anchorEl={anchorEl} openMenuStatus={this.handleOpen} closeMenuStatus={this.handleClose} changeStatus={this.handleChangeStatus} />
            </div>
          </SwipeableDrawer>
        </Hidden>
        <Hidden mdDown>
          <Drawer variant="permanent"  onClose={toggleDrawerOpen} classes={{ paper: classNames(classes.drawer, classes.drawerPaper, !open ? classes.drawerPaperClose : ''),}} open={open} anchor={leftSidebar ? 'left' : 'right'}>
            <SidebarContent avatarUrl={avatarUrl} drawerPaper={open} leftSidebar={leftSidebar} dataMenu={dataMenu} status={status} anchorEl={anchorEl} openMenuStatus={this.handleOpen} closeMenuStatus={this.handleClose} changeStatus={this.handleChangeStatus} />
          </Drawer>
        </Hidden>
      </Fragment>
    );
  }
}

export default withStyles(styles)(Sidebar);
