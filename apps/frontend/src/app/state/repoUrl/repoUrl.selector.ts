import { createFeatureSelector } from '@ngrx/store';

//Subscribe to current state of repo URL string
export const selectRepoUrl = createFeatureSelector<string>('repoUrl');
