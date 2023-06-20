import { useState, Fragment } from "react";
import Header from "./components/Header/Header";
import HeaderImage from "./components/HeaderImage/HeaderImage";
import HeroSection from "./components/HeroSection/HeroSection";
import ItemsSection from "./components/ItemSection/ItemsSection";
import Overlay from "./components/Overlay/Overlay";
import CartModal from "./components/CartModal/CartModal";
function App() {
  const [itemData, setItemData] = useState([
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
  const [overlayVisibility, setOverlayVisibility] = useState(false);
  const [cartModalVisibility, setcartModalVisibility] = useState(false);

  const quantityController = (id, operation) => {
    // is it good practice to modify state info like this? without setter function ?
    itemData.forEach(item => {
      if (item.id === id) {
        if (operation === "increment") {
          item.itemAmount += 1;
          // render trigger 1
          setTotal(prev => (prev + item.itemPrice));
          setCartCount(prev => prev + 1);
          return;
        } else if (operation === "decrement") {
          item.itemAmount -= 1;
          // render trigger 1
          setTotal(prev => (prev - item.itemPrice));
          setCartCount(prev => prev - 1);
        }
      }
    });
  }


  const toggleModal = async () => {
    // render trigger 2
    // only 1 render for all state updates below 
    setOverlayVisibility(!overlayVisibility);
    setcartModalVisibility(!cartModalVisibility);
  }

  return (
    <>
      <Header count={cartCount} onCartBtnclick={toggleModal} />
      <HeaderImage />
      <HeroSection />
      <ItemsSection onAddAmount={quantityController} data={itemData} />
      <Overlay isOpen={overlayVisibility} onClick={toggleModal} />
      <CartModal isOpen={cartModalVisibility} onCloseModalbtn={toggleModal} data={itemData} total={total} quantityController={quantityController} />
    </>
  );
}

export default App;
