import React from "react";
import { CartItemType } from "../App";
import { Wrapper } from "../Item/Item.styles";

type ItemProperties = {
  item: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void;
};

const Item = (properties: ItemProperties) => {
  const { item, handleAddToCart } = properties;
  return (
    <Wrapper>
      <img src={item.image} alt={item.title} />
      <div>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <h3>${item.price}</h3>
      </div>
      <button onClick={() => handleAddToCart(item)}>Add to cart</button>
    </Wrapper>
  );
};
export default Item;
