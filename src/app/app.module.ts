import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './all/navbar/navbar.component';
import { FooterComponent } from './all/footer/footer.component';
import { AfheadComponent } from './all/afhead/afhead.component';
import { ContComponent } from './all/cont/cont.component';
import { ConteComponent } from './all/conte/conte.component';
import { ContenComponent } from './all/conten/conten.component';
import { ContentComponent } from './all/content/content.component';
import { CovidComponent } from './all/covid/covid.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AfheadComponent,
    ContComponent,
    ConteComponent,
    ContenComponent,
    ContentComponent,
    CovidComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
