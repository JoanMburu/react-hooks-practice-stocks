import React from "react";

function Stock({ stock, buyStock }) {
  const { name, ticker, price } = stock;

  const handleClick = () => {
    buyStock(stock);
  };

  return (
    <div onClick={handleClick}>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{ticker}: ${price}</p>
        </div>
      </div>
    </div>
  );
}

export default Stock;