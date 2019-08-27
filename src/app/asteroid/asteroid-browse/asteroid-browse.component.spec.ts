import { NavbarService } from './../../services/navbar.service';
import { PageNotFoundComponent } from './../../shared/page-not-found/page-not-found.component';
import { WidgetComponent } from './../../widget/widget.component';
import { HomeComponent } from './../../home/home.component';
import { AppRoutingModule } from './../../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BooleanPipe } from './../../shared/pipes/boolean.pipe';
// import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler/src/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsteroidBrowseComponent } from './asteroid-browse.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';


describe('AsteroidBrowseComponent', () => {
  let component: AsteroidBrowseComponent;
  let fixture: ComponentFixture<AsteroidBrowseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        AppRoutingModule
      ],
      declarations: [ AsteroidBrowseComponent, BooleanPipe, HomeComponent, WidgetComponent, PageNotFoundComponent ],
      providers: [{provide: APP_BASE_HREF, useValue: '/'}],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsteroidBrowseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
