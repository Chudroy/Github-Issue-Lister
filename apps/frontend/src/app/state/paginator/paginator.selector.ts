import { createFeatureSelector } from '@ngrx/store';

//Subscribe to current index of paginator
export const selectPaginatorIndex =
  createFeatureSelector<number>('paginatorIndex');
