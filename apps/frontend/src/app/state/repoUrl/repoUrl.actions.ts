import { createAction, props } from '@ngrx/store';

export const setRepoUrl = createAction(
  '[Repo URL] Set New URL',
  props<{ url: string }>()
);
