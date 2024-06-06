import React, { useState } from 'react'
import './02_Subscription.css'
import SubscriptionDate from './03_SubscriptionDate'
import Container from '../Templte/05_Container'

const Subscription = (props) => {
  /* daynamic data 
    let date=(new Date('2024','3','21'));
    let title='Monthly Subscription'
    let amount='125.60' */

    // click event
    let [title,setTitle]=useState(props.title) 
    const onClickHandler = () => {
      setTitle("changed Title");
      console.log('on button clicked');
    };
    
  return (

  /*  daynamic data
   <div className='subscription'>
     <div>{date}</div>
     <h2 className='subscription_title'>{title}</h2>
     <div className='subscription_price'>{amount}</div>
     </div> */
     
    <Container className='subscription'>
     <SubscriptionDate date={props.date}/>
      <h2 className='subscription_title'>{title}</h2>
      <div className='subscription_price'>{props.passamount}</div>
      <button type='button' id='changetitlebutton' onClick={onClickHandler}>change title</button>
    </Container>
  )
}

export default Subscription
