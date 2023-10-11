import { createSlice } from '@reduxjs/toolkit';
import data from '../data/data.json';



const initialState = data
  
  export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {

      }
    
  });

export const selectVongco = (state) => state.products.vongco;
export const selectLactay = (state) => state.products.lactay;
export const selectBongtai = (state) => state.products.bongtai;
export const selectNhan = (state) => state.products.nhan;

export default productSlice.reducer
