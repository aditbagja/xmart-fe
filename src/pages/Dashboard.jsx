import { useEffect, useState } from "react";
import QRCode from "react-qr-code";
import { getDetailCustomer } from "../utils/apis";
import { rupiah } from "../utils/currency-formatter";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const qrCode = sessionStorage.getItem("qrcode");
  const [customerData, setCustomerData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchCustomerData() {
      if (isLoading) {
        try {
          const response = await getDetailCustomer(qrCode);
          const data = response.data;
          setCustomerData(data.customer);
          setIsLoading(false);
        } catch (error) {
          console.log("Error fetchCustomerData: " + error.message);
        }
      }
    }

    fetchCustomerData();
  }, [qrCode, isLoading]);

  return (
    <section className="w-full py-32">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          <h1 className="text-center text-xl md:text-3xl lg:text-5xl font-bold">
            Selamat datang di X-Mart, {customerData?.nama}!
          </h1>
          <div className="mx-auto flex flex-col gap-3 px-2 md:px-0">
            <QRCode
              size={256}
              style={{
                height: "auto",
                width: "100%",
                margin: "0 auto 0 auto",
              }}
              value={qrCode}
              viewBox={`0 0 256 256`}
            />
            <p className="text-center font-bold text-sm md:text-lg 2xl:text-2xl">
              {qrCode}
            </p>
          </div>
          <p className="text-center font-bold text-sm md:text-lg 2xl:text-2xl">
            Wallet Kamu: <span>Rp. {rupiah(customerData?.wallet)}</span>
          </p>
          <button
            onClick={() => {
              navigate("/shop");
            }}
            className="mx-auto py-2 px-6 rounded-lg bg-sky-500 hover:bg-white hover:border hover:border-gray-300 text-white hover:text-sky-500 duration-300 ease-in-out font-bold text-center">
            Mulai Belanja
          </button>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
