import React, { Component } from "react";
import cookie from 'js-cookie';
import Router from 'next/router';
import { Context } from "./Context";
import SendBird from 'sendbird';
import { firebase } from '../utils/firebase.js';
const SendBirdApp = new SendBird({ appId: '40776739-B936-4974-A5A4-3DC627403F48' })

export class ProviderImpl extends Component {
  constructor(props) {
    super(props);
    this.syncLogout = this.syncLogout.bind(this)
    this.state = {
      isAuthenticated: false,
      sendbird: SendBirdApp,
      isAuthenticating: false,
    }
  }

  authListener() {
    this.fireBaseListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log('Authenticated');
      } else {
        console.log('Not Authenticated');
      }
    });
  }

  authenticate = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password).then((user) => {
      this.state.sendbird.connect(user.user.uid, (sbUser, error) => {
        cookie.set('userId', user.user.uid, { expires: 1 })
        Router.push('/')
      });
      return user;
    }).catch((error) => {
      console.log(error.message);
    });
  }

  signout = () => {
    return firebase.auth().signOut().then(() => {
      this.state.sendbird.disconnect(function () {
        console.log('disconneted');
        cookie.remove('userId')
        Router.push('/login')
        return;
      });
    }).catch(function (error) {
      console.log(error);
    });
  }

  componentDidMount() {
    //this.addEventListener('storage', this.syncLogout)
  }

  syncLogout(event) {
    if (event.key === 'logout') {
      Router.push('/login')
    }
  }

  componentWillMount() {
    //this.removeEventListener('storage', this.syncLogout)
    //localStorage.removeItem('logout')
    this.authListener = this.authListener.bind(this);
    this.authListener();
  }

  componentWillUnmount() {
    this.fireBaseListener && this.fireBaseListener();
    this.authListener = undefined;
  }

  render = () =>
    <Context.Provider value={{...this.state, authenticate: this.authenticate, signout: this.signout}}>
      {this.props.children}
    </Context.Provider>
}
