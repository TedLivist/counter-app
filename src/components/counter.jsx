import React, { Component } from 'react';

class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    console.log('prevProps', prevProps);
    console.log('prevState', prevState);
    if (prevProps.counter.value !== this.props.counter.value) {
      // Ajax call and get new data from the server
    }
  }

  componentWillUnmount() {
    console.log('Counter - Unmount');
  }
  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  // handleIncrement() {
  //   console.log('Increment Clicked', this)
  // }

  render() {
    console.log('Counter - Rendered')
    return (
      <div className="row">
        <div className="col-1">
          <span className={this.getBadgeClass()}>{this.formatCount()}</span>
        </div>
        <div className="col">
          <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">+</button>
          <button onClick={() => this.props.onDecrement(this.props.counter)} className="btn ml-2 btn-warning btn-sm" disabled={this.checkZero()}>-</button>
          <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn ml-2 btn-danger btn-sm">x</button>
        </div>
      </div>
    );
  }

  getBadgeClass() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? 'Zero' : value;
  }

  checkZero() {
    const { value } = this.props.counter;
    return value === 0 ? true : false;
  }

}
 
export default Counter;