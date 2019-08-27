import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { NeoBrowseService } from './neo-browse.service';

describe('NeoBrowseService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule],
  }));

  it('should be created', () => {
    const service: NeoBrowseService = TestBed.get(NeoBrowseService);
    expect(service).toBeTruthy();
  });
});
