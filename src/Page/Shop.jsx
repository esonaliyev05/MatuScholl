import React from "react";
import { useLocation } from "react-router-dom";

const Shop = () => {
  // useLocation hook yordamida state orqali yuborilgan rasmni olish
  const location = useLocation();
  const { imageUrl } = location.state || {}; // agar state mavjud bo'lsa, rasmni oling

  return (
    <div className="shop-container">
      <h1>Shop Page</h1>
      {imageUrl ? (
        <div className="product-image">
          <img src={imageUrl} alt="Selected Product" />
        </div>
      ) : (
        <p>No image selected</p>
      )}
    </div>
  );
};

export default Shop;
