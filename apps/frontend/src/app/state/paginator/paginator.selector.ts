import { createFeatureSelector } from '@ngrx/store';

export const selectPaginatorIndex =
  createFeatureSelector<number>('paginatorIndex');
