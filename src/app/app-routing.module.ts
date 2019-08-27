import { WidgetComponent } from './widget/widget.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { AsteroidBrowseComponent } from './asteroid/asteroid-browse/asteroid-browse.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'browse/:index', component: AsteroidBrowseComponent },
  { path: 'widget', component: WidgetComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
