import React from "react";
export const Context = React.createContext({
  isAuthenticated: false,
  sendbird: null,
  isAuthenticating: false,
  authenticate: (username, password) => { },
  signout: () => { }
})
