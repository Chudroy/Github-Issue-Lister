import { Component, OnInit } from '@angular/core';
import { Issue } from './issues.model';
import { Store } from '@ngrx/store';
import { selectIssueList } from '../state/issues/issues.selectors';
//for testing
@Component({
  selector: 'prueba-irontec-issues-list',
  templateUrl: './issues-list.component.html',
  styleUrls: ['./issues-list.component.scss'],
})
export class IssuesListComponent implements OnInit {
  issues: ReadonlyArray<Issue> = [];
  issues$ = this.store.select(selectIssueList);

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.issues$.subscribe((state: ReadonlyArray<Issue>) => {
      this.issues = state;
    });
  }

  fadeContentBody(issue: Issue): string {
    if (issue['body'] && issue['body'].length > 400) {
      return 'fade';
    }
    return '';
  }
}
