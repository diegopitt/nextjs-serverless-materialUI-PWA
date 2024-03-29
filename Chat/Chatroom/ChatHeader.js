import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
//import MoreVertIcon from '@material-ui/icons/MoreVert';
//import ArrowBack from '@material-ui/icons/ArrowBack';
import { sendBirdWrapper } from "../sendbird/sendBirdWrapper";
import styles from './ChatHeader-jss';

const optionsOpt = [
  'Delete Conversation',
  'Option 1',
  'Option 2',
  'Option 3',
];
const ITEM_HEIGHT = 48;

class ChatHeader extends React.Component {
  state = {
    anchorElOpt: null,
  };

  handleClickOpt = event => {
    this.setState({ anchorElOpt: event.currentTarget });
  };

  handleCloseOpt = () => {
    this.setState({ anchorElOpt: null });
  };

  handleRemove = (person) => {
    const { remove } = this.props;
    remove(person);
  }

  render() {
    const { classes, user, chatSelected, showMobileDetail, hideDetail } = this.props;
    console.log(user);
    const { anchorElOpt } = this.state;
    return (
      <AppBar position="absolute" className={classNames(classes.appBar, classes.fixHeight, classes.appBarShift)}>
        <div className={classes.cover}>
          {showMobileDetail && (
            <IconButton
              aria-label="open drawer"
              onClick={() => hideDetail()}
              className={classes.navIconHide}
            >
              {/* <ArrowBack /> */}
              icon
            </IconButton>
          )}
          <Avatar alt="avatar" src={user.profile_url} className={classes.avatar} />
          {user.profileUrl}
          <Typography variant="h6" component="h2" color="inherit" noWrap>
            <div>Diego Mares</div>
            <Typography variant="caption" className={classes.status} color="inherit" noWrap>
              <span className={classes.online} />
              &nbsp;Online
            </Typography>
          </Typography>
          <IconButton
            aria-label="More"
            aria-owns={anchorElOpt ? 'long-menu' : null}
            aria-haspopup="true"
            className={classes.button}
            onClick={this.handleClickOpt}
          >
            {/* <MoreVertIcon color="inherit" /> */}
          </IconButton>
          <Menu
            id="long-menu"
            anchorEl={anchorElOpt}
            open={Boolean(anchorElOpt)}
            onClose={this.handleCloseOpt}
            PaperProps={{
              style: {
                maxHeight: ITEM_HEIGHT * 4.5,
                width: 200,
              },
            }}
          >
            {optionsOpt.map(option => {
              if (option === 'Delete Conversation') {
                return (
                  <MenuItem key={option} onClick={this.handleRemove}>
                    {option}
                  </MenuItem>
                );
              }
              return (
                <MenuItem key={option} selected={option === 'Edit Profile'} onClick={this.handleCloseOpt}>
                  {option}
                </MenuItem>
              );
            })}
          </Menu>
        </div>
      </AppBar>
    );
  }
}

// ChatHeader.propTypes = {
//   classes: PropTypes.object.isRequired,
//   showMobileDetail: PropTypes.bool.isRequired,
//   hideDetail: PropTypes.func.isRequired,
//   remove: PropTypes.func.isRequired,
//   chatSelected: PropTypes.number.isRequired,
// };

export default withStyles(styles)(sendBirdWrapper(ChatHeader));
