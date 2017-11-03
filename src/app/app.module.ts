import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RestService } from './services/rest.service';
import { NoSanatizePipe } from './pipes/no-sanatize.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NoSanatizePipe
  ],
  imports: [
    BrowserModule,
	HttpModule,
	FormsModule
  ],
  providers: [
	RestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
