import React,{useState,useEffect} from 'react'

export const Useeffect = () => {
    const [widthCount,setWidthCount] =useState(window.screen.width);
    
    const actualWidth=()=>{
        console.log(window.innerWidth);
        setWidthCount(window.innerWidth);
    }
    
    useEffect(()=>{
        window.addEventListener("resize",actualWidth);

        return()=>{
            window.removeEventListener("resize",actualWidth);
        }
    });

    return (
        <div>
            <p>The actual width of the window is:</p>
            <h1>{widthCount}</h1>
        </div>
    )
}

export default Useeffect