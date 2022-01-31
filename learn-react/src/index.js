import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

const name = "Jyoti";
const img1 = "https://picsum.photos/200/300";
const img2 = "https://picsum.photos/250/300";
const img3 = "https://picsum.photos/300/300";

ReactDOM.render(
  <div>
    <h1 className="heading">My name is {name}</h1>
    <a href="https://picsum.photos/">
        <div className="img-div">
      <img src={img1} alt="Random" />
      <img src={img2} alt="Random" />
      <img src={img3} alt="Random" />
      </div>
    </a>
  </div>,
  document.getElementById("root")
);
