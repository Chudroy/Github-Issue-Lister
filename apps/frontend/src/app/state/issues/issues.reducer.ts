import { createReducer, on } from '@ngrx/store';

import { retrievedIssuesList } from './issues.actions';
import { Issue } from '../../issues-list/issues.model';

export const initialState: ReadonlyArray<Issue> = [];

export const issuesReducer = createReducer(
  initialState,
  on(retrievedIssuesList, (state, { issues }): ReadonlyArray<Issue> => issues)
);
