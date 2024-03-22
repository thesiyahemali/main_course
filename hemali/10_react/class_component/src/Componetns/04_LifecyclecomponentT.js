import React, { Component } from 'react'

    /*what is component
   component lifecylce means k apka component create hota component mount thato hoy ya update thato hoy mount thaya pachi unmount thaye tene aeneje lifecylce componentn kevay */ 
export default class LifecyclecomponentT extends Component {
    constructor(props){
         /*1. super apdeaetla mate call karvi savi kem apde base componet per jay sakvi extende karo hoy component aetle super kiye word no use karvi savi 
         super no use ny karvi to this.props undefined hase aetle apde use ny kari sakvi  */
        super(props);
        this.state={

        }
        console.log('construcotre');
    }

      static getDerivedStateFromProps(props,state){
        console.log('getDrivedStateFromProps');

          return null 
        
      }
      // 2. static getDrivedStateFromProps ma props ane state pass karva pade se ane props ma pade value chanje karvi hoy to tenathi thase ane return apvu padse baki error aaevse ane return null pan rakhi sakvi return ma apde update value thi kari sakvi
      
      /* 3.render aetle k page ne read kare ane props ne read kari ne return karse jsx  */

      /* 4.componentDidMount ma componet mount thaye invoke thaye state run karvu hoy component run karvu hoy pachi side effect apvi tene comopnet did mount kevay side effect run thaye ane tarte je rerender kare se ae apne dekhatu nathi */
      componentDidMount(){
        console.log('componentDidMount');
      }
  render() {
    console.log('render');
    return (
      <>
        
      </>
    )
  }
}
