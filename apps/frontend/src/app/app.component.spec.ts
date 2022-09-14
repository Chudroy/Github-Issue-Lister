import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Component } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';

// @Component({ selector: 'mat-toolbar', template: '' })
// class MatToolbar {}
@Component({ selector: 'prueba-irontec-get-issues', template: '' })
class GetIssuesComponent {}
@Component({ selector: 'prueba-irontec-issues-list', template: '' })
class IssuesListComponent {}
@Component({ selector: 'prueba-irontec-paginator', template: '' })
class PaginatorComponent {}

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [],
      declarations: [
        AppComponent,
        MatToolbar,
        GetIssuesComponent,
        IssuesListComponent,
        PaginatorComponent,
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Github Issues'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Github Issues');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('mat-toolbar')?.textContent).toContain(
      'Github Issues'
    );
  });
});
