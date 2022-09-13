import { createReducer, on } from '@ngrx/store';
import { resetIndex, changeIndex } from './paginator.actions';

export const initialState = 0;

export const paginatorIndexReducer = createReducer(
  initialState,
  on(resetIndex, (state): number => {
    console.log('current state', state);
    return 0;
  }),
  on(changeIndex, (state, { amount }): number => {
    return state + amount;
  })
);
