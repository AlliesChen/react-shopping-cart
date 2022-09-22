import storedItems from "../data/items.json";

export function Store() {
  const columns = storedItems.map((item) => <li>{JSON.stringify(item)}</li>);
  return (
    <>
      <h1 className="text-3xl">Store</h1>
      <ul>{columns}</ul>
    </>
  );
}
