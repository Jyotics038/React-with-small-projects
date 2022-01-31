import React, { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import ToDoItem from "./ToDoItem";

//to get the data from local storages 
// const getLocalItems=()=>{
//   let list=localStorage.getItem('lists');
//   console.log(list);

//   if(list){
//     return JSON.parse(localStorage.getItem('lists'));
//   }
//   else{
//     return [];
//   }
// }


function App() {
  const [inputText, setInputText] = useState("");

  const [items, setItems] = useState([]);
  //const [items, setItems] = useState(getLocalItems());

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  //add data to localstorage
  useEffect(()=>{
    localStorage.setItem('lists',JSON.stringify(prevItems))
  },[prevItems]);

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do list</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItem}>
          <span> Add </span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <ToDoItem
              key={index}
              id={index}
              text={todoItem}
              onChecked={deleteItem}
            />
          ))}
          {/* <li>A Item</li> */}
        </ul>
      </div>
    </div>
  );
}

export default App;
