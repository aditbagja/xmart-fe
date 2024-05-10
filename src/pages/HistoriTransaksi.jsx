import Table from "../components/Table";

const HistoriTransaksi = () => {
  return (
    <section className="w-full py-16">
      <div className="container mx-auto px-5 xl:px-0">
        <h1 className="font-bold text-2xl mb-5">Histori Transaksi</h1>
        <Table tableName="transaksi">
          <td className="border border-black text-center">22123131313131</td>
          <td className="border border-black text-center">asdasdasdd1212121</td>
          <td className="border border-black text-center">12121212121212</td>
          <td className="border border-black text-center">Rp. 30000</td>
          <td className="border border-black text-center">3</td>
          <td className="border border-black text-center">{Date.now()}</td>
        </Table>
      </div>
    </section>
  );
};

export default HistoriTransaksi;
