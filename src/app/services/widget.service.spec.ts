import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { WidgetService } from './widget.service';

describe('WidgetService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule],
  }));

  it('should be created', () => {
    const service: WidgetService = TestBed.get(WidgetService);
    expect(service).toBeTruthy();
  });
});
