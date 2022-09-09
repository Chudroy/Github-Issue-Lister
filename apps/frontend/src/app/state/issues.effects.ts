import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
//service
import { IssuesHttpServiceService } from '../services/issues-http-service/issues-http-service.service';
//actions
import { loadIssuesList, retrievedIssuesList } from './issues.actions';

@Injectable()
export class IssuesEffects {
  loadIssues$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadIssuesList),
      mergeMap((loadAction) =>
        this.issuesHttpServiceService
          .getIssues(loadAction.url + `?p=${loadAction.page}`)
          .pipe(
            map((issues) => retrievedIssuesList({ issues })),
            catchError(() => EMPTY)
          )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private issuesHttpServiceService: IssuesHttpServiceService
  ) {}
}
