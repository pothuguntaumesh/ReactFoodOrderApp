import { useState} from "react";
import Header from './components/Layout/Header';
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown,setIsCartIsShown]=useState(false);
  const showCartHandler=()=>{
    setIsCartIsShown(true)
  }
  const hideCartHandler=()=>{
    setIsCartIsShown(false)
  }
  return (
    <CartProvider>
      {cartIsShown && <Cart onHideCart={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals></Meals>
      </main>
    </CartProvider>
  );
}

export default App;
