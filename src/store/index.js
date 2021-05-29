import { configureStore } from '@reduxjs/toolkit';

import calculatorReducer from './calculator';

const store = configureStore({
  reducer: { calculator: calculatorReducer },
});

export default store;
