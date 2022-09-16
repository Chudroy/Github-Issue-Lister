import { createFeatureSelector } from '@ngrx/store';
import { Issue } from '../../issues-list/issues.model';

//Subscribe to array of issues retrieved from http request
export const selectIssueList =
  createFeatureSelector<ReadonlyArray<Issue>>('issues');

//Subscribe to total number of issues
export const selectIssueCount = createFeatureSelector<number>('issueCount');
