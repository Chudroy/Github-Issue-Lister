import { TestBed } from '@angular/core/testing';

import { IssuesHttpServiceService } from './issues-http-service.service';

describe('IssuesHttpServiceService', () => {
  let service: IssuesHttpServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IssuesHttpServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
