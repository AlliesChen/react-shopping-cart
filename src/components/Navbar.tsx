import { NavLink } from "react-router-dom";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { useShoppingCart } from "../context/ShoppingCartContext";

export function Navbar() {
  const { openCart, cartQuantity } = useShoppingCart();
  return (
    <header className="sticky top-0 z-20 mb-3 h-16 bg-white drop-shadow-md flex items-center">
      <div className="w-full px-3 text-lg flex justify-between">
        <nav className="my-auto">
          <NavLink to="/" className="mr-3">
            Home
          </NavLink>
          <NavLink to="/store" className="mr-3">
            Store
          </NavLink>
          <NavLink to="/about" className="mr-3">
            About
          </NavLink>
        </nav>
        <button
          onClick={openCart}
          className="group relative h-12 w-12 border-2 border-blue-100 rounded-full hover:bg-sky-500 hover:border-none"
        >
          <ShoppingCartIcon className="mx-auto h-8 w-8 fill-sky-500 group-hover:fill-white" />
          <div className="absolute right-0 bottom-0 translate-x-1/4 translate-y-1/4 flex justify-center items-center h-6 w-6 bg-rose-500 text-rose-50 rounded-full">
            {cartQuantity}
          </div>
        </button>
      </div>
    </header>
  );
}
