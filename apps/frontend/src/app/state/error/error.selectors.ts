import { createFeatureSelector } from '@ngrx/store';

export const selectError = createFeatureSelector<string>('error');
