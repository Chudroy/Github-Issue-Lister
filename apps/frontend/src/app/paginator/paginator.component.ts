import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Issue } from '../issues-list/issues.model';
// ngrx
import { Store } from '@ngrx/store';
//ngrx: actions
import { loadIssuesPage } from '../state/issues/issues.actions';
//Angular Material
import { MatPaginator } from '@angular/material/paginator';
import { PageEvent } from '@angular/material/paginator';
import { issuesFeature } from '../state/issues/issues.reducer';
@Component({
  selector: 'prueba-irontec-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
})
export class PaginatorComponent implements OnInit, AfterViewInit {
  //issue count
  issueCount$ = this.store.select(issuesFeature.selectIssueCount);
  //issue list
  issues: ReadonlyArray<Issue> = [];
  issues$ = this.store.select(issuesFeature.selectIssues);
  //paginator
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  paginatorIndex$ = this.store.select(issuesFeature.selectPaginatorIndex);
  //repo URL
  repoUrl = '';
  repoUrl$ = this.store.select(issuesFeature.selectRepoUrl);

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.issues$.subscribe((state: ReadonlyArray<Issue>) => {
      this.issues = state as ReadonlyArray<Issue>;
    });

    this.repoUrl$.subscribe((state: string) => {
      this.repoUrl = state;
    });
  }

  //View Child not assigned until after this lifecycle hook
  ngAfterViewInit(): void {
    this.paginatorIndex$.subscribe((state: number) => {
      this.paginator.pageIndex = state;
    });
  }

  //Get new page of issues.
  //Matpaginator indexes from 0,
  //Github API indexes from 1.
  turnPage(pageEvent: PageEvent) {
    this.store.dispatch(
      loadIssuesPage({
        url: this.repoUrl,
        page: pageEvent.pageIndex + 1,
      })
    );
  }
}
