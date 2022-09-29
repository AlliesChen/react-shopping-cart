import { XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { CartItem } from "./CartItem";

interface ShoppingCartProps {
  isOpen: boolean;
}

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { closeCart, cartItems } = useShoppingCart();
  const [isExpand, setIsExpand] = useState(false);

  const CartItems = cartItems.map((item) => (
    <CartItem key={item.id} {...item} />
  ));

  function handleTransition() {
    setIsExpand(false);
    setTimeout(closeCart, 300);
  }

  useEffect(() => {
    console.log("hello");
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
        className={`p-5 ${
          isExpand ? "translate-x-0" : "translate-x-full"
        } transition-transform w-2/3 h-full bg-white`}
      >
        <header className="flex justify-between items-center">
          <h2 className="text-lg font-bold">Cart</h2>
          <button onClick={handleTransition} className="w-6 h-6">
            <XMarkIcon />
          </button>
        </header>
        <ul className="mt-12 flex flex-col gap-4 overflow-y-auto">
          {CartItems}
        </ul>
      </section>
    </div>
  );
}
