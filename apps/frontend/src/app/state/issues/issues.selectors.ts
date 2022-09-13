import { createFeatureSelector } from '@ngrx/store';

export const selectIssueList = createFeatureSelector('issues');

export const selectIssueCount = createFeatureSelector('issueCount');
