import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Katalog.scss';

const Katalog = () => {
  const navigate = useNavigate();

  const handleProductClick = (productId) => {
    navigate(`/shop/${productId}`);
  };

  return (
    <div className="katalog" id="katalog">
      <div className="container">
        <div className="katalog-text">
          <h1>Каталог</h1>
          <p>уроков</p>
        </div>

        <div className="parent-katalog">
          <div className="katalog-chiled" onClick={() => handleProductClick(1)}>
            <img src="https://safiabakery.uz/uploads/products/362_1725344322.jpg" alt="Mahsulot 1" />
            <p>Mevaliy tort</p>
          </div>
          <div className="katalog-chiled" onClick={() => handleProductClick(2)}>
            <img src="https://safiabakery.uz/uploads/products/362_1715165601.jpg" alt="Mahsulot 2" />
            <p>Shokalatli tort</p>
          </div>
          <div className="katalog-chiled" onClick={() => handleProductClick(3)}>
            <img src="https://safiabakery.uz/uploads/products/362_1715927230.jpg" alt="Mahsulot 3" />
            <p>Musqaymoqli tort</p>
          </div>
          <div className="katalog-chiled" onClick={() => handleProductClick(4)}>
            <img src="https://safiabakery.uz/uploads/products/362_1715165233.jpg" alt="Mahsulot 4" />
            <p> Assali tort </p>
          </div>
          <div className="katalog-chiled" onClick={() => handleProductClick(5)}>
            <img src="https://safiabakery.uz/uploads/news/1706874196.jpg" alt="Mahsulot 5" />
            <p>Mesqaymoqli-mevali tort</p>
          </div>
          <div className="katalog-chiled" onClick={() => handleProductClick(6)}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHOSRTffxVLxU0hBOVg24zQjB78aeBMnJT5A&s" alt="Mahsulot 6" />
            <p>Shokalatli-perokli tort</p>
          </div>
          <div className="katalog-chiled" onClick={() => handleProductClick(7)}>
            <img src="https://safiabakery.uz/uploads/products/362_1715926278.jpg" alt="Mahsulot 7" />
            <p>Malinali tort</p>
          </div>
          <div className="katalog-chiled" onClick={() => handleProductClick(8)}>
            <img src="https://safiabakery.uz/uploads/products/362_1720709678.jpg" alt="Mahsulot 8" />
            <p>Ananasli tort</p>
          </div>
          <div className="katalog-chiled" onClick={() => handleProductClick(9)}>
            <img src="https://safiabakery.uz/uploads/products/362_1715173387.jpg" alt="Mahsulot 9" />
            <p>Olchali tort</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Katalog;
