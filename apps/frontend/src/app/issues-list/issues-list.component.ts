import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectIssueList } from '../state/issues.selectors';
import { selectError } from '../state/error.selectors';
import { loadIssuesList } from '../state/issues.actions';
import { Issue } from './issues.model';

import { fakeIssues } from '../fake-issues/fake-issues';
@Component({
  selector: 'prueba-irontec-issues-list',
  templateUrl: './issues-list.component.html',
  styleUrls: ['./issues-list.component.scss'],
})
export class IssuesListComponent implements OnInit {
  repoUrl = '';
  error = '';
  error$ = this.store.select(selectError);
  issues: Array<Issue> = [];
  issues$ = this.store.select(selectIssueList);

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.issues$.subscribe((state: any) => {
      this.issues = state as Array<Issue>;
      console.log(this.issues);
    });

    this.error$.subscribe((state: any) => {
      this.error = state as string;
    });

    this.getIssues('https://github.com/rinnakk/japanese-stable-diffusion', 1);
  }

  getIssues(url: string, page: number) {
    this.store.dispatch(
      loadIssuesList({
        url: url,
        page: page,
      })
    );
  }

  fadeContentBody(issue: Issue): string {
    if (issue['body'] && issue['body'].length > 400) {
      return 'fade';
    }
    return '';
  }
}
