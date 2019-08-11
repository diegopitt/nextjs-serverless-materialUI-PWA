import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import MessageField from './MessageField'; 
import IosSendOutline from 'react-ionicons/lib/IosSendOutline';

import ChatHeader from './ChatHeader';
//import styles from './chatStyle-jss';
import styles from './ChatRoom-jss';

class ChatRoom extends React.Component {
  constructor() {
    super();
    this.state = {
      message: '',
      enterChannel: false,
      openChannelListQuery: null,
      list: []
    };
    this.handleWrite = this.handleWrite.bind(this);
  }

  handleWrite = (e, value) => {
    this.setState({ message: value });
  };

  resetInput = () => {
    const ctn = document.getElementById('roomContainer');
    this.setState({ message: '' });
    this._field.setState({ value: '' });
    setTimeout(() => {
      ctn.scrollTo(0, ctn.scrollHeight);
    }, 300);
  }

  sendMessageByEnter = (event, message) => {
    const { sendMessage } = this.props;
    if (event.key === 'Enter' && event.target.value !== '') {
      sendMessage(message.__html);
      this.resetInput();
    }
  }

  sendMessage = message => {
    const { sendMessage } = this.props;
    sendMessage(message.__html);
    this.resetInput();
  }

  render() {
    const { classes, chatSelected, showMobileDetail, remove, hideDetail, messageList, ...rest } = this.props;
    const { message} = this.state;
    //let userId = localStorage.getItem('userId');
    // const getChat = dataArray => dataArray.map(message => {
    //   const html = { __html: message };
    //   return (
    //     <li>kk</li>
    //     // <li className={message._sender.userId === userId ? classes.from : classes.to} key={message.messageId}>
    //     //   <time dateTime="now">now</time>
    //     //   <Avatar alt="avatar" src={message._sender.profileUrl} className={classes.avatar} />
    //     //   <div className={classes.talk}>
    //     //     <p><span>{message.message}</span></p>
    //     //   </div>
    //     // </li>
    //   );
    // });

    return (
      <div className={classNames(classes.root, classes.content, showMobileDetail ? classes.detailPopup : '')}>
        <ChatHeader
          {...{user:this.props.user}}
          chatSelected={chatSelected}
          remove={remove}
          showMobileDetail={showMobileDetail}
          hideDetail={hideDetail}
        />
        {/* <ul className={classes.chatList} id="roomContainer">
          {getChat(messageList)}
        </ul> */}
        <ul className={classes.chatList} id="roomContainer">
          <li className={classes.from}>hola</li>
        </ul>
        <Paper className={classes.writeMessage}>
          <MessageField
            onChange={this.handleWrite}
            ref={(_field) => { this._field = _field; return this._field; }}
            placeholder="Type a message"
            fieldType="input"
            value={message}
            onKeyPress={(event) => console.log('diego')}
          />
          <Tooltip id="tooltip-send" title="Send">
            <div>
              <IconButton mini="true" color="secondary" disabled={message === ''} onClick={() => alert()} aria-label="send" className={classes.sendBtn}>
                <IosSendOutline color="#825ebb" fontSize="42px"  />
              </IconButton>
            </div>
          </Tooltip>
        </Paper>
      </div>
    );
  }
}

//ChatRoom.propTypes = {
//   classes: PropTypes.object.isRequired,
//   showMobileDetail: PropTypes.bool.isRequired,
//   chatSelected: PropTypes.number.isRequired,
//   sendMessage: PropTypes.func.isRequired,
//   remove: PropTypes.func.isRequired,
//   hideDetail: PropTypes.func.isRequired,
// };

export default withStyles(styles)(ChatRoom);
