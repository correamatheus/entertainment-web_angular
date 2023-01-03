import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

//Components
import { MenusComponent } from './components/menus/menus.component';
import { SearchInputComponent } from './components/search-input/search-input.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { SwiperModule } from 'swiper/angular';
import { RouterModule } from '@angular/router';
import {CarouselModule} from 'primeng/carousel';
import { MoviesComponent } from './pages/movies/movies.component';
import { SeriesComponent } from './pages/series/series.component';
import { CardsComponent } from './components/cards/cards.component';



@NgModule({
  declarations: [
    AppComponent,
    MenusComponent,
    SearchInputComponent,
    DashboardComponent,
    MoviesComponent,
    SeriesComponent,
    CardsComponent,

  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    SwiperModule,
    CarouselModule,
    RouterModule.forRoot([
      {path: '', component: DashboardComponent},
      {path: 'movies', component: MoviesComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
