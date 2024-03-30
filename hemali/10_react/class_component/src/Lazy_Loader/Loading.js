import React,{Suspense,lazy} from 'react'
import Curd_Form from '../Curd_Operation/01_Curd_Form'
const form=lazy(()=>import('./../Curd_Operation/01_Curd_Form.js'))

const Loading = () => {
  return (
    <>
       <Suspense fallback={<h1>Loading........................</h1>}>
        <Curd_Form/>
       </Suspense>
    </>
  )
}

export default Loading
