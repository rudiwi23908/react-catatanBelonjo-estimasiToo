import ItemList from "./components/ItemList";
import ShopingEstimation from "./components/ShopingEstimation";

const listItems = [
  {
    id: 1,
    name: "susu coklat indomilk",
    buyingPrice: 10000,
    sellingPrice: 15000,
    quantity: 10,
  },
  {
    id: 2,
    name: "kecap sedap 500",
    buyingPrice: 300,
    sellingPrice: 500,
    quantity: 10,
  },
  {
    id: 3,
    name: "masako sapi",
    buyingPrice: 400,
    sellingPrice: 500,
    quantity: 25,
  },
];

function App() {
  return (
    <>
      <button className="border border-black px-5 py-1 bg-green-500 text-white rounded-md ">
        Tambah Barang
      </button>
      <div className="flex">
        <ItemList listItems={listItems} />
        <ShopingEstimation />
      </div>
    </>
  );
}

export default App;
