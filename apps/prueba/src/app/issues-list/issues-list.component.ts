import { Component, OnInit } from '@angular/core';
import { IssuesHttpServiceService } from '../issues-http-service.service';

@Component({
  selector: 'prueba-irontec-issues-list',
  templateUrl: './issues-list.component.html',
  styleUrls: ['./issues-list.component.scss'],
})
export class IssuesListComponent implements OnInit {
  constructor(private issuesHttpServiceService: IssuesHttpServiceService) {}

  issues: Array<Record<string, unknown>> = [];
  error = '';

  ngOnInit(): void {
    this.getIssues();
  }

  getIssues() {
    this.issuesHttpServiceService.getIssues().subscribe({
      next: (issues) => {
        this.issues = issues.data;
        console.log(this.issues);
      },
      error: (err) => {
        this.error = err;
        console.error('Observer got an error: ' + err);
      },
      complete: () => console.log('Complete'),
    });
  }
}
