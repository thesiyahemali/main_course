import React, { Component } from 'react';

class LifecylceTodo extends Component {
    constructor(){
        super()
        this.state={
            std:[],
            index:null
        }
    }l

    adddata(){
    //   let data=document.getElementById('data').value
    //   this.setState({std:[...this.state.std,data]})
    //   document.getElementById('data').value=''
    //   console.log(this.state);
    let data=document.getElementById('data').value
    if(this.state.index==null){
       this.setState({std:[...this.state.std,data]})
       document.getElementById('data').value=''
       console.log(this.state);  
    }else{
        let std=[...this.state.std]
        std[this.state.index]=data
        this.setState({std:std,index:null})
        document.getElementById('data').value=''
    }
    }

    deltedata(i){
        let newstd=[...this.state.std]
        newstd.splice(i,1)
        this.setState({std:newstd})
    }

    updateData(res,i){
        document.getElementById('data').value=res
        this.setState({index:i})
    }
    render() {
        return (
            <>
              <input type='text' id='data'/>

              <button onClick={()=>{
                this.adddata()
              }}>{this.state.index==null? 'add':'update'}</button>  

              {this.state.std.map((result,i)=>{
                return(
                    <>
                        <h1>{result}</h1>

                        <button onClick={()=>{
                            this.deltedata()
                        }}>Delte</button>

                        <button onClick={()=>{
                            this.updateData(result,i)
                        }}>update</button>
                    </>
                )
              })}
            </>
        );
    }
}

export default LifecylceTodo;