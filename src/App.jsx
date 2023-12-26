import React from "react";
import { Simulate } from "react-dom/test-utils";


const SlotM=(props)=>{
    //desturcturing data
    let x=props.x;
    let y=props.y;
    let z=props.z;
    
    if((x===y) && (y===z)){
        return(
            <>
            <div className="inner-slot">
                <h1>{x} {y} {z}</h1>
                <h2 className="subhead">its a match</h2>
                <hr/>
            </div>
                
            </>
        )
    }
    else{
        return(
            <>
            <div className="inner-slot">
                <h1>{x} {y} {z}</h1>
                <h2 className="subhead">not a match</h2>
                <hr/>
            </div>
                
            </>
        )

    }
    
    

}
const App=()=>{
    return(
        <>
            <h1 className="heading">Welcom to <span style={{color:"darkblue",fontWeight:"bold"}}>Slot machine game</span> doston 🍎🍌🌴</h1>
            <div className="slot-holder">
            <SlotM x= '🍎' y= '🍎' z= '🍎'/>
            <SlotM x= '🍎' y= '🍎' z= '🍌'/>
            <SlotM x= '🍎' y= '🌴' z= '🍌'/>
            <SlotM x= '🌴' y= '🌴' z= '🌴'/>

            </div>
            

        </>
    );
};
 export default App;