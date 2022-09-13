import { Component, OnInit, Input, Output } from '@angular/core';
import { setRepoUrl } from '../state/repoUrl/repoUrl.actions';
import { loadIssues, getIssueCount } from '../state/issues/issues.actions';
import { Store } from '@ngrx/store';
import { PageEvent } from '@angular/material/paginator';
import { selectError } from '../state/error/error.selectors';
import { resetIndex } from '../state/paginator/paginator.actions';
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
    this.error$.subscribe((state: any) => {
      this.error = state as string;
    });
  }

  searchForRepo(url: string) {
    this.getIssueCount(url);
    this.getIssues(url, 1);
    this.resetPaginatorIndex();
    this.setRepoUrl(url);
  }

  setRepoUrl(url: string) {
    this.store.dispatch(setRepoUrl({ url }));
  }

  resetPaginatorIndex() {
    this.store.dispatch(resetIndex());
  }

  getIssueCount(url: string) {
    this.store.dispatch(getIssueCount({ url: url }));
  }

  getIssues(url: string, page: number) {
    this.store.dispatch(
      loadIssues({
        url: url,
        page: page,
      })
    );
  }
}
