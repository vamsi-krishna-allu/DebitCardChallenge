import {
  UPDATE_SPENDING_LIMIT,
  UPDATE_WIDTH,
  UPDATE_CARD_DETAILS,
} from './constants';

export function updateSpendingLimit(data: any) {
  return {
    type: UPDATE_SPENDING_LIMIT,
    payload: data,
  };
}

export function updateWidth(data: any) {
  return {
    type: UPDATE_WIDTH,
    payload: data,
  };
}

export function updateCardDetails(data: any) {
  return {
    type: UPDATE_CARD_DETAILS,
    payload: data,
  };
}
