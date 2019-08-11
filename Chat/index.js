import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
//import ChatRoom from "../ChatRoom/ChatRoom";
import ContactList from "./Chatroom/ContactList";
import { sendBirdWrapper } from "../sendbird/sendBirdWrapper";

const drawerHeight = 480;

const styles = theme => ({
  root: {
    width: '100%',
    flexGrow: 1,
    zIndex: 0,
    height: drawerHeight,
    overflow: 'hidden',
    position: 'relative',
    paddingBottom: '14px',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
    },
  }
});

const Index = class extends Component {
  componentWillMount() {
    const { isAuthenticated } = this.props;
    if (!isAuthenticated) return null;
  }

  componentDidMount() {
    console.log(this.props);
  }

  render() {
    const { classes, channels } = this.props;
    console.log(channels);
    return (
      <Grid container style={{ minHeight: '100vh', backgroundColor: '#825eeb' }} spacing={0} direction="column" alignItems="center" justify="center">
        <div className={classes.root}>
          <ContactList
            channels={channels}
          />
          {/* <ChatRoom
            {... this.props}
            user={this.props.user}
            showMobileDetail={true}
            chatSelected={0}
            sendMessage={null}
            remove={null}
            hideDetail={null}
          /> */}
        </div>
      </Grid>
    )
  }
}
export default withStyles(styles)(sendBirdWrapper(Index))