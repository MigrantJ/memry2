// @flow
import React from 'react';

export default class Welcome extends React.Component {
  state: Object;

  constructor(props: Object) {
    super(props);
    this.state = {name: props.name};

    // this is necessary to be able to address "this" in the callback
    (this: any).handleClick = this.handleClick.bind(this);
  }

  handleClick(e: Event) {
    e.preventDefault();
    this.setState(prevState => ({
      name: prevState.name + "!"
    }))
  }

  render() {
    return (
      <div>
        <h2>Welcome {this.state.name}!</h2>
        <button onClick={this.handleClick}>Add Excitement</button>
      </div>
    )
  }
}