import { UPDATE_SPENDING_LIMIT, UPDATE_WIDTH } from './constants';

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