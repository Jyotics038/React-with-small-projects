import React,{useRef,useState} from 'react'

export const UnControl = () => {
    const luckyName=useRef(null);
    const[show,setShow]=useState(false);
    
    const submitForm=(e)=>{
       e.preventDefault();
       const name=luckyName.current.value;
       name===""?alert("plz fill data"):setShow(true);
    }

    return (
        <div>
            <form action="" onSubmit={submitForm}>
                <div>
                    <label htmlfor="luckyName">Enter your lucky name</label>
                    <input type="text" id="luckyName" ref={luckyName}/>
                </div>
                <br/>
                <button>Submit</button>
            </form>
            <p>{show? `your luckyname is ${luckyName.current.value}`:""}</p>
        </div>
    )
}

export default UnControl;