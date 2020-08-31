import { TestBed } from '@angular/core/testing';

import { WebServerClientService } from './web-server-client.service';

describe('WebServerClientService', () => {
  let service: WebServerClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebServerClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
