import { createAction, props } from '@ngrx/store';
import { Issue } from '../../issues-list/issues.model';

export const getIssueCount = createAction(
  '[Issue List/API] Get Issue Count',
  props<{ url: string }>()
);

export const retrievedIssueCount = createAction(
  '[Issue List/API] Retrieve Issue Count Success',
  props<{ issueCount: number }>()
);

export const loadIssues = createAction(
  '[Issue List/API] Load Issues',
  props<{ url: string; page: number }>()
);

export const retrievedIssuesList = createAction(
  '[Issue List/API] Retrieve Issues Success',
  props<{ issues: ReadonlyArray<Issue> }>()
);

export const LoadIssuesError = createAction(
  '[Issue List/API] Retrieve Issues Error',
  props<{ message: string }>()
);
