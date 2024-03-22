import React, { Component } from 'react'

export default class Demo extends Component {
    constructor(){
        super()
        this.state={count:0 ,std:[]}
    }
   increment(){
    this.setState({count:this.state.count+1})
   }
  render() {
    return (
      <>
        <button onClick={()=>{
            this.increment()
        }}>Increment</button>

        <h1>{this.state.count}</h1>
      </>
    )
  }
}

