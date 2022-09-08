import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Issue } from '../issues-list/issues.model';

export const selectIssueList = createFeatureSelector('issues');
