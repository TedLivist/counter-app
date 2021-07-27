import React, { Component } from 'react';

class Counter extends Component {
  state = {
    value: this.props.counter.value
  };

  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  // handleIncrement() {
  //   console.log('Increment Clicked', this)
  // }

  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 })
  }

  render() {
    return (
      <div>
        <span className={this.getBadgeClass()}>{this.formatCount()}</span>
        <button onClick={ () => this.handleIncrement({ id: 1 }) } className="btn btn-secondary btn-sm">Increment</button>
        <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn ml-2 btn-danger btn-sm">Delete</button>
      </div>
    );
  }

  getBadgeClass() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.state;
    return value === 0 ? 'Zero' : value;
  }

}
 
export default Counter;