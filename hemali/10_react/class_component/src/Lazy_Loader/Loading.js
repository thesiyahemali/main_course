import React,{ Suspense, lazy} from 'react'
import pMinDelay from 'p-min-delay'
const Curd_Form =lazy(()=>pMinDelay(import('./../Curd_Operation/01_Curd_Form.js'),2000))

const Loading = () => {
  return (
    <>
       <Suspense fallback={<div class='loader'>
        <div class="spinner-border" role="status">
  <span class="sr-only">Loading...</span>
</div>
      </div>
      }>
        <Curd_Form/>
       </Suspense>
    </>
  )
}

export default Loading
