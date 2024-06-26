import { useEffect, useState } from "react";

const Table = ({ tableName, children }) => {
  const [tableHead, setTableHead] = useState([]);

  useEffect(() => {
    if (tableName === "barang") {
      setTableHead(["RFID", "Nama Barang", "Harga Satuan"]);
    } else if (tableName === "transaksi") {
      setTableHead([
        "Transaksi Id",
        "Qr Code",
        "RFID",
        "Harga Satuan",
        "Jumlah",
        "Waktu Transaksi",
      ]);
    }
  }, [tableName]);

  return (
    <div className="overflow-auto">
      <table className="w-full table-auto border-collapse border border-black bg-slate-100">
        <thead className="bg-slate-300">
          <tr>
            {tableHead.map((data) => (
              <th key={data} className="border border-black">
                {data}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
};

export default Table;
