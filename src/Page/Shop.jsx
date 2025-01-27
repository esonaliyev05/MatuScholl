import React, { useEffect, useState } from 'react';
import { NavLink, useParams, useNavigate } from 'react-router-dom';
import '../Components/Shop/Shop.scss'; // Stil faylini qo'shamiz

const Shop = () => {
  const { productId } = useParams(); // URL parametridan mahsulot ID ni olish
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1); // Mahsulot soni
  const navigate = useNavigate(); // Navigatsiya qilish uchun

  useEffect(() => {
    // Mahsulotlar ro'yxati
    const products = [
      { id: 1, name: 'Mevaliy tort', description: 'Mevaliy tort', image: 'https://safiabakery.uz/uploads/products/362_1725344322.jpg', price: 150000 },
      { id: 2, name: 'Shokalatli tort', description: 'Shokalatli tort', image: 'https://safiabakery.uz/uploads/products/362_1715165601.jpg', price: 200000 },
      { id: 3, name: 'Musqaymoqli tort', description: 'Musqaymoqli tort', image: 'https://safiabakery.uz/uploads/products/362_1715927230.jpg', price: 250000 },
      { id: 4, name: 'Assali tort', description: 'Assali tort', image: 'https://safiabakery.uz/uploads/products/362_1715165233.jpg', price: 300000 },
      { id: 5, name: 'Mesqaymoqli-mevali tort', description: 'Mesqaymoqli-mevali tort', image: 'https://safiabakery.uz/uploads/news/1706874196.jpg', price: 350000 },
      { id: 6, name: 'Shokalatli-perokli tort', description: 'Shokalatli-perokli tort', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHOSRTffxVLxU0hBOVg24zQjB78aeBMnJT5A&s', price: 400000 },
      { id: 7, name: 'Malinali tort', description: 'Malinali tort', image: 'https://safiabakery.uz/uploads/products/362_1715926278.jpg', price: 450000 },
      { id: 8, name: 'Ananasli tort', description: 'Ananasli tort', image: 'https://safiabakery.uz/uploads/products/362_1720709678.jpg', price: 500000 },
      { id: 9, name: 'Olchali tort', description: 'Olchali tort', image: 'https://safiabakery.uz/uploads/products/362_1715173387.jpg', price: 550000 }
    ];

    const selectedProduct = products.find((product) => product.id === parseInt(productId));
    setProduct(selectedProduct);
  }, [productId]);

  const increment = () => setQuantity(quantity + 1);
  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    } else {
      navigate('/about');
    }
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="shop">
      <div className="shop-list">
        <h1>{product.name}</h1>
        <img src={product.image} alt={product.name} />
        <p>{product.description}</p>
      </div>

      <div className="shop-boxses">
        <div className="counter">
          <button onClick={decrement} className="counter-button">-</button>
          <span className="quantity">{quantity}</span>
          <button onClick={increment} className="counter-button">+</button>
        </div>
        <div className="total-price">
          <p>Umumiy summa: {product.price * quantity} UZS</p>
          <NavLink to={{
            pathname: "/concat",
            state: {
              productName: product.name,
              productImage: product.image,
              productPrice: product.price * quantity
            }
          }}>
            <button>Buyurtma</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Shop;
