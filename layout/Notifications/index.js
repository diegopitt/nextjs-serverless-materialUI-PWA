import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core';
import { Button, Divider, List, ListItem, ListItemIcon, ListItemText, Typography } from '@material-ui/core';
import IosCashOutline from 'react-ionicons/lib/IosCashOutline';
import IosArrowForward from 'react-ionicons/lib/IosArrowForward';
import MdAppstore from 'react-ionicons/lib/MdAppstore';
import IosPeopleOutline from 'react-ionicons/lib/IosPeopleOutline';
import IosCodeWorking from 'react-ionicons/lib/IosCodeWorking';
import styles from '../../static/css/notificationsStyles';
//import empty from "../../static/graphics/empty.png"

const icons = {
  order: {
    icon: <IosCashOutline style={{ width: '22px', height: '22px' }} />,
    color: 'blue'
  },
  user: {
    icon: <IosPeopleOutline style={{ width: '22px', height: '22px' }} />,
    color: 'red'
  },
  product: {
    icon: <MdAppstore style={{ width: '22px', height: '22px' }} />,
    color: 'green'
  },
  feature: {
    icon: <IosCodeWorking style={{ width: '22px', height: '22px' }} />,
    color: 'purple'
  }
};

class Notifications extends Component {
  render() {
    const { className, classes, notifications, onSelect } = this.props;
    const rootClassName = classNames(classes.root, className);
    return (
      <div className={rootClassName}>
        {notifications.length > 0 ? (
          <Fragment>
            <div className={classes.header}>
              <Typography className={classes.listItemTextPrimary}>User Notifications</Typography>
              <Typography className={classes.subtitle} variant="body2">
                {notifications.length} new notifications
              </Typography>
            </div>
            <div className={classes.content}>
              <List component="div">
                {notifications.map(notification => (
                  <Fragment key={notification.id}>
                    <ListItem className={classes.listItem} component="div" onClick={onSelect}>
                      <ListItemIcon className={classes.listItemIcon} style={{ color: icons[notification.type].color, width: "42px" }}>
                        {icons[notification.type].icon}
                      </ListItemIcon>
                      <ListItemText classes={{ primary: classes.listItemTextPrimary, secondary: classes.listItemTextSecondary }} primary={notification.title} secondary={notification.when} />
                      <IosArrowForward className={classes.arrowForward} />
                    </ListItem>
                    <Divider />
                  </Fragment>
                ))}
              </List>
              <div className={classes.footer}>
                <Button size="small" to="#" variant="outlined">
                  See all
                </Button>
              </div>
            </div>
          </Fragment>
        ) : (
            <div className={classes.empty}>
              <div className={classes.emptyImageWrapper}>
                <img alt="Empty list" className={classes.emptyImage} src='' />
              </div>
              <Typography variant="h5">There's nothing here...</Typography>
            </div>
          )}
      </div>
    );
  }
}

Notifications.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  notifications: PropTypes.array.isRequired,
  onSelect: PropTypes.func
};

Notifications.defaultProps = {
  notifications: [],
  onSelect: () => { }
};

export default withStyles(styles)(Notifications);
