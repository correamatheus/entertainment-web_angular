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

import {CarouselModule} from 'primeng/carousel';



@NgModule({
  declarations: [
    AppComponent,
    MenusComponent,
    SearchInputComponent,
    DashboardComponent,

  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    SwiperModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
