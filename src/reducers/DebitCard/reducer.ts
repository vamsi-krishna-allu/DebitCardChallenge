import { UPDATE_SPENDING_LIMIT, UPDATE_WIDTH } from './constants';

const initialState = {
  spendingLimit: 5000,
  width: '6.9%'
};

const debitCardReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SPENDING_LIMIT:
      return {
        ...state,
        spendingLimit: action.payload,
      };
    case UPDATE_WIDTH:
      return {
        ...state,
        width: action.payload,
      };
    default:
      return state;
  }
};
export default debitCardReducer;
