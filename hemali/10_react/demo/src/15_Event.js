import React from "react";

const Event = () => {
    const alertData = () => {
        console.log("hii this is click button");
    };

    const doubleclick = () => {
        console.log("db click me");
    };

    const mouseoverevent = (e) => {
        e.target.style.color = 'blue'

    }

    const onMouseLeaveevent=(e)=>{
        e.target.style.backgroundColor='red'
    }

    const mouseup=()=>{
        alert('hiiii mouse up')
    }

    const mousedown=(e)=>{
      e.target.style.color='red'
    }

     const keyupevent=(e)=>{
      console.log(e.target.value);
     }

     const keydownevent=(e)=>{
        console.log(e.target.value);
        
     }
    return (
        <>
        {/* MOUSE EVENTS  */}
            {/* click event  */}
            <button onClick={()=>{
                alertData()
            }}>Click</button>
 
 <hr/>
            {/* doubleclick */}
            <button onDoubleClick={()=>{
                doubleclick()
            }}>Double Click</button>
<hr/>
            {/* mouseover */}
            <button style={{ backgroundColor: "grey" }} onMouseOver={mouseoverevent}>Mouse over</button>
            <hr/>
            {/* mouselevave */}
            <button onMouseLeave={onMouseLeaveevent}>Mouse-Levave</button>
            <hr/>
            {/* ommouseup */}
            <button onMouseUp={()=>{
                mouseup()
            }}>Mouse-up</button>
            <hr/>

            {/* onmousedown */}
            <button onMouseDown={mousedown}>Mouse-Down</button>
            <hr/>

            {/* keybord event  */}

            {/* on key up event  current data malse je lakhso te badhhu malse  */}
            <input type="text" onKeyUp={keyupevent}/>
<hr/>
            {/* onkey down type kara pachi ek word ocho malse  */}
            <input type="text" onKeyDown={keydownevent}/>

            {/* on key press sem key down jevu je work karsde  */}
            <input type="text"/>

            {/* FORM EVENT  */}
            
            
        </>
    );
};

export default Event;
