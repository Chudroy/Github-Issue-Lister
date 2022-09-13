import { createAction, props } from '@ngrx/store';

export const resetIndex = createAction('[Paginator] Reset Page Index');
export const changeIndex = createAction(
  '[Paginator] Change Page Index',
  props<{ amount: number }>()
);
