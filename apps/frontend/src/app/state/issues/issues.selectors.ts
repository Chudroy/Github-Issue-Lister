import { createFeatureSelector } from '@ngrx/store';
import { Issue } from '../../issues-list/issues.model';
export const selectIssueList =
  createFeatureSelector<ReadonlyArray<Issue>>('issues');

export const selectIssueCount = createFeatureSelector<number>('issueCount');
