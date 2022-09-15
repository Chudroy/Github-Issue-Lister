import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { FormsModule } from '@angular/forms';
import { GetIssuesComponent } from './get-issues.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import * as PaginatorIndexReducer from '../state/paginator/paginator.reducer';
import * as RepoUrlReducer from '../state/repoUrl/repoUrl.reducer';
import { getNewIssues } from '../state/issues/issues.actions';

describe('GetIssuesComponent', () => {
  let component: GetIssuesComponent;
  let fixture: ComponentFixture<GetIssuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        StoreModule.forRoot({
          paginatorIndex: PaginatorIndexReducer.paginatorIndexReducer,
          repoUrl: RepoUrlReducer.repoUrlReducer,
        }),
      ],
      declarations: [GetIssuesComponent],
      providers: [[provideMockStore({})]],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(GetIssuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('clearError function', () => {
    it('should clear the error if there is one', () => {
      component.error = 'test error';
      component.clearError();
      expect(component.error).toBe('');
    });
  });

  describe('Get Issues Action', () => {
    it('should update the Store Repo URL state when retrieving issues', () => {
      const { initialState } = RepoUrlReducer;
      const newPageState = { url: 'testing.com' };

      const action = getNewIssues(newPageState);
      const state = RepoUrlReducer.repoUrlReducer(initialState, action);
      expect(state).toEqual(newPageState.url);
      expect(state).not.toBe(initialState);
    });

    it('should reset the paginator index to 0 when retrieving new Issues', () => {
      const initialState = 5;
      const expectedState = 0;
      const newPageState = { url: 'testing.com' };

      const action = getNewIssues(newPageState);
      const state = PaginatorIndexReducer.paginatorIndexReducer(
        initialState,
        action
      );
      expect(state).toEqual(expectedState);
      expect(state).not.toBe(initialState);
    });
  });
});
