import Table from "../components/Table";

const MasterData = () => {
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
                  id="customer-tab"
                  data-tabs-target="#customer"
                  type="button"
                  role="tab"
                  aria-controls="customer"
                  aria-selected="false">
                  List Customer
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
                <td className="border border-black text-center">
                  22123131313131
                </td>
                <td className="border border-black text-center">
                  22123131313131
                </td>
                <td className="border border-black text-center">
                  22123131313131
                </td>
              </Table>
            </div>
            <div
              className="hidden p-4 rounded-lg bg-gray-50"
              id="customer"
              role="tabpanel"
              aria-labelledby="customer-tab">
              <Table tableName="customer">
                <td className="border border-black text-center">
                  22123131313131
                </td>
                <td className="border border-black text-center">
                  asdasdasdd1212121
                </td>
                <td className="border border-black text-center">Rp. 30000</td>
              </Table>
            </div>
            <div
              className="hidden p-4 rounded-lg bg-gray-50"
              id="transaksi"
              role="tabpanel"
              aria-labelledby="transaksi-tab">
              <Table tableName="transaksi">
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
              </Table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MasterData;
