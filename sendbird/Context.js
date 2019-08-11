import { createContext } from 'react';
export const Context = createContext({
  isAuthenticated: false,
  sendbird: null,
  channelUrl: '',
  isAuthenticating: false,
  authenticate: (username, password) => { },
  signout: () => { }
})
