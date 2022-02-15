import {
  UPDATE_SPENDING_LIMIT,
  UPDATE_WIDTH,
  UPDATE_AVAILABLE_BALANCE,
  UPDATE_CARD_DETAILS,
} from './constants';

const initialState = {
  spendingLimit: 5000,
  width: '6.9%',
  availableBalance: 0,
  cardDetails: {
    id: 1,
    cardNumber: '',
    cardOwnerName: '',
    cvv: '',
    startDate: '',
    amountSpent: 0,
    availableBalance: 0,
  },
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
    case UPDATE_AVAILABLE_BALANCE:
      return {
        ...state,
        availableBalance: action.payload,
      };
    case UPDATE_CARD_DETAILS:
      return {
        ...state,
        cardDetails: action.payload,
      };
    default:
      return state;
  }
};
export default debitCardReducer;
