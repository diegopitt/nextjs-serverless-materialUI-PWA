import React, { Component } from "react";
import { Context } from "./Context";

export const sendBirdWrapper = (WrappedComponent) =>
  class extends Component {
    render = () =>
      <Context.Consumer>
        {context =>
          <WrappedComponent {...this.props} {...context} />
        }
      </Context.Consumer>
  }