import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItems from "../data/items.json";

type CartItemProps = {
  id: number;
  quantity: number;
};
export function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart } = useShoppingCart();
  const item = storeItems.find((item) => item.id === id);
  if (item === undefined) return null;

  return (
    <li className="grid grid-cols-3">
      <img
        className="w-full h-20 sm:h-28 lg:h-40 object-cover"
        src={item.imgUrl}
        alt="product image"
      />
      <div className="">{item.name}</div>
    </li>
  );
}
