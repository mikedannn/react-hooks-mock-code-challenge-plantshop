import React, {useState} from "react";

function PlantCard({ image, name, price }) {

  const [inStock, setInStock] = useState(true);

  function handleClick(newValue) {
    console.log("click")
    setInStock(newValue);
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {inStock ? (
        <button onClick={() => handleClick(false)} className="primary">In Stock</button>
      ) : (
        <button onClick={() => handleClick(true)}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
