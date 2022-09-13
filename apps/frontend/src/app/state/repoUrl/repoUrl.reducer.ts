import { createReducer, on } from '@ngrx/store';
import { loadIssuesPage } from '../issues/issues.actions';
import { getNewIssues } from '../issues/issues.actions';
export const initialState = '';

export const repoUrlReducer = createReducer(
  initialState,
  on(getNewIssues, (state, { url }): string => url),
  on(loadIssuesPage, (state, { url }): string => url)
);
