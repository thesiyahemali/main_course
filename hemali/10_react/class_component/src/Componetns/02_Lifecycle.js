import React, { Component } from 'react';

class Lifecycle extends Component {
     constructor(){
       
        super() 
        this.state={count:0}
     }

 

    //    setp 
    //    1.constructor()
    //    2.static getderivedstatefromprops()
    //    3.render()
    //    4.componentDidMount()

    // updating component 

    // static getDerivedStateFromProps()
    // shouldComponentUpdate()-
    // render()-
    // getSnapshotBeforeUpdate()-
    // componentDidUpdate()-

      componentDidMount(){
        console.log('componentDidMount');
      }

      componentWillUnmount(){
        console.log('componentwillumount');
      }

      shouldComponentUpdate(nextprops,nextstate){
       console.log('shouldcomopnentupdate');
       if(this.state.count<10){
        return true
       }else{
        return false
       }
      }

      componentWillUpdate(newprops,newstate){
        console.log('comopnentwillupdate');
        if(newstate.count>5){
            document.body.style.backgroundColor='pink'
        }
      }

      componentDidUpdate(oldprops,oldstate){
        console.log(this.componentDidUpdate);
        console.log(oldstate);
      }

      // getDrivedstateFromProps ma be vastu malse props ane state aene apde aama return karvu padse baki error aaevse return ma null pan karvi sakvi render method 
      static getDrivedstateFromProps(props,state){

      }
    render() {
        return (
            <>
                <button onClick={()=>{
                    this.setState({count:this.state.count+1})
                }}>Increment</button>

                <h1>{this.state.count}</h1>
            </>
        );
    }
}

export default Lifecycle;