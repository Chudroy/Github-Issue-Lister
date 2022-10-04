import { createFeature, createReducer, on } from '@ngrx/store';

import {
  getNewIssues,
  LoadIssuesError,
  loadIssuesPage,
  retrievedIssueCount,
  retrievedIssuesList,
} from './issues.actions';

import { Issue } from '../../issues-list/issues.model';

interface State {
  issues: ReadonlyArray<Issue>;
  errorMessage: string;
  repoUrl: string;
  issueCount: number;
  paginatorIndex: number;
}

const initialState: State = {
  issues: [],
  errorMessage: '',
  repoUrl: '',
  issueCount: 0,
  paginatorIndex: 0,
};

export const issuesFeature = createFeature({
  name: 'issues',
  reducer: createReducer(
    initialState,
    on(retrievedIssuesList, (state, { issues }): State => {
      return { ...state, issues };
    }),
    on(LoadIssuesError, (state, { errorMessage }): State => {
      //update state to received http request error message
      return { ...state, errorMessage };
    }),
    on(getNewIssues, (state, { repoUrl }): State => {
      //Update repo url when requesting new repo
      return { ...state, repoUrl, paginatorIndex: 0 };
    }),
    on(retrievedIssueCount, (state, { issueCount }): State => {
      return { ...state, issueCount };
    }),
    on(loadIssuesPage, (state, { page }): State => {
      return { ...state, paginatorIndex: page - 1 };
    })
  ),
});

export const {
  name,
  reducer,
  selectIssuesState,
  selectErrorMessage,
  selectRepoUrl,
  selectIssueCount,
  selectPaginatorIndex,
} = issuesFeature;

// export const initialState: ReadonlyArray<Issue> = [];

// export const issuesReducer = createReducer(
//   initialState,
//   on(retrievedIssuesList, (state, { issues }): ReadonlyArray<Issue> => {
//     // update state to http requested issues
//     return issues;
//   })
// );
