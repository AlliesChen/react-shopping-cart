import { XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { CartItem } from "./CartItem";
import storeItems from "../data/items.json"
import { formatCurrency } from "../utilities/formatCurrency";

interface ShoppingCartProps {
  isOpen: boolean;
}

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { closeCart, cartItems } = useShoppingCart();
  const [isExpand, setIsExpand] = useState(false);

  const CartItems = cartItems.map((item) => (
    <CartItem key={item.id} {...item} />
  ));

  const TotalCharge = () => {
    const total = cartItems.reduce((accum, cartItem) => {
      const stock = storeItems.find(item => item.id === cartItem.id )
      return accum + (stock?.price || 0) * cartItem.quantity
    }, 0)
    return <div className="mt-6 sm:mt-12 lg:mt-20 text-right sm:text-xl lg:text-2xl font-bold">Total: {formatCurrency(total)}</div>
  }

  function handleTransition() {
    setIsExpand(false);
    setTimeout(closeCart, 300);
  }

  useEffect(() => {
    setIsExpand(isOpen);
  }, [isOpen]);

  return (
    <div
      className={`${
        isOpen ? "visible" : "invisible"
      } z-20 fixed top-0 flex justify-between w-full h-full ${
        isExpand ? "bg-black/50" : "bg-black/0"
      } transition-colors`}
    >
      <div onClick={handleTransition} className="w-1/3 h-full"></div>
      <section
        className={`p-2 sm:p-5 lg:p-10 ${
          isExpand ? "translate-x-0" : "translate-x-full"
        } transition-transform overflow-x-auto overflow-y-auto w-2/3 h-full bg-white`}
      >
        <header className="flex justify-between items-center">
          <h2 className="text-lg lg:text-2xl font-bold">Cart</h2>
          <button onClick={handleTransition} className="w-6 h-6 lg:w-8 lg:h-8">
            <XMarkIcon />
          </button>
        </header>
        <ul className="mt-12 flex flex-col gap-4">
          {CartItems}
        </ul>
        <TotalCharge />
      </section>
    </div>
  );
}
