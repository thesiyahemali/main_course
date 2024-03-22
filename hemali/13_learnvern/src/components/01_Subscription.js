import React from 'react'
import './02_Subscription.css'
const Subscription = (props) => {
   
  /* daynamic data 
    let date=(new Date('2024','3','21'));
    let title='Monthly Subscription'
    let amount='125.60' */
  return (

  /*  daynamic data
   <div className='subscription'>
     <div>{date}</div>
     <h2 className='subscription_title'>{title}</h2>
     <div className='subscription_price'>{amount}</div>
     </div> */

    <div className='subscription'>
      <div>{props.passdate}</div>
      <h2 className='subscription_title'>{props.passtitle}</h2>
      <div className='subscription_price'>{props.passamount}</div>
    </div>
  )
}

export default Subscription
