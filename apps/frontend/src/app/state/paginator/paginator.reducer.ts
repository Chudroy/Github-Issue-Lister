import { createReducer, on } from '@ngrx/store';

import { loadIssuesPage, retrievedIssuesList } from '../issues/issues.actions';
export const initialState = 0;

export const paginatorIndexReducer = createReducer(
  initialState,
  on(retrievedIssuesList, (state): number => {
    return 0;
  }),
  on(loadIssuesPage, (state, { page }): number => {
    console.log('page number:', page - 1);

    return page - 1;
  })
);
