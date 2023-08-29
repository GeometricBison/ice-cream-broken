
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  flavor: '',
  topping: '',
  quantity: 0,
};

const icecreamPreferencesSlice = createSlice({
  name: 'icecreampreferences',
  initialState,
  reducers: {
    updateIceCreamPreference: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { updateIceCreamPreference } = icecreamPreferencesSlice.actions;
export default icecreamPreferencesSlice.reducer;
