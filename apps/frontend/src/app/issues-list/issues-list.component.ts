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
  issues: Array<Issue> = fakeIssues;
  issues$ = this.store.select(selectIssueList);

  constructor(private store: Store) {}

  ngOnInit(): void {
    // this.issues$.subscribe((state: any) => {
    //   this.issues = state as Array<Issue>;
    // });

    this.error$.subscribe((state: any) => {
      this.error = state as string;
    });

    // this.getIssues('https://github.com/kamranahmedse/developer-roadmap', 1);
  }

  getIssues(url: string, page: number) {
    this.store.dispatch(
      loadIssuesList({
        url: url,
        page: page,
      })
    );
  }
}
