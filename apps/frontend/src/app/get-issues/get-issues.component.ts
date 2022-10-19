import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getNewIssues } from '../state/issues/issues.actions';
//for testing
import { fakeIssues } from '../testing_assets/fake-issues';
import { issuesFeature } from '../state/issues/issues.reducer';
@Component({
  selector: 'github-issue-lister-get-issues',
  templateUrl: './get-issues.component.html',
  styleUrls: ['./get-issues.component.scss'],
})
export class GetIssuesComponent implements OnInit {
  repoUrl = 'https://github.com/freeCodeCamp/freeCodeCamp';
  error = '';
  error$ = this.store.select(issuesFeature.selectErrorMessage);

  constructor(private store: Store) {}

  ngOnInit(): void {
    //Get http request message errors
    this.error$.subscribe((state: string) => {
      this.error = state;
    });
  }

  //Bound method to form button
  searchForRepo(url: string) {
    this.getIssues(url);
    this.clearError();
  }

  //Clear error message if there is one.
  clearError() {
    if (this.error !== '') {
      this.error = '';
    }
  }

  //Get new page of issues, reset paginator to 0.
  getIssues(url: string) {
    this.store.dispatch(
      getNewIssues({
        repoUrl: url,
      })
    );
  }
}
