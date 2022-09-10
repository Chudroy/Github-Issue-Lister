import { createAction, props } from '@ngrx/store';
import { Issue } from '../issues-list/issues.model';

export const loadIssuesList = createAction(
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
