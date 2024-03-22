import React from 'react'
import sun from './sun.jpg'
import moon from './moon.jpg'

const Render = () => {
    let value='moon'
  return (
    <>
      {value=='sun' &&  <> <img src={sun} alt=''/> </>}
      {value=='moon' &&  <> <img src={moon} alt=''/> </>}

    </>
  )
}

export default Render
