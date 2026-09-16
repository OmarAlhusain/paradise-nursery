import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import CartItem from './CartItem';
import './ProductList.css';

function ProductList({ onHomeClick }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);
  const [showCart, setShowCart] = React.useState(false);

  const plantCategories = [
    {
      category: 'Air Purifying Plants',
      plants: [
        {
          name: 'Snake Plant',
          image: 'https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg',
          cost: 15,
        },
        {
          name: 'Spider Plant',
          image: 'https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg',
          cost: 12,
        },
        {
          name: 'Peace Lily',
          image: 'https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lilies-4269365_1280.jpg',
          cost: 18,
        },
        {
          name: 'Boston Fern',
          image: 'https://cdn.pixabay.com/photo/2020/04/30/19/52/boston-fern-5114414_1280.jpg',
          cost: 20,
        },
        {
          name: 'Rubber Plant',
          image: 'https://cdn.pixabay.com/photo/2020/02/15/11/49/flower-4850729_1280.jpg',
          cost: 17,
        },
        {
          name: 'Aloe Vera',
          image: 'https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg',
          cost: 14,
        },
      ],
    },
    {
      category: 'Aromatic Fragrant Plants',
      plants: [
        {
          name: 'Lavender',
          image: 'https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?auto=format&fit=crop&w=800&q=80',
          cost: 20,
        },
        {
          name: 'Jasmine',
          image: 'https://images.unsplash.com/photo-1592729645009-b96d1e63d14b?auto=format&fit=crop&w=800&q=80',
          cost: 18,
        },
        {
          name: 'Rosemary',
          image: 'https://cdn.pixabay.com/photo/2019/10/11/07/12/rosemary-4541241_1280.jpg',
          cost: 15,
        },
        {
          name: 'Mint',
          image: 'https://cdn.pixabay.com/photo/2016/01/07/18/16/mint-1126282_1280.jpg',
          cost: 12,
        },
        {
          name: 'Lemon Balm',
          image: 'https://cdn.pixabay.com/photo/2019/09/16/07/41/balm-4480134_1280.jpg',
          cost: 14,
        },
        {
          name: 'Hyacinth',
          image: 'https://cdn.pixabay.com/photo/2019/04/07/20/20/hyacinth-4110726_1280.jpg',
          cost: 22,
        },
      ],
    },
    {
      category: 'Easy Care Plants',
      plants: [
        {
          name: 'ZZ Plant',
          image: 'https://images.unsplash.com/photo-1632207691143-643e2a9a9361?auto=format&fit=crop&w=800&q=80',
          cost: 25,
        },
        {
          name: 'Pothos',
          image: 'https://cdn.pixabay.com/photo/2018/11/15/10/32/plants-3816945_1280.jpg',
          cost: 10,
        },
        {
          name: 'Cast Iron Plant',
          image: 'https://cdn.pixabay.com/photo/2017/02/16/18/04/cast-iron-plant-2072008_1280.jpg',
          cost: 20,
        },
        {
          name: 'Succulents',
          image: 'https://cdn.pixabay.com/photo/2016/11/21/16/05/cacti-1846147_1280.jpg',
          cost: 18,
        },
        {
          name: 'Aglaonema',
          image: 'https://cdn.pixabay.com/photo/2014/10/10/04/27/aglaonema-482915_1280.jpg',
          cost: 22,
        },
        {
          name: 'Marigold',
          image: 'https://cdn.pixabay.com/photo/2022/02/22/05/45/marigold-7028063_1280.jpg',
          cost: 8,
        },
      ],
    },
  ];

  const totalCartItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const handleHomeClick = (event) => {
    event.preventDefault();
    onHomeClick();
  };

  const handlePlantsClick = (event) => {
    event.preventDefault();
    setShowCart(false);
  };

  const handleCartClick = (event) => {
    event.preventDefault();
    setShowCart(true);
  };

  const handleContinueShopping = (event) => {
    if (event) {
      event.preventDefault();
    }

    setShowCart(false);
  };

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  return (
    <div>
      <nav className="navbar">
        <div className="tag">
          <div className="luxury">
            <img
              src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png"
              alt="Paradise Nursery logo"
            />

            <div className="tag_home_link">
              <h3>Paradise Nursery</h3>
              <i>Where Green Meets Serenity</i>
            </div>
          </div>
        </div>

        <div className="ul">
          <div>
            <a href="#" onClick={handleHomeClick}>
              Home
            </a>
          </div>

          <div>
            <a href="#" onClick={handlePlantsClick}>
              Plants
            </a>
          </div>

          <div>
            <a href="#" onClick={handleCartClick}>
              <span className="cart">
                🛒
                <span className="cart_quantity_count">
                  {totalCartItems}
                </span>
              </span>
              <span>Cart</span>
            </a>
          </div>
        </div>
      </nav>

      {!showCart ? (
        <main className="product-grid">
          {plantCategories.map((category) => (
            <section key={category.category}>
              <div className="plantname_heading">
                <h2 className="plant_heading">
                  {category.category}
                </h2>
              </div>

              <div className="product-list">
                {category.plants.map((plant) => {
                  const isAdded = cart.some(
                    (item) => item.name === plant.name
                  );

                  return (
                    <div className="product-card" key={plant.name}>
                      <img
                        className="product-image"
                        src={plant.image}
                        alt={plant.name}
                      />

                      <h3 className="product-title">
                        {plant.name}
                      </h3>

                      <p className="product-price">
                        ${plant.cost.toFixed(2)}
                      </p>

                      <button
                        className={`product-button ${
                          isAdded ? 'added-to-cart' : ''
                        }`}
                        onClick={() => handleAddToCart(plant)}
                        disabled={isAdded}
                      >
                        {isAdded ? 'Added to Cart' : 'Add to Cart'}
                      </button>
                    </div>
                  );
                })}
              </div>
            </section>
          ))}
        </main>
      ) : (
        <CartItem onContinueShopping={handleContinueShopping} />
      )}
    </div>
  );
}

export default ProductList;
