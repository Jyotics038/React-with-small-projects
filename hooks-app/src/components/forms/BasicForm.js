import React,{useState} from 'react'

export const BasicForm = () => {
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[allEntry,setAllEntry]=useState([]);
    
    const submitForm=(e)=>{
        e.preventDefault();

        if(email&&password){
            const newEntry={id:new Date().getTime().toString(), email:email,password:password};
            setAllEntry([...allEntry,newEntry]);
            console.log(allEntry);
    
            setEmail("");
            setPassword("");
        }
        else{
            alert("Data is empty!!!!");
        }
        

    }

    return(
        <>
          <form action="" onSubmit={submitForm}>
           <div>
               <label htmlFor="email">Email</label>
               <input type="text" name="email" id="email" autocomplete="off"
               value={email}
               onChange={(e)=>setEmail(e.target.value)}
               />
           </div>
           <div>
               <label htmlFor="password">Password</label>
               <input type="password" name="password" id="password" autocomplete="off"
               value={password}
               onChange={(e)=>setPassword(e.target.value)}
               />
           </div>
           <button type="submit">Login</button>
          </form>

          <div>
              {
                  allEntry.map((currEle)=>{
                      const{id,email,password} = currEle;
                      return(
                          <div key={id}>

                              <p>{email}</p>
                              <p>{password}</p>
                          </div>
                      )
                  })
              }
          </div>
        </>
    )
}
export default BasicForm
