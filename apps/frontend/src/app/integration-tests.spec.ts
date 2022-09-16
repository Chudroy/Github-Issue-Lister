import { MatPaginator } from '@angular/material/paginator';
import { PaginatorComponent } from './paginator/paginator.component';
import { GetIssuesComponent } from './get-issues/get-issues.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import * as PaginatorIndexReducer from './state/paginator/paginator.reducer';
import { issueCountReducer } from './state/issues/issue-count.reducer';
import { issuesReducer } from './state/issues/issues.reducer';
import { By } from '@angular/platform-browser';
import { errorReducer } from './state/error/error.reducer';
import { FormsModule } from '@angular/forms';
import { repoUrlReducer } from './state/repoUrl/repoUrl.reducer';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('Integration Tests', () => {
  describe('Paginator and Get-Issues Component', () => {
    //paginator
    let paginatorComponent: PaginatorComponent;
    let paginatorFixture: ComponentFixture<PaginatorComponent>;
    //get issues
    let getIssuesComponent: GetIssuesComponent;
    let getIssuesFixture: ComponentFixture<GetIssuesComponent>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [PaginatorComponent, MatPaginator, GetIssuesComponent],
        imports: [
          FormsModule,
          StoreModule.forRoot({
            repoUrl: repoUrlReducer,
            error: errorReducer,
            issues: issuesReducer,
            issueCount: issueCountReducer,
            paginatorIndex: PaginatorIndexReducer.paginatorIndexReducer,
          }),
        ],
        schemas: [NO_ERRORS_SCHEMA],
      }).compileComponents();

      //get issues
      getIssuesFixture = TestBed.createComponent(GetIssuesComponent);
      getIssuesComponent = getIssuesFixture.componentInstance;
      getIssuesFixture.detectChanges();
      //paginator
      paginatorFixture = TestBed.createComponent(PaginatorComponent);
      paginatorComponent = paginatorFixture.componentInstance;
      paginatorFixture.detectChanges();
    });

    it('Paginator Component should be truthy', () => {
      expect(paginatorComponent).toBeTruthy();
    });

    it('Get Issues Component should be truthy', () => {
      expect(getIssuesComponent).toBeTruthy();
    });

    it('Matpaginator index should reset when Get Issues button is clicked in GetIssuesComponent', () => {
      //set expected index, which is starting index: 0
      const expectedIndex = paginatorComponent.paginator.pageIndex;
      paginatorComponent.ngAfterViewInit();

      //Force paginator to have two pages, and go to next page (paginator index 1)
      paginatorComponent.paginator.pageSize = 1;
      paginatorComponent.paginator.length = 2;
      paginatorComponent.paginator.nextPage();

      console.log(
        'paginator index before',
        paginatorComponent.paginator.pageIndex
      );

      //Click the get issues button
      const getIssuesDe = getIssuesFixture.debugElement.query(
        By.css('.issues-form__button')
      );
      const el: HTMLElement = getIssuesDe.nativeElement;
      el.click();

      console.log(
        'paginator index after',
        paginatorComponent.paginator.pageIndex
      );

      //Assert
      expect(paginatorComponent.paginator.pageIndex).toBe(expectedIndex);
    });
  });
});
