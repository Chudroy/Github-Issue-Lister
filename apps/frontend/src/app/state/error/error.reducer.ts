import { createReducer, on } from '@ngrx/store';
import { LoadIssuesError } from '../issues/issues.actions';

export const initialState = '';

export const errorReducer = createReducer(
  initialState,
  on(LoadIssuesError, (state, { message }): string => message)
);
