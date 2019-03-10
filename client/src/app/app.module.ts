import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header.component';
import { FooterComponent } from './layout/footer.component';
import { EditorComponent } from './views/home//editor/editor.component';
import { HomeComponent } from './views/home.component';

import { ShortService } from "./services/short.service"

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    EditorComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    ShortService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
