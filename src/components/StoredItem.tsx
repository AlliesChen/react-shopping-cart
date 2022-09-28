import { useState } from "react";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";

interface StoredItemProps {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
}

export function StoredItem({ id, name, price, imgUrl }: StoredItemProps) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(id)
  
  const QuantityButtons =
    quantity === 0 ? (
      <button
        className="mt-3 py-2 w-full bg-sky-500 rounded text-sky-50"
        onClick={() => increaseCartQuantity(id)}
      >
        + Add To Cart
      </button>
    ) : (
      <div className="flex flex-col items-center gap-2">
        <div className="flex gap-3 items-center">
          <button onClick={() => decreaseCartQuantity(id)} className="bg-sky-500 text-white w-8 h-8 rounded">-</button>
          <div>
            <span className="text-xl">{quantity}</span> in cart
          </div>
          <button onClick={() => increaseCartQuantity(id)} className="bg-sky-500 text-white w-8 h-8 rounded">+</button>
        </div>
        <button onClick={() => removeFromCart(id)} className="p-1 bg-rose-500 text-white text-sm rounded">
          Remove
        </button>
      </div>
    );

  return (
    <div className="bg-white drop-shadow-md rounded-b">
      <img
        src={imgUrl}
        alt={name + " image"}
        className="h-52 w-full object-cover rounded-t"
      />
      <div className="p-3">
        <section className="flex justify-between text-xl">
          <h3>{name}</h3>
          <p>{formatCurrency(price)}</p>
        </section>
        {/* Add To Cart button and quantity change buttons */}
        {QuantityButtons}
      </div>
    </div>
  );
}
