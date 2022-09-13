import { Component, OnInit } from '@angular/core';
import { selectIssueList } from './state/issues/issues.selectors';
import { Store } from '@ngrx/store';
import { Issue } from './issues-list/issues.model';
//Github API

@Component({
  selector: 'prueba-irontec-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  issues: Array<Issue> = [];

  issues$ = this.store.select(selectIssueList);

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.issues$.subscribe((state: any) => {
      this.issues = state as Array<Issue>;
      // console.log(this.issues);
    });
  }
}
