import { useQuery } from "@apollo/client";
import Table from "../components/Table";
import { GET_CUSTOMER_TRANSAKSI } from "../utils/graphql";
import { rupiah } from "../utils/currency-formatter";
import { formattedTimestamp } from "../utils/timestamp-formatter";

const HistoriTransaksi = () => {
  const qrcode = sessionStorage.getItem("qrcode");

  const { data } = useQuery(GET_CUSTOMER_TRANSAKSI, {
    variables: { qrcode },
  });

  return (
    <section className="w-full py-16">
      <div className="container mx-auto px-5 xl:px-0">
        <h1 className="font-bold text-2xl mb-5">Histori Transaksi</h1>
        <Table tableName="transaksi">
          {data?.customerTransaksi?.map((transaksi) => (
            <tr key={transaksi._id}>
              <td className="border border-black text-center">
                {transaksi._id}
              </td>
              <td className="border border-black text-center">
                {transaksi.qrcode}
              </td>
              <td className="border border-black text-center">
                {transaksi.rfid}
              </td>
              <td className="border border-black text-center">
                {rupiah(transaksi.hargaSatuan)}
              </td>
              <td className="border border-black text-center">
                {transaksi.jumlah}
              </td>
              <td className="border border-black text-center">
                {formattedTimestamp(transaksi.waktuTransaksi)}
              </td>
            </tr>
          ))}
        </Table>
      </div>
    </section>
  );
};

export default HistoriTransaksi;
