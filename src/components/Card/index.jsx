import React from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";

function Card(props) {
  const { image, name, newPrice, oldPrice, comments,category, id } = props.data;
  const navigate = useNavigate()
  function handleNavigate(){
    navigate(`products/${id}`)
  }
  return (
    <div className="Card" onClick={handleNavigate}>
      <img src={image} alt="" />
      <h2>Name: {name}</h2>
      <h2>ID:{id}</h2>
      <h2>
        Prices:{newPrice}
      </h2>
      <h2>Category: {category}</h2>
      <p>Comment: {comments}</p>
    </div>
  );
}

export default Card;
