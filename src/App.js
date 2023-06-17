import { Fragment } from "react";
import meals from "./meals.jpg"
function App() {
  return (
    <>
      <header className="header_header">
        <h1>ReactMeals</h1>
        <button>
          <div>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path d='M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z' />
            </svg>
          </div>
          Your Cart
          <span className="cart__product-count">0</span>
        </button>
      </header>
      <header className="header_image">
        <img src={meals} alt="meals" />
      </header>
      <div className="hero-section">
        <h2> Delicious Food, Delivered To You</h2>
        <p>Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home.</p>
        <p>All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!</p>
      </div>
      <div className="items-section">
        <ul>
          <li>
            <div className="item-details">
              Sushi
              <p>Finest fish aand veggies</p>
              <span className="price">22.99</span>
            </div>
            <div className="item-details--cart">
              <div>
                Amount
                <input type="number" value={0} readOnly />
              </div>
              <button className="btn-add">+Add</button>
            </div>
          </li>
          <li>
            <div className="item-details">
              Schnitzel
              <p>A german specialty!
              </p>
              <span className="price">16.5
              </span>
            </div>
            <div className="item-details--cart">
              <div>
                Amount
                <input type="number" value={0} readOnly />
              </div>
              <button className="btn-add">+Add</button>
            </div>
          </li>
          <li>
            <div className="item-details">
              Barbecue Burger
              <p>American, raw, meaty</p>
              <span className="price">12.99</span>
            </div>
            <div className="item-details--cart">
              <div>
                Amount
                <input type="number" value={0} readOnly />
              </div>
              <button className="btn-add">+Add</button>
            </div>
          </li>
          <li>
            <div className="item-details">
              Green Bowl
              <p>Healthy...and green...</p>
              <span className="price">18.99</span>
            </div>
            <div className="item-details--cart">
              <div>
                Amount
                <input type="number" value={0} readOnly />
              </div>
              <button className="btn-add">+Add</button>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default App;
