import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class IssuesHttpServiceService {
  constructor(private http: HttpClient) {}

  getIssues(): Observable<any> {
    return this.http.get('/api/nrwl/nx').pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }

    if (error.status == 404) {
      return throwError(() => new Error('Repo not found. Please Check URL.'));
    }
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }
}
