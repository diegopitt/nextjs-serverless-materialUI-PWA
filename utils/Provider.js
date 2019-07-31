import React, { Component } from 'react'

const ProviderContext = React.createContext()
class Provider extends Component {
  state = {
    count: 0
  }

  increase = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  increaseBy = val => {
    this.setState({
      count: this.state.count + val
    })
  }

  decrease = () => {
    this.setState({
      count: this.state.count - 1
    })
  }

  render() {
    return (
      <ProviderContext.Provider
        value={{
          count: this.state.count,
          increase: this.increase,
          decrease: this.decrease,
          increaseBy: this.increaseBy
        }}
      >
        {this.props.children}
      </ProviderContext.Provider>
    )
  }
}

const ProviderConsumer = ProviderContext.Consumer

export default Provider
export { ProviderConsumer }
