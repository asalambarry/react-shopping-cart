import React from "react";
import { Wrapper } from "../App.styles";
import CartItem from "../CartItem/CartItem";

import { CartItemType } from "../App";
type CartProperties = {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const Cart = (properties: CartProperties) => {
  const { cartItems, addToCart, removeFromCart } = properties;
  return (
    <Wrapper>
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? <p>No items in cart </p> : null}
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
    </Wrapper>
  );
};
export default Cart;
