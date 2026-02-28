/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";

export interface BusinessState {
  name: any;
  openingTime: any;
  closingTime: any;
  menu: any;
  euroConversion: string;
  orderRequestFlag: boolean;
  waiterRequestFlag: boolean;
  whatsapp: string;
  umbrellas: number;
  id: string;
  requiresOrderConfirmation: boolean;
  numbers: any[];
  activeOrders: any[];
}

const initialState: BusinessState = {
  name: "",
  openingTime: "",
  closingTime: false,
  menu: [],
  euroConversion: "",
  orderRequestFlag: false,
  waiterRequestFlag: false,
  whatsapp: "",
  umbrellas: 0,
  id: "",
  requiresOrderConfirmation: false,
  numbers: [],
  activeOrders: [],
};

export const businessSlice = createSlice({
  name: "businessProfile",
  initialState,
  reducers: {
    setBusinessProfile: (state, action) => {
      const {
        name,
        closingTime,
        openingTime,
        euroConversion,
        id,
        orderRequestFlag,
        waiterRequestFlag,
        umbrellas,
        whatsapp,
        menu,
        requiresOrderConfirmation,
        numbers,
        activeOrdes,
      } = action.payload;

      state.name = name;
      state.closingTime = closingTime;
      state.openingTime = openingTime;
      state.euroConversion = euroConversion;
      state.id = id;
      state.requiresOrderConfirmation = requiresOrderConfirmation;
      state.numbers = numbers;
      state.activeOrders = activeOrdes;
      state.orderRequestFlag = orderRequestFlag;
      state.waiterRequestFlag = waiterRequestFlag;
      state.umbrellas = umbrellas;
      state.whatsapp = whatsapp;
      state.menu = menu;
    },
    updateWaiterFlag: (state, action) => {
      const { value } = action.payload;
      state.waiterRequestFlag = value;
    },
    updateOrderFlag: (state, action) => {
      const { value } = action.payload;
      state.orderRequestFlag = value;
    },
    clear: (state) => {
      ((state.name = ""), (state = initialState));
    },
    updateMenu: (state, action) => {
      const { menu } = action.payload;
      state.menu = menu;
    },
  },
});

export const {
  updateWaiterFlag,
  updateOrderFlag,
  clear,
  updateMenu,
  setBusinessProfile,
} = businessSlice.actions;

export default businessSlice.reducer;
