import { BooleanPipe } from './shared/pipes/boolean.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AsteroidBrowseComponent } from './asteroid/asteroid-browse/asteroid-browse.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { TrimPipe } from './shared/pipes/trim.pipe';
import { HeaderComponent } from './shared/layout/header/header.component';
import { HomeComponent } from './home/home.component';
import { PaginationComponent } from './shared/pagination/pagination.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { InvokeDirective } from './shared/directives/invoke.directive';
import { WidgetOneComponent } from './widget/widget-one/widget-one.component';
import { WidgetTwoComponent } from './widget/widget-two/widget-two.component';
import { WidgetComponent } from './widget/widget.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';
import { TopBarComponent } from './top-bar/top-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    AsteroidBrowseComponent,
    PageNotFoundComponent,
    TrimPipe,
    HeaderComponent,
    HomeComponent,
    PaginationComponent,
    BooleanPipe,
    InvokeDirective,
    WidgetOneComponent,
    WidgetTwoComponent,
    WidgetComponent,
    ProductListComponent,
    TopBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
