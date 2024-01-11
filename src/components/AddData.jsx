import { useState } from "react";
export const AddData = () => {
  const [itemName, setItemName] = useState("");
  const [buyingPrice, setBuyingPrice] = useState("");
  const [sellingPrice, setSellingPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // ambil data yanf sudah ada di localStorage(jika ada)
    const existingData = JSON.parse(localStorage.getItem("itemData")) || [];
    // Buat objek data dari nilai input
    const newData = {
      itemName,
      buyingPrice,
      sellingPrice,
      quantity,
    };

    console.log(newData);
    console.log(existingData);

    // penggabungan data yang sudah ada dengan data baru
    const combineData = [...existingData, newData];

    // Simpan data di localStorage
    localStorage.setItem("itemData", JSON.stringify(combineData));
    // console.log(data);

    // Reset nilai input setelah pengiriman
    setItemName("");
    setBuyingPrice("");
    setSellingPrice("");
    setQuantity("");
  };
  return (
    <div className="flex justify-center ">
      <div className="w-screen h-fit">
        <h1 className="font-bold text-xl mb-5">Input Item Data</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="">
            <p>Item Name</p>
            <input
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="John"
              required
            />
          </label>
          <label htmlFor="">
            <p>Buying Price</p>
            <input
              value={buyingPrice === "" ? "" : Number(buyingPrice)}
              onChange={(e) => setBuyingPrice(Number(e.target.value))}
              type="number"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="John"
              required
            />
          </label>
          <label htmlFor="">
            <p>Selling Price</p>
            <input
              value={sellingPrice === "" ? "" : Number(sellingPrice)}
              onChange={(e) => setSellingPrice(Number(e.target.value))}
              type="number"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="John"
              required
            />
          </label>
          <label htmlFor="">
            <p>Quantity</p>
            <input
              value={quantity === "" ? "" : Number(quantity)}
              onChange={(e) => setQuantity(Number(e.target.value))}
              type="number"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="John"
              required
            />
          </label>
          <button
            type="submit"
            className="px-3 py-2 mt-5 rounded-md text-white bg-green-400"
          >
            Send data
          </button>
        </form>
      </div>
    </div>
  );
};
