import { useNavigate } from "react-router-dom";

const TransaksiDetail = () => {
  const navigate = useNavigate();
  return (
    <section className="w-full py-32">
      <div className="container mx-auto px-5 xl:px-0">
        <div className="bg-gray-100">
          <div className="bg-slate-500 flex justify-center py-2 rounded-t-lg">
            <b className="text-center text-white">Simpan Transaksi</b>
          </div>
          <div className="p-3 lg:p-10">
            <div className="flex flex-col h-96 justify-between">
              <div className="flex flex-col gap-3">
                <div className="flex justify-between">
                  <p className="font-bold">1. Barang 1 x 1</p>
                  <p className="font-bold">Rp. 10000</p>
                </div>
                <div className="flex justify-between">
                  <p className="font-bold">2. Barang 2 x 1</p>
                  <p className="font-bold">Rp. 10000</p>
                </div>
              </div>
              <div className="w-full">
                <p className="font-bold">
                  Total: <span>Rp. 20000</span>
                </p>
                <p className="font-bold">Yakin mau Simpan Transaksi ?</p>
                <div className="w-full flex justify-between gap-3 mt-5">
                  <button
                    className="w-1/2 bg-red-500 py-1 rounded-lg text-white font-bold"
                    onClick={() => {
                      setTimeout(() => {
                        navigate("/shop");
                      }, 2000);
                    }}>
                    Tidak
                  </button>
                  <button className="w-1/2 bg-green-500 py-1 rounded-lg text-white font-bold">
                    Ya
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransaksiDetail;
