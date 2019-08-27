import { WidgetComponent } from './../widget.component';
import { HttpClientModule } from '@angular/common/http';
// import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler/src/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetTwoComponent } from './widget-two.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('WidgetTwoComponent', () => {
  let component: WidgetTwoComponent;
  let fixture: ComponentFixture<WidgetTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetTwoComponent,WidgetComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [HttpClientModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
