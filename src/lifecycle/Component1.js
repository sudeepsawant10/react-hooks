import React, { Component } from 'react'
import FComponent from './FComponent';

export default class Component1 extends Component {
    constructor(){
        console.log("constructor called");
        super();
        this.state = ({
            count:0
        })
    }

    // componentDidMount(){
    //     console.log("componentDidMount: called");
    // }

    // componentDidUpdate(){
    //     console.log("componentDidUpdate: called");
    // }

    // componentWillUnmount(){
    //     console.log("componentWillUnmount:")
    // }

    increment(){
        console.log("increment: called");
        this.setState({
            count:this.state.count + 1
        })
    }

  render() {
    return (
      <div>
        {/* <h2>{this.state.count}</h2> */}
        {/* Functional component Number */}
        <FComponent number = {this.state.count}/>
        <button onClick={()=> this.increment()}>Click to Increment</button>
      </div>
    )
  }
}
