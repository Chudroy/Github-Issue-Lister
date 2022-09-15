import { createReducer, on } from '@ngrx/store';

import { loadIssuesPage, getNewIssues } from '../issues/issues.actions';
export const initialState = 0;

export const paginatorIndexReducer = createReducer(
  initialState,
  on(getNewIssues, (state): number => {
    return 0;
  }),
  on(loadIssuesPage, (state, { page }): number => {
    return page - 1;
  })
);
