import axios from "axios";

export const getDetailCustomer = async (qrcode) => {
  try {
    const response = await axios.get(
      `http://localhost:8080/master-management/customer/${qrcode}`
    );
    return response;
  } catch (error) {
    console.log(`Gagal mendapatkan data Detail Customer: ${error.message}`);
    throw error;
  }
};
