import { createFeatureSelector } from '@ngrx/store';

export const selectRepoUrl = createFeatureSelector<string>('repoUrl');
