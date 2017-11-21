import React, { Component } from 'react';

export default class UpdateComponent extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.status !== this.props.status || nextProps.accounts !== this.props.accounts;
  }
}
