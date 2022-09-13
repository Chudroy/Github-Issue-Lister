import { createReducer, on } from '@ngrx/store';
import { retrievedIssueCount } from './issues.actions';

export const initialState = 0;

export const issueCountReducer = createReducer(
  initialState,
  on(retrievedIssueCount, (state, { issueCount }): number => issueCount)
);
