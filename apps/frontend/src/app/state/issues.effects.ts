import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
//service
import { IssuesHttpServiceService } from '../services/issues-http-service/issues-http-service.service';
//actions
import {
  loadIssuesList,
  retrievedIssuesList,
  LoadIssuesError,
} from './issues.actions';

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
