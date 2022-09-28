import { XMarkIcon } from "@heroicons/react/24/outline";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { CartItem } from "./CartItem"

interface ShoppingCartProps {
  isOpen: boolean
}

export function ShoppingCart({isOpen}: ShoppingCartProps) {
  const { closeCart, cartItems } = useShoppingCart();

  const CartItems = cartItems.map(item => (
    <CartItem key={item.id} {...item} />
  ))

  return (
    <div className={`${!isOpen && "hidden"} top-0 z-30 fixed flex justify-end w-full h-full bg-black/50`}>
      <section className="p-5 animate-slide-ltr w-2/3 h-full bg-white">
        <header className="flex justify-between items-center">
          <h2 className="text-lg font-bold">Cart</h2>
          <button onClick={closeCart} className="w-6 h-6">
            <XMarkIcon />
          </button>
        </header>
        <ul className="flex flex-col gap-4">
          {CartItems}
        </ul>
      </section>
    </div>
  );
}
