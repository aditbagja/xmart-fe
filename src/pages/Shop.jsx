/* eslint-disable react-hooks/exhaustive-deps */

import { useNavigate } from "react-router-dom";
import QRBarangReader from "../components/QRBarangReader";
import { useMutation, useQuery } from "@apollo/client";
import { ADD_TO_CART, DELETE_FROM_CART, GET_CART } from "../utils/graphql";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { rupiah } from "../utils/currency-formatter";
import { addCartData } from "../utils/redux/slice";

const Shop = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const barangState = useSelector((state) => state.barang.barang);

  const qrcode = sessionStorage.getItem("qrcode");
  const [cartData, setCartData] = useState();
  const [barangRfid, setBarangRfid] = useState();

  let totalHarga = cartData?.reduce((total, item) => {
    return total + item.hargaSatuan * item.jumlah;
  }, 0);

  const { data, refetch } = useQuery(GET_CART, {
    variables: { qrcode },
  });
  const [addToCart] = useMutation(ADD_TO_CART);
  const [deleteFromCart] = useMutation(DELETE_FROM_CART);

  useEffect(() => {
    setCartData(data?.customerCart);
  }, [data]);

  useEffect(() => {
    setBarangRfid(barangState.rfid);
  }, [barangState]);

  useEffect(() => {
    const handleAddToCart = () => {
      addToCart({
        variables: {
          barang: {
            qrcode: qrcode,
            rfid: barangRfid,
            jumlah: 1,
          },
        },
      });
    };

    handleAddToCart();
    refetch();
  }, [barangRfid]);

  const handleDeleteBarangCart = (rfid) => {
    deleteFromCart({
      variables: {
        barang: {
          qrcode: qrcode,
          rfid: rfid,
        },
      },
    });
    refetch();
  };

  const handleSaveCart = () => {
    dispatch(addCartData({ cartData, qrcode }));
    setTimeout(() => {
      navigate("/shop/save-transaction");
    }, 1000);
  };

  return (
    <section className="w-full py-10">
      <div className="container mx-auto">
        <div className="px-5 xl:px-0">
          <h1 className="font-bold text-2xl xl:text-4xl">
            Silahkan Scan QR Barang Anda
          </h1>
          <div className="mt-5 flex flex-col lg:flex-row gap-5 divide-y lg:divide-y-0 lg:divide-x">
            <div className="w-full flex justify-center">
              <QRBarangReader />
            </div>
            <div className="w-full lg:w-3/4 h-96 flex flex-col justify-between gap-3 lg:px-5">
              <div className="mt-3">
                <h1 className="font-bold text-2xl xl:text-4xl">Cart</h1>
              </div>
              {cartData ? (
                <>
                  <div className="flex flex-col gap-3">
                    {cartData.map((data, index) => (
                      <div key={data.rfid} className="flex flex-col gap-3">
                        <div className="flex justify-between mt-3">
                          <p>
                            {index + 1}. {data.namaBarang} x {data.jumlah}
                          </p>
                          <p className="font-bold">
                            {rupiah(data.hargaSatuan)}
                          </p>
                        </div>
                        <button
                          onClick={() => {
                            handleDeleteBarangCart(data.rfid);
                          }}>
                          <img src="/delete.svg" alt="delete" width={20} />
                        </button>
                      </div>
                    ))}
                  </div>

                  <div>
                    <p className="font-bold text-lg">
                      Total Harga: <span>{rupiah(totalHarga)}</span>
                    </p>
                    <button
                      onClick={handleSaveCart}
                      className="mt-3 bg-sky-500 hover:bg-white border hover:border-gray-300 py-2 px-4 rounded-lg text-white hover:text-sky-500 font-bold ease-in-out duration-300">
                      Simpan Transaksi
                    </button>
                  </div>
                </>
              ) : (
                <b className="text-lg">Cart Kosong</b>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;
