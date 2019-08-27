import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { NavbarService } from './navbar.service';

describe('NavbarService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule],
  }));

  it('should be created', () => {
    const service: NavbarService = TestBed.get(NavbarService);
    expect(service).toBeTruthy();
  });
});
