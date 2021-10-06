import React from 'react';
import "./Product.css";

function Product() {
  return (
    <div className="product">
      <div className="product_info">
        <p>The Lean Startup</p>
        <p className="product_price">
          <small>$</small>
          <strong>14.08</strong>
        </p>
      <div className="product_rating">
        <p>⭐</p>
      </div>
      </div>
      <img
        src="https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UY218_.jpg"
        alt="book"
      />
      <button>Add to basket</button>
    </div>
  );
}

export default Product;
