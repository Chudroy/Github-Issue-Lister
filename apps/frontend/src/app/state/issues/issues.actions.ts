import { createAction, props } from '@ngrx/store';
import { Issue } from '../../issues-list/issues.model';

// Request Issues from new Repo
export const getNewIssues = createAction(
  '[Issue List/API] Get New Issues',
  props<{ repoUrl: string }>()
);

// Request new page of Issues from current repo
export const loadIssuesPage = createAction(
  '[Issue List/API] Load Issues',
  props<{ url: string; page: number }>()
);

// Issues succesfully retrieved
export const retrievedIssuesList = createAction(
  '[Issue List/API] Retrieve Issues Success',
  props<{ issues: ReadonlyArray<Issue> }>()
);

// Total number of issues sucessfully retrieved
export const retrievedIssueCount = createAction(
  '[Issue List/API] Retrieve Issue Count Success',
  props<{ issueCount: number }>()
);

// Get http request error message
export const LoadIssuesError = createAction(
  '[Issue List/API] Retrieve Issues Error',
  props<{ errorMessage: string }>()
);
