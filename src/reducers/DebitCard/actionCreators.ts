import {UPDATE_SPENDING_LIMIT} from './constants';

export function updateSpendingLimit(data: any) {
  return {
    type: UPDATE_SPENDING_LIMIT,
    payload: data,
  };
}
