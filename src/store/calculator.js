import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  displayNumberString: '0',
  lastActionType: null,
  numberStack: [],
  operatorStack: [],
  historyString: '',
};

const enterDigit = (state, action) => {
  if (action.payload === '0' && state.displayNumberString === '0') {
    return;
  }

  if (action.payload === '.' && state.displayNumberString.includes('.')) {
    return;
  }

  if (
    state.displayNumberString.length === 13 &&
    state.lastActionType === 'enterDigit'
  ) {
    return;
  }

  if (state.lastActionType === 'evaluate') {
    state.historyString = '';
  }

  if (
    state.lastActionType === 'evaluate' ||
    state.lastActionType === 'enterOperator' ||
    state.lastActionType === null
  ) {
    // Overwrite current displayNumberString
    if (action.payload === '.') {
      state.displayNumberString = '0.';
    } else {
      state.displayNumberString = action.payload;
    }
    state.lastActionType = 'enterDigit';
    return;
  }

  state.displayNumberString += action.payload;
  state.lastActionType = 'enterDigit';
};

const deleteDigit = (state) => {
  if (
    state.lastActionType === 'enterOperator' ||
    state.lastActionType === 'evaluate'
  ) {
    return;
  }

  const displayNumberStringLength = state.displayNumberString.length;

  if (displayNumberStringLength === 1) {
    state.displayNumberString = '0';
  } else {
    state.displayNumberString = state.displayNumberString.slice(
      0,
      displayNumberStringLength - 1
    );
  }

  state.lastActionType = 'deleteDigit';
};

const enterOperator = (state, action) => {
  if (
    state.lastActionType === null ||
    state.displayNumberString.endsWith('.')
  ) {
    return;
  }

  if (state.lastActionType === 'enterOperator') {
    state.operatorStack.pop();
    state.operatorStack.push(action.payload);
    state.historyString = generateHistory(state);
    return;
  }

  state.numberStack.push(+state.displayNumberString);
  state.operatorStack.push(action.payload);
  state.lastActionType = 'enterOperator';
  state.historyString = generateHistory(state);
};

const reset = () => {
  return { ...initialState };
};

const evaluate = (state) => {
  if (
    state.numberStack.length < 1 ||
    state.numberStack.length !== state.operatorStack.length ||
    state.lastActionType === 'enterOperator' ||
    state.displayNumberString.endsWith('.')
  ) {
    return;
  }

  state.numberStack.push(+state.displayNumberString);

  state.historyString = `${generateHistory(state)} =`;

  let i = 0;

  // Evaluate multiplication and division from left to right
  while (i < state.numberStack.length - 1) {
    const operator = state.operatorStack[i];

    if (operator === '*' || operator === '/') {
      const operand1 = state.numberStack[i];
      const operand2 = state.numberStack[i + 1];

      const result =
        operator === '*' ? operand1 * operand2 : operand1 / operand2;

      state.numberStack.splice(i, 2, result);
      state.operatorStack.splice(i, 1);
    } else {
      i++;
    }
  }

  // Evaluate addition and subtraction from left to right
  while (state.operatorStack.length > 0) {
    const operator = state.operatorStack.shift();
    const operand1 = state.numberStack[0];
    const operand2 = state.numberStack[1];

    const result = operator === '+' ? operand1 + operand2 : operand1 - operand2;
    console.log(result);
    state.numberStack.splice(0, 2, result);
  }

  const newDisplayNumber = state.numberStack.shift();
  let newDisplayNumberString = `${newDisplayNumber}`;

  if (newDisplayNumberString.length > 13) {
    newDisplayNumberString = newDisplayNumber.toExponential(5);
  }

  state.displayNumberString = newDisplayNumberString;
  state.lastActionType = 'evaluate';
};

const generateHistory = (state) => {
  let newHistoryString = '';
  for (let i = 0; i < state.numberStack.length; i++) {
    const historyNumber = state.numberStack[i];
    let historyNumberString = `${historyNumber} `;

    if (historyNumberString.length > 13) {
      historyNumberString = historyNumber.toExponential(5) + ' ';
    }

    newHistoryString += historyNumberString;

    if (state.operatorStack[i]) {
      newHistoryString += `${state.operatorStack[i]} `;
    }
  }

  return newHistoryString;
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
