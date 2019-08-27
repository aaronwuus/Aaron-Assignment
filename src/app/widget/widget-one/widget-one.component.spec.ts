import { WidgetComponent } from './../widget.component';
import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { WidgetOneComponent } from './widget-one.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('WidgetOneComponent', () => {
  let component: WidgetOneComponent;
  let fixture: ComponentFixture<WidgetOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetOneComponent, WidgetComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [HttpClientModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toMatchSnapshot();
  });
});
