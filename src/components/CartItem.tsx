import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItems from "../data/items.json";
import { formatCurrency } from "../utilities/formatCurrency"
import { XMarkIcon } from "@heroicons/react/24/outline";

type CartItemProps = {
  id: number;
  quantity: number;
};

export function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart } = useShoppingCart();
  const item = storeItems.find((item) => item.id === id);
  if (item === undefined) return null;

  return (
    <li className="grid grid-cols-3 items-center gap-1 sm:gap-3 lg:gap-6">
      <img
        className="w-full h-20 sm:h-28 lg:h-40 object-cover rounded"
        src={item.imgUrl}
        alt="product image"
      />
      <div>
        <p className="text-sm sm:text-base lg:text-lg">{item.name}{quantity > 1 && <span className="ml-1 block sm:inline text-xs lg:text-sm text-gray-500">x{quantity}</span>}</p>
        <p className="text-xs lg:text-sm text-gray-500">{formatCurrency(item.price)}</p>
      </div>
      <div className="flex flex-col sm:flex-row sm:justify-end items-end sm:items-center">
        <p className="text-sm sm:text-lg lg:text-xl">{formatCurrency(item.price * quantity)}</p>
        <button onClick={() => removeFromCart(item.id)} className="sm:ml-3 sm:-translate-y-0.5 w-4 h-4 sm:w-6 sm:h-6 border border-amber-700 rounded">
          <XMarkIcon className="w-2/3 h-2/3 mx-auto stroke-amber-700"/>
        </button>
      </div>
    </li>
  );
}
