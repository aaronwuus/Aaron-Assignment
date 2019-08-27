import { WidgetTwoComponent } from './widget-two/widget-two.component';
import { WidgetOneComponent } from './widget-one/widget-one.component';
import { HttpClientModule } from '@angular/common/http';
// import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler/src/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetComponent } from './widget.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('WidgetComponent', () => {
  let component: WidgetComponent;
  let fixture: ComponentFixture<WidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetComponent, WidgetOneComponent, WidgetTwoComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [HttpClientModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
