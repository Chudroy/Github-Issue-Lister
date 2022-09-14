import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatPaginator } from '@angular/material/paginator';
import { PaginatorComponent } from './paginator.component';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { Issue } from '../issues-list/issues.model';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('PaginatorComponent', () => {
  let component: PaginatorComponent;
  let fixture: ComponentFixture<PaginatorComponent>;
  let store: MockStore;
  const issues: ReadonlyArray<Issue> = [];
  const initialState = { issues: issues };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaginatorComponent, MatPaginator],
      imports: [],
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
});
