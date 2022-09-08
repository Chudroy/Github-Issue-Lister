import { Component, OnInit } from '@angular/core';
import { IssuesHttpServiceService } from '../services/issues-http-service/issues-http-service.service';
import { Store } from '@ngrx/store';
import { selectIssueList } from '../state/issues.selectors';
import { retrievedIssuesList } from '../state/issues.actions';
import { Issue } from './issues.model';
import { Observable } from 'rxjs';
import { stat } from 'fs';

@Component({
  selector: 'prueba-irontec-issues-list',
  templateUrl: './issues-list.component.html',
  styleUrls: ['./issues-list.component.scss'],
})
export class IssuesListComponent implements OnInit {
  repoUrl = '';
  error = '';
  issues: any;
  issues$ = this.store.select(selectIssueList);

  constructor(
    private store: Store,
    private issuesHttpServiceService: IssuesHttpServiceService
  ) {}

  ngOnInit(): void {
    this.issues$.subscribe((state) => {
      this.issues = state;
    });
    this.getIssues('https://github.com/octokit/octokit.js');
  }

  getIssues(url: string) {
    this.issuesHttpServiceService.getIssues(url).subscribe({
      next: (issues) => {
        this.store.dispatch(retrievedIssuesList({ issues: issues.data }));
        this.issues = issues.data;
        console.log(issues);
      },
      error: (err) => {
        this.error = err;
        console.error('Observer got an error: ' + err);
      },
      complete: () => console.log('Complete'),
    });
  }
}
