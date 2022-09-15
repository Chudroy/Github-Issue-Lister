import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Issue } from '../issues-list/issues.model';
// ngrx
import { Store } from '@ngrx/store';
// ngrx: selectors
import { selectRepoUrl } from '../state/repoUrl/repoUrl.selector';
import {
  selectIssueList,
  selectIssueCount,
} from '../state/issues/issues.selectors';
import { selectPaginatorIndex } from '../state/paginator/paginator.selector';
//ngrx: actions
import { loadIssuesPage } from '../state/issues/issues.actions';
//Angular Material
import { MatPaginator } from '@angular/material/paginator';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'prueba-irontec-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
})
export class PaginatorComponent implements OnInit, AfterViewInit {
  //issue count
  issueCount = 0;
  issueCount$ = this.store.select(selectIssueCount);
  //issue list
  issues: ReadonlyArray<Issue> = [];
  issues$ = this.store.select(selectIssueList);
  //paginator
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  paginatorIndex$ = this.store.select(selectPaginatorIndex);
  //repo URL
  repoUrl = '';
  repoUrl$ = this.store.select(selectRepoUrl);

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.issues$.subscribe((state: ReadonlyArray<Issue>) => {
      this.issues = state as ReadonlyArray<Issue>;
      // console.log(this.issues);
    });
    this.issueCount$.subscribe((state: number) => {
      this.issueCount = state;
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

  turnPage(pageEvent: PageEvent) {
    this.store.dispatch(
      loadIssuesPage({
        url: this.repoUrl,
        page: pageEvent.pageIndex + 1,
      })
    );
  }
}
