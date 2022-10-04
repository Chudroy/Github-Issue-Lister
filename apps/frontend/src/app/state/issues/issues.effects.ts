import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
//service
import { IssuesHttpServiceService } from '../../services/issues-http-service/issues-http-service.service';
//actions
import {
  getNewIssues,
  loadIssuesPage,
  retrievedIssueCount,
  retrievedIssuesList,
  LoadIssuesError,
} from './issues.actions';

@Injectable()
export class IssuesEffects {
  getNewIssues$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getNewIssues),
      mergeMap((loadAction) =>
        this.issuesHttpServiceService.getIssues(loadAction.repoUrl).pipe(
          map((issues) => retrievedIssuesList({ issues })),
          catchError((err) => {
            return of(LoadIssuesError({ errorMessage: err }));
          })
        )
      )
    );
  });

  loadIssues$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadIssuesPage),
      mergeMap((loadAction) =>
        this.issuesHttpServiceService
          .getIssues(loadAction.url + `?p=${loadAction.page}`)
          .pipe(
            map((issues) => retrievedIssuesList({ issues })),
            catchError((err) => {
              return of(LoadIssuesError({ errorMessage: err }));
            })
          )
      )
    );
  });

  getIssueCount$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getNewIssues),
      mergeMap((getIssueAction) =>
        this.issuesHttpServiceService
          .getIssueCount(getIssueAction.repoUrl)
          .pipe(
            map((issueCount) =>
              retrievedIssueCount({ issueCount: issueCount })
            ),
            catchError((err) => {
              return of(LoadIssuesError({ errorMessage: err }));
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
