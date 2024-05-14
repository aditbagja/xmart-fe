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

export const GET_CART = gql`
  query customerCart($qrcode: ID!) {
    customerCart(qrcode: $qrcode) {
      rfid
      namaBarang
      hargaSatuan
      jumlah
    }
  }
`;

export const ADD_TO_CART = gql`
  mutation checkinBarang($barang: CartInput!) {
    checkinBarang(barang: $barang) {
      rfid
      namaBarang
      hargaSatuan
      jumlah
    }
  }
`;

export const DELETE_FROM_CART = gql`
  mutation deleteBarangCart($barang: CartInput!) {
    deleteBarangCart(barang: $barang) {
      rfid
      namaBarang
      hargaSatuan
      jumlah
    }
  }
`;
