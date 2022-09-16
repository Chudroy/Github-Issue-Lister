import { Component, OnInit } from '@angular/core';
import { Issue } from './issues.model';
import { Store } from '@ngrx/store';
import { selectIssueList } from '../state/issues/issues.selectors';

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

  //If the issue is too long, add 'fade' class
  //to fade its content. the full issue can be
  //seen on Github by clicking "GO TO ISSUE" button
  fadeContentBody(issue: Issue, afterLength: number): string {
    if (issue['body'] && issue['body'].length > afterLength) {
      return 'fade';
    }
    return '';
  }
}
