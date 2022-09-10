import { createReducer, on } from '@ngrx/store';
import { LoadIssuesError } from './issues.actions';

export const initialState = '';

export const ErrorReducer = createReducer(
  initialState,
  on(LoadIssuesError, (state, { message }): string => message)
);
