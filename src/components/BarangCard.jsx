const BarangCard = () => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg">
      <img
        className="w-full"
        src="https://nayemdevs.com/wp-content/uploads/2020/03/default-product-image.png"
        alt="product"
      />
      <div className="px-6">
        <div className="font-bold text-xl mb-2">Nama Barang</div>
        <p className="text-gray-700 text-base">
          Harga: <span>Rp. 10000</span>
        </p>
      </div>
      <div className="px-6 py-4">
        <button className="bg-sky-500 hover:bg-white border hover:border-gray-300 py-2 px-4 rounded-lg text-white hover:text-sky-500 font-bold ease-in-out duration-300">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default BarangCard;
