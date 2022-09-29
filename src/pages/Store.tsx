import storedItems from "../data/items.json";
import { StoredItem } from "../components/StoredItem";

export function Store() {
  const columns = storedItems.map((item) => (
    <li key={item.id}><StoredItem {...item}/></li>)
  );
  return (
    <div className="mx-3 flex flex-col gap-4">
      <h1 className="mb-3 text-3xl">Store</h1>
      <ul className="grid gap-3 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1">{columns}</ul>
    </div>
  );
}
