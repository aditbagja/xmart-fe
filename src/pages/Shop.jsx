import BarangCard from "../components/BarangCard";

const Shop = () => {
  return (
    <section className="w-full py-10">
      <div className="container mx-auto">
        <div className="px-5 xl:px-0">
          <h1 className="font-bold text-2xl xl:text-4xl">
            List Barang di X-Mart
          </h1>
          <div className="mt-3 flex flex-col lg:flex-row gap-5 divide-y lg:divide-y-0 lg:divide-x">
            <div className="w-full lg:w-3/4 flex flex-wrap gap-3 justify-center">
              <BarangCard />
              <BarangCard />
              <BarangCard />
              <BarangCard />
              <BarangCard />
            </div>
            <div className="w-full lg:w-1/4 h-96 flex flex-col justify-between gap-3 lg:px-5">
              <div className="mt-3">
                <h1 className="font-bold text-2xl xl:text-4xl">Cart</h1>
                <div className="flex justify-between mt-5">
                  <p>1. Barang A x 1</p>
                  <p className="font-bold">Rp. 10000</p>
                </div>
              </div>
              <div>
                <p className="font-bold text-lg">
                  Total Harga: <span>Rp. 10000</span>
                </p>
                <button className="mt-3 bg-sky-500 hover:bg-white border hover:border-gray-300 py-2 px-4 rounded-lg text-white hover:text-sky-500 font-bold ease-in-out duration-300">
                  Simpan Transaksi
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;
