import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { PageEvent } from '@angular/material/paginator';
import { selectError } from '../state/error/error.selectors';
import { getNewIssues } from '../state/issues/issues.actions';
//for testing
import { fakeIssues } from '../fake-issues/fake-issues';

@Component({
  selector: 'prueba-irontec-get-issues',
  templateUrl: './get-issues.component.html',
  styleUrls: ['./get-issues.component.scss'],
})
export class GetIssuesComponent implements OnInit {
  repoUrl = 'https://github.com/freeCodeCamp/freeCodeCamp';
  pageEvent!: PageEvent;
  error = '';
  error$ = this.store.select(selectError);

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.error$.subscribe((state: string) => {
      this.error = state;
    });
  }

  searchForRepo(url: string) {
    this.getIssues(url);
    this.clearError();
  }

  clearError() {
    if (this.error !== '') {
      this.error = '';
    }
  }

  getIssues(url: string) {
    this.store.dispatch(
      getNewIssues({
        url: url,
      })
    );
  }
}
