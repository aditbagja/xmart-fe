import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { rupiah } from "../utils/currency-formatter";
import { useMutation } from "@apollo/client";
import { SAVE_TRANSAKSI } from "../utils/graphql";
import { useState } from "react";

const TransaksiDetail = () => {
  const navigate = useNavigate();
  const cartState = useSelector((state) => state.barang.cart);
  let totalHarga = cartState?.reduce((total, item) => {
    return total + item.hargaSatuan * item.jumlah;
  }, 0);

  const [saveTransaksi] = useMutation(SAVE_TRANSAKSI);
  const [isLoading, setIsLoading] = useState(false);
  const transaksiForm = cartState.map((data) => {
    const { __typename, namaBarang, ...rest } = data;
    return { ...rest };
  });

  const handleSaveTransaksi = () => {
    saveTransaksi({
      variables: {
        transaksi: transaksiForm,
      },
    });

    setIsLoading(true);

    alert("Transaksi berhasil disimpan!");

    navigate("/shop");
    setIsLoading(false);
  };

  return (
    <section className="w-full py-32">
      <div className="container mx-auto px-5 xl:px-0">
        <div className="bg-gray-100 rounded-b-lg">
          <div className="bg-sky-500 flex justify-center py-2 rounded-t-lg">
            <b className="text-center text-white">Simpan Transaksi</b>
          </div>
          <div className="p-3 lg:p-10">
            <div className="flex flex-col h-96 justify-between">
              <div className="flex flex-col gap-3">
                {cartState?.map((data, index) => (
                  <div key={data.rfid} className="flex justify-between">
                    <p className="font-bold">
                      {index + 1}. {data.namaBarang} x {data.jumlah}
                    </p>
                    <p className="font-bold">{rupiah(data.hargaSatuan)}</p>
                  </div>
                ))}
              </div>
              <div className="w-full">
                <p className="font-bold">
                  Total: <span>{rupiah(totalHarga)}</span>
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
                  <button
                    onClick={handleSaveTransaksi}
                    className="w-1/2 bg-green-500 py-1 rounded-lg text-white font-bold"
                    disabled={isLoading}>
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
