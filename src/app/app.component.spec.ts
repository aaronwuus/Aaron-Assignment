import { AsteroidBrowseComponent } from './asteroid/asteroid-browse/asteroid-browse.component';
import { HeaderComponent } from './shared/layout/header/header.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { PaginationComponent } from './shared/pagination/pagination.component';
import { WidgetTwoComponent } from './widget/widget-two/widget-two.component';
import { WidgetOneComponent } from './widget/widget-one/widget-one.component';
import { WidgetComponent } from './widget/widget.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { BooleanPipe } from './shared/pipes/boolean.pipe';
import { WidgetService } from './services/widget.service';
import { NeoBrowseService } from './services/neo-browse.service';
import { NavbarService } from './services/navbar.service';
import { ApiService } from './services/api.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule,
        FormsModule,
        NgbModule,
        AppRoutingModule
      ],
      declarations: [
        AppComponent,
        BooleanPipe,
        HomeComponent,
        WidgetComponent,
        WidgetOneComponent,
        WidgetTwoComponent,
        PaginationComponent,
        PageNotFoundComponent,
        HeaderComponent,
        AsteroidBrowseComponent
      ],
      providers: [ApiService, NavbarService, NeoBrowseService, WidgetService, {provide: APP_BASE_HREF, useValue: '/'}],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'assignment'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('assignment');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    // fixture.detectChanges();
    // const compiled = fixture.debugElement.nativeElement;
    // expect(compiled.querySelector('h1').textContent).toContain('Welcome to assignment!');
    expect(fixture).toMatchSnapshot();
  });

});
