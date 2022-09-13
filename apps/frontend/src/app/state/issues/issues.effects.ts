import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
//service
import { IssuesHttpServiceService } from '../../services/issues-http-service/issues-http-service.service';
//actions
import {
  getIssueCount,
  retrievedIssueCount,
  loadIssues,
  retrievedIssuesList,
  LoadIssuesError,
} from './issues.actions';

@Injectable()
export class IssuesEffects {
  loadIssues$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadIssues),
      mergeMap((loadAction) =>
        this.issuesHttpServiceService
          .getIssues(loadAction.url + `?p=${loadAction.page}`)
          .pipe(
            map((issues) => retrievedIssuesList({ issues })),
            catchError((err) => {
              return of(LoadIssuesError({ message: err }));
            })
          )
      )
    );
  });

  getIssueCount$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getIssueCount),
      mergeMap((getIssueAction) =>
        this.issuesHttpServiceService.getIssueCount(getIssueAction.url).pipe(
          map((issueCount) => retrievedIssueCount({ issueCount: issueCount })),
          catchError((err) => {
            return of(LoadIssuesError({ message: err }));
          })
        )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private issuesHttpServiceService: IssuesHttpServiceService
  ) {}
}
