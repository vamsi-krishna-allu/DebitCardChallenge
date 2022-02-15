import {UPDATE_SPENDING_LIMIT} from './constants';

const initialState = {
  spendingLimit: '5000',
};

const debitCardReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SPENDING_LIMIT:
      return {
        ...state,
        spendingLimit: action.payload,
      };
    default:
      return state;
  }
};
export default debitCardReducer;
