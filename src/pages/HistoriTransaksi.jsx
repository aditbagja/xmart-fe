const HistoriTransaksi = () => {
  return (
    <section className="w-full py-16">
      <div className="container mx-auto px-5 xl:px-0">
        <h1 className="font-bold text-2xl mb-5">Histori Transaksi</h1>
        <div className="overflow-auto">
          <table className="w-full table-auto border-collapse border border-black bg-slate-100">
            <thead className="bg-slate-300">
              <tr>
                <th className="border border-black">Transaksi Id</th>
                <th className="border border-black">QrCode</th>
                <th className="border border-black">RFID</th>
                <th className="border border-black">Harga Satuan</th>
                <th className="border border-black">Jumlah</th>
                <th className="border border-black">Waktu Pesan</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-black text-center">
                  22123131313131
                </td>
                <td className="border border-black text-center">
                  asdasdasdd1212121
                </td>
                <td className="border border-black text-center">
                  12121212121212
                </td>
                <td className="border border-black text-center">Rp. 30000</td>
                <td className="border border-black text-center">3</td>
                <td className="border border-black text-center">
                  {Date.now()}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default HistoriTransaksi;
