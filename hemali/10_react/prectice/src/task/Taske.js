import React,{useState} from 'react'
import "./Taske.css"

const Taske = () => {
    const [isButton1Clicked, setIsButton1Clicked] = useState(false);
    const [isButton2Clicked, setIsButton2Clicked] = useState(false);
  
    const handleButtonClick = (buttonNumber) => {
      if (buttonNumber === 1) {
        setIsButton2Clicked(!isButton2Clicked);
      } else if (buttonNumber === 2) {
        setIsButton1Clicked(!isButton1Clicked);
      }
    };
  
  return (
    <>
     <div>
      <button
        onClick={() => handleButtonClick(1)}
        className={isButton1Clicked ? 'active' : ''}
      >
        Button 1
      </button>
      <button
        onClick={() => handleButtonClick(2)}
        className={isButton2Clicked ? 'active' : ''}
      >
        Button 2
      </button>
    </div>
    </>
  )
}

export default Taske
