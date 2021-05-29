import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  displayValue: 0,
  valueStack: [],
  operatorStack: [],
};

const enterDigit = (state, payload) => {
  console.log('In enterDigit reducer, value is: %o', payload);
};

const deleteDigit = (state) => {
  console.log('In deleteDigit reducer');
};

const enterOperator = (state, payload) => {
  console.log('In enterOperator reducer, value is: %o', payload);
};

const reset = (state) => {
  console.log('In reset reducer');
};

const evaluate = (state) => {
  console.log('In evaluate reducer');
};

const calculatorSlice = createSlice({
  name: 'calculator',
  initialState: initialState,
  reducers: {
    enterDigit,
    deleteDigit,
    enterOperator,
    reset,
    evaluate,
  },
});

export const calculatorActions = calculatorSlice.actions;

export default calculatorSlice.reducer;
