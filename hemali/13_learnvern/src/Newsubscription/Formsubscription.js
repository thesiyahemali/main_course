import React from 'react'

const Formsubscription = () => {
  return (
     <form>
        <div className='new_subscription_controls'>
           <div className='new_subscription_control'>
              <label>Title</label>
              <input type='text' id='title' />
           </div>

           <div className='new_subscription_control'>
              <label>Date</label>
              <input type='date' id='date' />
           </div>

           <div className='new_subscription_control'>
              <label>
                Amount
              </label>
              <input type='text' min='10' id='title' />
           </div>
        </div>
        <div className='new_subscription_actions'>
            <button type='submit'>Add Subscription</button>
            
        </div>
     </form>
  )
}

export default Formsubscription