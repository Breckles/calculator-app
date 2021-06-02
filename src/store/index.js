import { configureStore } from '@reduxjs/toolkit';

import calculatorReducer from './calculator';
import themeReducer from './theme';

const store = configureStore({
  reducer: { calculator: calculatorReducer, theme: themeReducer },
});

export default store;
