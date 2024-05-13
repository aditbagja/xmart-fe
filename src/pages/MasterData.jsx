import Table from "../components/Table";
import { useQuery } from "@apollo/client";
import { GET_ALL_BARANG, GET_ALL_TRANSAKSI } from "../utils/graphql";
import { useState, useEffect } from "react";
import { rupiah } from "../utils/currency-formatter";
import { formattedTimestamp } from "../utils/timestamp-formatter";

const MasterData = () => {
  const [dataBarang, setDataBarang] = useState();
  const [dataTransaksi, setDataTransaksi] = useState();

  const barangResponse = useQuery(GET_ALL_BARANG);
  const transaksiResponse = useQuery(GET_ALL_TRANSAKSI);

  useEffect(() => {
    setDataBarang(barangResponse?.data?.allBarang);
    setDataTransaksi(transaksiResponse?.data?.allTransaksi);
  }, [barangResponse, transaksiResponse]);

  return (
    <section className="w-full py-16">
      <div className="container mx-auto">
        <div className="px-5 xl:px-0">
          <h1 className="font-bold text-2xl mb-5">Master Data</h1>

          <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
            <ul
              className="flex flex-wrap -mb-px text-sm font-medium text-center"
              id="default-tab"
              data-tabs-toggle="#default-tab-content"
              role="tablist">
              <li className="me-2" role="presentation">
                <button
                  className="inline-block p-4 border-b-2 rounded-t-lg"
                  id="barang-tab"
                  data-tabs-target="#barang"
                  type="button"
                  role="tab"
                  aria-controls="barang"
                  aria-selected="false">
                  List Barang
                </button>
              </li>
              <li className="me-2" role="presentation">
                <button
                  className="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                  id="transaksi-tab"
                  data-tabs-target="#transaksi"
                  type="button"
                  role="tab"
                  aria-controls="transaksi"
                  aria-selected="false">
                  List Transaksi
                </button>
              </li>
            </ul>
          </div>
          <div id="default-tab-content">
            <div
              className="hidden p-4 rounded-lg bg-gray-50"
              id="barang"
              role="tabpanel"
              aria-labelledby="barang-tab">
              <Table tableName="barang">
                {dataBarang?.map((data) => (
                  <tr key={data.rfid}>
                    <td className="border border-black text-center">
                      {data.rfid}
                    </td>
                    <td className="border border-black text-center">
                      {data.namaBarang}
                    </td>
                    <td className="border border-black text-center">
                      {rupiah(data.hargaSatuan)}
                    </td>
                  </tr>
                ))}
              </Table>
            </div>
            <div
              className="hidden p-4 rounded-lg bg-gray-50"
              id="transaksi"
              role="tabpanel"
              aria-labelledby="transaksi-tab">
              <Table tableName="transaksi">
                {dataTransaksi?.map((data) => (
                  <tr key={data._id}>
                    <td className="border border-black text-center">
                      {data._id}
                    </td>
                    <td className="border border-black text-center">
                      {data.qrcode}
                    </td>
                    <td className="border border-black text-center">
                      {data.rfid}
                    </td>
                    <td className="border border-black text-center">
                      {rupiah(data.hargaSatuan)}
                    </td>
                    <td className="border border-black text-center">
                      {data.jumlah}
                    </td>
                    <td className="border border-black text-center">
                      {formattedTimestamp(data.waktuTransaksi)}
                    </td>
                  </tr>
                ))}
              </Table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MasterData;
