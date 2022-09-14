import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { IssuesHttpServiceService } from './issues-http-service.service';

describe('IssuesHttpServiceService', () => {
  let service: IssuesHttpServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });
    service = TestBed.inject(IssuesHttpServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
