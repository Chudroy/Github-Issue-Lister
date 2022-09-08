import { createAction, props } from '@ngrx/store';
import { Issue } from '../issues-list/issues.model';

export const retrievedIssuesList = createAction(
  '[Issue List/API] Retrieve Issues Success',
  props<{ issues: ReadonlyArray<Issue> }>()
);
