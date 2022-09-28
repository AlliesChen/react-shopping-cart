import { useShoppingCart } from "../context/ShoppingCartContext"
import storeItems from "../data/items.json"

type CartItemProps = {
    id: number
    quantity: number
}
export function CartItem({ id, quantity }: CartItemProps) {
    const { removeFromCart } = useShoppingCart()
    const item = storeItems.find(item => item.id === id)
    if (item === undefined) return null
    
    return (
        <li>
            <img className="w-32 h-24 object-cover" src={item.imgUrl} alt="product image" />
        </li>
    )
}