import { gql } from "@apollo/client";

export const GET_CUSTOMER_TRANSAKSI = gql`
  query customerTransaksi($qrcode: ID!) {
    customerTransaksi(qrcode: $qrcode) {
      _id
      qrcode
      rfid
      hargaSatuan
      jumlah
      waktuTransaksi
    }
  }
`;

export const GET_ALL_BARANG = gql`
  query allBarang {
    allBarang {
      rfid
      namaBarang
      hargaSatuan
    }
  }
`;

export const GET_ALL_TRANSAKSI = gql`
  query allTransaksi {
    allTransaksi {
      _id
      qrcode
      rfid
      hargaSatuan
      jumlah
      waktuTransaksi
    }
  }
`;
