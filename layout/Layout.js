import React, { Fragment, Component } from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Header from './Header';
import Sidebar from './Sidebar';
import styles from '../static/css/layoutStyles';
import { userInfo } from 'os';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerOpen: false,
    }
  }
  componentDidMount() { 
    console.log(this.props.user);
  }
  handleToggleDrawer = () => {
    if (this.state.drawerOpen) {
      this.setState({ drawerOpen: false });
    } else {
      this.setState({ drawerOpen: true });
    }

  };
  render() {
    const { classes, children, toggleDrawer } = this.props;
    console.log(this.props.user);
    return (
      <Fragment>
        <Header user={this.props.user} toggleDrawerOpen={this.handleToggleDrawer} margin={!this.state.drawerOpen}  position="left-sidebar" />
        <Sidebar user={this.props.user} open={!this.state.drawerOpen} toggleDrawerOpen={this.handleToggleDrawer} dataMenu={[]} leftSidebar  />
        <main className={classNames(classes.content, !!this.state.drawerOpen ? classes.contentPaddingLeft : '')} id="mainContent">
          <section className={classNames(classes.mainWrap, classes.sidebarLayout)}>
            <Paper className={classNames(classes.paper)} elevation={0}>
              {children}
            </Paper>
          </section>
        </main>
      </Fragment>
    );
  }
}

export default (withStyles(styles)(Layout));
