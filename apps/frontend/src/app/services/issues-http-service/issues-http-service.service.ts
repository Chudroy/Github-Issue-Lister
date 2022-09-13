import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Issue } from '../../issues-list/issues.model';
@Injectable({
  providedIn: 'root',
})
export class IssuesHttpServiceService {
  constructor(private http: HttpClient) {}

  getIssues(url: string): Observable<any> {
    const subDir = this.parseUrl(url);

    return this.http.get<{ data: Issue[] }>(`/api/${subDir}`).pipe(
      map((response) => response.data),

      catchError(this.handleError)
    );
  }

  getIssueCount(url: string) {
    const subDir = this.parseUrl(url);
    console.log(`/api/${subDir}/issueCount`);

    return this.http
      .get<number>(`/api/${subDir}/issueCount`)
      .pipe(catchError(this.handleError));
  }

  parseUrl(url: string) {
    //Check for valid URL
    const regex = /github.com\/[\w-]+\/[\w-]+/;
    const validUrl = RegExp(regex);

    if (!validUrl.test(url)) {
      return throwError(
        () =>
          new Error('Invalid URL. Must be of format "github.com/OWNER/REPO"')
      );
    }

    //Remove domain
    const domain = RegExp('^(.*?)github.com/');
    return url.replace(domain, '');
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
