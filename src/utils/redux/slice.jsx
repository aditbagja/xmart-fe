import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  barang: { rfid: "" },
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
  },
});

export const { updateRfid } = barangSlice.actions;

export default barangSlice.reducer;
