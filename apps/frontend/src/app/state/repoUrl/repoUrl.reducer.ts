import { createReducer, on } from '@ngrx/store';
import { setRepoUrl } from './repoUrl.actions';
export const initialState = '';

export const repoUrlReducer = createReducer(
  initialState,
  on(setRepoUrl, (state, { url }): string => url)
);
