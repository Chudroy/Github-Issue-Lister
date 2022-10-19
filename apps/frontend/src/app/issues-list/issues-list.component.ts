import { Component } from '@angular/core';
import { Issue } from './issues.model';
import { Store } from '@ngrx/store';
import { issuesFeature } from '../state/issues/issues.reducer';
@Component({
  selector: 'github-issue-lister-issues-list',
  templateUrl: './issues-list.component.html',
  styleUrls: ['./issues-list.component.scss'],
})
export class IssuesListComponent {
  issues$ = this.store.select(issuesFeature.selectIssues);

  constructor(private store: Store) {}

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
