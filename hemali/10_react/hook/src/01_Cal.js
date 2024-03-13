import React from 'react'
import './Cal.css'
import { clear } from '@testing-library/user-event/dist/clear'

const Cal = () => {
    const clearN=()=>{
        document.getElementById('inputbox').value = ''     
    }

    const removeData=()=>{
        let output = document.getElementById('inputbox')
        let remo = output.value.split('')
        console.log(remo);
        remo.pop()
        
        output.value = remo.join('')
    }

    const displayN=(val)=>{
        let output = document.getElementById('inputbox')
         
        if(val == '+' || val == '-' || val == '*' || val == '/'){
              if(output.value.includes('+')){
                 let plus =  output.value.split('+')   
                       let total = Number(plus[0])+Number(plus[1])
                       output.value = total + val
               }else if(output.value.includes('-')){
                  let minus =  output.value.split('-')  
                  let total = Number(minus[0])-Number(minus[1])
                  output.value = total + val
               } else if(output.value.includes('*')){
                    let multi = output.value.split('*')
                    let total = Number(multi[0])* Number(multi[1])
                    output.value = total + val
               }else if(output.value.includes('/')){
                        let div = output.value.split('/')
                        let total = Number(div[0])/Number(div[1])
                        output.value = total + val

               }
              else{
                output.value += val
              }
           

        }else{
            output.value += val
        }

    }

    const cal =()=>{
        let output = document.getElementById('inputbox')

        if(output.value.includes('+')){
                    let plus = output.value.split('+')
                     console.log(plus);
                    let total = parseFloat(plus[0])+parseFloat(plus[1])
                    output.value = total
        } else if(output.value.includes('-')){
              let minus = output.value.split('-')
                    let total = parseInt(minus[0])-parseInt(minus[1])
                    output.value = total
        } else if(output.value.includes('*')){
              let multi = output.value.split('*')
                    let total = parseInt(multi[0])*parseInt(multi[1])
                    output.value = total
        }else if(output.value.includes('/')){
              let div = output.value.split('/')
                    let total = parseInt(div[0])/parseInt(div[1])
                    output.value = total
        }
       
    }
  return (
    <>
       <div class="container">
        <div class="calculator">
            <form action="#">
                <div class="display">
                    <input type="text" name="display" id="inputbox" placeholder="0"/>
                </div>
                <div>
                    <input type="button" value="Ac" class="operator"  onClick={()=>{
                        clearN()
                    }}/>
                    <input type="button" value="DE" class="operator" onClick={()=>{
                        removeData()
                    }} />
                    <input type="button" value="." class="operator" onClick={()=>{
                        displayN('.')
                    }} />
                    <input type="button" value="/" class="operator" onClick={()=>{
                        displayN('/')
                    }} />
                </div>
                <div>
                    <input type="button" value="7" onClick={()=>{
                        displayN('7')
                    }}  />
                    <input type="button" value="8" onClick={()=>{
                        displayN('8')
                    }} />
                    <input type="button" value="9" onClick={()=>{
                       displayN('9')
                    }}/>
                    <input type="button" value="*" class="operator" onClick={()=>{
                        displayN('*')
                    }}  />
                </div>
                <div>
                    <input type="button" value="4" onClick={()=>{
                        displayN('4')
                    }}/>
                    <input type="button" value="5"  onClick={()=>{
                       displayN('5')
                    }}/>
                    <input type="button" value="6"  onClick={()=>{
                        displayN('6')
                    }}/>
                    <input type="button" value="-" class="operator" onClick={()=>{
                       displayN('-')
                    }}/>
                </div>
                <div>
                    <input type="button" value="1"  onClick={()=>{
                        displayN('1')
                    }}/>
                    <input type="button" value="2" onClick={()=>{
                       displayN('2')
                    }}/>
                    <input type="button" value="3"  onClick={()=>{
                       displayN('3')
                    }} />
                    <input type="button" value="+"  class="operator" onClick={()=>{
                       displayN('+')
                    }}/>
                </div>
                <div>
                    <input type="button" value="00"   onClick={()=>{
                       displayN('00')
                    }}/>
                    <input type="button" value="0" onClick={()=>{
                       displayN('0')
                    }} />
                    <input type="button" value="="  onClick={()=>{
                       cal()
                    }} />
                </div>
            </form>
        </div>
    </div>
    </>
  )
}

export default Cal
