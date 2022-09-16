import { createReducer, on } from '@ngrx/store';
import { loadIssuesPage } from '../issues/issues.actions';
import { getNewIssues } from '../issues/issues.actions';
export const initialState = '';

export const repoUrlReducer = createReducer(
  initialState,
  on(getNewIssues, (state, { url }): string => {
    //Update repo url when requesting new repo
    return url;
  })
);
