import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import classNames from 'classnames';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Tooltip from '@material-ui/core/Tooltip';
import Avatar from '@material-ui/core/Avatar';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
//import SearchIcon from '@material-ui/icons/Search';
//import PermContactCalendar from '@material-ui/icons/PermContactCalendar';
//import Add from '@material-ui/icons/Add';
//import Star from '@material-ui/icons/Star';
import IconButton from '@material-ui/core/IconButton';
import styles from './ContactList-jss';
import { sendBirdWrapper } from "../../sendbird/sendBirdWrapper";
class ContactList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: 'all'
    }
  }

  componentDidMount() {
    console.log(this.props)
  }

  handleChange = (event, value) => {
    this.setState({ filter: value });
  };

  render() {
    const { filter } = this.state;
    const { channels, openChannels, classes, itemSelected, showDetail, search, clippedRight, addContact, addFn } = this.props;
    console.log(openChannels.length);
    const list = openChannels.length > 0 ? openChannels : channels;
    console.log(channels);
      return (
      <Fragment>
        <Drawer variant="permanent" anchor="left" open classes={{ paper: classes.drawerPaper,}}>
          <div>
            <div className={classNames(classes.toolbar, clippedRight && classes.clippedRight)}>
              <div className={classes.flex}>
                <div className={classes.searchWrapper}>
                  <div className={classes.search}>
                    {/* <SearchIcon /> */}
                  </div>
                  <input className={classes.input} onChange={(event) => search(event)} placeholder="Search" />
                </div>
                  <Tooltip title="Add New Contact">
                    <IconButton className={classes.buttonAdd} onClick={() => addContact()} color="secondary" aria-label="Delete">
                      {/* <Add /> */}
                    </IconButton>
                  </Tooltip>
              </div>
            </div>
            <div className={classes.total}>
              3&nbsp;Channels
            </div>
            <List>
                {
                  list && list.map(channel => {
                    //console.log(channel);
                    return (
                      <ListItem button key={channel.url} className={classes.selectedd} onClick={() => this.props.callBack(channel.url)}>
                        <Avatar alt='' src={channel.coverUrl} className={classes.avatar} />
                        <ListItemText className={classes.channelColor} primary={channel.name} secondary={channel.participantCount + ' Participant'} />
                      </ListItem>
                    )
                  })
                }
            </List>
          </div>
        </Drawer>
        <BottomNavigation value={filter} onChange={this.handleChange} className={classes.bottomFilter}>
          <BottomNavigationAction label="All" value="all" />
          <BottomNavigationAction label="Favorites" value="favorites" />
        </BottomNavigation>
      </Fragment>
    );
  }
}

ContactList.propTypes = {
  // classes: PropTypes.object.isRequired,
  // total: PropTypes.number.isRequired,
  // keyword: PropTypes.string.isRequired,
  // itemSelected: PropTypes.number.isRequired,
  // addContact: PropTypes.func,
  // addFn: PropTypes.bool,
  // showDetail: PropTypes.func.isRequired,
  // search: PropTypes.func.isRequired,
  // clippedRight: PropTypes.bool,
};

ContactList.defaultProps = {
  clippedRight: false,
  addContact: () => { },
  addFn: false,
};

export default withStyles(styles)(sendBirdWrapper(ContactList));
