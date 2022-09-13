import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Issue } from '../issues-list/issues.model';
import { Store } from '@ngrx/store';
import { selectRepoUrl } from '../state/repoUrl/repoUrl.selector';
import {
  selectIssueList,
  selectIssueCount,
} from '../state/issues/issues.selectors';
import { selectPaginatorIndex } from '../state/paginator/paginator.selector';
import { loadIssues } from '../state/issues/issues.actions';
import { PageEvent } from '@angular/material/paginator';
import { MatPaginator } from '@angular/material/paginator';
import { changeIndex } from '../state/paginator/paginator.actions';

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
  issues: Array<Issue> = [];
  issues$ = this.store.select(selectIssueList);
  //paginator
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  paginatorIndex = 0;
  paginatorIndex$ = this.store.select(selectPaginatorIndex);
  //repo URL
  repoUrl = '';
  repoUrl$ = this.store.select(selectRepoUrl);
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.issues$.subscribe((state: any) => {
      this.issues = state as Array<Issue>;
      // console.log(this.issues);
    });
    this.issueCount$.subscribe((state: any) => {
      this.issueCount = state as number;
    });

    this.repoUrl$.subscribe((state: any) => {
      this.repoUrl = state as string;
    });
  }

  ngAfterViewInit(): void {
    this.paginatorIndex$.subscribe((state: any) => {
      this.paginator.pageIndex = state as number;
    });
  }

  turnPage(pageEvent: PageEvent) {
    this.getNewPage(pageEvent);
    this.updateIndex(pageEvent);
  }

  getNewPage(pageEvent: PageEvent) {
    this.store.dispatch(
      loadIssues({
        url: this.repoUrl,
        page: pageEvent.pageIndex + 1,
      })
    );
  }

  updateIndex(pageEvent: PageEvent) {
    this.store.dispatch(changeIndex({ amount: pageEvent.pageIndex }));
  }
}
