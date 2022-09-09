import { Component, OnInit } from '@angular/core';
import { IssuesHttpServiceService } from '../services/issues-http-service/issues-http-service.service';
import { Store } from '@ngrx/store';
import { selectIssueList } from '../state/issues.selectors';
import { loadIssuesList, retrievedIssuesList } from '../state/issues.actions';
import { Issue } from './issues.model';

@Component({
  selector: 'prueba-irontec-issues-list',
  templateUrl: './issues-list.component.html',
  styleUrls: ['./issues-list.component.scss'],
})
export class IssuesListComponent implements OnInit {
  repoUrl = '';
  error = '';
  issues: Array<Issue> = [];
  issues$ = this.store.select(selectIssueList);

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.issues$.subscribe((state: any) => {
      this.issues = state.data as Array<Issue>;
    });

    this.getIssues('https://github.com/freeCodeCamp/freeCodeCamp', 1);
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
