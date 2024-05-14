import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  barang: { rfid: "" },
  cart: null,
};

export const barangSlice = createSlice({
  name: "barang",
  initialState,
  reducers: {
    updateRfid: (state, action) => {
      const rfid = action.payload;
      console.log("rfid state " + rfid);
      state.barang.rfid = rfid;
    },
    addCartData: (state, action) => {
      const qrcode = action.payload.qrcode;
      const cartData = action.payload.cartData.map((item) => {
        const { ...rest } = item;
        return { ...rest, qrcode: qrcode };
      });
      state.cart = cartData;
    },
  },
});

export const { updateRfid, addCartData } = barangSlice.actions;

export default barangSlice.reducer;
