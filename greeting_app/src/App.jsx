import React from 'react';
//import ReactDOM from 'react-dom';
import "./style.css";



function App(){
    let currTime=new Date(2021,5,5,13);
currTime=currTime.getHours();
var greet;
const cssStyle={};

if(currTime>=1&&currTime<12){
greet ="Good Morning";
cssStyle.color='green';
}
else if(currTime>=12&&currTime<19){
  greet ="Good Afternoon";
  cssStyle.color='orange';
}
else{
  greet ="Good Night";
  cssStyle.color='blue';
}

    return(
        <>
        <div>
        <h1>
          Hello Sir, <span style={cssStyle}>{greet}</span>  
          </h1>
        </div>
        </>
    )
}

export default App;