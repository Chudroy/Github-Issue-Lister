import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { FormsModule } from '@angular/forms';
import { GetIssuesComponent } from './get-issues.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('GetIssuesComponent', () => {
  let component: GetIssuesComponent;
  let fixture: ComponentFixture<GetIssuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
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
});
