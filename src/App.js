import { useState, Fragment } from "react";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import ItemsSection from "./components/ItemSection/ItemsSection";
import Cart from "./components/Cart/Cart";
function App() {
  const [itemData] = useState([
    {
      id: 1,
      itemName: "Sushi",
      itemDesc: "Finest fish aand veggies",
      itemPrice: 22.99,
      itemAmount: 0
    },
    {
      id: 2,
      itemName: "Schnitzel",
      itemDesc: "A german specialty!",
      itemPrice: 16.5,
      itemAmount: 0
    },
    {
      id: 3,
      itemName: "Barbecue Burger",
      itemDesc: "American, raw, meaty",
      itemPrice: 12.99,
      itemAmount: 0
    },
    {
      id: 4,
      itemName: "Green Bowl",
      itemDesc: "Healthy...and green...",
      itemPrice: 18.99,
      itemAmount: 0
    }
  ]);
  const [total, setTotal] = useState(0)
  const [cartCount, setCartCount] = useState(0);
  const [cartVisibility, setCartVisibility] = useState(false);


  const quantityController = (id, operation) => {
    // is it good practice to modify state info like this? without setter function ?
    itemData.forEach(item => {
      if (item.id !== id) return;

      if (operation === "increment") {
        item.itemAmount += 1;
        // render trigger 1
        setTotal(prev => Number((prev + item.itemPrice).toFixed(2)));
        setCartCount(prev => prev + 1);
        return;
      }
      if (operation === "decrement") {
        item.itemAmount -= 1;
        // render trigger 1
        setTotal(prev => Number((prev - item.itemPrice).toFixed(2)));
        setCartCount(prev => prev - 1);
        return;
      }

    })
  }


  const toggleModal = async () => {
    // render trigger 2
    setCartVisibility(!cartVisibility);
  }

  return (
    <>
      <Header count={cartCount} onCartBtnclick={toggleModal} />
      <HeroSection />
      <ItemsSection onAddAmount={quantityController} data={itemData} />
      {cartVisibility && <Cart onCloseModalbtn={toggleModal} data={itemData} total={total} quantityController={quantityController} />
      }
    </>
  );
}

export default App;
