import Item from "./Item";

export default function ItemList({ listItems }) {
  return (
    <div className="border border-black m-5 w-3/4 h-1/6 flex flex-col gap-3">
      {listItems.map((item) => (
        <Item item={item} key={item.id} />
      ))}
    </div>
  );
}
