import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import {
  fakeIssues,
  longIssue,
  shortIssue,
} from '../testing_assets/fake-issues';
import { IssuesListComponent } from './issues-list.component';
import { Issue } from '../issues-list/issues.model';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { MatCard } from '@angular/material/card';

describe('IssuesListComponent', () => {
  let component: IssuesListComponent;
  let fixture: ComponentFixture<IssuesListComponent>;
  let store: MockStore;
  const initialState = { issues: [] };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [],
      declarations: [IssuesListComponent, MatCard],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();

    fixture = TestBed.createComponent(IssuesListComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    fixture.detectChanges();
  });

  afterEach(() => {
    store?.resetSelectors();
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

  describe('issues-card mat-cards in HTML', () => {
    it('should find no mat-card with class="issues-card" if store state "issues" is empty', () => {
      fixture.detectChanges();
      const issuesListDe: DebugElement = fixture.debugElement;
      const matCardDe = issuesListDe.query(By.css('.issue-card'));
      expect(matCardDe).toBeFalsy();
    });

    it('should find a mat-card with class="issues-card", after receiving issues', () => {
      store.setState({ issues: fakeIssues });
      component.ngOnInit();
      fixture.detectChanges();
      const issuesListDe: DebugElement = fixture.debugElement;
      const matCardDe = issuesListDe.query(By.css('.issue-card'));
      const matCard: MatCard = matCardDe.nativeElement;
      expect(matCard).toBeTruthy();
    });

    it("number of mat-cards with class 'issues-card' should be same length as store state 'issues' after updating store", () => {
      store.setState({ issues: fakeIssues });
      component.ngOnInit();
      fixture.detectChanges();
      const issuesListDe: DebugElement = fixture.debugElement;
      const matCardsDe = issuesListDe.queryAll(By.css('.issue-card'));
      const matCards: MatCard[] = matCardsDe.map(
        (matCardDe) => matCardDe.nativeElement
      );
      expect(matCards.length).toBe(fakeIssues.length);
    });
  });

  describe('fadeContentBody Function', () => {
    it("fadeContentBody function should return 'fade' string if issue body is longer than defined number of characters", () => {
      expect(component.fadeContentBody(longIssue, 300)).toBe('fade');
    });

    it("fadeContentBody function should return '' string if issue body is shorter than defined number of characters", () => {
      expect(component.fadeContentBody(shortIssue, 300)).toBe('');
    });
  });
});
