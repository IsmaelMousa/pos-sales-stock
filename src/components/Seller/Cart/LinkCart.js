import ItemsPage from "../Products/ItemsPage";
import Cart from "./Cart";
import { useState } from "react";
import SalesPage from "../Products/SalesPage";

function LinkCart() {
  const [CartItems, setCartItems] = useState([]);

  const emptyCart = () => {
    setCartItems([]);
  };

  const addItems = (product) => {
    setCartItems([...CartItems, product]);
  };

  const removeProduct = (item) => {
    let newArray = CartItems;
    newArray.splice(
      newArray.findIndex((a) => a.name === item.name),
      1
    );
    setCartItems([...newArray]);
  };

  return (
    <div className>
      <Cart products={CartItems} empty={emptyCart} remove={removeProduct} />
      <ItemsPage addItems={addItems} />
      <SalesPage addItems={addItems} />
    </div>
  );
}

export default LinkCart;
