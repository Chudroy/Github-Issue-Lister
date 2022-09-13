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
  issues: Array<Issue> = [];
  issues$ = this.store.select(selectIssueList);

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.issues$.subscribe((state: any) => {
      this.issues = state as Array<Issue>;
      // console.log(this.issues);
    });
  }

  fadeContentBody(issue: Issue): string {
    if (issue['body'] && issue['body'].length > 400) {
      return 'fade';
    }
    return '';
  }
}
