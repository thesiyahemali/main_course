import React,{forwardRef} from 'react'

const Forwarddata = (props,ref) => {
  return (
    <>
      <input type='text' ref={ref} />
    </>
  )
}

export default forwardRef(Forwarddata)
