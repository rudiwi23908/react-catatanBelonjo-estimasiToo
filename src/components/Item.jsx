export default function Item({ item }) {
  return (
    <>
      <div className="p-5 bg-yellow-50">
        <h2>Item Name: {item.name}</h2>
        <h3>Buying Price: {item.buyingPrice}</h3>
        <h3>Selling Price: {item.sellingPrice}</h3>
        <h3>Quantity: {item.quantity}</h3>
        <button className="border border-black px-5 py-1 bg-blue-500 text-white rounded-md ">
          pilih
        </button>
      </div>
    </>
  );
}
