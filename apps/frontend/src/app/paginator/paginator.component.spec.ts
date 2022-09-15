import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatPaginator } from '@angular/material/paginator';
import { PaginatorComponent } from './paginator.component';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { Issue } from '../issues-list/issues.model';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { fakeIssues } from '../testing_assets/fake-issues';
import { StoreModule } from '@ngrx/store';
import * as PaginatorIndexReducer from '../state/paginator/paginator.reducer';
import { loadIssuesPage } from '../state/issues/issues.actions';

describe('PaginatorComponent', () => {
  let component: PaginatorComponent;
  let fixture: ComponentFixture<PaginatorComponent>;
  let store: MockStore;
  const initialState = {
    issues: [],
    issueCount: 0,
    paginatorIndex: 0,
    repoUrl: '',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaginatorComponent, MatPaginator],
      imports: [
        StoreModule.forRoot({
          paginatorIndex: PaginatorIndexReducer.paginatorIndexReducer,
        }),
      ],
      providers: [provideMockStore({ initialState })],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(PaginatorComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('issues store functionality', () => {
    it('#issues$ should start with no issues', () => {
      expect(
        component.issues$.subscribe((state) => {
          expect(state).toBe([]);
        })
      );
    });
    it('#issues$ should receive array of issues on store update', () => {
      store.setState({ issues: fakeIssues });
      let receivedState: ReadonlyArray<Issue> = [];
      component.issues$.subscribe((state) => {
        receivedState = state;
      });
      expect(receivedState).toBe(fakeIssues);
    });
    it('#issues should update when issues$ observable receives issues', () => {
      store.setState({ issues: fakeIssues });
      component.ngOnInit();
      expect(component.issues).toBe(fakeIssues);
    });

    it('#issues should have same length as issues received from store', () => {
      store.setState({ issues: fakeIssues });
      component.ngOnInit();
      expect(component.issues.length).toBe(fakeIssues.length);
    });
  });

  describe('issuesCount store functionality', () => {
    it('#issuesCount should update when issuesCount$ observable receives issuesCount', () => {
      const expectedCount = 5;
      store.setState({ issueCount: expectedCount });
      component.ngOnInit();
      expect(component.issueCount).toBe(expectedCount);
    });
  });

  describe('paginatorIndex store functionality', () => {
    it('#paginatorIndex should update when paginatorIndex$ observable receives index', () => {
      const expectedIndex = 5;
      store.setState({
        paginatorIndex: expectedIndex,
      });
      component.ngAfterViewInit();
      expect(component.paginator.pageIndex).toBe(expectedIndex);
    });
  });

  describe('repoUrl store functionality', () => {
    it('#repoUrl should update when repoUrl$ observable receives url', () => {
      const expectedRepoUrl = 'https://www.testing.component';
      store.setState({
        repoUrl: expectedRepoUrl,
      });
      component.ngOnInit();
      expect(component.repoUrl).toBe(expectedRepoUrl);
    });
  });

  describe('#paginator page index ', () => {
    it('should update page index to the (dispatched page number - 1)', () => {
      const { initialState } = PaginatorIndexReducer;
      const newPageState = 2;
      const newPageIndex = newPageState - 1;
      const action = loadIssuesPage({ page: newPageState, url: 'test' });
      const state = PaginatorIndexReducer.paginatorIndexReducer(
        initialState,
        action
      );
      expect(state).toEqual(newPageIndex);
      expect(state).not.toBe(initialState);
    });
  });
});
