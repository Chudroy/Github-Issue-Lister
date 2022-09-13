import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetIssuesComponent } from './get-issues.component';

describe('GetIssuesComponent', () => {
  let component: GetIssuesComponent;
  let fixture: ComponentFixture<GetIssuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetIssuesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GetIssuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
