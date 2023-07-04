import { Fragment } from "react";
import { useSelector } from "react-redux";

import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import ItemsSection from "./components/ItemSection/ItemsSection";
import Cart from "./components/Cart/Cart";

function App() {
  const cartVisibility = useSelector(state => {
    return state.ui.cartVisibility;
  });

  return (
    <>
      <Header />
      <HeroSection />
      <ItemsSection />
      {cartVisibility && <Cart />}
    </>
  );
}

export default App;
